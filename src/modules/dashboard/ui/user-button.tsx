"use client";

import React from "react";

import { authClient } from "@/lib/auth-client";
import { GlassButton } from "@/components/ui/glass-button";
import { PiSpinner } from "react-icons/pi";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import CustomAvatar from "@/components/ui/custom-avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserButton() {
  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return (
      <div className="flex items-center gap-2 rounded-xl border p-2">
        <Skeleton className="size-9 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-[40px]" />
          <Skeleton className="h-3 w-[70px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 rounded-xl border p-2">
      {data.user.image ? (
        <Avatar>
          <AvatarImage src={data.user.image} />
        </Avatar>
      ) : (
        <CustomAvatar
          seed={data.user.name}
          varient="initials"
          className="size-10"
        />
      )}
      <div className="flex flex-col">
        <span className="truncate text-sm">{data.user.name}</span>
        <span className="text-muted-foreground truncate text-xs">
          {data.user.email}
        </span>
      </div>
    </div>
  );
}
