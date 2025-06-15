import { openAPI } from "better-auth/plugins";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/lib/db";
import * as schema from "@/lib/db/schema";
import env from "@/lib/env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { ...schema },
  }),
  plugins: [openAPI()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  socialProviders: {
    github: {
      clientId: env.githubClientId as string,
      clientSecret: env.githubClientSecret as string,
    },
    google: {
      clientId: env.googleClientId as string,
      clientSecret: env.googleClientSecret as string,
    },
  },
});
