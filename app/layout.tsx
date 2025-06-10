import type { Metadata } from "next";
import { Geist, Inter, Epilogue } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const epilogueSans = Epilogue({
  variable: "--font-epilogue-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insomma Cloud | High-Performance VPS and VDS",
  description:
    "Insomma Cloud offers fast, scalable, and secure VPS and VDS servers. Reliable infrastructure for demanding projects and modern developers.",
  keywords: [
    "VPS",
    "VDS",
    "Virtual Servers",
    "Hosting",
    "Cloud Hosting",
    "Insomma Cloud",
    "VPS USA",
    "VPS Asia",
    "Affordable VPS",
  ],
  authors: [{ name: "Insomma Cloud", url: "https://insomma.cloud" }],
  creator: "Insomma Cloud",
  metadataBase: new URL("https://insomma.cloud"),
  openGraph: {
    title: "Insomma Cloud | High-Performance VPS and VDS",
    description:
      "Fast, reliable, and scalable VPS and VDS servers for developers and businesses. Take your infrastructure to the cloud with Insomma.",
    url: "https://insomma.cloud",
    siteName: "Insomma Cloud",
    images: [
      {
        url: "https://insomma.cloud/ins-cloud.jpg",
        width: 1200,
        height: 630,
        alt: "Insomma Cloud Control Panel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insomma Cloud",
    description:
      "Powerful and scalable cloud VPS and VDS. Optimize your infrastructure today!",
    images: ["https://insomma.cloud/ins-cloud.jpg"],
    creator: "@InsommaCloud",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${epilogueSans.variable} ${interSans.variable} font-epilogue-sans antialiased`}
      >
        <TooltipProvider>
          {children}
          <Footer />
          <Toaster position="bottom-center" />
        </TooltipProvider>
      </body>
    </html>
  );
}
