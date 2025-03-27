"use client"

import { Sidebar } from "@/components/dashboard/Sidebar";

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex md:flex-row flex-col h-screen w-screen">
      <Sidebar />
      <div className="flex h-screen grow flex-col overflow-auto">
        {children}
      </div>
    </div>
  );
}