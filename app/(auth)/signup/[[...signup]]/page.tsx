"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {useId} from "react";
import Image from "next/image"

export default function Page() {
  const id = useId();

  return (
    <SignUp.Root>
      <SignUp.Step
          name="start"
          className="w-full space-y-6 rounded-2xl bg-background px-4 py-10 border sm:w-96 sm:px-8"
      >
        <header className="text-center">
          <Image
              src="/logo_dark.png"
              alt="Logo"
              width={40}
              height={40}
              className="mx-auto size-14 rounded-sm"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-tight text-primary">
            Crea un account
          </h1>
        </header>

        <Clerk.GlobalError className="block text-sm text-red-400"/>

        <div className="flex items-center gap-2">
          <Label htmlFor={id} className="text-secondary">
            Procedendo con la registrazione dichiari di accettare i{" "}
            <a className="underline" href="/terms" target="_blank">
              Termini e Condizioni
            </a>
          </Label>
        </div>

        <SignUp.Captcha />

        <div className="space-y-2">
          <Clerk.Connection
              name="google"
              className="flex w-full items-center justify-center gap-x-3 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 className="w-4"
            >
              <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"/>
              <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"/>
              <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"/>
              <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"/>
              <path d="M1 1h22v22H1z" fill="none"/>
            </svg>
            Registrati con Google
          </Clerk.Connection>
        </div>

        <p className="text-center text-sm text-zinc-500">
          Hai gia un account?{" "}
          <Clerk.Link
              navigate="sign-in"
              className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
          >
            Login
          </Clerk.Link>
        </p>
      </SignUp.Step>

      <SignUp.Step
          name="continue"
          className="w-full space-y-6 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-black/5 sm:w-96 sm:px-8"
      >
        <header className="text-center">
          <Image
            src="/logo_dark.png"
            alt="Logo"
            width={40}
            height={40}
            className="mx-auto size-14 rounded-sm"
          />
          <h1 className="mt-4 text-xl font-semibold tracking-tight text-primary">
            Completa il profilo
          </h1>
        </header>

        <Clerk.GlobalError className="block text-sm text-red-400"/>

        <Clerk.Field name="activity" className="space-y-2">
          <Clerk.Label className="text-sm font-medium text-zinc-950">Nome attività</Clerk.Label>
          <Clerk.Input
              type="text"
              required
              className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <Clerk.FieldError className="block text-sm text-red-400"/>
        </Clerk.Field>

        <SignUp.Action
            submit
            className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
        >
          Continua
        </SignUp.Action>

      </SignUp.Step>
    </SignUp.Root>
  );
}