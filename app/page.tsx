"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <BackgroundLines className="flex flex-col items-center h-screen justify-center px-4">
      <Image
        src="/logo_dark.png"
        alt="Logo"
        width={40}
        height={40}
        className="mx-auto size-14 rounded-sm z-10"
      />
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-6xl md:text-7xl lg:text-8xl font-sans py-6 md:py-8 relative z-20 font-bold tracking-tight">
        FlowCal.
      </h2>
      <div className="relative flex space-x-2">
        {isSignedIn ? (
          <a href={"/events"}>
            <Button className="rounded-full">Vai alla dashboard</Button>
          </a>
        ) : (
          <>
            <SignInButton>
              <Button className="rounded-full">Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button variant="outline" className="rounded-full">Registrati</Button>
            </SignUpButton>
          </>
        )}
      </div>
    </BackgroundLines>
  );
}
