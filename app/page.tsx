"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center w-full px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-6xl md:text-7xl lg:text-8xl font-sans py-6 md:py-8 relative z-20 font-bold tracking-tight">
        Bookly.
      </h2>
      <div className="relative flex space-x-2">
        <SignInButton>
          <Button className="rounded-full">Login</Button>
        </SignInButton>
        <SignUpButton>
          <Button variant="outline" className="rounded-full">Registrati</Button>
        </SignUpButton>
      </div>
    </BackgroundLines>
  );
}
