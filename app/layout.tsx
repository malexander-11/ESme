import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BuildProvider } from "@/lib/BuildContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESme — Start with the market. Make it yours.",
  description:
    "A mobile-first prototype for configurable index funds. Begin with a diversified index, then personalise your exposure to companies, sectors and themes.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f8079",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <BuildProvider>
          {/* Mobile-first centered column; comfortable on desktop too. */}
          <div className="mx-auto flex min-h-dvh w-full max-w-app flex-col bg-surface/40">
            {children}
          </div>
        </BuildProvider>
      </body>
    </html>
  );
}
