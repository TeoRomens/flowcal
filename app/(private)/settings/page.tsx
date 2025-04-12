import * as React from "react";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {SettingsForm} from "@/components/forms/settings";

export default async function SchedulePage() {
  const user = await currentUser()

  if (!user) redirect("/signin");

  return (
    <>
      <h1 className="text-[32px] font-semibold mb-3 lg:mb-4 text-primary tracking-tight">
        Impostazioni
      </h1>
      <p className="text-secondary text-[16px] mb-6">
        Qui trovi tutte le impostazioni di configurazione del tuo profilo.
      </p>
      <SettingsForm />
    </>
  );
}


