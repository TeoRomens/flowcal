import { clerkClient } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import { addMonths, eachMinuteOfInterval, endOfDay, roundToNearestMinutes } from "date-fns";
import { getValidTimesFromSchedule } from "@/lib/getValidTimesFromSchedule";
import { notFound } from "next/navigation";
import { MeetingForm } from "@/components/forms/meeting";
import { Badge } from "@/components/ui/badge";

export default async function BookingEventPage({
                                                 params
                                               }: {
  params: Promise<{ clerkUserId: string, eventId: string }>
}) {

  const { clerkUserId, eventId } = await params;

  const supabase = await createClient();
  const { data: event } = await supabase
    .from("events")
    .select()
    .eq("id", eventId)
    .eq("clerk_user", clerkUserId)
    .eq("active", true)
    .single();

  if (!event) return notFound();

  const clerk = await clerkClient();
  const calendarUser = await clerk.users.getUser(clerkUserId);
  const startDate = roundToNearestMinutes(new Date(), {
    nearestTo: 15,
    roundingMethod: "ceil"
  });
  const endDate = endOfDay(addMonths(startDate, 2));

  const validTimes = await getValidTimesFromSchedule(
    eachMinuteOfInterval({ start: startDate, end: endDate }, { step: 15 }),
    event
  );

  return (
    <>
      <h1 className="text-2xl sm:text-[32px] mb-3 font-semibold text-primary tracking-tight">Prenota
        con {calendarUser.publicMetadata["activity_name"] as string}</h1>
      <Badge variant="outline" className="gap-0 rounded-md px-2 py-1">
        {event.name}
      </Badge>
      <MeetingForm
        clerkUserId={clerkUserId}
        eventId={eventId}
        validTimes={validTimes}
      />
    </>
  );
}
