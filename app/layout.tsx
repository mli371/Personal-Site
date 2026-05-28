import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mingyang Li | Backend & AI Platform Engineer",
    template: "%s | Mingyang Li",
  },
  description:
    "Backend and AI platform engineer focused on enterprise RAG, retrieval infrastructure, reactive Spring services, and production-ready AI systems.",
  authors: [{ name: "Mingyang Li" }],
  creator: "Mingyang Li",
  keywords: [
    "Mingyang Li",
    "Backend Engineer",
    "AI Platform Engineer",
    "Enterprise RAG",
    "Spring Boot",
    "Project Reactor",
    "PgVector",
    "Retrieval Infrastructure",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mingyang Li | Backend & AI Platform Engineer",
    description:
      "Enterprise RAG, retrieval infrastructure, reactive backend APIs, and AI platform engineering.",
    url: "/",
    siteName: "Mingyang Li",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mingyang Li - Backend & AI Platform Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mingyang Li | Backend & AI Platform Engineer",
    description:
      "Enterprise RAG, retrieval infrastructure, reactive backend APIs, and AI platform engineering.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07090d] text-slate-100 antialiased" suppressHydrationWarning>
        <div className="relative min-h-screen">
          <BackgroundEffects />
          <div className="relative z-10 flex w-full flex-col lg:flex-row">
            <Sidebar />
            <main className="flex-1 px-5 pb-20 pt-24 sm:px-8 lg:ml-72 lg:px-16 lg:pt-14 xl:px-24">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
