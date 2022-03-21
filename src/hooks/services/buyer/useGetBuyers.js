import useFetch from '../../useFetch'

export default function useGetBuyers() {
  const { response, error, loading } = useFetch(
    'https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers'
  )
  return { response, error, loading }
}
