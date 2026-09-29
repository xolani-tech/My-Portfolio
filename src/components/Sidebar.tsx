import { site } from "@/data/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { socialIcons } from "@/components/socialIcons";

const navIds = site.nav.map((item) => item.id);

function SocialLinks({ className }: { className: string }) {
  return (
    <ul className={className}>
      {site.socials.map((social) => {
        const Icon = socialIcons[social.key];
        return (
          <li key={social.key}>
            <a
              href={social.href}
              aria-label={social.label}
              className="text-ink-muted transition-colors hover:text-accent"
            >
              <Icon className="size-6" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const activeId = useScrollSpy(navIds);

  return (
    <header className="-mx-6 flex flex-col px-6 py-12 lg:sticky lg:top-0 lg:z-40 lg:mx-0 lg:h-screen lg:justify-between lg:gap-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-20 lg:backdrop-blur-none">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-ink min-[380px]:text-5xl lg:text-5xl">
          {site.name}
        </h1>
        <p className="mt-3 text-lg font-medium tracking-tight text-accent sm:text-xl lg:mt-1 lg:text-sm">
          {site.title}
        </p>
        <p className="mt-4 max-w-xs text-sm leading-normal text-ink-muted">
          {site.oneLiner}
        </p>
      </div>

      <SocialLinks className="ml-1 mt-8 flex items-center gap-5 lg:hidden" />

      <nav aria-label="Sections" className="hidden lg:block">
        <ul className="flex items-center gap-6 lg:flex-col lg:items-start lg:gap-4">
          {site.nav.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-active={isActive}
                  aria-current={isActive ? "true" : undefined}
                  className="nav-underline font-mono text-sm whitespace-nowrap text-ink-muted transition-colors hover:text-ink data-[active=true]:text-accent"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <SocialLinks className="hidden gap-4 lg:flex" />
    </header>
  );
}
