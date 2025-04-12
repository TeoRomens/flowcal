import { z } from "zod"

export const settingsFormSchema = z.object({
  publicMessage: z.string(),
  activityName: z.string(),
})
