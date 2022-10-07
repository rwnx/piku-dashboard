import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flash } from "./flash";

export default {
  title: "Flash",
  component: Flash,
} as ComponentMeta<typeof Flash>

const Template: ComponentStory<typeof Flash> = (args) => <Flash {...args}/>

export const Info = Template.bind({});
Info.args = {
  message: "Stuff happened",
};
export const Success = Template.bind({});
Success.args = {
  variant: "success",
  message: "🛠 Updated Configuration for App",
};
export const Error = Template.bind({});
Error.args = {
  variant: "error",
  message: "Could Not fetch app list",
};

