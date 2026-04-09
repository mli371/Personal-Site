import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Designed with simplicity and elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${outfit.variable} ${spaceGrotesk.variable} bg-white dark:bg-transparent text-black dark:text-white font-sans`} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col md:flex-row relative">
          <div className="hidden dark:block">
             <BackgroundEffects />
          </div>
          <div className="relative z-10 flex w-full flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 px-6 pb-20 pt-10 md:ml-64 md:px-20 md:pt-20">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
