import React from 'react';
import { QueryStatus, useFetch } from "../../hooks/use-fetch";
import { Host } from "../host";
import { PikuApp } from "../piku-app";
import { RouteComponentProps } from "@reach/router";


interface AppInfo {
  appId: string,
  active: boolean,
  sha: string,
  self: boolean,
}

export const Home = (props: RouteComponentProps) => {
  const { data: apps, status } = useFetch<AppInfo[]>("/api/apps");

  if (status !== QueryStatus.Fetched) {
    return <aside>Loading...</aside>;
  }

  return (
    <section>
      <Host/>
      {apps?.map(app => (
        <PikuApp key={app.appId} {...app}/>
      ))}
    </section>
  );
}
