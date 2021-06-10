import React from "react";
import OnShowCard from "../Components/OnShowCard/OnShowCard";
import "../index.css";

export default {
  title: "Revision Mode / Current Card",
  component: OnShowCard,
};

const Template = (args) => {
  return <OnShowCard {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  deckName: "Beethoven Moonlight Sonata",
  deckType: "Piece Practice",
};
