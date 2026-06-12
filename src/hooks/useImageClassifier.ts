import { useState, useCallback } from 'react'
import { identifyFromImage, VISION_DEMO_MODE } from '../services/visionAI'
import { Species } from '../types'

export interface ClassificationResult {
  species: Species
  confidence: number
  reasoning: string
}

export function useImageClassifier() {
  const [isClassifying, setIsClassifying] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isDemoMode = VISION_DEMO_MODE

  const classify = useCallback(async (
    base64: string,
    mode: 'fauna' | 'flora' | 'ecosystem'
  ): Promise<ClassificationResult[]> => {
    setIsClassifying(true)
    setError(null)
    try {
      const results = await identifyFromImage(base64, mode)
      return results
    } catch (err) {
      setError('Error al analizar imagen')
      return []
    } finally {
      setIsClassifying(false)
    }
  }, [])

  return { classify, isClassifying, error, isDemoMode }
}
