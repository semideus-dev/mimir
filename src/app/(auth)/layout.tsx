import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[70%] flex-col gap-6 md:w-[60%]">
        {children}
        <div className="text-muted-foreground text-center text-xs text-balance">
          By clicking continue, you agree to our{" "}
          <Link className="underline underline-offset-2" href="#">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="underline underline-offset-2" href="#">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
