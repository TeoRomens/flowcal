import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { formatEventDescription } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import CopyButton from "@/components/copy-button";
import * as React from "react";

export default async function Page() {

  const supabase = await createClient();
  const { data: events } = await supabase
    .from("events")
    .select();

  return (
    <>
      <h1 className="text-[32px] font-semibold mb-3 lg:mb-4 text-primary tracking-tight">
        Eventi
      </h1>
      <p className="text-secondary text-[16px] mb-6">
        The most basic setup for a drawer.
      </p>

      <Link href={"/events/new"}>
        <Button className="rounded-full">
          Crea Evento
        </Button>
      </Link>

      {events && events.length > 0 ? (
        <ul className="my-6">
          {events.map((event) => (
            <div
              key={event.id}
              data-slot="card"
              className={cn(
                "bg-card text-card-foreground flex flex-col gap-1 rounded-lg border p-6",
                "mt-4 flex flex-col"
              )}
            >
              <div
                data-slot="card-header"
                className={cn("flex flex-col gap-1")}
              >
                <h2 className={cn("leading-none font-semibold text-[20px] text-primary tracking-tight", !event.active && "text-primary/30")}>
                  {event.name}
                </h2>
                <div
                  data-slot="card-description"
                  className={cn("text-muted-foreground text-sm", !event.active && "text-muted-foreground/40")}
                >
                  {formatEventDescription(event.duration)}
                </div>
              </div>
              {event.description != null && (
                <div
                  data-slot="card-description"
                  className={cn("text-muted-foreground text-sm", !event.active && "text-muted-foreground/40")}
                >
                  {event.description}
                </div>
              )}
              <div
                data-slot="card-footer"
                className={cn("flex items-center justify-end mt-auto gap-2")}
              >
                {event.active && (
                  <CopyButton
                    eventId={event.id}
                    clerkUserId={event.clerk_user}
                  />
                )}
                <Button asChild size="sm">
                  <Link href={`/events/${event.id}/edit`}>Modifica</Link>
                </Button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="rounded-lg p-4 py-8 my-6 border flex flex-col items-center text-center">
          <p className="text-[13px] text-secondary mb-4">
            Nessun evento trovato, clicca per crearne subito uno!
          </p>
          <Link href={"/events/new"}>
            <Button size="sm" className="rounded-full">Crea Evento</Button>
          </Link>
        </div>
      )}
    </>
  );
}


