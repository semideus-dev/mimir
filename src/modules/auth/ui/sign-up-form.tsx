"use client";
import React from "react";
import Link from "next/link";

import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { authClient } from "@/lib/auth-client";

import SocialButtons from "@/modules/auth/ui/social-buttons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GlassButton } from "@/components/ui/glass-button";
import { PiSpinner } from "react-icons/pi";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3, "Username is too short.")
    .max(20, "Username is too long."),
  password: z.string().min(8, "Password must be 8 characters long."),
});

export default function SignUpForm() {
  const [pending, setPending] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setPending(true);
    authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.username,
        callbackURL: "/",
      },
      {
        onError: ({ error }) => {
          setPending(false);
          toast.error(error.message || "An error occurred. Please try again.");
        },
        onSuccess: () => {
          setPending(false);
          router.push("/dashboard");
          toast.success("Signed up successfully!");
        },
      },
    );
  }

  return (
    <Form {...form}>
      <div className="p-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-full space-y-8"
        >
          <div className="flex w-full flex-col gap-2 text-center">
            <span className="text-3xl">Sign Up</span>
            <span className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <Link href="/sign-in" className="underline underline-offset-2">
                Sign In
              </Link>{" "}
            </span>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="mail@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="semideus" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <GlassButton type="submit" className="w-full" variant="subtle">
            {pending ? <PiSpinner className="animate-spin" /> : "Submit"}
          </GlassButton>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
        </form>
        <br />
        <SocialButtons />
      </div>
    </Form>
  );
}
