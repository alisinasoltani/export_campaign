"use client"

import { SessionNavBar } from "@/components/ui/sidebar";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <div className="flex h-screen grow flex-col overflow-auto">
        {children}
      </div>
    </div>
  );
}