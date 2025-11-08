import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center border rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
                secondary:
                    "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
                destructive:
                    "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
                outline: "text-foreground",
                skill: "bg-slate-950/30 hover:bg-slate-950/50 border-transparent text-slate-100 py-1 px-3 text-sm"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }
