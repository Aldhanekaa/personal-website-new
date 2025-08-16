'use client'

import { animate, motion, useMotionValue } from 'motion/react'
import React, { CSSProperties, useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    let controls
    const size = direction === 'horizontal' ? width : height
    if (size === 0) return

    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    const distanceToTravel = Math.abs(to - from)
    const duration = distanceToTravel / currentSpeed

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to)
      const transitionDuration = remainingDistance / currentSpeed
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from)
        },
      })
    }

    return () => controls?.stop()
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ])

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentSpeed(speedOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentSpeed(speed)
        },
      }
    : {}

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
  fadeWidth?: number
  containerClassName?: string
}

export function BlurredInfiniteSlider({
  children,
  fadeWidth = 80,
  containerClassName,
  ...sliderProps
}: BlurredInfiniteSliderProps) {
  const maskStyle: CSSProperties = {
    maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
  }

  return (
    <div
      className={cn('relative w-full', containerClassName)}
      style={maskStyle}
    >
      <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
    </div>
  )
}

const LOGOS = [
  {
    src: 'https://cdn.worldvectorlogo.com/logos/nextjs-13.svg',
    alt: 'Column Logo',
    height: 25,
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/1280px-Tailwind_CSS_logo.svg.png',
    alt: 'Nvidia Logo',
    height: 25,
  },
  {
    src: 'https://svgl.app/library/digitalocean.svg',
    alt: 'DigitalOcean Logo',
    height: 35,
  },

  {
    src: 'https://svgl.app/library/typescript.svg',
    alt: 'GitHub Logo',
    height: 35,
  },
  {
    src: 'https://svgl.app/library/javascript.svg',
    alt: 'Nike Logo',
    height: 35,
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/golang-1.svg',
    alt: 'Lemon Squeezy Logo',
    height: 35,
  },
  {
    src: 'https://svgl.app/library/postgresql.svg',
    alt: 'Laravel Logo',
    height: 35,
  },
  {
    src: 'https://svgl.app/library/java.svg',
    alt: 'Laravel Logo',
    height: 35,
  },
]

export default function SkillSection() {
  return (
    <main className="flex w-full items-center justify-center bg-white text-black dark:bg-black dark:text-white">
      <section className="bg-background w-full overflow-hidden py-6">
        <div className="m-auto max-w-full">
          <div className="mb-4 flex-shrink-0 text-left md:max-w-64">
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-400">
              My Skills & Expertise
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full py-6 md:w-auto md:flex-1">
              <BlurredInfiniteSlider
                speedOnHover={25}
                speed={40}
                gap={112}
                fadeWidth={80}
              >
                {LOGOS.map((logo) => (
                  <div key={logo.src} className="flex">
                    <img
                      className="mx-auto w-fit dark:invert"
                      src={logo.src}
                      alt={logo.alt}
                      style={{ height: `${logo.height}px` }}
                      width="auto"
                    />
                  </div>
                ))}
              </BlurredInfiniteSlider>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
