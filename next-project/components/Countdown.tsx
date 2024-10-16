"use client";

import { useEffect, useState } from "react";
import "./fonts.css";

const calculateTimeDifference = (targetTime: Date): string => {
	const currentTime = new Date();
	const differenceInMilliseconds = targetTime.getTime() - currentTime.getTime();

	if (differenceInMilliseconds <= 0) {
		return "00:00:00:00";
	}

	const seconds = Math.floor((differenceInMilliseconds / 1000) % 60);
	const minutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);
	const hours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
	const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

	const formattedDays = String(days).padStart(2, "0");
	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(seconds).padStart(2, "0");

	return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const Countdown = () => {
	const targetTime = new Date("2024-11-02T00:00:00");

	// Setze den Anfangszustand auf "00:00:00:00"
	const [timeDifference, setTimeDifference] = useState<string>("00:00:00:00");

	useEffect(() => {
		// Initiale Berechnung, um die Zeit beim ersten Laden zu setzen
		setTimeDifference(calculateTimeDifference(targetTime));

		const interval = setInterval(() => {
			const diff = calculateTimeDifference(targetTime);
			setTimeDifference(diff);
		}, 1000);

		return () => clearInterval(interval);
	}, [targetTime]);

	return (
		<div className="text-white w-full flex flex-col items-center transition duration-300 ease-in-out transform hover:-translate-y-1 p-4 rounded-xl">
			<span className="" id="cf1">
				{timeDifference}
			</span>
			<div className="loader"></div>
		</div>
	);
};

export default Countdown;
