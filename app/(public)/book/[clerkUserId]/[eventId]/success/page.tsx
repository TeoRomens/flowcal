import {formatDateTime} from "@/lib/formatters"
import {clerkClient} from "@clerk/nextjs/server"
import {notFound} from "next/navigation"
import {createClient} from "@/lib/supabase/server";
import {CircleCheck} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Confetti} from "@/components/confetti";
import { fromZonedTime, toZonedTime } from "date-fns-tz";
import type { Metadata } from "next";

export const revalidate = 0

export const metadata: Metadata = {
  title: "Prenotazione Confermata | FlowCal",
  description: "FlowCal è l'app che permette ai clienti di negozi di servizi di prenotare appuntamenti facilmente, senza chiamate telefoniche.",
};

export default async function SuccessPage({
                                            params,
                                            searchParams,
                                          }: {
  params: Promise<{ clerkUserId: string; eventId: string }>
  searchParams: Promise<{ startTime: string }>
}) {
  const {clerkUserId, eventId} = await params;
  const {startTime} = await searchParams;

  const supabase = await createClient()
  const {data: event} = await supabase
      .from("events")
      .select()
      .eq("clerk_user", clerkUserId)
      .eq("id", eventId)
      .eq("active", true)
      .maybeSingle()

  if (event == null) notFound()

  const clerk = await clerkClient()
  const calendarUser = await clerk.users.getUser(clerkUserId)
  const startTimeDate = toZonedTime(new Date(startTime), 'Europe/Rome')

  return (
      <div className="space-y-2">
        <Confetti
            className="absolute left-0 top-0 z-0 size-full"
            options={{
              origin: {x: 0.5, y: 1}
            }}
        />
        <CircleCheck
            className="-mt-0.5 me-3 inline-flex text-emerald-500"
            size={48}
            strokeWidth={2}
            aria-hidden="true"
        />
        <h1 className="text-2xl/[1.1] font-bold tracking-tight text-foreground">
          Prenotazione Confermata!
        </h1>
        <p className="text-sm text-muted-foreground">
          Puoi tranquillamente chiudere questa schermata, la prenotazione è avvenuta con successo!
        </p>
        <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
          <div className="flex grow items-start gap-3">
            <div className="grid gap-2">
              <p className="text-xs text-muted-foreground">
                Servizio
              </p>
              <Label>
                {event?.name}
              </Label>
              <p className="text-xs text-muted-foreground">
                Data e Ora
              </p>
              <Label>
                {formatDateTime(startTimeDate)}
              </Label>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Per qualsiasi necessità di modifica/cancellazione contatta direttamente il negozio.
        </p>
      </div>
  )
}