import { soliner } from "./soliner";
import { portfolio } from "./portfolio";
import { StaticImageData } from "next/image";

export type ProjectType = {
  title: string;
  alt: string;
  description: string;
  date: string;
  skills: SkillType[];
  links: LinkType[];
  picture: StaticImageData;
};

export type LinkType = {
  href: string;
  title: string;
  icon: React.ForwardRefExoticComponent<any>;
};

export const projectsList = [soliner, portfolio];
