import useSWR from 'swr'
import { useEffect } from 'react'
import { IMempoolUtxo } from '@/types/btc'

const useUtxos = (
  address: string,
  network: 'mainnet' | 'testnet' = 'mainnet'
) => {
  const mempoolUrl =
    network === 'testnet'
      ? `https://mempool.space/testnet/api/address/${address}/utxo`
      : `https://mempool.space/api/address/${address}/utxo`

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
    // Optionally handle errors or perform additional side effects
    if (error) {
      console.error('Error fetching UTXOs:', error)
    }
  }, [error])

  return {
    utxos: utxos || [],
    loading: !utxos && !error,
    fetch: () => {
      // Re-fetch data manually
      // This function is optional and depends on your use case
      fetcher(mempoolUrl)
    },
  }
}

export default useUtxos
