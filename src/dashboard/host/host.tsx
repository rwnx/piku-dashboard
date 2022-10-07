import React from 'react';
import icon from "/src/assets/dns_black_24dp.svg";

interface HostProps {
}

export const Host = ({}: HostProps) => {
  // TODO: API GET
  const host_info = {
    hostname: "raspberrypi",
    uptime: "22:10:36 up 6:41, 3 users, load average: 0.33, 0.52, 0.59",
  }
  return (
    <aside>
      <h2>
        <img className="icon" src={icon} alt="Server Icon"/>Host
      </h2>
      <h3>Hostname</h3>
      <code>{host_info.hostname}</code>
      <h3>Uptime</h3>
      <code>{host_info.uptime}</code>
    </aside>
  )
}
