---
layout: post
title:  "Misinfo Dashboard"
date:   2023-06-21 010:12:12 -0700
categories: docs
site: https://misinfo-dashboard.netlify.app/
site_shortname: misinfo-dashboard.netlify.app
excerpt: Web dashboard for the misinformation application.
github: https://github.com/engagingnewsproject/misinfo-dashboard
github_shortname: misinfo-dashboard
---

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)](https://app.netlify.com/sites/misinfo-dashboard/deploys)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

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

## Emulator Tips:

> _If you get `command not found` you might have to be added as a user for the Firebase project. Contact the lead developer to do this for you. Or contact mediaengagement@austin.utexas.edu_

The Firebase Emulator should boot up and provide you an emulator link (look for `View Emulator UI at` in your command line output). 

Open that link to view the Emulator UI:

![emulator-ui](https://media.github.austin.utexas.edu/user/3619/files/1012c2ee-b9b2-4529-8914-2e0455af9bda)

**See Emulator Tips** for more info.

### Add yourself as a user via the "Emulator Authentication" tab. 

#### Two options:

1. Option one: Manually add yourself

   From the Firebase Emulator UI select the "Emulator Authentication" tab and click "Add user". Only required fields are: `name`, `email` and `password`. Change your role? see _Available user roles_ below.

2. Option two: Sign up.

   You can also signup like a normal user at the Login/Signup page. Once you have signed up:

    - Open the link printed out in your Emulator terminal window. 
      - **_all you need to do is open the link._ Once you've opened the link close the tab and...
    - Return to your initial Signup tab and login with the credentials you signed up with. Change your role? see _Available user roles_ below.

#### Available user roles:

- *General User:*
    
    No additional configuration required.
    
- *Agency User:*

    In the "Custom Claims" input enter `{"agency":true}` & save.

- *Admin User:*

    In the "Custom Claims" input enter `{"admin":true}` & save.
    

#### Emulator UI
- Database: find the imported database under the Emulator UI / Firestore tab.
- Users: view, add, edit & delete users under the Authentication tab.
- Files & Uploads: Storage tab in the Emulator UI.

#### Users

Your user UID that you created will not be associated with any reports or agencies so you can either add reports via the Misinfo Dashboard in your localhost:3000 window or go into the Emulator UI and manually change the `userID` to your own for some reports. Same idea with assigning your user to an agency: go into the Emulator UI and add your email to an agency's `agencyUsers` field.

#### Emulator log files

Emulator creates log files (`firebase-debug.log` & `ui-debug.log`) when you boot up the emulator. No need to push those with git. 

#### Export your local emulator data

The Firebase emulator allows you to export data from your running emulator instance. If you want to stash a baseline set of data, auth profiles you have set up in your running emulator instance.

`firebase emulators:export ./emulator-data`

This command will export the running emulator instance's auth profiles, firestore data and storage files to the `/emulator-data` folder. **Recommended** to not commit the `/emulator-data` changed files as to not alter the baseline Emulator data.

# User Documentation

## General
The following includes a general overview and additional explanations per each main feature of the dashboard.

### Overview
By default, the overview feature is displayed when viewing the home page for the dashboard. There are three main components of the overview screen, which are three pie charts that show the top three trending topics within the given time spans:

1. One pie chart displays the number of reports for the top three trending topics within the past day
2. One pie chart displays the number of reports for the top three trending topics within the past three days, showing the top three trending topics.
3. One pie chart displays the number of reports for the top three trending topics within the past seven days.

### Comparison View
The comparison view allows you to select topics and a date range to compare the number of reports for each topic. However, you must select at least one topic, and the date range must be at least 3 days and no more than a month long. This feature is intended to show trends in topic reports over time.

### Tag System
Tags are used to associate additional information with each report. We have three general tag systems, which may be edited and viewed via the "Tag System" feature of our site and is accessible via the navigation bar.

1. The topic tags are used to associate a specified topic with a report. This is intended to indicate topic trends in misinformation based on which topics users report most. You are able to add topics within the "Tag Systems" feature of the dashboard, which is accessible via the tag icon on the navigation bar. You are able to view trends in topic reports via the comparison/overview feature of the dashboard (as described above).
2. Source tags allow users to indicate from what platform/media source they heard the misinformation from. You may view and edit these source tags as well in the "Tag Systems" feature of the dashboard.
3. Customized labels allow you to organize and categorize reports based on your needs. These labels may serve as additional notes to you to indicate the urgency of reports, but you may edit the names of the labels via the "Tag Systems" dashboard as well.

### Reports Section
The reports section can be accessed via the home screen of the dashboard, which is displayed beneath the comparison/overview graphs. This section allows you to filter the reports based on given date ranges. In addition, you may also mark a report as read/unread and filter based off this feature. The refresh icon displayed above the reports section allows you to refresh the reports section and retrieve any reports that may have been recently changed or created. You may view additional information about each report by clicking on the given report name in the column. Each report may be deleted, but please note this cannot be undone.

### Adding a New Report
To add a new report, you may either select the "Add" icon in the navigation bar, or the "Add new report" icon featured above the reports section. Once you complete the required information and add the report, it will be displayed in the reports section.

## Tools

- [Chrome React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

    Chrome extension that adds React debugging tools to the Chrome Developer Tools.

- [VS Code ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

    JavaScript and React/Redux snippets in ES7+ with Babel plugin features for VS Code

- [VS Code Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

    Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.
		
## Project Structure

This section provides an overview of the file and folder structure of the Misin project. It covers top-level files and folders, configuration files, and routing conventions.

| Files                                                             |                               |
| ----------------------------------------------------------------- |:-----------------------------:|
| [`.eslintrc.json`](https://eslint.org/docs/latest/use/configure/) | Configuration file for ESLint |
| [`.firebaserc`](https://firebase.google.com/docs/cli/targets#set_up_deploy_targets_for_your_firebase_resources) | Firebase settings for deploy targets|
| [`.gitignore`](https://git-scm.com/docs/gitignore) | Git files and folders to ignore |
| [`firebase.json`](https://firebase.google.com/docs/cli#the_firebasejson_file) | Firebase project configuration |
| [`firestore.indexes.json`](https://firebase.google.com/docs/reference/firestore/indexes) | Firebase custom indexes |
| [`firestore.rules`](https://firebase.google.com/docs/firestore/security/get-started) | Firebase security rules |
| [`next.config.js`](https://nextjs.org/docs/app/api-reference/next-config-js) | Configuration file for Next.js |
| [`package.json`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json) | Project npm dependencies and scripts |
| [`postcss.config.json`](https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins) | PostCSS configuration |
| [`tailwind.config.js`](https://tailwindcss.com/docs/configuration) | Tailwindcss configuration |
| [`yarn.lock`](https://classic.yarnpkg.com/lang/en/docs/yarn-lock/) | Project `yarn` dependencies and scripts |

### Top-level folders

| Files                                                             |                               |
| ----------------------------------------------------------------- |:-----------------------------:|
| [`/components`](https://github.austin.utexas.edu/o/tmOnCbkSzYuWj7EVbFqg/s/h5B8zKreIfyiUKOT1awO/~/changes/29/technical-documentation/components) | Next.js components folder |
| [`/config/firebase.js`](https://firebase.google.com/docs/web/setup) | Firebase configuration folder |
| [`/context/AuthContext.jsx`](https://firebase.google.com/docs/auth) | Firebase authentication configuration folder. |
| [`/pages`](https://github.austin.utexas.edu/o/tmOnCbkSzYuWj7EVbFqg/s/h5B8zKreIfyiUKOT1awO/~/changes/29/technical-documentation/pages) | Pages Router |
| [`/public`](https://nextjs.org/docs/getting-started/installation#create-the-public-folder) | Static assets to be served |
| `/styles` | Tailwindcss global styles folder |

## Firebase

### Database

Data is stored on the Firebase Firestore Database. 

- Database configuration is [initialized](https://firebase.google.com/docs/firestore/quickstart#initialize) in config/firebase.js.
- Database authentication (signup, login, logout ext.) is setup in context/AuthContext.jsx.

### Authorization

Firebase authentication on pages and components.

| Files: |     |
| ------ | --- |
| `config/firebase.js` | Auth entry point |
| `context/AuthContext.jsx` | defines user authorization |

## Dashboard

pages/index.jsx - dashboard entry point, importing main dashboard (pages/dashboard.jsx)

| Files |     |
| ----- | --- |
| `components/Home.jsx` |  imports dashboard elements: |
| `components/Headbar.jsx` |  top title bar + search |
| `components/TagGraph.jsx` |  tagging system. |
| `components/ReportsSection.jsx` |  list of reports. |
| `components/Profile.jsx` |  user profile view |
| `components/Settings.jsx` |  tagging system settings |
| `components/Navbar.jsx` |  side navbar component  |

[Graphs](https://github.austin.utexas.edu/o/tmOnCbkSzYuWj7EVbFqg/s/h5B8zKreIfyiUKOT1awO/~/changes/29/technical-documentation/overview/dashboard#graphs) - view report trending topics
components/ReportsSection.jsx - [reports list](https://github.austin.utexas.edu/o/tmOnCbkSzYuWj7EVbFqg/s/h5B8zKreIfyiUKOT1awO/~/changes/29/technical-documentation/overview/dashboard#report-list).

### User Profile

Signup, login, logout & reset password.
 
| Files |     |
| ----- | --- |
| `pages/_app.js` | handles login functionality: |
| `components/ProtectedRoute.jsx` | login validation |
| `context/AuthContext.jsx` | authorization validation |
| `styles/globals.css` | global styles |

### Navigation

Includes Home view, Tagging System, New Report, Profile, Help & Login/Logout.

| Files |     |
| ----- | --- |
| `pages/dashboard.jsx` | renders side navbar |
| `components/Navbar.jsx` | imports navbar elements |
| `components/modals/ConfirmModal.jsx` | confirmation modal for logout |
| `components/modals/NewReportModal.jsx` | add new report modal |
| `components/modals/HelpModal.jsx` | dashboard help modal |

## Reports
### Report List

`components/ReportsSection.jsx` - the bulk of the report handling

- Filter reports - Filter the reports based on search text or filter dropdown selection
- Read/unread - Set report read status
  - handleReadToggled, handleReadFilterChanged
- [Infinite scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - import InfiniteScroll from "react-infinite-scroll-component"
- Delete report
  - handleReportDelete, handleDelete
	
### New Report

components/modals/NewReportModal.jsx - new report modal component. Set new report key, value pairs:

|  key  | value |
| ----- | ----- |
| `userID` | user email |
| `state` | [country-state-city package](https://www.npmjs.com/package/country-state-city) |
| `title` | report title |
| `link` | user input link |
| `secondLink` | user input second link |
| `images` | user uploaded images |
| `detail` | report description |
| `creationDate` | report created date |
| `isApproved` | ?? |
| `read` | report viewed or toggled by user |
| `topic` | report selected label |
| `hearFrom` | Sources / Media |

## Tagging System

Each report has specific tags applied. Topic Tags, Source Tags and Labels.

| Files |     |
| ----- | --- |
| `components/Settings.jsx` | tagging system entry point| 
| `components/TagSystem.jsx` | import of tagging modals| 
| `components/modals/NewTagModal.jsx` | modal for adding new tags| 
| `components/modals/RenameTagModal.jsx` | modal for renaming existing tags| 
| `components/modals/ConfirmModal.jsx` | modal for confirming tag changes |

## Graphs

Pie chart or line graph for the trending topics.

### Graph Display

Determines graph of trending topics in the format of the selected graph view (either overview graph or comparison graph).

| Files |     |
| ----- | --- |
| `components/Toggle.jsx` | Allows user to switch between view of overgraph and comparison graph |
| `components/TagGraph.jsx` | gathers the needed information to display either the overview graph or comparison graph |

### Overview Graph

Pie chart that shows the number of reports for the top three trending topics for yesterday, the past three days, and the past week.

| Files |     |
| ----- | --- |
| components/OverviewGraph.jsx | Displays pie charts that show the number of reports for the top three trending topics within the provided timelines. |

### Comparison Graph

Line chart that plots the number of reports for the selected topic reports within the requested date range. 

| Files |     |
| ----- | --- |
| components/ComparisonGraphSetup.jsx | Modal popups that allow users to select the report topics and date range of which the number of reports should be collected. |
| components/ComparisonGraphPlotted.jsx | Line graph that displays the plotted number of reports for the selected report topics within the selected date range. |
| components/ComparisonGraphMenu.jsx | Menu bar that allows users to change parameters for the line chart and refresh the chart with the new selection. |

# Components

## Navigation

| Files
| ----- |
| `components/Headbar.jsx` | Top bar including dashboard icon, dashboard title & search input. Imported in `components/Home.jsx` 
| `components/Navbar.jsx` | Left bar of dashboard main navigation.

## Share Report

Redirects to default email client with link to the report

- Simple button that uses JS mailto function to share report through email
- Only shown on the details page of existing reports. Not related to other functions or pages in the system.

Files |
------|
 `pages/dashboard/reports/[reportId].jsx` |
 
## Graph Toggle

Switches between graph views

- Graph views use react charts library.

### Top 3 Trending Topics Overview Graph

Bar graph that displays the number of reports from the previous day for the top 3 trending topics

- Can choose a specific date range as well.

### OverviewGraph & ComparisonGraph*.jsx

`@package: [react-google-charts](https://www.react-google-charts.com/)`. A thin, typed, React wrapper for Google Charts.

Files |   
---------|----------
`OverviewGraph.jsx` |
`ComparisonGraphMenu.jsx` |
`ComparisonGraphPlotted.jsx` |
`ComparisonGraphSetup.jsx` |
## Reports List

Displays list of most recent reports in firebase.

Files |   
---------|----------
 `components/ReportsSection.jsx` | 
 
 ## New Report
 
Allows users to create new reports through popup modal, not a separate page.

- Requires at least one: description, link, or photo
- Connects to firebase and generates a new report in the database
- Same functionality as the app, just for desktop

Files |
------|
 `components/modals/NewReportModal.jsx` |
 
## Report Tags

## Modals

[React URL Modal](https://github.com/remoteoss/react-url-modal) is a React library to help you keep track of your modal state using the URL.

Files    |          |
---------|----------
`ConfirmModal.jsx` | Used to display a dialog box with an optional message and two buttons, OK and Cancel. It prevents the user from accessing other parts of the page until the box is closed.
`HelpModal.jsx` | Used to display a dialog box with user documentation.
`NewReportModal.jsx` | 
`NewTagModal.jsx` | 
`RenameTagModal.jsx` |
`ReportModal.jsx` | 
`UpdatePwModal.jsx` |

## Firebase Functions

To deploy Firebase functions:

```bash
firebase deploy --only functions
```

#### Firebase Creds

With proper permissions access Firebase Console or Firebase Cloud Console.

- Firebase project name: Misinfo
- Firebase project ID: misinfo-5d004
- Firebase project #: 2581605663

#### Firebase Storage

- Firebase storage name: misinfo-5d004.appspot.com

# Links

- [Chrome React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [VS Code ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [VS Code Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)


# Firebase CLI Tools

[Guide on how to push rules using the CLI](https://firebase.google.com/docs/firestore/security/get-started#use_the_firebase_cli)


