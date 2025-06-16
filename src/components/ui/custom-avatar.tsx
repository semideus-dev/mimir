import React from "react";

import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CustomAvatarProps {
  seed: string;
  className?: string;
  varient: "botttsNeutral" | "initials";
}

export default function CustomAvatar({
  seed,
  className,
  varient,
}: CustomAvatarProps) {
  let avatar;

  if (varient === "botttsNeutral") {
    avatar = createAvatar(botttsNeutral, { seed });
  } else {
    avatar = createAvatar(initials, { seed, fontSize: 32 });
  }
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
