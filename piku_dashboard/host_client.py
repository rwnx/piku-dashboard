import socket
from dataclasses import dataclass
from subprocess import run, PIPE


@dataclass
class HostInfo:
    uptime: str
    hostname: str


def info():
    uptime_cmd = run(["uptime"], stdout=PIPE)
    return HostInfo(
        uptime=uptime_cmd.stdout.decode().strip(), hostname=socket.gethostname()
    )
