/**
 * Orchestrates the Favify client-only wizard: upload → optional stylized avatar
 * (Google Gemini when configured at build time, otherwise a local crop) →
 * favicon pack → export. UI shells read booleans/handlers from here.
 */
import { saveAs } from 'file-saver'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useCharacterImage } from '../../hooks/useCharacterImage'
import { useObjectUrl } from '../../hooks/useObjectUrl'
import { formatBytes } from '../../utils/formatBytes'
import { buildFaviconZipFromMasterPng } from '../../utils/buildFaviconZip'
import { resizeImageBlobToSquarePng } from '../../utils/canvasResize'
import { FAVICON_HTML_SNIPPET } from '../../utils/faviconHtmlSnippet'
import type { ExportPreviewUrls } from '../export/ExportFaviconView'
import { useAppPreferences } from '../../context/AppPreferencesContext'
import { HERO_AVATAR_SOURCES, HERO_CAROUSEL_INTERVAL_MS } from '../landing/landing.media'
import { ACCEPTED_IMAGE_TYPES, FAVICON_ZIP_FILENAME, MAX_UPLOAD_BYTES } from './app.constants'
import type { FlowPhase } from './flow.types'

export function useFavifyFlow() {
  const { t } = useAppPreferences()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [sourceFile, setSourceFile] = useState<File | null>(null)
  const [heroAvatarIndex, setHeroAvatarIndex] = useState(0)
  const [flowPhase, setFlowPhase] = useState<FlowPhase>('landing')
  const [exportZipBlob, setExportZipBlob] = useState<Blob | null>(null)
  const [exportPreviews, setExportPreviews] = useState<ExportPreviewUrls | null>(
    null,
  )
  const [faviconBuildError, setFaviconBuildError] = useState<string | null>(null)

  const {
    imageBlob,
    isGenerating,
    errorMessage: generationError,
    hasApiKey: stylizedAvatarEnabled,
    generateFromFace,
    reset: resetCharacter,
  } = useCharacterImage()

  const sourceObjectUrl = useObjectUrl(sourceFile)
  const characterImageUrl = useObjectUrl(imageBlob)

  /** Hero carousel: only tick while user is on landing to avoid wasted timers. */
  useEffect(() => {
    if (flowPhase !== 'landing') return
    const timerId = window.setInterval(() => {
      setHeroAvatarIndex((index) => (index + 1) % HERO_AVATAR_SOURCES.length)
    }, HERO_CAROUSEL_INTERVAL_MS)
    return () => window.clearInterval(timerId)
  }, [flowPhase])

  const uploadError = useMemo(() => {
    if (!sourceFile) return null
    const isAllowed = ACCEPTED_IMAGE_TYPES.includes(
      sourceFile.type as (typeof ACCEPTED_IMAGE_TYPES)[number],
    )
    if (!isAllowed) return t('flow.uploadBadType')
    if (sourceFile.size > MAX_UPLOAD_BYTES) {
      return t('flow.uploadTooLarge', { max: formatBytes(MAX_UPLOAD_BYTES) })
    }
    return null
  }, [sourceFile, t])

  const primaryActionLabel = useMemo(() => {
    if (!sourceFile || uploadError) return t('flow.selectPhoto')
    return stylizedAvatarEnabled ? t('flow.generateAvatar') : t('flow.previewContinue')
  }, [sourceFile, uploadError, stylizedAvatarEnabled, t])

  const selectPhoto = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  /** Revokes blob URLs from the last export build (call before replacing or clearing). */
  const resetExportAssets = useCallback(() => {
    setExportPreviews((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev.url16)
        URL.revokeObjectURL(prev.url32)
        URL.revokeObjectURL(prev.url180)
      }
      return null
    })
    setExportZipBlob(null)
  }, [])

  const clearPhoto = useCallback(() => {
    setSourceFile(null)
    setFlowPhase('landing')
    resetCharacter()
    resetExportAssets()
    setFaviconBuildError(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }, [resetCharacter, resetExportAssets])

  const onDropFile = useCallback(
    (file: File | null) => {
      setSourceFile(file)
      setFlowPhase('landing')
      resetCharacter()
      resetExportAssets()
      setFaviconBuildError(null)
    },
    [resetCharacter, resetExportAssets],
  )

  const handleGenerateAvatar = useCallback(async () => {
    if (!sourceFile || uploadError) return
    setFlowPhase('generating')
    const ok = await generateFromFace(sourceFile)
    if (ok) {
      setFlowPhase('confirm')
    } else {
      setFlowPhase('landing')
    }
  }, [sourceFile, uploadError, generateFromFace])

  const handleRegenerateCharacter = useCallback(async () => {
    if (!sourceFile) return
    const ok = await generateFromFace(sourceFile)
    if (!ok) {
      setFlowPhase('confirm')
    }
  }, [sourceFile, generateFromFace])

  const handleGenerateFavicons = useCallback(async () => {
    if (!imageBlob) return
    setFaviconBuildError(null)
    setFlowPhase('building_favicons')
    try {
      const zipBlob = await buildFaviconZipFromMasterPng(imageBlob)
      const [blob16, blob32, blob180] = await Promise.all([
        resizeImageBlobToSquarePng(imageBlob, 16),
        resizeImageBlobToSquarePng(imageBlob, 32),
        resizeImageBlobToSquarePng(imageBlob, 180),
      ])
      setExportPreviews((prev) => {
        if (prev) {
          URL.revokeObjectURL(prev.url16)
          URL.revokeObjectURL(prev.url32)
          URL.revokeObjectURL(prev.url180)
        }
        return {
          url16: URL.createObjectURL(blob16),
          url32: URL.createObjectURL(blob32),
          url180: URL.createObjectURL(blob180),
        }
      })
      setExportZipBlob(zipBlob)
      setFlowPhase('export')
    } catch (e) {
      setFaviconBuildError(
        e instanceof Error ? e.message : 'Could not build favicon package.',
      )
      setFlowPhase('confirm')
    }
  }, [imageBlob])

  const handleDownloadZip = useCallback(() => {
    if (!exportZipBlob) return
    saveAs(exportZipBlob, FAVICON_ZIP_FILENAME)
  }, [exportZipBlob])

  const handleNewFavicon = useCallback(() => {
    clearPhoto()
  }, [clearPhoto])

  const onPrimaryUploadAction = useCallback(() => {
    if (!sourceFile || uploadError) {
      selectPhoto()
      return
    }
    void handleGenerateAvatar()
  }, [sourceFile, uploadError, selectPhoto, handleGenerateAvatar])

  const showLanding = flowPhase === 'landing'
  const showGeneratingAvatar = flowPhase === 'generating'
  const showBuildingFavicons = flowPhase === 'building_favicons'
  const showConfirm =
    flowPhase === 'confirm' && characterImageUrl !== null && characterImageUrl !== ''
  const showExport = flowPhase === 'export' && exportPreviews !== null
  const showNavDownload = showExport && exportZipBlob !== null

  return {
    fileInputRef,
    heroAvatarIndex,
    sourceFile,
    sourceObjectUrl,
    characterImageUrl,
    uploadError,
    generationError,
    primaryActionLabel,
    isGenerating,
    exportPreviews,
    faviconBuildError,
    faviconHtmlSnippet: FAVICON_HTML_SNIPPET,
    showLanding,
    showGeneratingAvatar,
    showBuildingFavicons,
    showConfirm,
    showExport,
    showNavDownload,
    stylizedAvatarEnabled,
    spinnerMessageAvatar: stylizedAvatarEnabled
      ? t('flow.spinnerAvatar')
      : t('flow.spinnerPrepare'),
    spinnerMessageFavicons: t('flow.spinnerFavicons'),
    onDropFile,
    onPrimaryUploadAction,
    onClearPhoto: clearPhoto,
    onRegenerateCharacter: handleRegenerateCharacter,
    onGenerateFavicons: handleGenerateFavicons,
    onDownloadZip: handleDownloadZip,
    onNewFavicon: handleNewFavicon,
  }
}

/** Stable type for children that receive the full flow object (e.g. `FavifyToolMain`). */
export type FavifyFlow = ReturnType<typeof useFavifyFlow>
