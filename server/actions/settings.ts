"use server"

import {clerkClient} from "@clerk/nextjs/server";

export async function updatePublicMessage(userId: string, message: string): Promise<void> {
  const client = await clerkClient()

  const response = await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      public_message: message,
    }
  })

}