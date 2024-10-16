"use client";

import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Header = () => {
	const [home, setHome] = useState(true);
	const [register, setRegister] = useState(false);
	const [dc, setdc] = useState(false);
	const [data, setdata] = useState(false);

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY < 360 && window.scrollY >= 0) {
				setHome(true);
				setRegister(false);
				setdc(false);
				setdata(false);
			} else if (window.scrollY < 1200 && window.scrollY >= 360) {
				setHome(false);
				setRegister(true);
				setdc(false);
				setdata(false);
			} else if (window.scrollY < 1500 && window.scrollY >= 1200) {
				setHome(false);
				setRegister(false);
				setdc(true);
				setdata(false);
			} else if (window.scrollY < 10000 && window.scrollY >= 1500) {
				setHome(false);
				setRegister(false);
				setdc(false);
				setdata(true);
			}
		};

		window.addEventListener("scroll", changeColor);

		return () => {
			window.removeEventListener("scroll", changeColor);
		};
	}, []);

	return (
		<>
			<div className="fixed top-0 left-0 right-0 h-16 w-full bg-neutral-600 shadow-2xl flex items-center justify-between z-50">
				<div className="flex items-center justify-between gap-2">
					<img src="/img/servericon.png" className="h-full" alt="Server Icon" />
					<h1 className="text-6xl font-extrabold font-sans text-white">SMP3</h1>
				</div>
				<div className="flex items-center justify-between gap-12 h-full">
					<div className="flex items-center justify-between gap-6 h-full">
						{home && (
							<Link
								className="text-purple-600 text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="home"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							>
								Home
							</Link>
						)}
						{!home && (
							<Link
								className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="home"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
							>
								Home
							</Link>
						)}
						{register && (
							<Link
								className="text-purple-600 text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="teilnehmen"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
							>
								Teilnehmen
							</Link>
						)}
						{!register && (
							<Link
								className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="teilnehmen"
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								Teilnehmen
							</Link>
						)}
						{dc && (
							<Link
								className="text-purple-600 text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="dc"
								spy={true}
								smooth={true}
								offset={-350}
								duration={500}
							>
								Discord
							</Link>
						)}
						{!dc && (
							<Link
								className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="dc"
								spy={true}
								smooth={true}
								offset={-350}
								duration={500}
							>
								Discord
							</Link>
						)}
						{data && (
							<Link
								className="text-purple-600 text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="liveserver"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
							>
								Live-Server
							</Link>
						)}
						{!data && (
							<Link
								className="text-2xl font-semibold font-sans cursor-pointer sm:hidden md:block"
								to="liveserver"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
							>
								Live-Server
							</Link>
						)}
					</div>
					<div className="h-full">
						<IoMenu className="h-full w-12 cursor-pointer text-white" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
