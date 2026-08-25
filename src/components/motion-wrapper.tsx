import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useReducedMotionPreference } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function MotionWrapper({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotionPreference();

  useEffect(() => {
    if (!ref.current || reducedMotion) return;

    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: 24 },
        {
          y: 0,
          delay,
          duration: 0.7,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        },
      );
    }, ref);

    // Never leave editorial content offset if ScrollTrigger cannot initialize.
    const fallbackId = window.setTimeout(() => {
      gsap.set(element, { y: 0 });
    }, 1200 + delay * 1000);

    return () => {
      window.clearTimeout(fallbackId);
      ctx.revert();
    };
  }, [delay, reducedMotion]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
