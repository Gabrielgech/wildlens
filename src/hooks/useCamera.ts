import { useEffect, useRef, useState } from 'react'

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [hasPermission, setHasPermission] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  async function startCamera() {
    setError(null)
    setIsLoading(true)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
      setHasPermission(true)
    } catch (err: any) {
      setError(err?.message || 'Permiso de cámara denegado o no disponible.')
      setHasPermission(false)
    } finally {
      setIsLoading(false)
    }
  }

  function stopCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  async function capturePhoto() {
    if (!videoRef.current) {
      throw new Error('Video element not initialized')
    }

    const video = videoRef.current
    const width = video.videoWidth || 640
    const height = video.videoHeight || 480
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('No se pudo crear el contexto de canvas')
    }

    context.drawImage(video, 0, 0, width, height)
    const base64 = canvas.toDataURL('image/jpeg')
    const image = new Image()
    image.src = base64

    await new Promise<void>(resolve => {
      image.onload = () => resolve()
      image.onerror = () => resolve()
    })

    return { image, base64 }
  }

  return {
    videoRef,
    startCamera,
    stopCamera,
    capturePhoto,
    hasPermission,
    error,
    isLoading
  }
}
