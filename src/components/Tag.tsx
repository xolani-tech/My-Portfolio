import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-sm bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent transition-colors hover:bg-accent/20">
      {children}
    </span>
  );
}
