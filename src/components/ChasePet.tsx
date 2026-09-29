import { useEffect, useRef } from "react";
import { useHasHover, usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const SONIC_W = 16;
const SONIC_H = 70;
const FLY_W = 24;
const FLY_H = 20;
const FLY_LERP = 0.06;
const CHASE_LERP = 0.045;
const EDGE = 28;
const FLOOR_GAP = 6;
const FLY_CEILING = 96;
const ENGAGE_BAND = 200;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function ChasePet() {
  const flyRef = useRef<HTMLSpanElement>(null);
  const chaseRef = useRef<HTMLSpanElement>(null);
  const hasHover = useHasHover();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = hasHover && !reducedMotion;

  useEffect(() => {
    const fly = flyRef.current;
    const chase = chaseRef.current;
    if (!enabled || !fly || !chase) return;

    const width = window.innerWidth;
    const floor = window.innerHeight - FLOOR_GAP;
    const flyLow = floor - 20;
    const flyHigh = floor - FLY_CEILING;

    let pointerX = width * 0.62;
    let pointerY = floor - 60;
    let pointerIn = false;

    let aimX = width * 0.62;
    let aimY = floor - 60;
    let flyX = aimX;
    let flyY = aimY;

    let sonicX = width * 0.25;
    let facingRight = true;
    let wasRunning = false;
    let wanderAt = performance.now() + 1000;
    let frame = 0;

    const pickWander = (now: number) => {
      aimX = EDGE + Math.random() * Math.max(width - EDGE * 2, 1);
      aimY = flyHigh + Math.random() * (flyLow - flyHigh);
      wanderAt = now + 1500 + Math.random() * 1800;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      pointerIn = true;
    };

    const onPointerLeave = () => {
      pointerIn = false;
    };

    const tick = (now: number) => {
      const engaged = pointerIn && pointerY > window.innerHeight - ENGAGE_BAND;

      if (engaged) {
        aimX = clamp(pointerX, FLY_W, width - FLY_W);
        aimY = clamp(pointerY, flyHigh, flyLow);
      } else if (now > wanderAt) {
        pickWander(now);
      }

      flyX += (aimX - flyX) * FLY_LERP;
      flyY += (aimY - flyY) * FLY_LERP;

      const target = clamp(flyX, EDGE, width - EDGE);
      sonicX += (target - sonicX) * CHASE_LERP;

      const gap = target - sonicX;
      if (Math.abs(gap) > 1.5) facingRight = gap > 0;

      fly.style.transform = `translate3d(${flyX - FLY_W / 2}px, ${flyY - FLY_H / 2}px, 0)`;

      const mirror = facingRight ? 1 : -1;
      chase.style.transform = `translate3d(${sonicX - SONIC_W / 2}px, ${floor - SONIC_H}px, 0) scaleX(${mirror})`;

      const running = Math.abs(gap) > 2;
      if (running !== wasRunning) {
        chase.classList.toggle("pet-running", running);
        wasRunning = running;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-32 overflow-hidden"
    >
      <span
        ref={flyRef}
        className="absolute left-0 top-0 block text-accent"
        style={{
          width: FLY_W,
          height: FLY_H,
          willChange: "transform",
        }}
      >
        <svg viewBox="0 0 24 20" width={FLY_W} height={FLY_H} fill="currentColor">
          <g className="pet-wing-up">
            <ellipse cx="7" cy="7" rx="6" ry="5" />
            <ellipse cx="17" cy="7" rx="6" ry="5" />
          </g>
          <g className="pet-wing-low">
            <ellipse cx="8" cy="14" rx="4.4" ry="3.4" />
            <ellipse cx="16" cy="14" rx="4.4" ry="3.4" />
          </g>
          <rect x="11.1" y="3" width="1.8" height="14" rx="0.9" fill="var(--color-ink)" />
        </svg>
      </span>

      <span
        ref={chaseRef}
        className="pet-sonic absolute left-0 top-0 block"
        style={{
          width: SONIC_W,
          height: SONIC_H,
          willChange: "transform",
        }}
      />
    </div>
  );
}
