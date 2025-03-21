import type { Metadata } from "next";
import "../globals.css";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import Image from "next/image";
import * as React from "react";

export const metadata: Metadata = {
  title: "Area Riservata | FlowCal",
  description: "Accedi alla tua area riservata su FlowCal per gestire prenotazioni, disponibilità e impostazioni del tuo negozio in modo semplice e veloce.",
}

export default function PrivateLayout({
                                        children
                                      }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="md:hidden flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <Image
                src="/logo_dark.png"
                alt="Logo"
                width={40}
                height={40}
                className="size-6 rounded-[4px]"
            />
            <SidebarTrigger />
          </div>
        </header>
        <div className="flex flex-col px-4 lg:py-16 lg:px-8 gap-4">
          <div className="max-w-2xl mx-auto w-full">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
