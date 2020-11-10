import useSWR from 'swr'
import api from '../services/api'

export function useFetch<Data = any>(url: string) {
  const { data, error, mutate } = useSWR<Data>(
    url,
    async url => {
      const response = await api(url)

      return response.data
    },
    { revalidateOnReconnect: true }
  )

  return { data, error, mutate }
}
