import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PikuApp } from "./piku-app";

export default {
  title: "Component/PikuApp",
  component: PikuApp,
  decorators: [
    (Story) => (
      <main>
        <section>
          <Story/>
        </section>
      </main>
    ),
  ],
} as ComponentMeta<typeof PikuApp>

const Template: ComponentStory<typeof PikuApp> = (args) => <PikuApp {...args}/>

export const Self = Template.bind({});
Self.args = {
  appId: 'piku_dashboard',
  active: true,
  sha: 'ff113f3',
  self: true,
};

export const Active = Template.bind({});
Active.args = {
  appId: 'stomp_bot',
  active: true,
  sha: '9cb368b',
  self: false,
};

export const Inactive = Template.bind({});
Inactive.args = {
  appId: 'deffective_app',
  active: false,
  sha: '9cb368a',
  self: false,
};
