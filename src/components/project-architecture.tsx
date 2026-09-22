import Image from "next/image";
import { Network } from "lucide-react";

export interface ArchitectureDiagram {
  image: string;
  alt: string;
}

export function ProjectArchitecture({ architecture }: { architecture: ArchitectureDiagram }) {
  return (
    <details open className="group mt-6 rounded-xl border border-primary/20 bg-primary/[0.03] p-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground marker:content-none">
        <span className="flex items-center gap-2">
          <Network className="size-4 text-primary" />
          Architecture diagram
        </span>
        <span className="text-xs font-medium text-muted-foreground transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="mt-4 flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-white p-3">
        <Image
          src={architecture.image}
          alt={architecture.alt}
          width={1600}
          height={900}
          className="h-full w-full object-contain"
        />
      </div>
    </details>
  );
}
