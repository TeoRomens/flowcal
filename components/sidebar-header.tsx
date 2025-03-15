"use client"

import * as React from "react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";

export function AppSidebarHeader() {
  return (
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm text-primary font-medium outline-hidden">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Image
                  src="/logo_dark.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="size-8 rounded-sm"
              />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">FlowCal</span>
              <span className="truncate text-xs">by Matteo Roman</span>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
  )
}
