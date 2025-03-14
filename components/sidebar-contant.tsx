"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarContent() {
  const pathname = usePathname();

  return (
    <div className="grow overflow-y-auto pt-5 px-5">
      <div>
        <span className="text-xs text-muted-foreground font-medium inline-block mb-2">
          Base
        </span>
        <ul className="space-y-1">
          {[
            { href: "/events", label: "Eventi" },
            { href: "/schedule", label: "Schedule" },
          ].map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href}>
                <Link
                  data-active={isActive}
                  className={`h-7 flex items-center font-medium text-[13px] px-2 -ml-2 rounded-md w-[calc(100%+15px)]
                    ${isActive ? "bg-sidebar-accent text-primary" : "text-secondary hover:bg-sidebar-accent"}
                  `}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}