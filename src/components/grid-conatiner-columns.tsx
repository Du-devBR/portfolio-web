import { ReactNode } from "react";

interface GrindContainerColumnsProps {
  children: ReactNode;
}

export function GridContainerColumns({ children }: GrindContainerColumnsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 mt-6">
      {children}
    </div>
  );
}
