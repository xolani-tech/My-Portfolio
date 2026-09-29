import { useEffect, useState } from "react";

export function useScrollSpy(ids: readonly string[], offset = 96): string {
  const [activeId, setActiveId] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    const targets = key
      .split("|")
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [key, offset]);

  return activeId;
}
