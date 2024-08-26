---
layout: post
title: "Components"
---

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
