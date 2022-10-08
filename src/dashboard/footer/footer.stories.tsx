import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from "./footer";

export default {
  title: "Structure/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args}/>

export const Main = Template.bind({});
Main.args = {
};

