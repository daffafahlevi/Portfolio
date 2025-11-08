import { ButtonIconLink } from "../../ui/buttonIconLink";

type HeroButtonLinkProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
  sameTab?: boolean;
};
export const HeroButtonLink = ({
  href,
  icon,
  title,
  sameTab,
}: HeroButtonLinkProps) => {
  return (
    <ButtonIconLink
      className="p-5 h-min"
      variant={"outline"}
      href={href}
      icon={icon}
      title={title}
      linkProps={{
        target: sameTab ? "_self" : "_blank",
      }}
    />
  );
};
