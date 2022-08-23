import React from "react";
import { Btn } from "../../components/Btn";

export default {
  title: "Button",
  component: Btn,
};
const Template = (args) => <Btn {...args}></Btn>;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button",
};
export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: "Default",
  size: "large",
};
