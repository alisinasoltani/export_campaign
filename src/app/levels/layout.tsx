"use client"

import { SessionNavBar } from "@/components/ui/sidebar";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex md:flex-row flex-col h-screen w-screen">
      <SessionNavBar />
      <div className="flex h-screen grow flex-col overflow-auto">
        {children}
      </div>
    </div>
  );
}