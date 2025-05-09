import {ReactNode, Suspense} from "react";
import type { Metadata } from "next";
import Loading from "@/app/(public)/book/loading";

export const metadata: Metadata = {
  title: "Prenota | FlowCal",
  description: "FlowCal è l'app che permette ai clienti di negozi di servizi di prenotare appuntamenti facilmente, senza chiamate telefoniche.",
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-4 py-8 gap-4 lg:py-16 lg:px-8 ">
      <div className="max-w-2xl mx-auto w-full">
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}