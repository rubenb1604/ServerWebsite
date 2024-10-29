"use client";

import { IoMenu } from "react-icons/io5";
const Header = () => {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 h-16 w-full bg-neutral-600 shadow-2xl flex items-center justify-between z-50">
				<div className="flex items-center justify-between gap-2">
					<img src="/img/servericon.png" className="h-full" alt="Server Icon" />
					<h1 className="text-6xl font-extrabold font-sans text-white">SMP3</h1>
				</div>
				<div className="flex items-center justify-between gap-12 h-full">
					<div className="flex items-center justify-between gap-6 h-full"></div>
					<div className="h-full">
						<IoMenu className="h-full w-12 cursor-pointer text-white" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
