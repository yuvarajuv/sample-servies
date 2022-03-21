import { useState } from 'react'
import axios from 'axios'

export default function useDelete(url, methodName = 'sendDeleteData'){
    
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

 const deleteData = async (data) => {
      if (!url || url.trim() === '') return
      try {
        setLoading(true)
        const result = await axios.delete(url, { data })
        setResponse(result.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
  }
  
  return { response, error, loading, [methodName]:deleteData }
}