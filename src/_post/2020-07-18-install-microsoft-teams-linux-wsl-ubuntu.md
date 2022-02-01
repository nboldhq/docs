---
permalink: /blog/install-microsoft-teams-linux-wsl-ubuntu
title: Install Microsoft Teams for Linux using Ubuntu on WSL2
description: Learn how to install Microsoft Teams for Linux using an Ubuntu WSL2 distro.
image: https://developers.salestim.com/img/blog/teams-linux-windows.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-07-18
tags:
  - teams
  - linux
  - wsl
  - ubuntu
---

# Install Microsoft Teams for Linux using Ubuntu on WSL2
<BlogHeadline />

## Why would-you do that?
Well, first, just because it's fun!  
Second, it's a nice technical challenge that may lead you to learn some new stuff, and you may be interested in testing Microsoft Teams for Linux.  
Third, of course, you could install a full-blown Linux VM using Hyper-V or VirtualBox, but as you probably already have WSL installed, it makes sense to reuse this resource and keep your CPU/RAM consumption low.

## Prerequisites
For this tutorial, I'll assume your configuration matches the following requirements (even if you could probably follow a similar procedure in a different configuration, with WSL v1 for instance):
- [Windows 10 v2004](https://docs.microsoft.com/en-us/windows/whats-new/whats-new-windows-10-version-2004)
- WSL 2 with an Ubuntu distro (18.04 TLS or 20.04 LTS)

If you need to upgrade your config to WSL 2, just follow [this tutorial](https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel)

## Setup WSL 2 to support GUI apps
To run GUI apps from WSL, we'll use an X server on windows that will act as a remote display for your linux distro. To do so, you'll have to update your `DISPLAY` environment variable in WSL with your IP using this command:
```sh
Set DISPLAY
```
But as it may change frequently, here is a script that you may include in your `.bashrc` config file that will update it automatically during your session initialization.
```sh
# Open your .bashrc config file
sudo nano  ~/.bashrc
```
Add the following to your ~/.bashrc:
```sh
# Set the DISPLAY environment variable dynamically
export DISPLAY=$(awk '/nameserver / {print $2; exit}' /etc/resolv.conf 2>/dev/null):0
export LIBGL_ALWAYS_INDIRECT=1
```

As WSL is by default command-line only, it doesn't includes all the necessary required packages to execute GUI apps. Depending on the app, you may need some other packages, but as far as I know, for Microsoft Teams, you'll only need `d-bus`, as many Linux GUI apps use the D-Bus for inter-process communication (IPC).
Install it using:
```sh
# Install d-bus
sudo apt install dbus-x11
```

## Install an X server on Windows
You have multiple options on the market, but from my experience, the best choice so far is VcxSrv that you can [download here](https://sourceforge.net/projects/vcxsrv/files/latest/download).

Once installed, create a new configuration, choose the "Multiple windows" option and `-1` as a display number (automatic detection):

![](/img/blog/vcxsrv-1.png)

Then "Start no client":

![](/img/blog/vcxsrv-2.png)

Enable "Disable access control":

![](/img/blog/vcxsrv-3.png)

Refer to [this thread](https://stackoverflow.com/questions/61110603/how-to-set-up-working-x11-forwarding-on-wsl2) to learn why you need to disable access control.

Save your configuration and launch the VcxSrv server.

## Use your first GUI app
You should now be ready to use your first GUI app. As we'll have to download the Microsoft Teams for Linux Ubuntu package, and that the download page only shows the download link for Linux when using a linux box, let's install and start firefox:
```sh
sudo apt install firefox
firefox
```
Firefox should be opened as a new window in your host Windows. Now open the Microsoft Teams download page [https://aka.ms/getteams](https://aka.ms/getteams.)

![](/img/blog/firefox-teams.png)

## Download Microsoft Teams "Insiders"

Download the `.deb` package in your `downloads` folder, and install it:
```sh
# Open your downloads folder
cd ~/Downloads
# Install teams-insiders
sudo apt install ./teams-insiders_1.3.00.16851_amd64.deb
```

::: tip
Doing the install this way is useful to test your X server configuration. But you can also download the latest "non-insiders" version from an official repo using the following commands:
```sh
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/ms-teams stable main" > /etc/apt/sources.list.d/teams.list' 
sudo apt update
sudo apt install teams
```
:::

Once teams-insiders is installed, just launch it from the command-line:
```sh
teams-insiders
```
You should now have a fully functional Microsoft Teams client for Linux running on Windows!

![](/img/blog/teams-linux-windows.png)

If you have any issue with this tutorial, you can refer to these useful links:
- [Running graphical apps on Ubuntu for WSL](https://wiki.ubuntu.com/WSL#Running_Graphical_Applications)
- [Get Microsoft Teams client for Linux](https://docs.microsoft.com/en-us/microsoftteams/get-clients#linux)

<Comments />
