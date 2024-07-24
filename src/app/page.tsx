import BasicsOfMotion from "@/components/BasicsOfMotion";
import AnimationControls from "@/components/AnimationControls";
import Gestures from "@/components/Gestures";
import ScrollAnimations from "@/components/ScrollAnimation";
import ViewBasedAnimations from "@/components/ViewBaseAnimaions";

// Test different framer motion components and animations
export default function Home() {
  return (
    <div>
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollAnimations />
    </div>
  );
}

// General observations:

// All components use the "use client" directive, indicating they're client-side rendered in Next.js.

// Framer Motion is heavily utilized for animations.

// The code uses React hooks like useState and useEffect.

// Tailwind classes are used in some components (e.g., "example-button" class).

// The code demonstrates various Framer Motion concepts: basic animations, gesture animations, scroll-based animations, visibility-based animations, and programmatic animation control.
