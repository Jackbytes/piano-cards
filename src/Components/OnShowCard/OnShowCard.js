import OnShowTitle from "./OnShowTitle";
import OnShowInfo from "./OnShowInfo";

const OnShowCard = () => {
  return (
    <div className="w-full px-2 py-2 bg-white border-2 border-purple-100 shadow-lg rounded-xl">
      <OnShowTitle />
      <OnShowInfo />
    </div>
  );
};

export default OnShowCard;
