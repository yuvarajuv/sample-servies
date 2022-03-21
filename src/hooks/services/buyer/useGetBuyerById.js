import useFetch from '../../useFetch'

export default function useGetBuyerById(id) {
  const { response, error, loading } = useFetch(
    `https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers/${id}`
  )
  return { response, error, loading }
}
