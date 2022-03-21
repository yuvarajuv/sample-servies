import usePut from '../../usePut'

export default function usePutSeller(methodName) {
  const { response, error, loading, sendPutData } = usePut(
    'https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/sellers/2',
     methodName
  )
  return { response, error, loading, [methodName]: sendPutData }
}
