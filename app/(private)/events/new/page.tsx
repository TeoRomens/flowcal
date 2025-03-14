import { EventForm } from "@/components/forms/event";

export default function Page() {

  return (
    <>
      <h1 className="text-[32px] font-semibold mb-3 lg:mb-4 text-primary tracking-tight">Nuovo Evento</h1>
      <p className="text-secondary text-[16px] mb-6">The most basic setup for a drawer.</p>
      <EventForm />
    </>
  );
}
