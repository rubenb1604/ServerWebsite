// components/animations/RevealRotate.tsx

"use client"; // Client-Komponente

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
	children: JSX.Element;
	width?: string; // optionale Breite
	duration?: number; // optionale Dauer für die Animation
	delay?: number; // optionale Verzögerung für die Animation
}

export const Rotation: React.FC<Props> = ({
	children,
	width = "fit-content",
	duration = 0.5,
	delay = 0.4,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "0px" });
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	const variants = {
		hidden: { rotate: 0 },
		visible: { rotate: 360 },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			transition={{ duration, delay }} // Dauer und Verzögerung
			style={{ width }}
		>
			{children}
		</motion.div>
	);
};
