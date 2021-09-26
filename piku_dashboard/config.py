import os
import logging

logger = logging.getLogger(__name__)

SECRET_KEY = os.environ["SECRET_KEY"]

USERNAME = os.environ.get("USERNAME", None)
PASSWORD = os.environ.get("PASSWORD", None)