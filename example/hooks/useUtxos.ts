import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { IMempoolUtxo } from '@/types/btc'
import { getMempoolSpaceUrl } from '@/lib/urls'
import { MAINNET, TESTNET } from '@omnisat/lasereyes'

const useUtxos = (
  address: string,
  network: typeof MAINNET | typeof TESTNET = MAINNET
) => {
  const mempoolUrl = `${getMempoolSpaceUrl(network)}/api/address/${address}/utxo`
  const [utxos, setUtxos] = useState<IMempoolUtxo[]>([])

  const fetcher = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch UTXOs')
    }
    return response.json()
  }

  const { data: utxosData, error } = useSWR<IMempoolUtxo[]>(
    address && network && mempoolUrl,
    fetcher
  )

  useEffect(() => {
    setUtxos([])
  }, [network])

  useEffect(() => {
    if (utxosData) {
      setUtxos(utxosData)
    }
  }, [utxosData])

  useEffect(() => {
    if (error) {
      console.error('Error fetching UTXOs:', error)
    }
  }, [error])

  return {
    utxos: utxos || [],
    loading: !utxos && !error,
    fetch: () => {
      fetcher(mempoolUrl)
    },
  }
}

export default useUtxos
