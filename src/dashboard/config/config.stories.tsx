import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from "msw";
import { Config } from "./config";

export default {
  title: "Page/Config",
  component: Config,
} as ComponentMeta<typeof Config>

const Template: ComponentStory<typeof Config> = (args) => <Config {...args}/>

export const Main = Template.bind({});
Main.args = {};

Main.parameters = {
  msw: {
    handlers: [
      rest.get('/api/apps/*/config', (req, res, ctx) => {
        return res(
          ctx.json({
            data: {
              appId: "stomp_bot",
              configs: [
                {
                  name: "TEST",
                  value: "1234",
                },
                {
                  name: "VARIABLE",
                  value: "test",
                },
              ]
            },
          })
        )
      }),
    ]
  },
}
