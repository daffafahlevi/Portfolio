import { ExternalLinkIcon, ReaderIcon } from "@radix-ui/react-icons";
import { ProjectType } from ".";
import picture from "@/public/soliner.png";

export const soliner: ProjectType = {
  title: "Soliner",
  alt: "Soliner",
  date: "Des 2022",
  picture: picture,
  description:
    "An company profile website of PT.Soliner. Includes managing user form in contact page",
  skills: ["React", "JavaScript", "Bootstrap"],
  links: [
    {
      title: "Website",
      href: "https://soliner.co.id",
      icon: ExternalLinkIcon,
    },
  ],
};
