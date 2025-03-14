"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useId } from "react";

export default function Page() {
  const id = useId();

  return (
    <SignUp.Root>
      <SignUp.Step
        name="start"
        className="w-full space-y-6 rounded-2xl bg-background px-4 py-10 border sm:w-96 sm:px-8"
      >
        <header className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 40"
            className="mx-auto size-10 text-zinc-950"
            aria-hidden
          >
            <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
            </mask>
            <g fill="currentColor" mask="url(#a)">
              <path
                d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
              <path
                d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
            </g>
          </svg>
          <h1 className="mt-4 text-xl font-semibold tracking-tight text-primary">
            Crea un account
          </h1>
        </header>
        <Clerk.GlobalError className="block text-sm text-red-400" />
        <div className="flex items-center gap-2">
          <Checkbox id={id} />
          <Label htmlFor={id}>
            I agree to the{" "}
            <a className="underline" href="https://originui.com" target="_blank">
              terms of service
            </a>
          </Label>
        </div>
        <div className="space-y-2">
          <Clerk.Connection
            name="google"
            className="flex w-full items-center justify-center gap-x-3 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 16"
              className="w-4"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
              />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 40"
            className="mx-auto size-10 text-zinc-950"
            aria-hidden
          >
            <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
            </mask>
            <g fill="currentColor" mask="url(#a)">
              <path
                d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
              <path
                d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
            </g>
          </svg>
          <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
            Continue registration
          </h1>
        </header>
        <Clerk.GlobalError className="block text-sm text-red-400" />
        <Clerk.Field name="username" className="space-y-2">
          <Clerk.Label className="text-sm font-medium text-zinc-950">Username</Clerk.Label>
          <Clerk.Input
            type="text"
            required
            className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
          />
          <Clerk.FieldError className="block text-sm text-red-400" />
        </Clerk.Field>
        <SignUp.Action
          submit
          className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
        >
          Continue
        </SignUp.Action>
        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Clerk.Link
            navigate="sign-in"
            className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
          >
            Sign in
          </Clerk.Link>
        </p>
      </SignUp.Step>
    </SignUp.Root>
  );
}