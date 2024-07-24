"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";

// This file demonstrates the use of animation controls in Framer Motion.

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    // Do some animation stuff
    controls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;

// The component uses the useAnimationControls hook from Framer Motion to create a control object.

// A button is rendered that, when clicked, triggers the handleClick function.

// The handleClick function calls controls.start("flip"), which starts the "flip" animation.

// A motion.div is rendered with a black background and specific dimensions.

// The motion.div has variants defined, which specify different states of the animation ("initial" and "flip").

// The animate prop of the motion.div is set to the controls object, allowing the animation to be controlled programmatically.

// When the button is clicked, the black square will rotate 360 degrees.
