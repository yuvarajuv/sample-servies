import { useState } from 'react'
import axios from 'axios'

export default function usePut(url, methodName = 'sendPutData'){
    
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

 const putData = async (payload) => {
      if (!url || url.trim() === '') return
      try {
        setLoading(true)
        const result = await axios.put(url, payload)
        setResponse(result.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
  }
  
  return { response, error, loading, [methodName]:putData }
}