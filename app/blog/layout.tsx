import { ThemeProvider } from "@/app/blog/providers";
import { Container } from "@/components/layout/container";
import { Navigation } from "@/components/layout/navigation";
import ThemeSwitch from "@/components/layout/theme-switch";
import { WEBSITE_HOST_URL } from "@/lib/constants";
import type { Metadata } from "next";
import "@/app/globals.css";
import Image from "next/image";

const meta = {
  title: "Blog",
  description:
    "Welcome to my personal blog! Here, I share insights, tutorials, and experiences as a software developer. Whether you're a beginner or a seasoned pro, this space is for learning, growing, and exploring the world of tech together.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: "id-ID",
    type: "website",
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    card: "summary_large_image",
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <header className="py-4">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center justify-center">
            <Image
              src={"/unnamed.webp"}
              alt="logo"
              width={50}
              height={50}
              className="mr-2 rounded-full"
            />
            <h4>Daffa</h4>
          </div>
          <Navigation />
          <ThemeSwitch />
        </div>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer className="py-16">
        <Container>
          <p>&copy; Daffa Blog 2024</p>
        </Container>
      </footer>
    </ThemeProvider>
  );
}
