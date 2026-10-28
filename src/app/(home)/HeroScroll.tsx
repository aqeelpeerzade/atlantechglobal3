"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LazyVideo from "./LazyVideo";
import { asset } from "@/lib/asset";
import styles from "./page.module.css";

const DURATION = 500; // ms. Lower = faster

export default function HeroScroll() {
    const heroRef = useRef<HTMLElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const contentShown = useRef(false);
    const released = useRef(false);
    const animating = useRef(false);
    const lastWheelTime = useRef(0);

    const [showHeroContent, setShowHeroContent] = useState(false);

    useEffect(() => {
        const hero = heroRef.current;
        const stage = stageRef.current;
        if (!hero || !stage) return;
        const show = (v: boolean) => {
            contentShown.current = v;
            setShowHeroContent(v);
            // resume the video when we are back on the hero
            if (!v) stage.querySelector("video")?.play().catch(() => { });
        };

        const getTarget = () => {
            const heroTop = hero.getBoundingClientRect().top + window.scrollY;
            return heroTop + hero.offsetHeight - stage.offsetHeight;
        };

        // Still inside the locked hero zone (before the end target).

        const isActive = () => window.scrollY < getTarget() - 2;

        // one shared fast animation for touch + wheel
        const goNext = () => {
            released.current = true;
            animating.current = true;

            // pause video while scrolling so the phone isn't decoding + scrolling together
            stage.querySelector("video")?.pause();

            const topOffset = parseFloat(getComputedStyle(stage).top) || 0;
            const header = document.querySelector("header") as HTMLElement | null;
            const navH = header ? header.getBoundingClientRect().height : topOffset;
            const startY = window.scrollY;
            // land the next section just below the navbar, with 16px breathing room
            const end = hero.getBoundingClientRect().bottom + startY - navH - 15; // next section
            const dist = end - startY;
            const t0 = performance.now();

            const step = (now: number) => {
                const p = Math.min((now - t0) / DURATION, 1);
                const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; // ease-in-out
                window.scrollTo({
                    top: startY + dist * eased,
                    left: 0,
                    behavior: "instant" as ScrollBehavior,
                });
                if (p < 1) requestAnimationFrame(step);
                else animating.current = false;
            };
            requestAnimationFrame(step);

            setTimeout(() => (animating.current = false), DURATION + 150);
        };

        /* ---------- Touch ---------- */
        let touchStartY = 0;
        let gestureDone = false;
        let activeAtStart = false;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
            gestureDone = false;
            activeAtStart = isActive(); // measured once, not on every move
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (animating.current) {
                if (e.cancelable) e.preventDefault();
                return;
            }
            if (!activeAtStart) return;

            const diff = touchStartY - e.touches[0].clientY;

            // swipe up (scroll down) while hero is locked
            if (diff > 0 && !released.current) {
                if (e.cancelable) e.preventDefault();
                if (gestureDone || diff < 6) return;
                gestureDone = true;
                if (!contentShown.current) {
                    show(true);
                    if (window.scrollY > 2) {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
                    }
                } else goNext();
                return;
            }

            // swipe down (scroll up): hide content
            if (diff < -6 && contentShown.current && !released.current && !gestureDone) {
                gestureDone = true;
                show(false);
            }
        };

        /* ---------- Wheel (desktop) ---------- */
        const handleWheel = (e: WheelEvent) => {
            if (animating.current) {
                e.preventDefault();
                return;
            }
            if (!isActive()) return;

            if (e.deltaY < 0) {
                if (contentShown.current) {
                    released.current = false;
                    show(false);
                }
                return;
            }
            if (e.deltaY === 0) return;

            const now = Date.now();
            if (now - lastWheelTime.current < 500) {
                e.preventDefault();
                return;
            }
            lastWheelTime.current = now;
            e.preventDefault();

            if (!contentShown.current) show(true);
            else if (!released.current) goNext();
        };

        /* ---------- Scroll: reset when coming back up ---------- */
        let lastY = window.scrollY;

        const handleScroll = () => {
            const y = window.scrollY;
            const goingUp = y < lastY;
            lastY = y;
            if (animating.current) return;

            if (
                (contentShown.current || released.current) &&
                (y <= 5 || (goingUp && y < getTarget() - 30))
            ) {
                released.current = false;
                show(false);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section ref={heroRef} className={styles.hero} style={{ height: "calc(100svh + 85px)" }}>
            <div ref={stageRef} className={styles.heroStage}>
                <LazyVideo
                    src={asset("/videos/hero.mp4")}
                    webmSrc={asset("/videos/hero.webm")}
                    className={styles.heroVideo}
                />

                <div className={styles.heroOverlay} />

                {/* always rendered, only fades: no mount/unmount jank */}
                <div
                    className={styles.heroContent}
                    aria-hidden={!showHeroContent}
                    style={{
                        opacity: showHeroContent ? 1 : 0,
                        transform: showHeroContent ? "translate3d(0,0,0)" : "translate3d(0,16px,0)",
                        visibility: showHeroContent ? "visible" : "hidden",
                        pointerEvents: showHeroContent ? "auto" : "none",
                        transition: `opacity 0.25s ease, transform 0.25s ease, visibility 0s linear ${showHeroContent ? "0s" : "0.25s"}`,
                        willChange: "opacity, transform",
                    }}
                >
                    <p className={styles.heroSub}>
                        Leading IT Solutions Company delivering AI, Digital
                        Transformation, and Product Engineering worldwide.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contact-us" className="btn btn-primary">
                            Talk to Our Experts ↗
                        </Link>

                        <Link href="/services" className="btn btn-outline">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}