"use server"

import {getValidTimesFromSchedule} from "@/lib/getValidTimesFromSchedule"
import {meetingActionSchema} from "@/schema/meetings"
import {z} from "zod"
import {createCalendarEvent} from "../googleCalendar"
import {redirect, RedirectType} from "next/navigation"
import {fromZonedTime} from "date-fns-tz"
import {createClient} from "@/lib/supabase/server";
import * as Sentry from "@sentry/nextjs";

export async function createMeeting(
  unsafeData: z.infer<typeof meetingActionSchema>
) {
  const { success, data } = meetingActionSchema.safeParse(unsafeData)

  if (!success) {
    console.error("Meeting parsing failed")
    return { error: true }
  }
  console.log("Meeting parsing success")

  const supabase = await createClient()
  const { data: event, error } = await supabase
    .from("events")
    .select()
    .eq("id", data.eventId)
    .eq("clerk_user", data.clerkUserId)
    .eq("active", true)
    .single()

  if (event == null || error) {
    console.error("Fetch event failed")
    return { error: true }
  }
  console.log("Fetch event success")

  console.log(data?.startTime)
  const startInTimezone = fromZonedTime(data.startTime, "Europe/Rome")
  console.log("startInTimezone: ", startInTimezone)

  console.log("event: " + event)
  const validTimes = await getValidTimesFromSchedule([startInTimezone], event)
  if (validTimes.length === 0) {
    Sentry.captureException(Error("Valid times are empty"))
    console.error("Valid times are empty")
    return { error: true }
  }
  console.log("Valid times: " + validTimes)

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
