import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/modules/dashboard/ui/app-sidebar";
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex h-screen w-screen flex-col">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
