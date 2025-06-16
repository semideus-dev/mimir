"use client";

import React from "react";

import { GlassButton } from "@/components/ui/glass-button";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
  TbDoorExit,
} from "react-icons/tb";


import { useSidebar } from "@/components/ui/sidebar";
import { SearchIcon } from "lucide-react";
import SearchCommand from "@/modules/dashboard/ui/search-command";

export default function AppNavbar() {
  const { toggleSidebar, state, isMobile } = useSidebar();
  const [commandOpen, setCommandOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => {
      document.removeEventListener("keydown", down);
    };
  }, []);

  return (
    <>
      <SearchCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex h-[66px] bg-sidebar items-center justify-between border-b">
        <div>
          <GlassButton className="mx-2 w-10" onClick={toggleSidebar}>
            {state === "collapsed" || isMobile ? (
              <TbLayoutSidebarLeftExpand />
            ) : (
              <TbLayoutSidebarRightExpand />
            )}
          </GlassButton>

          <GlassButton
            className="w-[190px] justify-between"
            onClick={() => setCommandOpen((open) => !open)}
          >
            <div className="flex items-center gap-1">
              <SearchIcon />
              Search
            </div>
            <kbd className="text-muted-foreground flex items-center space-x-[1.5px] font-mono">
              <span>&#8984;</span>
              <span>K</span>
            </kbd>
          </GlassButton>
        </div>
        <GlassButton className="mx-2 w-10">
          <TbDoorExit className="h-5 w-5" />
        </GlassButton>
      </nav>
    </>
  );
}
