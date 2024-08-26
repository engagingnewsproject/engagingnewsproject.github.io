---
layout: post
title: "Installation"
categories: docs
---

# Installation
Misinfo Dashboard is a Next.js project bootstrapped with create-next-app.

## Getting Started

### 1. Clone repo

First step! Clone this repo into a local directory (ex. `~/username/sites/`) on your machine.

- From the command line in your project root run:

    ```
    git clone https://github.com/engagingnewsproject/misinfo-dashboard.git
    ```
 
### 2. Install Packages

#### Node Version

At this time of writing (April 26, 2024) the latest working update is at Node v20.12.2. Ensure this is the version by running `node -v`. If you are not on that Node version check out this article to set the correct Node version: [Easily switch between multiple Node versions without using nvm](https://dev.to/andreasbergstrom/easily-switch-between-multiple-node-versions-without-using-nvm-52k9).

#### Yarn
Install/update [`yarn`](https://yarnpkg.com/) package manager on your machine ([installation docs](https://yarnpkg.com/getting-started/install))
  
- Enable [Corepack](https://yarnpkg.com/corepack), if it isn't already; this will add the `yarn` binary to your PATH:

    ```
    corepack enable
    ```

- Set the yarn version by running:

```
yarn set version 1.22.1
```

- From the root of the project install dependencies by running:
        
    ```
    yarn install
    ```
  
    > _**Why not `npm install`?** Glad you asked! [Netlify](https://www.netlify.com/), the service that hosts the dashboard, will not allow us to upload updates because `npm install` creates a `package-lock.json` file. Netlify doesn't like `package-lock.json` files._

### 3. Add Firebase configuration

In order to be authenticated with the Firebase Project you must have the `.env` file (which contains the Firebase credentials) at the root of your project. To get the contents of the `.env` file reach out to the project lead (currently [Luke](https://github.com/luukee)).

### 4. Install and run Firebase Emulator

Firebase Emulator is included in the [Firebase Tools](https://www.npmjs.com/package/firebase-tools) package. You can install Firebase Tools by running:

```
curl -sL firebase.tools | bash
```

Next, to run the app on the emulator and import the testing db data, in a _new_ terminal tab run: 

```
firebase emulators:start --import=./emulator-data
``` 

See [Emulator Tips](https://github.com/engagingnewsproject/misinfo-dashboard?tab=readme-ov-file#emulator-tips) for more info.

### 5. Start dev server

To boot up the development server run:

```
yarn dev
# or
npm run dev
```

> _If you open `http://localhost:3000` and you see the "unhandled error" `FirebaseError: Failed to get document because the client is offline.` this means you have not started the Firebase Emulator. Return to step #4 to Install and run the Firebase Emulator._

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If you have the emulator running you will see a banner `Running in emulator mode. Do not use with production credentials.` at the bottom of your screen as well as Console log messages letting you know that the emulator is running:

![emulator-running](https://media.github.austin.utexas.edu/user/3619/files/fa9f1c63-1f3a-4dd2-b0d3-2ca3ab6b86f0)

> NOTE: You will have 2 terminal tabs running while developing:
- > 1 terminal tab for `yarn dev` (or `npm run dev`), 
- > 1 terminal tab for `firebase emulators:start --import=./emulator-data`. 

> NOTE: You will also have 2 browser tabs open while developing:
- > 1 browser tab for `localhost:3000` (actual misinfo dashboard), 
- > 1 browser tab for "Firebase Emulator Suite" 

Develop away! And good luck :)