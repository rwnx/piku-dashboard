import React from 'react';
import { QueryStatus, useFetch } from "../../hooks/use-fetch";
import "./logs.css";
import { RouteComponentProps } from "@reach/router";


interface LogsRouteProps extends RouteComponentProps{
  appId?: string;
}

interface AppLog {
  filename: string;
  lines: string[];
}

interface AppLogs {
  appId: string;
  logs: AppLog[];
}

export const Logs = (props: LogsRouteProps) => {

  const { data, status } = useFetch<AppLogs>(`/api/apps/${props.appId}/logs`);

  if (status !== QueryStatus.Fetched) {
    return <aside>Loading...</aside>;
  }

  return (
    <>
      <section>
        <h2>{data?.appId} Logs</h2>
      </section>

      {data?.logs.map(log => (<>
        <section>
          <h3>{log.filename}</h3>
        </section>

        <section>
          <code className="logs">
            {log.lines.map(line => <div>{line}</div>)}
          </code>
        </section>
      </>))}

    </>
  );
}
