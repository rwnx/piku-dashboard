import React from 'react';
import "./piku-app.css";
import { Link } from "@reach/router";


export interface PikuAppProps {
  appId: string,
  active: boolean,
  sha: string,
  self: boolean,
}

const post = (url: string) => {
  // TODO: AUTH???
  return fetch(url, {method: 'POST'})
}

const restartApp = async (appId: string) => {
  await post(`/api/apps/${appId}/restart`);

  // TODO: how to FLASH
  alert(`${appId} restarted`);
}
const stopApp = async (appId: string) => {
  await post(`/api/apps/${appId}/stop`)

  // TODO: how to FLASH
  alert(`${appId} stopped`);

}
const startApp = async (appId: string) => {
  await post(`/api/apps/${appId}/start`)

  // TODO: how to FLASH
  alert(`${appId} started`);

}
const destroyApp = async (appId: string) => {
  if (!window.confirm(`Are you sure you want to destroy ${appId}? This CANNOT be undone.`)) {
    return;
  }
  await post(`/api/apps/${appId}/destroy`)

  // TODO: how to FLASH
  alert(`${appId} destroyed`);
}

export const PikuApp = ({ appId, active, sha, self }: PikuAppProps) => {


  return (
    <aside className="piku-app">
      <h2>{appId} <sup className={`applabel-${active ? 'active' : 'inactive'}`}>
        {active ? 'Active' : 'Inactive'}</sup>
      </h2>
      <ul className="app-meta">
        <li>{sha}</li>
      </ul>
      <ul>
        <li>
          <Link to={`apps/${appId}/logs`}>📖 View Logs</Link>
        </li>
        <li>
          <Link to={`apps/${appId}/config`}>🛠 Manage Config</Link>
        </li>
      </ul>

      <button className="app-action" disabled={!active} type="button" onClick={() => restartApp(appId)}>🔄 Restart</button>
      {!self && active &&
        <button className="app-action" type="button" onClick={() => stopApp(appId)}>✋ Stop</button>
      }
      {!self && !active &&
        <button className="app-action" type="button" onClick={() => startApp(appId)}>🏁 Start</button>
      }
      {!self &&
        <button className="app-action" type="button" onClick={() => destroyApp(appId)}>☠️ Destroy</button>
      }
    </aside>
  )
}
