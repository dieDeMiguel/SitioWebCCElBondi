import { Scissors } from "lucide-react";

export function SectionDivider() {
  return (
    <div className="flex w-full items-center justify-center py-4">
      <div className="flex flex-1 items-center justify-end">
        <div className="h-px w-full max-w-xs border-t-2 border-dashed border-bondi-cyan" />
      </div>
      <div className="mx-4 flex h-8 w-8 items-center justify-center">
        <Scissors className="h-5 w-5 rotate-90 text-bondi-cyan" />
      </div>
      <div className="flex flex-1 items-center justify-start">
        <div className="h-px w-full max-w-xs border-t-2 border-dashed border-bondi-cyan" />
      </div>
    </div>
  );
}
