"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

// This file showcases gesture animations in Framer Motion:

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
          className="example-button"
        >
          Click me!
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.85,
            rotate: "-2.5deg",
          }}
          style={{ backgroundColor: "red" }}
          className="example-button"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;

// Two buttons are rendered inside a MotionConfig component.

// The MotionConfig sets a default transition for all animations within it.

// Both buttons use the whileHover and whileTap props to define animations for hover and tap states.

// The first button scales up slightly on hover and scales down with a slight rotation on tap.

// The second button has more pronounced scaling effects and rotates in the opposite direction on tap.

// The second button also has a red background color.
