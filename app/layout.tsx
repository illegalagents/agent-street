import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Agent Street",
  description: "A street for agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* make body full‑screen, hide its scrollbar */}
      <body className="relative h-screen antialiased overflow-hidden">
        <Navbar />
        {/* content area is absolutely positioned under the navbar and scrolls */}
        <main className="absolute top-16 bottom-0 left-0 right-0 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
