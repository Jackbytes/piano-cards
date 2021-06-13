import React from "react";
import BrutalButton from "../Components/Misc/BrutalButton";
import "../index.css";

export default {
  title: "Small Components / Buttons",
  component: BrutalButton,
};

const Template = (args) => {
  return <BrutalButton {...args}>{args.buttonContent}</BrutalButton>;
};

export const BasicBrutalButton = Template.bind({});

BasicBrutalButton.args = {
  color: "indigo",
  buttonContent: "Hello",
};
