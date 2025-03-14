import { z } from "zod"

export const eventFormSchema = z.object({
  name: z.string().min(1, "Obbligatorio"),
  description: z.string().optional(),
  active: z.boolean().default(true),
  duration: z.coerce
    .number()
    .int()
    .positive("La durata deve essere maggiore di 0")
    .max(60 * 12, `La durata deve essere inferiore a ${60 * 12} minuti`),
})
