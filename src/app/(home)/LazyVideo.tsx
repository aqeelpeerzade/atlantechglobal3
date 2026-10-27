"use client";

import { useEffect, useRef } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

export default function LazyVideo({
  src,
  className,
  minWidth = 0,
}: {
  src: string;
  className?: string;
  minWidth?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const connection = (navigator as Navigator & { connection?: NetworkInfo }).connection;
    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < minWidth ||
      connection?.saveData ||
      /(^|-)2g$/.test(connection?.effectiveType ?? "");
    if (skip) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.src = src;
        video.play().catch(() => { });
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src, minWidth]);

  return <video ref={ref} className={className} muted loop playsInline preload="none" aria-hidden="true" />;
}
