import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { HeroButtonLink } from "./heroButtonLink";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonIconLink } from "@/components/ui/buttonIconLink";
import { NewspaperIcon } from "lucide-react";

export const Hero = () => (
  <header className="flex flex-col h-screen relative">
    <div
      className="m-auto px-5 text-center
        before:-z-10 before:absolute before:inset-0 gradient-dot
        after:absolute"
    >
      <h1 className="text-6xl sm:text-8xl font-black">I&apos;m Daffa</h1>
      <h2 className="text-4xl sm:text-6xl my-4 font-bold">
        <span className="from-green-500 via-cyan-400 to-blue-400 bg-[length:200%] hover:bg-right transition-all duration-500 bg-gradient-to-r bg-clip-text text-transparent">
          Frontend
        </span>{" "}
        <span className="whitespace-nowrap">web-developer</span>
      </h2>
      <div className="flex gap-4 justify-center mt-5">
        <HeroButtonLink
          href="https://github.com/daffafahlevi"
          title="Github"
          icon={<GitHubLogoIcon className="scale-200" />}
        />
        <HeroButtonLink
          href="https://www.linkedin.com/in/muhammad-daffa-khaerulloh-0a8732245/"
          title="LinkedIn"
          icon={<LinkedInLogoIcon className="scale-200" />}
        />
        <HeroButtonLink
          href="mailto:muhdaffa0504@gmail.com"
          title="Email"
          icon={<EnvelopeClosedIcon className="scale-200" />}
        />
      </div>
      <div className="my-4">
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "px-14 py-3 h-min"
          )}
          href={"/blog"}
        >
          <NewspaperIcon className="scale-100 mr-2" />
          <span>My Blog</span>
        </Link>
      </div>
    </div>
  </header>
);
