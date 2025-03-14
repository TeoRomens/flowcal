import { EventForm } from "@/components/forms/event";
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server"

export default async function EditEventPage({
  params: { eventId },
}: {
  params: { eventId: string }
}) {
  const { userId, redirectToSignIn } = await auth()
  if (userId == null) return redirectToSignIn()

  const supabase = await createClient()
  const { data: event } = await supabase
      .from("events")
      .select()
      .eq("id", eventId)
      .single()

  if (event == null) return notFound()

  return (
    <>
      <h1 className="text-[32px] font-semibold mb-3 lg:mb-4 text-primary tracking-tight">Modifica Evento</h1>
      <p className="text-secondary text-[16px] mb-6">The most basic setup for a drawer.</p>
      <EventForm event={{ ...event, description: event.description || undefined }}/>
    </>
  );
}
