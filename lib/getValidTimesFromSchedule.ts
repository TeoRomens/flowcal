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

export async function getValidTimesFromSchedule(
  timesInOrder: Date[],
  event: {
    clerk_user: string;
    duration: number
  }
) {
  const start = timesInOrder[0]
  const end = timesInOrder.at(-1)

  if (start == null || end == null) return []

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
    console.log("Error fetching schedule")
    return []
  }

  const groupedAvailabilities = Object.groupBy(
    schedule.schedule_availability,
    a => a.day
  )

  const eventTimes = await getCalendarEventTimes(event.clerk_user, {
    start,
    end,
  })

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
    availabilities = groupedAvailabilities.monday
  }
  if (isTuesday(date)) {
    availabilities = groupedAvailabilities.tuesday
  }
  if (isWednesday(date)) {
    availabilities = groupedAvailabilities.wednesday
  }
  if (isThursday(date)) {
    availabilities = groupedAvailabilities.thursday
  }
  if (isFriday(date)) {
    availabilities = groupedAvailabilities.friday
  }
  if (isSaturday(date)) {
    availabilities = groupedAvailabilities.saturday
  }
  if (isSunday(date)) {
    availabilities = groupedAvailabilities.sunday
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