import { clerkClient } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase/server";
import { Scissors } from "lucide-react";
import { formatEventDescription } from "@/lib/formatters";
import Link from "next/link";
import { Label } from "@/components/ui/label";


export default async function BookingPage({
                                            params
                                          }: {
  params: Promise<{ clerkUserId: string }>
}) {

  const { clerkUserId } = await params;

  const clerk = await clerkClient();
  const user = await clerk.users.getUser(clerkUserId);

  const supabase = await createClient();
  const { data: events } = await supabase
    .from("events")
    .select()
    .eq("clerk_user", clerkUserId)
    .eq("active", true);

  console.log(events);

  return (
    <>
      <h1 className="text-2xl sm:text-[32px] font-semibold mb-4 text-primary tracking-tight">
        Prenota con {user.publicMetadata["activity_name"] as string}
      </h1>
      <Label>Seleziona un servizio</Label>
      <div className="mt-4 grid gap-3 grid-cols-2 max-h-[70vh] overflow-y-auto">
        {events?.map((item) => (
          <Link
            href={`/book/${clerkUserId}/${item.id}`}
            key={item.id}
            className="relative flex flex-col gap-1 rounded-lg border border-input p-4 shadow-sm shadow-black/5 hover:border-ring transition"
          >
            <Scissors
              className="mb-2 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span className="text-foreground text-sm leading-4 font-medium">
              {item.name}
            </span>
            <p className="text-xs text-muted-foreground">
              {formatEventDescription(item.duration)}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
