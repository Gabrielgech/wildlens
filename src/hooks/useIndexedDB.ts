import { useEffect, useState } from 'react'
import { db } from '../db'

export function useIndexedDB() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    db.open().then(() => {
      if (mounted) setReady(true)
    })
    return () => {
      mounted = false
    }
  }, [])

  return { ready }
}
