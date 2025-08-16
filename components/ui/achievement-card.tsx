import * as React from 'react'
import { cn } from '@/lib/utils' // Assuming 'cn' from shadcn/ui setup

/**
 * Props for the AwardCard component.
 */
export interface AwardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The icon to be displayed. Can be an SVG, <img>, or any ReactNode.
   */
  icon: React.ReactNode
  /**
   * The small heading or category (e.g., "1st Place").
   */
  title: string
  /**
   * The main description or name of the awarding entity.
   */
  description: string
}

const AwardCard = React.forwardRef<HTMLDivElement, AwardCardProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-card flex min-w-[240px] items-center gap-4 rounded-lg border p-4 shadow-sm',
          // Added transition for smooth animation on hover
          'transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md',
          className,
        )}
        {...props}
      >
        {/* Icon Slot */}
        <div className="text-foreground flex-shrink-0">{icon}</div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          <p className="text-muted-foreground text-sm">{title}</p>
          <p className="text-card-foreground font-semibold">{description}</p>
        </div>
      </div>
    )
  },
)
AwardCard.displayName = 'AwardCard'

export { AwardCard }
