import React from "react";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignInForm from "@/modules/auth/ui/sign-in-form";
import { Card, CardContent } from "@/components/ui/card";

export default async function SignInPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/dashboard");
  }
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <SignInForm />
        <div className="bg-primary relative hidden items-center justify-center md:flex">
          <Image
            src="/assets/mimir-logo.png"
            width={80}
            height={80}
            alt="mimir logo"
          />
        </div>
      </CardContent>
    </Card>
  );
}
