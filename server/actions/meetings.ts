"use server";

import { getValidTimesFromSchedule } from "@/lib/getValidTimesFromSchedule";
import { meetingActionSchema } from "@/schema/meetings";
import { z } from "zod";
import { createCalendarEvent } from "../googleCalendar";
import { redirect, RedirectType } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import * as Sentry from "@sentry/nextjs";
import { sendEmail } from "@/server/actions/emails";
import { clerkClient } from "@clerk/nextjs/server";

export async function createMeeting(
  unsafeData: z.infer<typeof meetingActionSchema>
) {
  let redirectPath: string | null = null

  try {
    const { success, data } = meetingActionSchema.safeParse(unsafeData);
    if (!success) {
      return { error: "Errore nei dati inseriti." };
    }

    const supabase = await createClient();
    const { data: event, error } = await supabase
      .from("events")
      .select()
      .eq("id", data.eventId)
      .eq("clerk_user", data.clerkUserId)
      .eq("active", true)
      .single();

    if (error) {
      return { error: "Errore database." };
    }

    //const startInTimezone = fromZonedTime(data.startTime, "Europe/Rome")

    const validTimes = await getValidTimesFromSchedule([data?.startTime], event);
    if (validTimes.length === 0) {
      return { error: "Errore durante la prenotazione. Si prega di riprovare più tardi." };
    }

    await createCalendarEvent({
      ...data,
      startTime: data?.startTime,
      durationInMinutes: event.duration,
      eventName: event.name
    });

    const clerk = await clerkClient()
    const clerkUser = await clerk.users.getUser(data.clerkUserId)

    await sendEmail({
      clerkUserEmail: clerkUser.primaryEmailAddress?.emailAddress ?? "",
      startTime: data?.startTime,
      eventName: event.name,
      guestPhone: data?.guestPhone,
      guestName: data?.guestName,
      guestNotes: data?.guestNotes,
    })

    redirectPath = `/book/${data.clerkUserId}/${data.eventId}/success?startTime=${data.startTime.toISOString()}`

  } catch (error) {
    Sentry.captureException(error);
    return { error: "Si è verificato un errore. Riprova più tardi." };
  }

  redirect(redirectPath, RedirectType.replace);
}
