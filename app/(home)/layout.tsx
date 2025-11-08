import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daffa | Frontend web developer",
  description: "Don't Forget to sleep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        inter.className,
        "bg-slate-200 dark:bg-slate-900 text-black dark:text-white overflow-hidden"
      )}
    >
      <ScrollArea className="h-[100vh] w-full">{children}</ScrollArea>
    </div>
  );
}
