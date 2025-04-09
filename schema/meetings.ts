import { startOfDay } from "date-fns"
import { z } from "zod"

const meetingSchemaBase = z.object({
  startTime: z.date().min(new Date()),
  guestPhone: z
      .string()
      .min(1, "Obbligatorio")
      .regex(/^\d+$/, "Il numero di telefono deve contenere solo cifre"),
  guestName: z.string().min(1, "Obbligatorio"),
  guestNotes: z.string().optional(),
})

export const meetingFormSchema = z
  .object({
    date: z.date().min(startOfDay(new Date()), "Must be in the future"),
  })
  .merge(meetingSchemaBase)

export const meetingActionSchema = z
  .object({
    eventId: z.string().min(1, "Required"),
    clerkUserId: z.string().min(1, "Required"),
  })
  .merge(meetingSchemaBase)
