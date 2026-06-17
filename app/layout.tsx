import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Singapore Horizon | B2B Tourism Services in Singapore",
  description:
    "Your trusted B2B partner for corporate travel, MICE, group tours, and destination management in Singapore. Tailored solutions for travel agencies and businesses.",
  keywords: [
    "Singapore tourism",
    "B2B travel",
    "MICE Singapore",
    "DMC Singapore",
    "corporate travel",
    "group tours",
  ],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
