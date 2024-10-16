import { FaDiscord } from "react-icons/fa";
import { Reveal } from "./animations/Reveal";
import { Rotation } from "./animations/Rotation";

const Discord = () => {
	return (
		<div className="text-white flex flex-col items-center">
			<Rotation>
				<FaDiscord size={96} />
			</Rotation>

			<span className="text-white text-3xl font-bold">
				Join Discord Server now!
			</span>
			<div className=" mt-10">
				<Reveal>
					<a
						className="text-2xl bg-blue-600 p-3 px-24 rounded-xl"
						href="https://discord.gg/md43d9Bbb6"
					>
						Einladung annehmen
					</a>
				</Reveal>
			</div>
		</div>
	);
};

export default Discord;
