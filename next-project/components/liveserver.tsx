import { Reveal } from "./animations/Reveal";
import { FaServer } from "react-icons/fa6";

const Liveserver = () => {
	return (
		<div className="text-white flex flex-col items-center">
			<FaServer size={96} />
			<span className="text-white text-3xl font-bold mt-4">
				Live-Server Cooming soon!
			</span>
		</div>
	);
};

export default Liveserver;
