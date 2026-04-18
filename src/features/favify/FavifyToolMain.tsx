/**
 * Core product UI (everything below the global header on the home route).
 * State lives in `useFavifyFlow` — this component stays presentation-only.
 */
import { ConfirmCharacterView } from '../../components/character/ConfirmCharacterView'
import { HeroSection } from '../../components/landing/HeroSection'
import { UploadSection } from '../../components/landing/UploadSection'
import { GeneratingSpinnerView } from '../../components/ui/GeneratingSpinnerView'
import { ExportFaviconView } from '../export/ExportFaviconView'
import type { FavifyFlow } from './useFavifyFlow'

type FavifyToolMainProps = {
  flow: FavifyFlow
}

export function FavifyToolMain({ flow }: FavifyToolMainProps) {
  return (
    <main className="flex-1 overflow-hidden pb-12">
      {flow.showLanding ? (
        <>
          <HeroSection activeSlideIndex={flow.heroAvatarIndex} />
          <UploadSection
            fileInputRef={flow.fileInputRef}
            sourceObjectUrl={flow.sourceObjectUrl}
            sourceFile={flow.sourceFile}
            uploadError={flow.uploadError}
            generationError={flow.generationError}
            primaryActionLabel={flow.primaryActionLabel}
            stylizedPrimaryAction={flow.stylizedAvatarEnabled}
            isGenerating={flow.isGenerating}
            onDropFile={flow.onDropFile}
            onPrimaryAction={flow.onPrimaryUploadAction}
            onClearPhoto={flow.onClearPhoto}
          />
        </>
      ) : null}

      {flow.showGeneratingAvatar ? (
        <GeneratingSpinnerView message={flow.spinnerMessageAvatar} />
      ) : null}

      {flow.showBuildingFavicons ? (
        <GeneratingSpinnerView message={flow.spinnerMessageFavicons} />
      ) : null}

      {flow.showConfirm && flow.characterImageUrl ? (
        <ConfirmCharacterView
          characterImageUrl={flow.characterImageUrl}
          isBusy={flow.isGenerating}
          stylizedAvatarEnabled={flow.stylizedAvatarEnabled}
          onRegenerate={() => {
            void flow.onRegenerateCharacter()
          }}
          onGenerateFavicons={() => {
            void flow.onGenerateFavicons()
          }}
          faviconError={flow.faviconBuildError}
        />
      ) : null}

      {flow.showExport && flow.exportPreviews ? (
        <ExportFaviconView
          previews={flow.exportPreviews}
          htmlSnippet={flow.faviconHtmlSnippet}
          onNewFavicon={flow.onNewFavicon}
        />
      ) : null}
    </main>
  )
}
