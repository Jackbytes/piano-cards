import OnShowTitle from "./OnShowTitle";
import OnShowInfo from "./OnShowInfo";

const OnShowCard = (props) => {
  return (
    <div className="w-full px-2 py-2 bg-white border-2 border-purple-100 shadow-lg rounded-xl">
      <OnShowTitle
        mainTitle={props.deckData.deckName}
        subTitle={props.deckData.deckType}
      />
      <OnShowInfo />
    </div>
  );
};

export default OnShowCard;
