import { useEffect, useRef } from "react";
import { useHasHover, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const SIZE = 700;
const LERP = 0.08;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const hasHover = useHasHover();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = hasHover && !reducedMotion;

  useEffect(() => {
    const glow = glowRef.current;
    if (!enabled || !glow) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const tick = () => {
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      glow.style.transform = `translate3d(${currentX - SIZE / 2}px, ${currentY - SIZE / 2}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = "1";
    };

    const onMouseLeave = () => {
      glow.style.opacity = "0";
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 opacity-0 transition-opacity duration-500 [mix-blend-mode:screen]"
      style={{
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.08) 30%, transparent 70%)",
      }}
    />
  );
}
