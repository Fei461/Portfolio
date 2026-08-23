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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: 0.7,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, reducedMotion]);

  return (
    <div ref={ref} className={cn(!reducedMotion && "opacity-0", className)}>
      {children}
    </div>
  );
}
