import React from 'react';
import icon from "/src/assets/dns_black_24dp.svg";
import { QueryStatus, useFetch } from "../../hooks/use-fetch";

interface HostProps {
}

interface HostInfo {
  hostname: string;
  uptime: string;
}

export const Host = ({}: HostProps) => {
  const { data, status } = useFetch<HostInfo>("/api/host-info");

  if (status !== QueryStatus.Fetched) {
    return <aside>Loading...</aside>;
  }

  return (
    <aside>
      <h2>
        <img className="icon" src={icon} alt="Server Icon"/>Host
      </h2>
      <h3>Hostname</h3>
      <code>{data?.hostname}</code>
      <h3>Uptime</h3>
      <code>{data?.uptime}</code>
    </aside>
  )
}
