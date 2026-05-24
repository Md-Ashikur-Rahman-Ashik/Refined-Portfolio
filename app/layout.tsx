import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Md Ashikur Rahman Ashik | Interactive Runtime Systems",
    template: "%s | Md Ashikur Rahman Ashik"
  },
  description: "Specializing in client-side runtime engines, main-thread render loop optimizations, and highly scalable data serialization layouts.",
  keywords: ["Interactive UIs", "Runtime Systems", "Performance Engineering", "Data Layouts", "State Management"],
  authors: [{ name: "Md Ashikur Rahman Ashik" }],
  icons: {
    icon: "/favicon.ico", // Standard icon
    apple: "/apple-icon.png", // Mobile bookmarking profile
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
