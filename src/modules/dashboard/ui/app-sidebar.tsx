import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { RiRobot2Line } from "react-icons/ri";
import { IoLibraryOutline, IoCogOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { BiCameraMovie } from "react-icons/bi";
import { LuBadgeDollarSign } from "react-icons/lu";

import UserButton from "@/modules/dashboard/ui/user-button";

const learn = [
  {
    title: "Agents",
    url: "/agents",
    icon: RiRobot2Line,
  },
  {
    title: "Interviews",
    url: "/interviews",
    icon: BiCameraMovie,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: IoLibraryOutline,
  },
  {
    title: "Classrooms",
    url: "/classrooms",
    icon: SiGoogleclassroom,
  },
];

const profile = [
  {
    title: "Subscription",
    url: "/subscription",
    icon: LuBadgeDollarSign,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: IoCogOutline,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href="/dashboard"
          className="flex items-center space-x-2 border-b py-2"
        >
          <Image
            src="/assets/mimir-logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Mimir</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Learn</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {learn.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link className="block" href={item.url}>
                    <SidebarMenuButton className="cursor-pointer" size="lg">
                      <item.icon size={22} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Profile</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profile.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link className="block" href={item.url}>
                    <SidebarMenuButton className="cursor-pointer" size="lg">
                      <item.icon size={22} />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
