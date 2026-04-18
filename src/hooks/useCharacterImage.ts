import { useCallback, useMemo, useState } from 'react'
import { GoogleGenAI } from '@google/genai'

import { blobToBase64, base64ToBlob } from '../utils/base64'
import { squareCenterCropToPng } from '../utils/imagePrep'

const GEMINI_IMAGE_MODEL_ID = 'gemini-2.5-flash-image'

const SYSTEM_DIRECTIVE = [
  'Generate a cute 3D animated-style human character portrait based on the provided face photo.',
  'Do not depict animals, mascots, or non-human creatures.',
  'Keep the character recognizable (face shape, hairstyle, key features), but make it stylized and adorable.',
  'Use a transparent background. If you cannot output transparency, use pure white (#FFFFFF) background.',
  'Center the character with head and shoulders, no text, no watermark, no logos.',
  'Return exactly one image.',
].join(' ')

const GENERATION_FAILED_MESSAGE = 'Character image generation failed.'

function readBuildTimeApiKey(): string | null {
  const key = import.meta.env.VITE_GEMINI_API_KEY
  if (typeof key !== 'string') return null
  const trimmed = key.trim()
  if (!trimmed) return null
  return trimmed
}

export function useCharacterImage() {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const hasApiKey = useMemo(() => Boolean(readBuildTimeApiKey()), [])

  const reset = useCallback(() => {
    setImageBlob(null)
    setIsGenerating(false)
    setErrorMessage(null)
  }, [])

  const generateFromFace = useCallback(async (facePhotoFile: File) => {
    setErrorMessage(null)

    const apiKey = readBuildTimeApiKey()
    let croppedPng: Blob
    try {
      croppedPng = await squareCenterCropToPng(facePhotoFile, 768)
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : GENERATION_FAILED_MESSAGE)
      return false
    }

    if (!apiKey) {
      setImageBlob(croppedPng)
      return true
    }

    setIsGenerating(true)
    try {
      const base64Png = await blobToBase64(croppedPng)

      const ai = new GoogleGenAI({ apiKey })
      const response = await ai.models.generateContent({
        model: GEMINI_IMAGE_MODEL_ID,
        contents: [
          {
            role: 'user',
            parts: [
              { text: SYSTEM_DIRECTIVE },
              {
                inlineData: {
                  mimeType: 'image/png',
                  data: base64Png,
                },
              },
            ],
          },
        ],
        // Ensure the model returns an image part.
        config: { responseModalities: ['IMAGE'] },
      })

      const parts = response.candidates?.[0]?.content?.parts ?? []
      for (const part of parts) {
        const inlineData = (part as { inlineData?: { data?: string; mimeType?: string } })
          .inlineData
        if (inlineData?.data) {
          const mimeType = inlineData.mimeType ?? 'image/png'
          setImageBlob(base64ToBlob(inlineData.data, mimeType))
          return true
        }
      }

      setErrorMessage(GENERATION_FAILED_MESSAGE)
      return false
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : GENERATION_FAILED_MESSAGE)
      return false
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return {
    imageBlob,
    isGenerating,
    errorMessage,
    hasApiKey,
    generateFromFace,
    reset,
  }
}

