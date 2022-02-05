---
permalink: /blog/deep-dive-microsoft-teams-client
title: Deep Dive into the Microsoft Teams Client
description: A journey into the architecture, source code and technologies of the Microsoft Teams client. 
image: https://docs.nbold.co/img/blog/deep-dive-microsoft-teams-client.png
author:
  name: Guillaume Meyer
  profile: https://twitter.com/guillaumemeyer
date: 2020-07-25
tags:
  - teams
  - client
  - code
  - architecture
  - technologies
---

# Deep Dive into the Microsoft Teams Client
<BlogHeadline />

## Motivations
In my previous article, I described [how to install the Microsoft Teams client for Linux using Ubuntu on WSL 2](/blog/install-microsoft-teams-linux-wsl-ubuntu/). As part of this journey, I thought that we may learn a little bit more about the architecture and technologies used by Microsoft to create this client.

## What do we know so far?
As far as I can tell, for a long period of time, the only details we had about the Teams architecture was this high-level schema:
![Microsoft Teams architecture overview](/img/blog/teams-architecture.png)  

Quite light about the Teams client ;-)  

Then later during a Microsoft Build conference, some additional details started to surface about the client architecture:

![Microsoft Teams client architecture](/img/blog/teams-client-architecture.png)  

and more specifically about the calling stacks:

![Microsoft Teams client calling stacks](/img/blog/teams-client-calling-stacks.png)  

