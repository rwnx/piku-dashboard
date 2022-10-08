import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { rest } from "msw";
import { Logs } from "./logs";

export default {
  title: "Page/Logs",
  component: Logs,
} as ComponentMeta<typeof Logs>

const Template: ComponentStory<typeof Logs> = (args) => <Logs {...args}/>

export const Main = Template.bind({});
Main.args = {};

Main.parameters = {
  msw: {
    handlers: [
      rest.get('/api/apps/*/logs', (req, res, ctx) => {
        return res(
          ctx.json({
            data: {
              appId: "stomp_bot",
              logs: [
                {
                  filename: "hello.1.log",
                  lines: [
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                    `[uwsgi-daemons] throttling "node src/test.js" for 300 seconds`,
                    `[uwsgi-daemons] respawning "node src/test.js" (uid: 1001 gid: 33)`,
                  ],
                }
              ]
            },
          })
        )
      }),
    ]
  },
}
