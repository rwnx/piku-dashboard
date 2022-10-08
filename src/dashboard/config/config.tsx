import React, { useEffect, useState } from 'react';
import { QueryStatus, useFetch } from "../../hooks/use-fetch";
import "./config.css";
import { RouteComponentProps } from "@reach/router";

interface ConfigRouteProps extends RouteComponentProps {
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

  const [configs, setConfigs] = useState<AppConfig[]>([]);

  const { data, status } = useFetch<AppConfigs>(`/api/apps/${props.appId}/config`);

  useEffect(() => {
    if (data) {
      setConfigs(data.configs)
    }
  }, [data]);

  const changeConfigValue = (name: string, value: string) => {
    const newConfigs = [...configs];
    const index = newConfigs.findIndex(c => c.name == name);
    newConfigs[index].value = value;
    setConfigs(newConfigs)
  }

  const saveConfig = async () => {
    await fetch(`/api/apps/${props.appId}/config`, {
      method: 'POST',
      body: JSON.stringify({ configs }),
    });

    // TODO: Flash
    alert("Config changed");
  };

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
            configs.map(config => (
              <tr key={config.name}>
                <td><label htmlFor={config.name}>{config.name}</label></td>
                <td><input type="text" name={config.name} id={config.name} value={config.value}
                           onChange={e => changeConfigValue(config.name, e.target.value)}/></td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <hr/>
        <button type="button" onClick={() => saveConfig()}>Save Config</button>

      </section>
    </>
  );
}
