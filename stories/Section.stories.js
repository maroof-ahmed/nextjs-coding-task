import React from "react";
import { Section } from "../components";

export default {
	title: 'Components/Section',
	component: Section,
	argTypes: {},
};

function Template(args) {
  return <Section {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
	imageUrl: '/image.png',
	children: 'Future-proof your business. WiFi 6E is here.',
	subheading:
		'Offer your customers the fastest performance possible with Plume. They’re ready.',
	buttonText: 'Learn more about WiFi 6E',
};

export const Secondary = Template.bind({});
Secondary.args = {
  imageUrl: '/moon-image.png',
	children: 'The dark night is upon us',
	subheading: 'Only the bravest will survive these dark times. The apocalypse is near. We will help you survive.',
	buttonText: 'I want to survive',
};

export const Custom = Template.bind({});
Custom.args = {
	imageUrl: '/T-shirt.png',
	children: 'The Perfect Title To Be Placed Without The Subheading',
	buttonText: 'Click here',
};