import { IconType } from "react-icons";

interface props {
  title: string;
  icon: IconType;
}

const HistoryCard: React.FC<props> = ({ title, icon: Icon }) => {
  return (
    <div className="bg-neutral-600 p-3 rounded-md text-white font-sans font-bold flex items-center">
      <Icon className="mr-2" size={36} /> {/* Hier wird das Icon eingefügt */}
      <span className="text-2xl">{title}</span>
    </div>
  );
};

export default HistoryCard;
