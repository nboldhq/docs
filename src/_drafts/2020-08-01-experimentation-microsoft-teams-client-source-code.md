---
permalink: /_drafts/experimentation-microsoft-teams-client-source-code
title: Experimentations using the Microsoft Teams client source code
description: XXX
image: https://developers.salestim.com/img/blog/XXX.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-07-18
tags:
  - teams
  - client
  - code
  - architecture
  - technologies
---

# Experimentations using the Microsoft Teams client source code
<BlogHeadline />

https://www.joseespitia.com/2018/08/30/how-to-disable-microsoft-teams-from-running-at-logon/

Example: Update locales

Build

sudo rm ./usr/share/teams-insiders/resources/app.asar
sudo asar pack ./usr/share/teams-insiders/resources/src/ ./usr/share/teams-insiders/resources/app.asar --unpack *.node
sudo cp ./usr/share/teams-insiders/resources/app.asar /usr/share/teams-insiders/resources

Installed in 
/usr/share/teams-insiders/

sudo cp ./usr/share/teams-insiders/resources/app.asar /usr/share/teams-insiders/resources

fix build
cp -r ../app.asar.unpacked/node_modules/* ./node_modules/


Electron version
From native modules build error





Launch script

#!/bin/sh

SCRIPT=$(readlink -f "$0")
USR_DIRECTORY=$(readlink -f $(dirname $SCRIPT)/..)

TEAMS_PATH="$USR_DIRECTORY/share/teams-insiders/teams-insiders"
TEAMS_LOGS="$HOME/.config/Microsoft/Microsoft Teams - Insiders/logs"

mkdir -p "$TEAMS_LOGS"

nohup "$TEAMS_PATH" "$@" > "$TEAMS_LOGS/teams-insiders-startup.log" 2>&1 &




config options:
enableUseNativeTitlebarButtons


<Comments />
