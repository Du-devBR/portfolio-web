import { ReactNode } from "react";

interface GrindContainerProps {
  children: ReactNode;
}

export function GridContainer({ children }: GrindContainerProps) {
  return (
    <div className="max-w-5xl m-auto py-8 max-sm:px-6 max-md:px-8 max-lg:px-8 max-xl:px-12">
      {children}
    </div>
  );
}
