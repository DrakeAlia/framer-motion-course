"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// This file shows how to create animations based on element visibility:

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;

// It uses the useInView hook to detect when an element is in the viewport.

// There are three main sections:
// An empty div to push content down

// A motion.div that fades in when it comes into view

// A div that changes color from red to blue when it comes into view
