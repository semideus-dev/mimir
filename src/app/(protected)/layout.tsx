import React from "react";

import AppNavbar from "@/modules/dashboard/ui/app-navbar";
import AppSidebar from "@/modules/dashboard/ui/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex h-screen w-screen flex-col">
        <AppNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
