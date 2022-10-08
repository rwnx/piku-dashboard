import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from "./header";

export default {
  title: "Structure/Header",
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Main = Template.bind({});
Main.args = {
};

