import { Flash } from "./dashboard/flash/flash";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import App from "./App";
import { Main as HomeStoriesMain } from "./dashboard/home/home.stories";
import { Main as LogsStoriesMain } from "./dashboard/logs/logs.stories";
import { Main as ConfigsStoriesMain } from "./dashboard/config/config.stories";
import { Main as HostStoriesMain } from "./dashboard/host/host.stories";
import PikuAppStories from "./dashboard/piku-app/piku-app.stories";

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App />

export const Main = Template.bind({});
Main.parameters = {
  msw: {
    handlers: [
      ...HomeStoriesMain.parameters?.msw.handlers,
      ...LogsStoriesMain.parameters?.msw.handlers,
      ...ConfigsStoriesMain.parameters?.msw.handlers,
      ...HostStoriesMain.parameters?.msw.handlers,
      ...PikuAppStories.parameters?.msw.handlers,
    ]
  }
}
