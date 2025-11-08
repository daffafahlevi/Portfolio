import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LogoLabel } from "./logoLabel"
import { ForwardRefExoticComponent, RefAttributes, SVGAttributes } from "react"

type AccordionTechProps = {
    icon: ForwardRefExoticComponent<SVGAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>>,
    label: string,
    children: string
}
export const AccordionTech = ({ icon, label, children }: AccordionTechProps) => {
    const Icon = icon
    return (
        <AccordionItem value={label}>
            <AccordionTrigger className="group/tech">
                <LogoLabel icon={<Icon className="group-hover/tech:-translate-y-1 transition-transform duration-300" />}>{label}</LogoLabel>
            </AccordionTrigger>
            <AccordionContent>
                {children}
            </AccordionContent>
        </AccordionItem>
    )
}