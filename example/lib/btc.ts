import { IMempoolUtxo } from '@/types/btc'
import { MAINNET, TESTNET } from '@omnisat/lasereyes'
import * as bitcoin from 'bitcoinjs-lib'
import { Psbt } from 'bitcoinjs-lib'
import * as ecc2 from '@bitcoinerlab/secp256k1'
import { P2PKH } from '@omnisat/lasereyes'
import { P2TR, P2WPKH, P2WSH } from '@omnisat/lasereyes'

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

export function createPsbt(
  inputs: IMempoolUtxo[],
  outputAddress: string,
  paymentPublicKey: string,
  network: typeof MAINNET | typeof TESTNET
) {
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

  psbt.addInput({
    hash: utxoWithMostValue.txid,
    index: utxoWithMostValue.vout,
    sequence: 0xffffffff,
    witnessUtxo: {
      script: Buffer.from(
        bitcoin.address
          .toOutputScript(outputAddress, btcNetwork)
          .toString('hex'),
        'hex'
      ),
      value: utxoWithMostValue.value,
    },
  })

  if (getAddressType(outputAddress) === P2PKH) {
    let redeemScript = getRedeemScript(paymentPublicKey, network)
    psbt.updateInput(0, { redeemScript })
  }

  psbt.addOutput({
    address: outputAddress,
    value: utxoWithMostValue.value - 1000,
  })

  return psbt
}

export function getRedeemScript(
  paymentPublicKey: string,
  network: typeof MAINNET | typeof TESTNET
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

export const getBitcoinNetwork = (network: typeof MAINNET | typeof TESTNET) => {
  if (network === TESTNET) {
    return bitcoin.networks.testnet
  } else {
    return bitcoin.networks.bitcoin
  }
}
