import "@/app/globals.css";
import { WEBSITE_HOST_URL } from "@/lib/constants";
import { Metadata } from "next";

const meta = {
  title: "Daffa",
  description:
    "Student from Pelita Bangsa University. Frontend Developer. Cat Lover",
};

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: "%s | Daffa",
  },
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
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
