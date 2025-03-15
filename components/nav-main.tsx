"use client"

import {
  Collapsible,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar"
import {type LucideIcon} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export function NavMain({
                          items,
                        }: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  const pathname = usePathname();
  const {setOpenMobile} = useSidebar();

  return (
      <SidebarGroup>
        <SidebarGroupLabel>Generale</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
              <SidebarMenuItem>
                <Link href={item.url}>
                  <SidebarMenuButton
                      isActive={pathname === item.url}
                      tooltip={item.title}
                      onClick={() => setOpenMobile(false)}
                  >
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
  )
}
