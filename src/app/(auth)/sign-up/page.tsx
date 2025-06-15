import React from "react";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignUpForm from "@/modules/auth/ui/sign-up-form";
import { Card, CardContent } from "@/components/ui/card";

export default async function SignUpPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/dashboard");
  }
  
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <SignUpForm />
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
