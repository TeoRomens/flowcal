"use server";

import { Resend } from "resend";
import NewBookingEmail from "@/components/new-booking";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
                                  guestName,
                                  guestPhone,
                                  guestNotes,
                                  startTime,
                                  eventName,
                                  clerkUserEmail
                                }: {
  guestName: string
  guestPhone: string
  startTime: Date
  guestNotes?: string | null
  eventName: string
  clerkUserEmail?: string
}) {
  const { data, error } = await resend.emails.send({
    from: "FlowCal.it <noreply@flowcal.it>",
    to: [clerkUserEmail!],
    subject: "Nuova Prenotazione",
    react: NewBookingEmail({
      guestName: guestName,
      guestPhone: guestPhone,
      guestNotes: guestNotes,
      startTime: startTime,
      eventName: eventName
    })
  });

  if (error) {
    throw new Error(error.name);
  }
}