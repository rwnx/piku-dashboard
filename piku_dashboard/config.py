import os
import logging

logger = logging.getLogger(__name__)

SECRET_KEY = os.environ["SECRET_KEY"]

USERNAME = os.environ.get("USERNAME", None)
PASSWORD = os.environ.get("PASSWORD", None)

# The dashboard's own application name in piku. this setting disallows shutdowns and destroy requests to the self app
SELF_APP_NAME = os.environ.get("SELF_APP_NAME", "piku_dashboard")