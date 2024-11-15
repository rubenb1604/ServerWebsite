import Header from "@/components/header2";
import Quest from "@/components/quest";
import Quest2 from "@/components/quest2";

const quests = () => {
	return (
		<div className="mt-32">
			<Header />
			<Quest2 />
			<Quest />
		</div>
	);
};
export default quests;
