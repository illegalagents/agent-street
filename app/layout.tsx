import Navbar from "@/components/Navbar";
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
        <main className="absolute top-16 bottom-0 left-0 right-0 overflow-y-auto">
          {children}
        </main>
      </body>
      <Analytics />
    </html>
  );
}
