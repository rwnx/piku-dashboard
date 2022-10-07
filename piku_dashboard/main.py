import logging
import sys
import os
from flask import Flask, request, render_template, flash, redirect, url_for
from functools import wraps
import requests

from piku_dashboard.host_client import info
from piku_dashboard import piku_client
from piku_dashboard.piku_client import PikuApp

logging.basicConfig(stream=sys.stderr, level=logging.DEBUG)

logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config.from_pyfile("config.py")

# piku app directories look like: /home/piku/.piku/apps/piku_dashboard
logger.info(f"Current working directory: {os.getcwd()}")
self_app = os.path.basename(os.path.abspath("."))

logger.info(f"Detected self id as: {self_app}")

def get_github_sha():
    try:
        response = requests.get("https://api.github.com/repos/rwnx/piku-dashboard/commits")
        history = response.json()

        sha = history[0]['sha'][:6]
        return sha
    except:
        return "invalid_sha"

def is_self(appid):
    return appid == self_app

def check_auth(username, password):
    return username == app.config["USERNAME"] and password == app.config["PASSWORD"]

def login_required(f):
    @wraps(f)
    def wrapped_view(**kwargs):
        auth = request.authorization
        if not (auth and check_auth(auth.username, auth.password)):
            return ('Unauthorized', 401, {
                'WWW-Authenticate': 'Basic realm="Login Required"'
            })

        return f(**kwargs)

    return wrapped_view


@app.route("/")
@login_required
def home():
    host_info = info()
    try:
        apps = piku_client.all_apps()
    except FileNotFoundError as e:
        flash(f"Could Not fetch app list: {e}", "error")
        apps = []

    return render_template("home.html", apps=apps, host_info=host_info, self_app=self_app, github_sha=get_github_sha())


@app.route("/apps/<appid>/config", methods=["GET"])
@login_required
def app_config(appid):
    app_config_data = piku_client.config(appid)
    return render_template("app_config.html", appid=appid, app_config=app_config_data)


@app.route("/apps/<appid>/config", methods=["POST"])
@login_required
def replace_app_config(appid):
    piku_client.set_config(appid, request.form)
    flash(f"🛠 Updated Configuration for {appid}", "success")
    return redirect(url_for("app_config", appid=appid))


@app.route("/apps/<appid>/logs", methods=["GET"])
@login_required
def app_logs(appid):
    logcontent = piku_client.logs(appid)
    return render_template("app_logs.html", appid=appid, logcontent=logcontent)


@app.route("/apps/<appid>/scaling", methods=["GET"])
@login_required
def app_scaling(appid):
    return render_template("app_scaling.html")


@app.route("/apps/<appid>/restart", methods=["POST"])
@login_required
def restart_app(appid):
    piku_client.restart_app(appid)
    flash(f"🔄 Restarted {appid}", "success")
    return redirect(url_for("home"))


@app.route("/apps/<appid>/stop", methods=["POST"])
@login_required
def stop_app(appid):
    if not is_self(appid):
        piku_client.stop_app(appid)
        flash(f"🛑 Stopped {appid}", "success")
    else:
        flash("You can't perform that action on the dashboard application", "error")

    return redirect(url_for("home"))


@app.route("/apps/<appid>/deploy", methods=["POST"])
@login_required
def deploy_app(appid):
    piku_client.deploy_app(appid)
    flash(f"⛴ Deployed {appid}", "success")
    return redirect(url_for("home"))


@app.route("/apps/<appid>/destroy", methods=["POST"])
@login_required
def destroy_app(appid):
    if not is_self(appid):
        piku_client.destroy_app(appid)
        flash(f"☠️ Destroyed {appid}", "success")
    else:
        flash("You can't perform that action on the dashboard application", "error")

    return redirect(url_for("home"))
