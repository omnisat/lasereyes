import useSWR from 'swr'
import { useEffect } from 'react'
import { IMempoolUtxo } from '@/types/btc'
import { getMempoolSpaceUrl } from '@/lib/urls'
import { MAINNET, TESTNET } from '@omnisat/lasereyes'

const useUtxos = (
  address: string,
  network: typeof MAINNET | typeof TESTNET = MAINNET
) => {
  const mempoolUrl = `${getMempoolSpaceUrl(network)}/api/address/${address}/utxo`

  const fetcher = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch UTXOs')
    }
    return response.json()
  }

  const { data: utxos, error } = useSWR<IMempoolUtxo[]>(
    address && mempoolUrl,
    fetcher
  )

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
