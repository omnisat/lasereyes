import { IMempoolUtxo } from '@/types/btc'
import {
  FRACTAL_TESTNET,
  MAINNET,
  P2PKH,
  P2TR,
  P2WPKH,
  P2WSH,
  SIGNET,
  TESTNET,
} from '@omnisat/lasereyes'
import * as bitcoin from 'bitcoinjs-lib'
import { Psbt } from 'bitcoinjs-lib'
import * as ecc2 from '@bitcoinerlab/secp256k1'
import axios from 'axios'
import { getMempoolSpaceUrl } from '@/lib/urls'

bitcoin.initEccLib(ecc2)

export const satoshisToBTC = (satoshis: number): string => {
  if (Number.isNaN(satoshis) || satoshis === undefined) return '--'
  const btcValue = satoshis / 100000000
  if (Number.isNaN(btcValue)) return '--'
  return btcValue.toFixed(8)
}

export const getBtcJsNetwork = (network: string): bitcoin.networks.Network => {
  return network === 'mainnet'
    ? bitcoin.networks.bitcoin
    : bitcoin.networks.testnet
}

export async function createPsbt(
  inputs: IMempoolUtxo[],
  outputAddress: string,
  paymentPublicKey: string,
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET
) {
  if (!outputAddress) return
  const utxoWithMostValue = inputs.reduce((acc, utxo) => {
    if (utxo.value > acc.value) {
      return utxo
    }
    return acc
  })
  const btcNetwork = getBtcJsNetwork(network)
  const psbt = new Psbt({
    network: btcNetwork,
  })
  const script = bitcoin.address.toOutputScript(
    outputAddress,
    getBitcoinNetwork(network)
  )
  if (!script) {
    throw new Error('Invalid output address')
  }

  console.log('getAddressType(outputAddress)', getAddressType(outputAddress))

  if (getAddressType(outputAddress) === P2PKH) {
    const txHexResponse = await axios(
      `${getMempoolSpaceUrl(network)}/api/tx/${utxoWithMostValue.txid}/hex`
    )
    const txHex = txHexResponse.data
    psbt.addInput({
      hash: utxoWithMostValue.txid,
      index: utxoWithMostValue.vout,
      nonWitnessUtxo: Buffer.from(txHex, 'hex'),
    })
  } else {
    psbt.addInput({
      hash: utxoWithMostValue.txid,
      index: utxoWithMostValue.vout,
      witnessUtxo: {
        script,
        value: utxoWithMostValue.value,
      },
    })

    if (getAddressType(outputAddress) === P2PKH) {
      let redeemScript = getRedeemScript(paymentPublicKey, network)
      psbt.updateInput(0, { redeemScript })
    }
  }

  if (utxoWithMostValue.value - 546 < 1000) {
    throw new Error("Couldn't create test psbt: Insufficient funds")
  }

  console.log(utxoWithMostValue.value)

  psbt.addOutput({
    address: outputAddress,
    value: utxoWithMostValue.value - 1000,
  })

  return psbt
}

export function getRedeemScript(
  paymentPublicKey: string,
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET
) {
  const p2wpkh = bitcoin.payments.p2wpkh({
    pubkey: Buffer.from(paymentPublicKey, 'hex'),
    network: getBitcoinNetwork(network),
  })

  const p2sh = bitcoin.payments.p2sh({
    redeem: p2wpkh,
    network: getBitcoinNetwork(network),
  })
  return p2sh?.redeem?.output
}

export function estimateTxSize(
  taprootInputCount: number,
  nonTaprootInputCount: number,
  outputCount: number
): number {
  const baseTxSize = 10
  const taprootInputSize = 57
  const nonTaprootInputSize = 41
  const outputSize = 34
  const totalInputSize =
    taprootInputCount * taprootInputSize +
    nonTaprootInputCount * nonTaprootInputSize
  const totalOutputSize = outputCount * outputSize
  return baseTxSize + totalInputSize + totalOutputSize
}

export function getAddressType(address: string) {
  try {
    bitcoin.address.fromBase58Check(address)
    return P2PKH
  } catch (e) {}

  try {
    bitcoin.address.fromBase58Check(address)
    return 'p2psh'
  } catch (e) {}

  try {
    const { version, data } = bitcoin.address.fromBech32(address)
    if (version === 0) {
      if (data.length === 20) {
        return P2WPKH
      } else if (data.length === 32) {
        return P2WSH
      }
    } else if (version === 1 && data.length === 32) {
      return P2TR
    }
  } catch (e) {}

  throw new Error('Invalid address')
}

export const getBitcoinNetwork = (
  network:
    | typeof MAINNET
    | typeof TESTNET
    | typeof SIGNET
    | typeof FRACTAL_TESTNET
) => {
  if (network === TESTNET) {
    return bitcoin.networks.testnet
  } else {
    return bitcoin.networks.bitcoin
  }
}
