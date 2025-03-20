import { createClient } from "@/lib/supabase/server";
import * as React from "react";
import { auth } from "@clerk/nextjs/server";
import { ScheduleForm } from "@/components/forms/schedule";

export default async function SchedulePage() {
  const { userId, redirectToSignIn } = await auth();
  if (userId == null) return redirectToSignIn();

  const supabase = await createClient();
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
    .eq("clerk_user", userId)
    .maybeSingle();

  if (error) console.log(error);

  return (
    <>
      <h1 className="text-[32px] font-semibold mb-3 lg:mb-4 text-primary tracking-tight">
        Disponibilità
      </h1>
      <p className="text-secondary text-[16px] mb-6">
        Configura la tua disponibilità selezionando giorni e orari in cui sei libero e permettere agli utenti di
        prenotare con te.
      </p>
      <ScheduleForm schedule={schedule ?? undefined} />
    </>
  );
}


