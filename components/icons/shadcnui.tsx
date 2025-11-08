import clsx from "clsx";
import { SVGAttributes, forwardRef } from "react"
import { iconStyle } from "./iconStyle";

const ShadcnUILogo = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(({ className, ...props }, ref) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" ref={ref} className={clsx(iconStyle, className)} {...props}>
            <rect width="256" height="256" fill="none" />
            <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
            <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
            />
        </svg>
    )
})

ShadcnUILogo.displayName = 'shadcn/ui logo';

export { ShadcnUILogo }