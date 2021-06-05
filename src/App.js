import "./Components/OnShowCard/OnShowCard";
import OnShowCard from "./Components/OnShowCard/OnShowCard";
let testDeck = require("./test_deck.json");

function App() {
  return (
    <div className="flex flex-col items-center w-1/3 mx-auto h-1/3">
      <OnShowCard deckData={testDeck} />
    </div>
  );
}

export default App;
