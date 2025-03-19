"use server"

import {getValidTimesFromSchedule} from "@/lib/getValidTimesFromSchedule"
import {meetingActionSchema} from "@/schema/meetings"
import {z} from "zod"
import {createCalendarEvent} from "../googleCalendar"
import {redirect, RedirectType} from "next/navigation"
import {fromZonedTime} from "date-fns-tz"
import {createClient} from "@/lib/supabase/server";

export async function createMeeting(
  unsafeData: z.infer<typeof meetingActionSchema>
) {
  const { success, data } = meetingActionSchema.safeParse(unsafeData)

  if (!success) return { error: true }

  const supabase = await createClient()
  const { data: event, error } = await supabase
    .from("events")
    .select()
    .eq("id", data.eventId)
    .eq("clerk_user", data.clerkUserId)
    .eq("active", true)
    .single()

  if (event == null || error) return { error: true }

  const startInTimezone = fromZonedTime(data.startTime, "Europe/Rome")

  const validTimes = await getValidTimesFromSchedule([startInTimezone], event)
  if (validTimes.length === 0) return { error: true }

  await createCalendarEvent({
    ...data,
    startTime: startInTimezone,
    durationInMinutes: event.duration,
    eventName: event.name,
  })

  redirect(
    `/book/${data.clerkUserId}/${data.eventId}/success?startTime=${data.startTime.toISOString()}`,
      RedirectType.replace
  )
}
