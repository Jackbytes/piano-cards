import "../../Misc/BrutalButton";
import BrutalButton from "../../Misc/BrutalButton";

const EaseButtons = () => {
  return (
    <div className="flex flex-col md:flex-row place-content-evenly left-and-fade">
      <BrutalButton color="green">EASY</BrutalButton>
      <BrutalButton color="indigo">OK</BrutalButton>
      <BrutalButton color="red">HARD</BrutalButton>
    </div>
  );
};

export default EaseButtons;
