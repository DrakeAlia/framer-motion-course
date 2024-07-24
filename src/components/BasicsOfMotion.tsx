"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// This file demonstrates basic motion animations and the use of AnimatePresence:

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <motion.div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BasicsOfMotion;

// It uses a state variable isVisible to control the visibility of an animated element.

// A button toggles the visibility state.

// The AnimatePresence component is used to animate the exit of the element when it's removed from the DOM.

// The animated div has complex animations defined for its initial appearance, continuous animation, and exit.

// The animation includes rotation, scaling, and a complex y-axis movement.
