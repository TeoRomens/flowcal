import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
      <LoaderCircle className="text-primary size-10 animate-spin" />
    </div>
  )
}