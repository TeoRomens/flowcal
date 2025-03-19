"use server"

import { google } from "googleapis"
import { addMinutes, endOfDay, startOfDay } from "date-fns"
import { clerkClient } from "@clerk/nextjs/server";
import * as Sentry from "@sentry/nextjs";

export async function getCalendarEventTimes(
  clerkUserId: string,
  { start, end }: { start: Date; end: Date }
) {
  const oAuthClient = await getOAuthClient(clerkUserId)

  const events = await google.calendar("v3").events.list({
    calendarId: "primary",
    eventTypes: ["default"],
    singleEvents: true,
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    maxResults: 2500,
    auth: oAuthClient,
  })

  if(events.status >= 300) {
    console.error("Fetching calendar events fail.")
  }

  return (
    events.data.items
      ?.map(event => {
        if (event.start?.date != null && event.end?.date != null) {
          return {
            start: startOfDay(event.start.date),
            end: endOfDay(event.end.date),
          }
        }

        if (event.start?.dateTime != null && event.end?.dateTime != null) {
          return {
            start: new Date(event.start.dateTime),
            end: new Date(event.end.dateTime),
          }
        }
      })
      .filter(date => date != null) || []
  )
}

export async function createCalendarEvent({
  clerkUserId,
  guestName,
  guestEmail,
  startTime,
  guestNotes,
  durationInMinutes,
  eventName,
}: {
  clerkUserId: string
  guestName: string
  guestEmail: string
  startTime: Date
  guestNotes?: string | null
  durationInMinutes: number
  eventName: string
}) {
  const oAuthClient = await getOAuthClient(clerkUserId)
  const clerk = await clerkClient()
  const calendarUser = await clerk.users.getUser(clerkUserId)
  if (calendarUser.primaryEmailAddress == null) {
    Sentry.captureException(Error("Clerk user has no email"))
    console.error("Clerk user has no email")
    throw new Error("Clerk user has no email")
  }
  console.log("Clerk user email ok")

  const calendarEvent = await google.calendar("v3").events.insert({
    calendarId: "primary",
    auth: oAuthClient,
    sendUpdates: "all",
    requestBody: {
      attendees: [
        { email: guestEmail, displayName: guestName },
        {
          email: calendarUser.primaryEmailAddress?.emailAddress,
          displayName: calendarUser.fullName,
          responseStatus: "accepted",
        },
      ],
      description: guestNotes ? `Note: ${guestNotes}` : undefined,
      start: {
        dateTime: startTime.toISOString(),
      },
      end: {
        dateTime: addMinutes(startTime, durationInMinutes).toISOString(),
      },
      summary: `${eventName} - ${guestName}`,
    },
  })

  if(calendarEvent.status >= 300) {
    console.error("Calendar event insert error")
  }
  console.log("Calendar event insert ok")

  return calendarEvent.data
}

async function getOAuthClient(clerkUserId: string) {
  const clerk = await clerkClient()
  const token = await clerk.users.getUserOauthAccessToken(
    clerkUserId,
    "google"
  )

  if (token.data.length === 0 || token.data[0].token == null) {
    Sentry.captureException(Error("OAuthToken not found."))
    console.error("OAuthToken not found.")
    return
  }
  console.log("OAuthToken ok")

  const client = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_REDIRECT_URL
  )

  client.setCredentials({ access_token: token.data[0].token })

  return client
}
