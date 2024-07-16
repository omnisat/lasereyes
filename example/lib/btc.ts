import { IMempoolUtxo } from '@/types/btc'
import { MAINNET, TESTNET } from '@omnisat/lasereyes'
import * as bitcoin from 'bitcoinjs-lib'
import * as ecc2 from '@bitcoinerlab/secp256k1'
import { Psbt } from 'bitcoinjs-lib'
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
  psbt.addOutput({
    address: outputAddress,
    value: utxoWithMostValue.value - 1000,
  })

  return psbt
}
