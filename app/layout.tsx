import Navbar from "@/components/Navbar";
import FadeInWrapper from "@/components/FadeInWrapper";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Agent Street",
  description: "A street for agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative h-screen antialiased overflow-hidden">
        <Navbar />
        <FadeInWrapper>{children}</FadeInWrapper>
      </body>
      <Analytics />
    </html>
  );
}
