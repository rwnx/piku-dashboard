import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Host } from "./host";
import { rest } from "msw";

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

Main.parameters = {
  msw: {
    handlers: [
      rest.get('/api/host-info', (req, res, ctx) => {
        return res(
          ctx.json({
            data: {
              hostname: "raspberrypi",
              uptime: "22:10:36 up 6:41, 3 users, load average: 0.33, 0.52, 0.59",
            },
          })
        )
      }),
    ]
  },
}
