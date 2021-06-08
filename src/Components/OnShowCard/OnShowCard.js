import OnShowTitle from "./OnShowTitle";
import OnShowInfo from "./OnShowInfo";

const OnShowCard = (props) => {
  return (
    <div className="grid w-full grid-cols-3 shadow-2xl h-1/6">
      <div className="col-start-1 col-end-2 bg-white border-r-2 border-black rounded-l-lg">
        <OnShowTitle
          mainTitle={props.deckData.deckName}
          subTitle={props.deckData.deckType}
        />
      </div>
      <div className="w-full col-start-2 col-end-4 bg-pink-100 rounded-r-2xl">
        <OnShowInfo />
      </div>
    </div>
  );
};

export default OnShowCard;
