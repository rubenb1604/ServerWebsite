import { div } from "framer-motion/client";
import { title } from "process";

interface Props {
	img: string;
	title: string;
	sub: string;
	link: string;
}

const Grindmad: React.FC<Props> = ({ img, title, sub, link }) => {
	return (
		<div className="flex flex-col w-1/3 bg-neutral-700 p-2 rounded-md border-purple-700 border-4 justify-between">
			<div className="flex">
				<img src={img} className="w-fit h-24"></img>
				<div className="p-2 flex flex-col gap-2">
					<span className="text-white font-bold text-2xl">{title}</span>
					<span className="text-white font-bold text-md">{sub}</span>
				</div>
			</div>
			<div className="w-full flex justify-end">
				<a
					className="text-white bg-green-600 w-fit p-1 pr-3 pl-3 rounded-md"
					href={link}
				>
					Download
				</a>
			</div>
		</div>
	);
};

export default Grindmad;
