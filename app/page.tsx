"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-full px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-7xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Bookly.
      </h2>
      <div className="relative flex space-x-2">
        <Button className="rounded-full">Accedi</Button>
        <Button variant="outline" className="rounded-full">Registrati</Button>
      </div>
    </BackgroundLines>
  );
}
