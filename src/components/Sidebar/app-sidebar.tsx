import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import useSidebar from "./useSidebar";
import Link from "next/link";

export function AppSidebar() {
  const { sidebarItem } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="bg-slate-400">
        <h4>Portfolio Dika</h4>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItem.map((item, index) => (
              <SidebarMenuItem key={index}>
                <Link href={item.path}>
                  <SidebarMenuButton>
                    <item.icon />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
