import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Host } from "./host";

export default {
  title: "Host",
  component: Host,
  decorators: [
    (Story) => (
      <main>
        <section>
          <Story/>
        </section>
      </main>
    ),
  ],
} as ComponentMeta<typeof Host>

const Template: ComponentStory<typeof Host> = (args) => <Host {...args}/>

export const Main = Template.bind({});
Main.args = {};
