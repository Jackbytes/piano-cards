import React from "react";
import DeckPracticeView from "../Components/DeckPracticeView/DeckPracticeView";
import "../index.css";

export default {
  title: "Revision Mode / Card",
  component: DeckPracticeView,
};

const Template = (args) => {
  return <DeckPracticeView {...args} />;
};

export const BasicCardInPractice = Template.bind({});

BasicCardInPractice.args = {
  deckName: "Beethoven Moonlight Sonata",
  deckType: "Piece Practice",
};
