import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Nemo AI Marketplace | Invisible AI for Students',
  description: 'Discover Nemo, the invisible AI marketplace for college students. Trade privately, connect effortlessly, with no public listings or cold outreach. Join the waitlist!',
  keywords: ["AI marketplace, college students, AI tools, private trading, student innovation, machine learning, deep learning, AI collaboration, tech for students"],
  openGraph: {
    "title": "Nemo AI Marketplace | Invisible AI for Students",
    "description": "Discover Nemo, the invisible AI marketplace for college students. Trade privately, connect effortlessly, with no public listings or cold outreach. Join the waitlist!",
    "url": "https://www.nemo.com",
    "siteName": "Nemo",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-sleek-floating-glassmorphism-card-on-a-1774463784314-13e72139.png",
        "alt": "Nemo AI Marketplace glassmorphism card with email input"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Nemo AI Marketplace | Invisible AI for Students",
    "description": "Discover Nemo, the invisible AI marketplace for college students. Trade privately, connect effortlessly, with no public listings or cold outreach. Join the waitlist!",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRtOVjHFVwGvNIDVQiYIOn7jKo/a-sleek-floating-glassmorphism-card-on-a-1774463784314-13e72139.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