Some articles were written relaying this new info, but maybe the only article that really tried to delve into the details is [Under the Hood of the Microsoft Teams Desktop Application](https://blog.thoughtstuff.co.uk/2017/04/under-the-hood-of-the-microsoft-teams-desktop-application/) written by a Microsoft MVP for Microsoft Teams [Tom Morgan](https://www.thoughtstuff.co.uk/). This is a good starting point, but I'm pretty sure we can go further.  

In this article, we'll discover how to access part of the Microsoft Teams client source code and see what we can learn from it.

## Extracting the Microsoft Teams package
First, refer to my [previous article](/blog/install-microsoft-teams-linux-wsl-ubuntu/) to download the Microsoft Teams desktop client for linux.

Once you have downloaded the `*.deb` file, extract it to see how the electron app is organized.
```sh
# Use dpkg to extract the package
dpkg -x ~/Downloads/teams-insiders_1.3.00.16851_amd64.deb ~/teams-insiders-src
# Navigate to the extracted folder
cd ~/teams-insiders-src
```

Now list the top level 5 folder structure to see what's inside:
```sh
# If ouy need to install "tree", which is not installed by default on Ubuntu WSL
sudo apt install tree
# Show the top 5 directory levels
tree -d -L 5
```
Here is a macroscopic view of the different folders:
```sh
usr                               # Target folder where teams will be deployed
├── bin                           # Teams executable startup script (Linux specific) as a `.sh` file
└── share
    ├── applications              # Shortcut `.desktop` file that enables Teams to be visible in the desktop application menu
    ├── pixmaps                   # Teams app icon
    └── teams-insiders            # Electron runtime and some additional binaries such as ffmpeg for media processing
        ├── locales               # Teams locale files as `.pak` with translations in different languages
        ├── resources
        │   ├── app.asar.unpacked # Binary electron native modules as `.node` files
        │   ├── assets            # Pictures, icons and sounds files
        │   ├── locales           # Teams locale files as `.json` with translations in different languages
        │   └── tmp               # Temporary files, probably created by the ThirdPartyNotice generator
        └── swiftshader           # Binary dependency to the SwiftShader graphic api
```

What can we learn from this:

1. Teams in a **standard electron app** (OK nothing new here 😉)

2. The **startup script** is a standard bash `.sh` script:
- It's made "executable" by a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) character sequence: `#!/bin/sh`
- It loads the main electron app and defines the location of the logs folder and startup log file

3. **Binary dependencies**: Aside from the main electron app (That will download its required dependencies from the npm package registry), the package includes some additional binary dependencies, in different formats:
  - `.so` files: `so` stands for shared object (a library format commonly used in C/C++ development), that mostly includes electron base libraries and dependencies such as the [SwiftShader](https://github.com/google/swiftshader) graphic api.
  - `.node` files: [Electron native node modules](https://www.electronjs.org/docs/tutorial/using-native-node-modules), that enables Teams to access some lower-level features than what you couldn't use directly in a hybrid web app, or to perform resource-intensive operations faster, such as the `slimcore` library, which operates the telephony features in Teams.

## Accessing Microsoft Teams client source code
It's time to go down the rabbit hole Alice! (or Neo depending on your references)

![Alice going down the rabbit hole](/img/blog/alice-rabbit-hole.gif)  

Let's look at the `resources` folder. This is where the sources are packaged in `asar` files. `asar` files is just a tar-like archive format, that we can hopefully unarchive easily.
Teams client source code is in the `app.asar` file (the other asar files should be meaningless as they're the default electron packages). Let's unarchive it:

```sh
# Install the asar engine globally
npm install -g --engine-strict asar
# Unarchive app.asar in a "src" folder
asar extract ./usr/share/teams-insiders/resources/app.asar ./usr/share/teams-insiders/resources/src
```

::: tip
If you're curious, you can also list contents of an asar archive directly without extracting it, for instance:
```sh
asar list ./usr/share/teams-insiders/resources/electron.asar
```
:::

Now let's launch VSCode from this new `src` folder to have an overview of the source code:
```sh
code ./usr/share/teams-insiders/resources/src
```
Now you should see the electron app source code:

![Microsoft Teams client source code](/img/blog/teams-client-source-code.png)

## What can we learn from this?
I've only spent a few minutes analyzing the source code so far, but we still can see some very interesting things.

### A limited set of the codebase  
As a hybrid app, of course you'll not see here any server-side code. But more than this, a lot of the client-side code is dynamically loaded at runtime from Microsoft's servers (This code could be inspected easily right from a web browser using the developers tools). Still, we have access to:
- The shell that controls and executes all the Microsoft Teams apps (first-party, secondt-party or third-party)
- Some interesting configuration information
- Most of the direct app dependencies

Also, we don't have access to the original source code (that is written in TypeScript), but only to its transpiled version in JavaScript. Hopefully, the TypeScript compiler produces pretty human-readable code.

### Package
From the `package.json` file, we can see that the project was started in 2016. Also, if you look at the dependencies, we can see some interesting things...

**KeyTar**:  
[KeyTar](https://www.npmjs.com/package/keytar) is an interesting package that enables node.js apps to interact with os-specific credentials managers using an abstracted interface:
- Windows: Windows credential manager
- Mac: Keychain Access
- Linux: libsecret (and gnome-keyring on Ubuntu)

From the file `utility-keytar.js`, we can see that this module is used to securely store and retreive credentials and other secret values such as Microsoft Graph tokens.

**FastText**:  
[fastText](https://fasttext.cc/) is an open-source and lightweight library that performs various text-analysis operations.  
From the `languageDetectionService.js` file, we can see that it's especially used for language detection. You may ask yourself *"why is Microsoft not using Azure Text Analytics API?"*... well... I don't know, but it may be related to the fact that Teams may in the future support some forms of offline mode, therefore using this kind of module could make sense.

### Configuration file
From the `env_config.json` file, we can see some interesting things too.  
For instance, the list of the different environments that supports Microsoft Teams, such as `commercial cloud`, `government` or `department of defense`
```json
"serverEndpointsMap": {
  "teams.microsoft.com": "https://teams.microsoft.com",
  "devspaces.skype.com": "https://teams.microsoft.com",
  "local.teams.office.com": "https://teams.microsoft.com",
  "gov.teams.microsoft.us": "https://gov.teams.microsoft.us",
  "dod.teams.microsoft.us": "https://dod.teams.microsoft.us"
}
```
We can also see some interesting options that are quite self-explanatory:
```json
"enableMultiWindow": false,
"enableSso": true,
"spellcheckerDisabled": false,
"urlShortenerEndpoint": "https://urlshortener.teams.microsoft.com",
"enableOfficeIntegration": true
```

### Fun stuff
I've only scratched the surface, and there is for sure a lot of other interesting things to learn from this app. But before I leave, let's have some fun!

**Fighting against TypeScript 😂**  
As I previously mentioned, this app is written in TypeScript. You can see from the `preload_window_sandbox.js` file that the development team sometimes has to fight against it:
```js
// HACK: Since TypeScript inherits static properties too, we have to
// fight against TypeScript here so Subject can have a different static create signature
```

**TeamSpace??? 🤔**  
From the `windowmanager.js` file, you can still see some references to `TeamSpace` which was the internal codename of Teams before it's official launch.
```js
// prevent loading the teamspace window instead load in default browser
```

**Looking for Alphonso? 🔎**  
Again from the `env_config.json` file, there is this funny option:
```js
"enableAlphonso": true
```
I didn't find on the web a lot of references to "Alphonso" that may be related to Teams. I just found this [npm package](https://www.npmjs.com/package/alphonso) which is a private offline npm registry. It could make sense as Microsoft may use private local registries to avoid to publish some packages publicly... Anybody knows what it stands for?

**A little FREE advice for Microsoft 😎**  
Last but not least, from the `sharingIndicatorFactory.js` file, you can see that the development team has to fix this issue:
```js
// eval() needs to be used to load expression requires with webpack.
// TODO 873714: remove dependency on eval.
```
This is a very comon development issue (that we faced at SalesTim in the past).  
If somebody from the Teams development team is reading this article, have a look at the [vm2](https://www.npmjs.com/package/vm2) npm package... This package relies on the latest [Node.js VM module](https://nodejs.org/api/vm.html), and that's the solution we finally used at SalesTim to create a sandbox executing `eval` operations in an really safe context.

<Comments />
