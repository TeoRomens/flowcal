import { ReactNode } from "react"

export default function AuthLayout({ children }: { children: ReactNode }) {

  return (
    <div className="h-screen flex flex-col justify-center items-center px-4 w-full">
      {children}
    </div>
  )
}