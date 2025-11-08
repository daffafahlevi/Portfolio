import * as React from "react"

import { Button, ButtonProps } from "./button"
import Link from "next/link";
import { cn } from "@/lib/utils";


type ButtonIconLinkProps = {
    icon: React.ReactNode,
    href: string,
    linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
} & ButtonProps
const ButtonIconLink = React.forwardRef<HTMLButtonElement, ButtonIconLinkProps>(
    ({ icon, children, href, title, linkProps = {}, ...props }, ref) => {
        const { className: linkClass, ...restLinkProps } = linkProps;
        return (
            <Button
                ref={ref}
                {...props}
                asChild
            >
                <Link href={href} title={title} className={cn('flex gap-2.5', linkClass)} {...restLinkProps}>
                    {icon}
                    {children}
                </Link>
            </Button>
        )
    }
)

ButtonIconLink.displayName = 'ButtonIconLink';

export { ButtonIconLink }