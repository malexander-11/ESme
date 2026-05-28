"use client";

import { useRef, useState, type ReactNode } from "react";

const COMMIT = 90; // px of horizontal travel needed to register a choice

interface SwipeCardProps {
  leftLabel: string;
  rightLabel: string;
  onCommit: (direction: "left" | "right") => void;
  children: ReactNode;
}

/**
 * Wraps a card and turns horizontal drags into a left/right choice (right =
 * positive, left = negative). Vertical movement is left to the native
 * scroll-snap feed (touch-action: pan-y), which is how "scroll = keep" works.
 */
export function SwipeCard({
  leftLabel,
  rightLabel,
  onCommit,
  children,
}: SwipeCardProps) {
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);

  const start = useRef<{ x: number; y: number } | null>(null);
  const dxRef = useRef(0);
  const mode = useRef<"idle" | "h" | "v">("idle");
  const done = useRef(false);

  function setOffset(v: number) {
    dxRef.current = v;
    setDx(v);
  }

  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    start.current = { x: e.clientX, y: e.clientY };
    mode.current = "idle";
    done.current = false;
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!start.current || done.current) return;
    const ddx = e.clientX - start.current.x;
    const ddy = e.clientY - start.current.y;

    if (mode.current === "idle") {
      if (Math.abs(ddx) > 10 && Math.abs(ddx) > Math.abs(ddy)) {
        mode.current = "h";
        setDragging(true);
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } else if (Math.abs(ddy) > 10) {
        mode.current = "v"; // let the feed scroll natively (= keep)
      }
    }

    if (mode.current === "h") {
      e.preventDefault();
      setOffset(ddx);
    }
  }

  function endGesture() {
    if (mode.current === "h" && Math.abs(dxRef.current) > COMMIT) {
      const direction = dxRef.current > 0 ? "right" : "left";
      done.current = true;
      setDragging(false);
      setOffset(direction === "right" ? 1000 : -1000);
      onCommit(direction);
      window.setTimeout(() => setOffset(0), 300);
    } else {
      setDragging(false);
      setOffset(0);
    }
    start.current = null;
    mode.current = "idle";
  }

  const rightOpacity = Math.max(0, Math.min(1, dx / COMMIT));
  const leftOpacity = Math.max(0, Math.min(1, -dx / COMMIT));

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endGesture}
      onPointerCancel={endGesture}
      className="relative touch-pan-y select-none"
      style={{
        transform: `translateX(${dx}px) rotate(${dx * 0.02}deg)`,
        transition: dragging ? "none" : "transform 0.3s ease",
      }}
    >
      <SwipeHint side="right" label={rightLabel} opacity={rightOpacity} />
      <SwipeHint side="left" label={leftLabel} opacity={leftOpacity} />
      {children}
    </div>
  );
}

function SwipeHint({
  side,
  label,
  opacity,
}: {
  side: "left" | "right";
  label: string;
  opacity: number;
}) {
  const positive = side === "right";
  return (
    <div
      aria-hidden
      style={{ opacity }}
      className={[
        "pointer-events-none absolute top-6 z-10 rounded-full px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-lift",
        positive
          ? "right-6 rotate-6 bg-positive"
          : "left-6 -rotate-6 bg-caution",
      ].join(" ")}
    >
      {label}
    </div>
  );
}
