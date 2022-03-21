import useDelete from '../../useDelete'

export default function useDeleteSellers(methodName) {
  const { response, error, loading, sendDeleteData } = useDelete(
    'https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers/56',
     methodName
  )
  return { response, error, loading, [methodName]: sendDeleteData }
}
