"use server"

import { eventFormSchema } from "@/schema/events";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation"

export async function createEvent(
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean }> {
  const { userId } = await auth()
  const { success, data } = eventFormSchema.safeParse(unsafeData)

  if (!success || userId == null) {
    console.log("Errore parsing/userId" + userId)
    return { error: true }
  }

  const supabase = await createClient()
  const { error } = await supabase
    .from('events')
    .insert({ ...data, clerk_user: userId })
    .select()

  if (error) {
    console.log(error)
    return { error: true }
  }

  redirect("/events")
}

export async function updateEvent(
  id: string,
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean }> {
  const { userId } = await auth()
  const { success, data } = eventFormSchema.safeParse(unsafeData)

  if (!success || userId == null) {
    return { error: true }
  }

  const supabase = await createClient()
  await supabase
    .from("events")
    .update({ ...data })
    .eq("id", id)
    .eq("clerk_user", userId)

  redirect("/events")
}

export async function deleteEvent(
  id: string
): Promise<{ error: boolean } | undefined> {
  const { userId } = await auth()

  if (userId == null) {
    return { error: true }
  }

  const supabase = await createClient()
  const { count } = await supabase
    .from('events')
    .delete()
    .eq("id", id)
    .eq("clerk_user", userId)

  if (count === 0) {
    return { error: true }
  }

  redirect("/events")
}