import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "@/public/portfolio.png";

export const portfolio: ProjectType = {
  title: "Portfolio",
  alt: "Portofolio",
  date: "January 2023",
  description: "My personal website",
  picture: picture,
  skills: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
  links: [
    {
      title: "Github",
      href: "https://github.com/Arzed/portfolio",
      icon: GitHubLogoIcon,
    },
  ],
};
