import DeckInfo from "./DeckInfo";
import CardInfo from "./CardInfo/CardInfo";

const DeckPracticeView = (props) => {
  return (
    <div className="grid w-full max-w-lg grid-rows-3 border-2 border-pink-300 h-1/6 up-and-fade box-shadow-black">
      <div className="row-start-1 row-end-2 bg-white border-b-4 border-pink-300">
        <DeckInfo mainTitle={props.deckName} subTitle={props.deckType} />
      </div>
      <div className="w-full row-start-2 row-end-4 bg-pink-100">
        <CardInfo />
      </div>
    </div>
  );
};

export default DeckPracticeView;
