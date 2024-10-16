import Countdown from "@/components/Countdown";
import History from "@/components/History";
import HowToJoin from "@/components/HowToJoin";
import { Reveal } from "@/components/animations/Reveal";
import Discord from "@/components/Discord";
import Liveserver from "@/components/liveserver";

export default function Home() {
	const testEvents = [
		{
			heading: "Discord",
			subHeading: "Betrete den Discord Server für mehr Informationen!",
			direction: "left",
		},
		{
			heading: "Registrieren",
			subHeading: "Nutze den Channel 'Register' um dich anzumelden!",
			direction: "right",
		},
		{
			heading: "Verfolge Infos",
			subHeading: "Behalte den Channel 'server-infos' im Auge!",
			direction: "left",
		},
		{
			heading: "Teilnahme",
			subHeading: "Spiel mit, sobald es los geht!",
			direction: "right",
		},
	];

	return (
		<>
			<div
				className="w-full h-screen flex flex-col items-center gap-36 p-28"
				id="home"
			>
				<Reveal>
					<div id="home p-28 pt-12 ">
						<Countdown />
					</div>
				</Reveal>

				<div
					id="teilnehmen"
					className="p-24 pt-2 flex flex-col items-center bg-neutral-700 rounded-xl 
      shadow-purple-500 shadow-xl shadow-x-2 w-2/3"
				>
					<HowToJoin />
					<History events={testEvents} />
				</div>

				<div
					id="dc"
					className="p-24 pt-2 flex flex-col items-center bg-neutral-700 rounded-xl 
      shadow-blue-700 shadow-xl shadow-x-2 w-2/3"
				>
					<Discord />
				</div>

				<div
					id="liveserver"
					className="pt-2 pb-6 flex flex-col items-center bg-neutral-700 rounded-xl 
                shadow-green-500 shadow-xl shadow-x-2 w-2/3"
				>
					<Reveal>
						<Liveserver />
					</Reveal>
				</div>

				<span>SPACE</span>
			</div>

			<div className="fixed bottom-0 left-0 w-full h-28 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none"></div>
		</>
	);
}
