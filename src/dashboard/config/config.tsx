import React from 'react';
import { QueryStatus, useFetch } from "../../hooks/use-fetch";
import "./config.css";
import { RouteComponentProps } from "@reach/router";

interface ConfigRouteProps extends RouteComponentProps{
  appId?: string;
}

interface AppConfig {
  name: string;
  value: string;
}

interface AppConfigs {
  appId: string;
  configs: AppConfig[];
}

export const Config = (props: ConfigRouteProps) => {

  const { data, status } = useFetch<AppConfigs>(`/api/apps/${props.appId}/config`);

  if (status !== QueryStatus.Fetched) {
    return <aside>Loading...</aside>;
  }

  return (
    <>
      <section>
        <h2>{data?.appId} Config</h2>
      </section>

      <section>

        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
          </thead>
          <tbody>
          {
            data?.configs.map(config => (
              <tr key={config.name}>
                <td><label htmlFor={config.name}>{config.name}</label></td>
                <td><input type="text" name={config.name} id={config.name} value={config.value}/></td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <hr/>
        <button type="button">Save Config</button>

      </section>
    </>
  );
}
