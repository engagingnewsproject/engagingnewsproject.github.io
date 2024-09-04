---
layout: post
title:  "mediaengagement.org Docs"
date:   2023-05-21 09:12:12 -0700
categories: docs site
site: https://mediaengagement.org/
site_shortname: mediaengagement.org
excerpt: The core platform for the CME public facing website and peripheral solutions.
github: https://github.com/engagingnewsproject/enp-platform
github_shortname: engagingnewsproject/enp-platform
---

## CME (Engage) Website Documentation

### Introduction

Welcome to the CME (Engage) Website documentation. This guide covers everything you need to know to work on the [WordPress site](https://mediaengagement.org/), including local development setup, theme structure, and best practices.

---

## First Day on the Job

1. **Logins**: Ensure you have logins for the WordPress site ([mediaengagement.org](https://mediaengagement.org)), WP Engine, and the appropriate permissions for the GitHub repository. Speak with the lead developer or your manager to get access.
  
2. **Setup**: Follow the [Installation](#installation) steps to set up your local environment. It’s recommended to use an IDE like Atom or Visual Studio Code for easier version control and syntax checking.
  
3. **Git Usage**: After your setup, familiarize yourself with our Git practices by reading the [Git Usage Docs](#git-usage).
  
4. **Explore WordPress**: If you’re new to WordPress, take some time to explore the admin panel on your local environment. Feel free to experiment—any issues can be reverted with `git reset --hard origin/master`. Commit frequently and work in new branches.

### Pro Tips:
- Changes to the frontend are typically located in the templates or SCSS files under the `assets` folder.
- Backend logic and queries are in the `src` folder, but loose PHP files may also be found throughout.

	<details>
		<summary><strong>More info</strong></summary>

		<p>When it comes to the code, you'll be working under the engage-2-x directory <code>~/Local Sites/mediaengagementorg/app/public/wp-content/themes/engage-2-x</code>. It will take some time to get used to the structure and knowing where in the code you need to access for your project. To help get you going in the right direction, if the change you're making is to the front-end you'll want to look inside the templates folder and SCSS under assets. Backend logic and querying happen inside of PHP files, the src folder has a lot of it, but there are some lose PHP files out and about.</p>
		
		<p>Check out the <a href="#theme-structure">Theme Structure</a> section for more info.</p>

	</details>

---

## Installation

### Step 1: Install Local App
- Download and install [WP Engine Local App](https://localwp.com/).

### Step 2: Import the .zip
- Request the lead dev for a "slimmer" version of the site.
- In the Local App, click the plus (+) icon and select "Existing ZIP" to import the site. 
- Configure: PHP 8.2.10+, Nginx, and MySQL 8.0.16+.

### Step 3: Add Proxy URL to `webpack.mix.js`
- Create a `config.json` file in the theme root:
  ```json
  {
    "proxy": "http://localhost:10000"
  }
  ```
  
### Step 4: Proxy Requests for `/wp-content/uploads/`
- Set up a proxy to save local storage by fetching images from the live site. 

### Step 5: Sync with GitHub
- Initialize the repository and set the remote origin:
  ```bash
  git init
  git remote add origin https://github.com/engagingnewsproject/enp-platform.git
  git fetch --all
  git reset --hard origin/master
  ```

---

## Local Development

### Step 1: Switch Node Version
Use the Node version in the `.nvmrc` file:
```bash
nvm use
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Environment
```bash
npm run watch
```

### Step 4: Build for Production
Before pushing changes, compile and minify the assets:
```bash
npm run production
```

---

## Coding Guidelines

### Best Practices
1. **Performance**: Always consider the performance impact of your changes.
2. **Modularity**: Functions should do one thing and be easily testable.
3. **Code Simplicity**: Prioritize simple, well-documented code over clever or complex solutions.

### Git Usage
- Always create separate branches for new features or bug fixes.
- Push to the `master` branch only after code review and testing.
  
For more detailed Git workflows, see [Deployment Workflow](#deployment-workflow).

---

## SCSS Guidelines

### Workflow
- Use **mobile-first** design when writing styles.
- Compile and minify SCSS files to `dist/css/app.css` by running:
  ```bash
  npm run production
  ```

### BEM Naming Conventions
- `.block__element` for elements.
- `.block--modifier` for modifiers.

---

## Theme Structure

Engage uses the **Timber** framework and **Twig** templating engine. Familiarize yourself with:
- [Timber Documentation](http://timber.github.io/timber)
- [Twig Documentation](https://twig.symfony.com)

---

## Plugins

### ENP Registration Plugin
- Refer to the [ENP Registration plugin](https://github.com/engagingnewsproject/enp-custom-registration) for custom registration details.

### SEO (Rank Math)
- Follow [Rank Math guidelines](https://rankmath.com/kb/score-100-in-tests/) for SEO optimization.

---

## Deployment Workflow

### Branching Strategy
- `master`: Main working branch.
- `stable`: Represents the production state.
- **Features/Issues**: Use branches like `feature-*` or `bug-*` for development.

### Deployment Steps
1. Push to **Dev** for testing.
2. Merge into **Stable** and tag the release.
3. Push to **Staging** for final approval.
4. Deploy to **Production**.

### Git Push with WP Engine
- Add your SSH key and set up remote repositories for WP Engine production and staging environments.

---

## Troubleshooting

### Valet Conflicts
Stop Valet if using Local by Flywheel:
```bash
valet stop
```

### WP-CLI Commands
- **Check for Updates**: `wp plugin list --update=available`
- **Optimize Database**: `wp db optimize`

## Technical Docs

- [View Technical Docs](/mediaengagement-technical-docs/)