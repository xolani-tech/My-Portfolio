import type { ReactNode } from "react";

const variants = {
  solid:
    "font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent",
  subtle:
    "text-ink underline decoration-transparent underline-offset-4 transition-colors hover:text-accent hover:decoration-accent",
} as const;

interface InlineTextProps {
  text: string;
  variant?: keyof typeof variants;
}

export default function InlineText({ text, variant = "solid" }: InlineTextProps) {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }
    nodes.push(
      <a
        key={`${match.index}-${match[2]}`}
        href={match[2]}
        target="_blank"
        rel="noreferrer noopener"
        className={variants[variant]}
      >
        {match[1]}
      </a>
    );
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return <>{nodes}</>;
}
