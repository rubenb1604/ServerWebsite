// components/animations/Reveal.tsx

"use client"; // Client-Komponente

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element; // Kinder als JSX.Element
  width?: string; // optionale Breite
  duration?: number; // optionale Dauer für die Animation
}

export const Reveal: React.FC<Props> = ({ children, width = "fit-content", duration = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" }); // Erkennen der Sichtbarkeit
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Animation starten, wenn im Blickfeld
    } else {
      controls.start("hidden"); // Animation zurücksetzen, wenn nicht sichtbar
    }
  }, [controls, inView]);

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <motion.div
      ref={ref} // Den ref hier setzen
      initial="hidden"
      animate={controls} // Animation basierend auf den Steuerungen
      variants={variants}
      transition={{ duration }} // Dauer der Animation
      style={{ width }} // Breite setzen
    >
      {children}
    </motion.div>
  );
};
