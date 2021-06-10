import DeckInfo from "./DeckInfo";
import CardInfo from "./CardInfo/CardInfo";

const DeckPracticeView = (props) => {
  return (
    <div className="grid w-full max-w-lg grid-rows-3 h-1/6 up-and-fade">
      <div className="row-start-1 row-end-2 bg-white border-b-2 border-black shadow-2xl rounded-t-md">
        <DeckInfo mainTitle={props.deckName} subTitle={props.deckType} />
      </div>
      <div className="w-full row-start-2 row-end-4 bg-pink-100 shadow-xl rounded-b-xl">
        <CardInfo />
      </div>
    </div>
  );
};

export default DeckPracticeView;
