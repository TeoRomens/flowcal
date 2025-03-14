"use server"

import { scheduleFormSchema } from "@/schema/schedule";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";

export async function saveSchedule(
  unsafeData: z.infer<typeof scheduleFormSchema>
) {
  const { userId } = await auth();
  if (!userId) {
    console.log("Missing user id");
    return { error: true };
  }

  const { success, data } = scheduleFormSchema.safeParse(unsafeData);
  if (!success) {
    console.log("Schedule parsing error");
    return { error: true };
  }

  const supabase = await createClient();
  const { availabilities, ...scheduleData } = data;

  const { data: existingSchedule, error: existingScheduleError } = await supabase
    .from("schedule")
    .select("id")
    .eq("clerk_user", userId)

  if (existingScheduleError) {
    console.log(existingScheduleError);
    return { error: true };
  }
  console.log("Existing schedule: " + existingSchedule)

  let scheduleId = existingSchedule[0]?.id;

  if (!scheduleId) {
    const { data: newSchedule, error: insertError } = await supabase
      .from("schedule")
      .insert([{ ...scheduleData, clerk_user: userId }])
      .select("id")
      .single();

    if (insertError) {
      console.log(insertError);
      return { error: true };
    }
    console.log("Inserted schedule: " + newSchedule);

    scheduleId = newSchedule.id;

  } else {
    const { error: updateError } = await supabase
      .from("schedule")
      .update(scheduleData)
      .eq("id", scheduleId);

    if (updateError) {
      console.log(updateError);
      return { error: true };
    }
  }

  // Cancella le disponibilità esistenti
  const { error: deleteError } = await supabase
    .from("schedule_availability")
    .delete()
    .eq("schedule_id", scheduleId);

  if (deleteError) {
    console.log(deleteError);
    return { error: true };
  }

  // Inserisce le nuove disponibilità
  if (availabilities.length > 0) {
    const { error: insertError } = await supabase
      .from("schedule_availability")
      .insert(
        availabilities.map((availability) => ({
          ...availability,
          schedule_id: scheduleId,
        }))
      );

    if (insertError) {
      console.log(insertError);
      return { error: true };
    }
    console.log("Availabilities inserted: " + availabilities);
  }

  console.log("Schedule saved successfully");
}
