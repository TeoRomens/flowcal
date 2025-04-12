"use client"

import * as React from "react"
import {
  Calendar, Settings,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import {AppSidebarHeader} from "@/components/sidebar-header"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader, SidebarSeparator,
} from "@/components/ui/sidebar"
import {UserButton} from "@clerk/nextjs";
import {ThemeSelector} from "@/components/theme_selector";

const data = {
  navMain: [
    {
      title: "Eventi",
      url: "/events",
      icon: Calendar,
      isActive: true,
    },
    {
      title: "Disponibilità",
      url: "/schedule",
      icon: Calendar,
    },
    {
      title: "Impostazioni",
      url: "/settings",
      icon: Settings,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-between items-center pt-5 pb-2 border-t border-dashed">
          <ThemeSelector />
          <UserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
