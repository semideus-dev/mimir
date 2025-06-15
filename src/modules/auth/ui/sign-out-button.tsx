"use client";

import React from "react";
import { redirect } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { toast } from "sonner";
import { GlassButton } from "@/components/ui/glass-button";

export default function SignOutButton() {
  function handleSignOut() {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("You have been signed out successfully.");
          redirect("/sign-in");
        },
      },
    });
  }
  return <GlassButton onClick={handleSignOut}>Sign Out</GlassButton>;
}
