import { site } from "@/data/site";
import InlineText from "@/components/InlineText";

const credit =
  "Coded in [Visual Studio Code](https://code.visualstudio.com/) by yours truly. Built with [React.js](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/). Deployed with [Vercel](https://vercel.com/). All text is set in [Inter](https://rsms.me/inter/) typeface.";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs text-ink-muted">
          <InlineText text={credit} variant="subtle" />
        </p>
      </div>
    </footer>
  );
}
