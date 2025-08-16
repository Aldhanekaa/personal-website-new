import { AwardCard } from '@/components/ui/achievement-card' // Adjust path
import { motion } from 'framer-motion'
import { Rocket, Trophy } from 'lucide-react'

// Data using reliable jsDelivr CDN for simple-icons + lucide-react fallbacks
//To use src image (replace this icon segment ang use src image)
// icon: (
//     <img
//       src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sketchup.svg"
//       alt="SketchUp logo"
//       className="h-8 w-8 object-contain"
//     />
//   ),
//
const awardsData = [
  {
    icon: (
      <img
        src="https://svgl.app/library/clerk-light.svg"
        alt="Paddle logo"
        className="h-8 w-8 object-contain dark:invert"
      />
    ),
    title: '1st Place',
    description: 'Clerk',
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/procure.svg"
        alt="Procure"
        className="h-8 w-8 object-contain"
      />
    ),
    title: "People's Choice",
    description: 'Procure',
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/microsoft.svg"
        alt="Microsoft logo"
        className="h-8 w-8 object-contain"
      />
    ),
    title: 'Supported by',
    description: 'Microsoft for Startups',
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/producthunt.svg"
        alt="Product Hunt logo"
        className="h-8 w-8 object-contain"
      />
    ),
    title: 'Featured on',
    description: 'Product Hunt',
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/replicate.svg"
        alt="Replicate logo"
        className="h-8 w-8 object-contain dark:invert"
      />
    ),
    title: 'Sponsorship from',
    description: 'Replicate',
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/apple.svg"
        alt="Apple"
        className="h-8 w-8 object-contain dark:invert"
      />
    ),
    title: '2nd Runner up',
    description: 'Apple',
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/chrome.svg"
        alt="crome"
        className="h-8 w-8 object-contain"
      />
    ),
    title: '2nd Runner up',
    description: 'Chrome',
  },
  {
    icon: (
      <img
        src="https://svgl.app/library/blender.svg"
        alt="crome"
        className="h-8 w-8 object-contain"
      />
    ),
    title: 'Top 10 Startup',
    description: 'Blender',
  },
]

// Framer Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function AwardCardGridDemo() {
  return (
    <div className="w-full max-w-6xl p-4" aria-label="Awards and Recognitions">
      <motion.div
        className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4"
        role="list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {awardsData.map((award, index) => (
          <motion.div key={index} variants={itemVariants} role="listitem">
            <AwardCard
              icon={award.icon}
              title={award.title}
              description={award.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
