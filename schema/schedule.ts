import { DAYS_OF_WEEK } from "@/data/constants"
import { timeToInt } from "@/lib/utils"
import { z } from "zod"

export const scheduleFormSchema = z.object({
  availabilities: z
    .array(
      z.object({
        day: z.enum(DAYS_OF_WEEK),
        start_time: z
          .string()
          .regex(
            /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            "L'orario deve essere nel formato HH:MM"
          ),
        end_time: z
          .string()
          .regex(
            /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
            "L'orario deve essere nel formato HH:MM"
          ),
      })
    )
    .superRefine((availabilities, ctx) => {
      availabilities.forEach((fasciaOraria, index) => {
        const overlaps = availabilities.some((d, i) => {
          return (
            i !== index &&
            d.day === fasciaOraria.day &&
            timeToInt(d.start_time) < timeToInt(fasciaOraria.end_time) &&
            timeToInt(d.end_time) > timeToInt(fasciaOraria.start_time)
          )
        })

        if (overlaps) {
          ctx.addIssue({
            code: "custom",
            message: "L'orario si sovrappone ad un altro",
            path: [index],
          })
        }

        if (
          timeToInt(fasciaOraria.start_time) >= timeToInt(fasciaOraria.end_time)
        ) {
          ctx.addIssue({
            code: "custom",
            message: "L'orario di fine deve essere successivo all'orario di inizio",
            path: [index],
          })
        }
      })
    }),
})