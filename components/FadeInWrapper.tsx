"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function FadeInWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <main
      key={pathname}
      className="absolute top-16 bottom-0 left-0 right-0 overflow-y-auto fade-in"
    >
      {children}
    </main>
  );
}
