import React from "react";
import { Button } from "../components";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

function Template(args) {
  return <Button {...args} />
}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Contact me",
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "My work",
};
export const Custom = Template.bind({});
Custom.args = {
  custom: true,
	children: 'My custom',
};