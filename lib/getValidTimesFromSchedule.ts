import { DAYS_OF_WEEK } from "@/data/constants"
import { getCalendarEventTimes } from "@/server/googleCalendar"
import {
  addMinutes,
  areIntervalsOverlapping,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
  isWithinInterval,
  setHours,
  setMinutes,
} from "date-fns"
import { fromZonedTime } from "date-fns-tz"
import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/lib/supabase/supabase";
import * as Sentry from "@sentry/nextjs";

export async function getValidTimesFromSchedule(
  timesInOrder: Date[],
  event: {
    clerk_user: string;
    duration: number
  }
) {
  const start = timesInOrder[0]
  const end = timesInOrder.at(-1)

  console.log("timesInOrder", timesInOrder)
  console.log("start: " + start)
  console.log("end: " + end)
  if (start == null || end == null) {
    console.error("Start/End is null")
    return []
  }

  const supabase = await createClient()
  const { data: schedule, error } = await supabase
    .from("schedule")
    .select(
      `
      id,
      timezone,
      schedule_availability (
        day,
        start_time,
        end_time
      )
    `
    )
    .eq("clerk_user", event.clerk_user)
    .maybeSingle()

  if (schedule == null || error) {
    Sentry.captureException(Error("Schedule fetching failed"))
    console.error("Schedule fetching failed")
    return []
  }
  console.log("Schedule fetching ok")

  const groupedAvailabilities = Object.groupBy(
    schedule.schedule_availability,
    a => a.day
  )

  const eventTimes = await getCalendarEventTimes(event.clerk_user, {
    start,
    end,
  })
  console.log("EventTimes: " + eventTimes)

  return timesInOrder.filter(intervalDate => {

    const availabilities = getAvailabilities(
      groupedAvailabilities,
      intervalDate,
      schedule.timezone
    )
    const eventInterval = {
      start: intervalDate,
      end: addMinutes(intervalDate, event.duration),
    }
    console.log("intervalDate: ", intervalDate)
    console.log("availabilities: ", availabilities)
    console.log("eventInterval: ", eventInterval)

    const result = ( eventTimes.every(eventTime => {
        return !areIntervalsOverlapping(eventTime, eventInterval)
      }) &&
      availabilities.some(availability => {
        return (
          isWithinInterval(eventInterval.start, availability) &&
          isWithinInterval(eventInterval.end, availability)
        )
      }))
    console.log("getValidTimesFromSchedule result: ", result)

    return (
      eventTimes.every(eventTime => {
        return !areIntervalsOverlapping(eventTime, eventInterval)
      }) &&
      availabilities.some(availability => {
        return (
          isWithinInterval(eventInterval.start, availability) &&
          isWithinInterval(eventInterval.end, availability)
        )
      })
    )
  })
}

function getAvailabilities(
  groupedAvailabilities: Partial<
    Record<
      (typeof DAYS_OF_WEEK)[number],
      (Tables<"schedule_availability">)[]
    >
  >,
  date: Date,
  timezone: string
) {
  let availabilities:
    | (Tables<"schedule_availability">)[]
    | undefined

  if (isMonday(date)) {
    availabilities = groupedAvailabilities.lunedì
  }
  if (isTuesday(date)) {
    availabilities = groupedAvailabilities.martedì
  }
  if (isWednesday(date)) {
    availabilities = groupedAvailabilities.mercoledì
  }
  if (isThursday(date)) {
    availabilities = groupedAvailabilities.giovedì
  }
  if (isFriday(date)) {
    availabilities = groupedAvailabilities.venerdì
  }
  if (isSaturday(date)) {
    availabilities = groupedAvailabilities.sabato
  }
  if (isSunday(date)) {
    availabilities = groupedAvailabilities.domenica
  }

  if (availabilities == null) return []

  return availabilities.map(({ start_time, end_time }) => {
    const start = fromZonedTime(
      setMinutes(
        setHours(date, parseInt(start_time.split(":")[0])),
        parseInt(start_time.split(":")[1])
      ),
      timezone
    )

    const end = fromZonedTime(
      setMinutes(
        setHours(date, parseInt(end_time.split(":")[0])),
        parseInt(end_time.split(":")[1])
      ),
      timezone
    )

    return { start, end }
  })
}