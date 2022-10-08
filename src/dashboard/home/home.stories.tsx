import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from "msw";
import { Home } from "./home";

export default {
  title: "Page/Home",
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args}/>

export const Main = Template.bind({});
Main.args = {};
Main.parameters = {
  msw: {
    handlers: [
      rest.get('/api/apps', (req, res, ctx) => {
        return res(
          ctx.json({
            data: [
              {
                appId: "discord_bot",
                active: true,
                sha: "5h4ufy",
                self: false,
              },
              {
                appId: "piku_dashboard",
                active: true,
                sha: "3u4hfd",
                self: true,
              },
              {
                appId: "sample_app",
                active: false,
                sha: "9s6h8c",
                self: false,
              },
            ],
          })
        )
      }),
    ]
  },
}
