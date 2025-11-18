import { useState, useEffect } from 'react'
import { getClimateData } from '../api/climateAPI'

export function useClimateData(lat, lon) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!lat || !lon) return
    setLoading(true)
    getClimateData(lat, lon)
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [lat, lon])

  return { data, loading, error }
}