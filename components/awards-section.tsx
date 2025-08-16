import { Awards } from '@/components/ui/award'
import { AWARDS } from '@/app/data'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import React, { CSSProperties } from 'react'
import { HudButton } from './ui/hud-button'

export default function AwardsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedAwards = showAll ? AWARDS : AWARDS.slice(0, 3)
  const fadeWidth = 80
  let maskStyle: CSSProperties | undefined = undefined
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 767px)').matches
  ) {
    maskStyle = {
      maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
      WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    }
  }

  return (
    <div className="space-y-4">
      <div className="w-full flex-shrink-0 text-center">
        <p className="text-cent text-2xl font-semibold text-gray-600 dark:text-gray-400">
          My Awards & Honours
        </p>
      </div>
      <div
        style={maskStyle}
        className="relative flex w-full gap-x-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-6 md:overflow-x-visible"
      >
        {displayedAwards.map((award, idx) => (
          <Awards variant="award" key={idx} {...award} />
        ))}
      </div>
      {!showAll && AWARDS.length > 3 && (
        <div className="flex justify-center">
          <HudButton
            style="style1"
            variant="secondary"
            onClick={() => setShowAll(true)}
          >
            Load More
          </HudButton>
        </div>
      )}
    </div>
  )
}
