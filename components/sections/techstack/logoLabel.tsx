import clsx from "clsx"
import { HTMLAttributes, forwardRef } from "react"

type LogoLabelProps = {
    icon: React.ReactNode,
    children: string
} & HTMLAttributes<HTMLSpanElement>

const LogoLabel = forwardRef<HTMLSpanElement, LogoLabelProps>(({ icon, children, className, ...props }, ref) => {
    return (
        <span className={clsx("flex items-center gap-4", className)} ref={ref} {...props}>
            {icon}
            {children}
        </span>
    )
})

LogoLabel.displayName = 'Logo label';

export { LogoLabel }