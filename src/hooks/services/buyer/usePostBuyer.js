import usePost from '../../usePost'

export default function usePostBuyer(methodName) {
  const { response, error, loading, sendPostData } = usePost(
    'https://622a2573be12fc4538b38cdd.mockapi.io/api/v1/buyers',
     methodName
  )
  return { response, error, loading, [methodName]: sendPostData }
}
