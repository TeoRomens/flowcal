"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";

export default function Page() {

  return (
        <SignIn.Root>
          <SignIn.Step
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
            </header>
            <Clerk.GlobalError className="block text-sm text-red-400"/>
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
                Login con Google
              </Clerk.Connection>
            </div>
            <p className="text-center text-sm text-neutral-400">
              Non hai ancora un account?{" "}
              <Clerk.Link
                  navigate="sign-up"
                  className="hover:underline font-medium text-primary underline-offset-4 outline-none focus-visible:underline"
              >
                Registrati
              </Clerk.Link>
            </p>
          </SignIn.Step>
        </SignIn.Root>
  );
}