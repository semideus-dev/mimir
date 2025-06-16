import React from "react";

import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CustomAvatarProps {
  seed: string;
  className?: string;
  variant: "botttsNeutral" | "initials";
}

export default function CustomAvatar({
  seed,
  className,
  variant,
}: CustomAvatarProps) {
  const avatar = React.useMemo(() => {
    return variant === "botttsNeutral"
      ? createAvatar(botttsNeutral, { seed })
      : createAvatar(initials, { seed, fontSize: 32 });
  }, [seed, variant]);

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
