import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-4 py-8 gap-4 lg:py-16 lg:px-8 ">
      <div className="max-w-2xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}