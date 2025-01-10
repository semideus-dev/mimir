"use server";

import { db } from "@/lib/db";

interface User {
  clerkId: string;
  email: string;
  first_name: string;
  last_name: string;
}

export async function createUser(user: User) {
  return await db.user.create({ data: user });
}
