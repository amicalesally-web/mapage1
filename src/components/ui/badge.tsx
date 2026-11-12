import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-limeaccent",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-limeaccent text-black font-semibold",
        outline:
          "border-zinc-700/80 bg-zinc-900/60 text-zinc-300 hover:border-limeaccent/60 hover:text-limeaccent",
        subtle:
          "border-limeaccent/30 bg-limeaccent/10 text-limeaccent",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
