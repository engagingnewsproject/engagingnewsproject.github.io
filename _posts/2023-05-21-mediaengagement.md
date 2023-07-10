---
layout: post
title:  "CME Website Docs"
date:   2023-05-21 09:12:12 -0700
categories: docs site
site: https://mediaengagement.org/
site_shortname: mediaengagement.org
excerpt: The core platform for the CME public facing website and peripheral solutions.
github: https://github.com/engagingnewsproject/enp-platform
github_shortname: engagingnewsproject/enp-platform
---

# First Day on the Job

1. Make sure you have logins for the WordPress site ([mediaengagement.org](mediaengagement.org)), wpengine, and the appropriate permissions for the Github repository. You might have to talk to the lead developer and your manager to get this taken care of.

2. Then visit the [README](https://github.com/engagingnewsproject/enp-platform/blob/master/Readme.md) and get your local environment set up. Using an IDE like Atom or Visual Studio Code makes life easier when it comes to version control and syntax checking, but this is all up to preference.

3. Once the website is working properly on your machine, you're good to begin working. We have a system of tracking ongoing projects using Github issues that you'll use eventually. There will be some projects that don't require any code to be written as you'll be working solely in the admin panel of WordPress. When the time to code does come around, you'll need to follow the steps that we take to keep versioning sound so everyone can work independently. Please read the [Wiki](https://github.com/engagingnewsproject/enp-platform/wiki) on Git Usage to get an understanding of how branching and taking on a project is handled. 

4. Finally, talk to the lead developer and your manager to figure out what would be the best project to get you familiar with WordPress and our code.

If you haven't worked with WordPress before, I encourage you to traverse the admin panel on your local site. Break some things, fix them, change some posts, do anything you think will help you gain familiarity. If something breaks on your local, you can always `git reset --hard origin/master` to get back to a working version at the cost of losing your changes. So create new branches and commit often. 

When it comes to the code, you'll be working under the engage directory `~/Local Sites/mediaengagementorg/app/public/wp-content/themes/engage`. It will take some time to get used to the structure and knowing where in the code you need to access for your project. To help get you going in the right direction, if the change you're making is to the front-end you'll want to look inside the templates folder and scss under assets. Backend logic and querying happen inside of PHP files, the src folder has a lot of it, but there are some lose PHP files out and about. 

- [Theme Structure](/mediaengagement/#theme-structure).

It might be a little overwhelming at first, but after a couple of weeks, things will begin to make sense. You'll be on your way to making big changes in no time. Don't hesitate to ask for help from each other if you get stuck. Welcome to the CME team!

#### SSH commands

Connect to site

`$ ssh -i ~/.ssh/wpengine_rsa -o IdentitiesOnly=yes environment@environment.ssh.wpengine.net`

_replace_ `environment` _with site name._

Activate default WP theme:

`wp theme activate twentytwentyone --skip-themes`

Get directory sizes:

`$ du -h --max-depth 1` 

or to sort

`$ du -h --max-depth 1|sort -h`

# Coding

A collection of general tips and rules of thumb when coding and building a project.

## Best practices
##### **Think about the performance impact of your code and solutions**

For example: 
- will the change increase the weight of our page?
- will the change increase our load time?


##### **Don't include large files/libraries when you only need a small subset of it.**

For example:
- importing jQuery for one thing when the site doesn't need it otherwise
- including the entire Font Awesome icon set when you only need 5 icons.
- using Bootstrap. You likely don't need to use Bootstrap for one of our projects.


##### **Simple is better than Clever**

Clever can be fun, but always at the risk of complicating things and making life more difficult for your future self and others. Opt for unglamorous, simple code to save yourself a headache down the road. 

If being clever is going to save you a lot of time or be a big performance boost, be sure to put it in a very simple, well-documented standalone function or module with a simple name that clearly explains what it does, why it should be done this way, and how it works.


##### **Functions should do one thing**

When writing a new function, make sure that it accomplishes one, specific thing. This keeps the code:
- more testable, 
- easier to debug, 
- easier to read / understand,
- easier to maintain

Some rules of thumb. You probably need to break apart your function into several smaller functions if:
- if you have a really long function name
- if your function code is many lines long or has many steps


##### **If you can't figure something out, ask for help. But not before trying to solve it yourself first.**

This advice isn't in order to stop you from asking questions, but because some of the best learning happens when you think hard about trying to figure it out on your own. Google it. Read an article or two. Chances are you'll learn something, even if it doesn't lead you to the exact thing you needed to know.

##### **When asking questions, be sure to be detailed on:**

- what you're trying to solve
- why you need to solve it
- what you've already tried

##### **Writing a good question does a few things:**

- helps you organize your thoughts
- gives you a chance to think about the problem in a different way
- often leads you to the correct answer

I'd estimate 30% of the time I've written a detailed question, I figure out the answer before I finish writing it or right after I ask it :)


_Make sure your editor doesn't reformat on save, unless we have something like `prettier` implemented_

When people have different format on save rules, it makes it really hard to review Pull Requests (PR). For example, if one person uses a two tab vs four spacing autoformat on save, the PR will show everyone of those lines from the file as a change rather than just the work that was completed. So, maybe you made one small change, but now every line in the file is shown as a change. This makes it difficult to identify the real change.


##### **Get only the data you need**

When writing a query or requesting data, it's best to get just what you need (or will likely need) rather than 


##### **Keep things organized**
- Look at the existing code base and see if it makes sense for code to be in one place or another. If it doesn't have an obvious place, create a new file using the existing standards of the code.

## CSS

_Don't use !important in your CSS unless you have a really, really good reason_

That's it.

##### **Keep specificity low.**

CSS uses specificity to determine which rules get applied. The rule with the highest specificity will get used.

So:
- `body .classname p { color: red; }` would win over `p { color: blue; }`

A few tips:
- Don't use `#ids`, as those increase the specificity a lot
- Use classnames or HTML elements to target things
- Try to keep two levels deep at the most, like: `.classname-one .classname-two {}`.
- Ideally keep things one level deep: `.classname__item {}`


##### **Use BEM naming conventions**

This helps keep specificity low and helps you organize your code. Google it to find out more. Here's the basics:

1. `.article` is like the root element or block
2. `.article__title` is the element underneath the block. Use `__` to indicate this.
3. `.article--research` or `.article__title--red` is the modifier of the element/block. Use `--` to do this.
4. Don't bother doing more than one element, even if it is technically built that way. For example, `.article__title__link` would technically be used for this structure `<article><h1><a></a></h1></article>`, but it's really annoying and doesn't benefit that much. Just give it a unique element name like `.article__title-link`.

### CSS via SCSS

Engage CSS is compiled with [SCSS](https://sass-lang.com/). 

- When you start up your dev environment with `npm run watch` changes to SCSS files located in the `assets/scss` directory are compiled (via the `assets/scss/app.scss` file) to `engage/dist/css/app.css`. 
- When running `npm run production` at the end of your development session `engage/dist/css/app.css` is minified for the production environment. 

##### SCSS Workflow

Since we use [mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00) design the first properties you call on an element will be for the mobile display. The same with [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) at-rule. 

This way you shouldn't really ever have to use `@include media($mobile)` mixin because you identify the mobile styles first. Just as will the fallback (flex) rules. So you wont have to use the `not` keyword in the `@supports` rules. They are simply the default :)

For example:
```scss
.archive__content {
  display; block;  // for mobile we want the content to span the entire width so we set it to block.
  @include media($tablet) {
    display: grid;  // for all screensizes larger than tablet we want a flex layout.
    flex-flow: row wrap;
    flex: 0 0 80%;  // for tablets we want the sidebar to be next to the content so we allow it 20%.
  }
  @include media($laptop) {
    flex: 0 0 85%;  // for desktop screens we want the content to allow 15% (a bit less) for the sidebar.
  }
  @supports (display: grid) {  // at the end of our rule we add out styles for browsers that support grid layout.
    grid-column: 1 / -1;
    @include media($tablet) {
      grid-column: 3 / -1;  // we can get real crafty and add the media query mixin inside of the @supports rule. 
  }
}
```
A simple breakdown:

1. Styles for mobile and older browsers(aka fallback rules)
2. Styles for larger screens
3. `@supports` rules for supporting browsers. Within the `@supports` at-rules refer back to #1 (mobile first, then larger screens).

### Mixins & Variables
As a general rule try to use the mixins and variables as much as you can. This will ensure design continuity and better code maintenance for future devs. A good example is the `$spacer` variable. If we always use this variable, or the other variants that apply (`$spacer-sm`, `$spacer-md`, `$spacer-lg` ext.) we can easily change them in one file. Same with mixins.

### Mixins In Depth
##### Media Queries
See the `assets/scss/global/_mixins.scss` file.

For **PHONES** use:
``` scss
@include media($mobile) {
  .home-section {
    margin: $spacer;
  }
}
```
this outputs: 
``` css
@media (min-width: 400px) {
  .home-section {
    margin: 1.6rem;
  }
}
```
_TIP: you should generally not have to use the `$mobile` mixin because we use [mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00) design so the first properties you call on an element will be for the mobile display._

For **PHABLETS** use:
``` scss
@include media($phablet) {
  .selector {
  }
}
```
outputs: 
``` css
@media (min-width: 600px) {
    
}
```

For **TABLETS** use:
```scss
@include media($tablet) {
  .selector {
  }
}
```
outputs:
```css
@media (min-width: 800px) {
  .selector {
  }
}
```

For **LAPTOPS** use:
```scss
@include media($laptop) {
  .selector {
  }
}
```

outputs:
```css
@media (min-width: 1000px) {
    .selector {
    }
}
```

For **DESKTOP** use:
```scss
@include media($desktop) {
  .selector {
  }
}
```

outputs: 
``` css
@media (min-width: 1200px) {
    
}
```

_TIP: if you add 'max' before the device name your media query will output a 'max-width:' up to the number right below the 'min-width:' values above._

For example:
``` scss
@include media('max', $desktop) {
  .selector {
  }
}
```

outputs:
```css
@media (max-width: 1199px) {
  .selector {
  }
}
```
. . . and so on for the other media query mixins

`@supports (display:grid){}` -- [Mozilla Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries#how_to_use_feature_queries_for_progressive_enhancement)


## Theme Structure

### Timber & Twig

Engage is based on the [Timber Framework](https://upstatement.com/timber/) using the [Twig templating engine](https://twig.symfony.com/). Explore the links below to learn more.

- [Timber Documentation](http://timber.github.io/timber/#getting-started)
- [Timber Learning Guides](https://code.tutsplus.com/series/kick-start-wordpress-development-with-twig--cms-974)
- [Twig Documentation](https://twig.symfony.com/doc/3.x/)

### Working on tasks

Read through our [Issue Tracking and Git Usage](/mediaengagement#git-usage) wiki for details.

### Advanced Custom Fields

1) Find your fields and repo template file.

    When working on an existing page the best way to find the fields associated with that page is to 
    * visit the page, 
    * edit the page, 
    * open the custom fields in a new tab with the gear icon in the fields header:

![Edit custom fields](https://i.ibb.co/wgWSkyN/Screen-Shot-2021-09-21-at-8-43-35-AM.png)

You will then have access to the field names, which you can copy and search the repo code to find the associated template.

2) Export/Import new fields

Once you are done on your local dev site, you will need to export your new ACF's for import on the Dev, Staging & Production site.

1) On your local dev site WP Admin dashboard navigate to Custom Fields/Tools.
2) Select your custom fields and click Export.
3) Log in to the Dev site WP Admin dashboard and navigate to Custom Fields/Tools.
4) Import the file you exported from your Local Dev site.
5) Repeat steps 1-4 for the Staging and Production sites.

##### Notes on Post Type Archive Queries
Basically the whole site archive structure is powered by queries set in `src/Managers/Permalinks.php`. We've overridden the default queries so we can set our own queries with the verticals added in. There may be a better way to do this, but this way at least gets us a very specific way of modifying the query based on a pretty URL.

To adjust a query, you'll need to add/modify the query in `src/Managers/Permalinks.php` and then re-save the permalinks in Settings->Permalinks.

# Development Setup
## Installation

### The short
- Download [WP Engine Local App](http://localwp.com/).
- Connect with CME WP Engine account.
- Download mediaengagement.org from the Local App
- Connect to the GitHub repo & fetch.
- Install npm
- Develop

### The long

#### 1. Download Local App

Download and install the [WP Engine Local App](http://localwp.com/).

_The Local App is a WP Engine program that allows you to easily set up a WordPress environment on your local computer_

- After download choose your platform
- Fill in your information
- Download and Save the installation package to your computer
- Open the installation package for Local on your computer
- Follow the installation setup prompts
- Launch Local on your computer


#### 2. Enable wpe api and generate credentials
- Open the API Access page of your WP Engine User Portal:
    - [https://my.wpengine.com/api_access](https://my.wpengine.com/api_access)
- Locate the account name you wish to enable access for
- Click Manage
- Toggle Account API Access to on
- Click Generate Credentials to return to the previous page
- Click the Generate Credentials button at the top
- Leave this page open for easy access in the next step

#### 3. Connect Local to WP Engine
- Open the Local application on your computer
- Click Connect at the top left
- Click LOG IN TO YOUR HOST
- Select WP Engine
- Copy and paste your WPE API credentials, from the previous step
- Click LOGIN TO WP ENGINE

#### 4. Pull to Local from WP Engine
- This process needs to take place the very first time you pull to Local from WP Engine. ** If you are not added as a user on the remote WP install [add your user profile via phpMyAdmin](https://wpengine.com/support/add-admin-user-phpmyadmin/).
- Ensure you’ve already connected Local to your WP Engine account
- Open Local on your computer
- Go the Connect tab
- Locate a Site in the list
- Click PULL TO LOCAL
- Choose whether or not to include the database, if you include the database then you can skip steps 6 and 7
#### 5. (optional) In wp-config.php: keep debug warnings from displaying on the front end

    ```
    define( 'WPE_CLUSTER_ID', '0' );
    define('WP_DEBUG', false);
    ini_set('display_errors','Off');
    ini_set('error_reporting', E_ALL );
    define('WP_DEBUG', false);
    define('WP_DEBUG_DISPLAY', false);
    ```
    
    
#### 6. (optional) Download Database

If you included the database in your PULL TO LOCAL then you can skip steps 6 and 7.

Download database from WP Engine.

- In WP Engine Portal visit cmengage from [Sites tab](https://my.wpengine.com/sites)
- phpMyAdmin tab
- In phpMyAdmin click wp_cmengage tab
- Export top tab
- Export method: select “Custom” bullet
- Scroll to bottom of page and click Go
    - if timeout occurs on export select 50% of tables in “Tables:” and export, then select the final 50% and export.

#### 7. (optional) Move database download to Local socket. 

- Upload the database file downloaded from phpMyAdmin in step 14.

``` 
mysql -uroot -proot -h localhost --socket "/Users/[USERNAME]/Library/Application Support/Local/run/EzKVmKywD/mysql/mysqld.sock" local < /Users/[USERNAME]/Downloads/wp_cmengage.sql
```

- `[USERNAME]` replace with your local computer username
- `/Users/[USERNAME]/Downloads/wp_cmengage.sql `replace path to downloaded database file in step 14.
- `EzKVmKywD `Local spins up a specific instance of mysql that's used only by that site - `EzKVmKywD` being a unique ID to the site you have. If you were on a production server, you'd normally just use mysql -uUSER -pPASSWORD to get connected.
 - To find this unique ID:
1. `cd /Users/[USERNAME]/Library/Application\ Support/Local/run/`
2. `ls`
- The unique ID should be listed.

#### 8. Edit the wp_config file
- Go to the line containing `/** MySQL database password */`
- Ensure the password and username are 'root'. The host should be `localhost`

#### 9. Edit ~/Local Sites/mediaengagementorg/app/public/wp-content/enp-quiz-config.php
- Comment out the following lines inside the else
        ```
        echo 'unknown quiz config path for '.$site;
        die;
        ```
- This is a temporary fix for quiz-tool, if you end up working on quiz tool you will need to redo the pathing below the if structure.

#### 10. In the Local App under the Local Sites tab click View Site button to open 
- the site([http://localhost:10000/](http://localhost:10000/wp-admin/)) & 
- Admin button to open the WP admin([http://localhost:10000/wp-admin/](http://localhost:10000/wp-admin/)).

#### 11. Connecting/syncing with github
- cd into ~/Local Sites/mediaengagementorg/app/public and enter the following commands
```
git init
git remote add origin https://github.com/engagingnewsproject/enp-platform.git
```
- If you are re-adding the origin and get a `Remote origin already exists` error run:
```
git remote set-url origin https://github.com/engagingnewsproject/enp-platform.git
```
- And then fetch from origin:
```
git fetch --all
git reset --hard origin/master
```
- At this point your directory should now be connected with our repo and up to date with master.
- Small aside, if you need to update your database, pull from WPENGINE again and include the database.

#### 12. Browser refreshing (browsersync)
- cd into ~/Local Sites/mediaengagementorg/app/public/wp-content/themes/engage
- Enter the command `npm install`
- Edit webpack.mix.js to make sure the browsersync proxy field is the url of your Local site host.
- If you run into any issues (localhost:3000 opens to a blank screen), check your node version: `node -v`. 
        At the time of writing, make sure you are using node v16.13.2. To manage node versions: [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md). ex `nvm install 16.13.2` and `nvm use 16.13.2`.
- To view live scss or css changes while developing run `npm run watch`. Ignore the errors for now if it's working.
- When done developing, `^ + c`, and minify for production `npm run production`. 

## Links

*   [Google Doc installation instructions](https://docs.google.com/document/d/1-ZhREJ0MZ9hsnN-Hc-6bbpFlXq9b91CSfl2DfJ5IpwI/edit?usp=sharing)
*   [Center for Media Engagement Github](https://github.com/engagingnewsproject)
*   [WP Engine Portal](https://identity.wpengine.com/signin)
*   [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
*   [Google Docs to Markdown](https://github.com/evbacher/gd2md-html/wiki)
*   [Update PHP upload max file limit.](https://sitenetic.com/techie/mamp-error-phpmyadmin-error-incorrect-format-parameter/)
*   [Composer install not allowing vendor?](https://github.com/laravel/valet/issues/763#issuecomment-482095200)
*   [Using the GitHub Desktop Client](https://idratherbewriting.com/learnapidoc/pubapis_github_desktop_client.html#managing-merge-conflicts)
*   [WP Engine WP CLI](https://wpengine.com/support/troubleshoot-ssh-gateway/)

# Git usage

Important things to remember:

* Make sure you are always pulling from master.

* Thorough testing after big changes. Deploy in a more piecemeal manner

* Make sure you run `npm run production` after your development session is over (this command compiles & minifies the files for production)

* Only one person to push to the production.

After changes have been pushed to the [Staging Site](https://cmestaging.wpengine.com/) send a link to Kat for review.

## Quick Working Development Guide

When you take on a task:

1. Go to the applicable [Github repo](https://github.com/engagingnewsproject) and choose the issue to work on
2. Assign this issue to yourself
3. Create your Git Branch

**If this is a critical hotfix that needs to get released immediately:**

```
$ git checkout -b hotfix-[hotfix-name] stable      // creates a local branch
$ git push origin hotfix-[hotfix-name]             // makes the branch remotely available
```

**If this is a new feature/improvement:**

```
$ git checkout -b feature-[feature-name] master    // creates a local branch 
$ git push origin feature-[feature-name]           // makes the branch remotely available
```

**If this is a non-critical bugfix:**

```
$ git checkout -b bug-[bug-name] master           // creates a local branch
$ git push origin bug-[bug-name]                  // makes the branch remotely available
```

As work gets to stable stopping points or completion, push it to github:

```
$ git push origin your-branch-name                // pushes branch to github
```

When your code is ready to be reviewed:

* Go to your branch on github.com and create a new pull request to be merged into master (or stable if a hotfix).

* Drop any implementation notes into the github.com Issue and link the pull request to the github.com Issue in the Issue right sidebar.


After your code is reviewed:

* It will either be merged or comments will be left so you can finish up the issue. Go ahead and repeat from #1 while you wait for the review.

* For deployment flow, see the [Deployment Summary](https://github.com/engagingnewsproject/enp-platform/wiki/Development#deployment-summary).

## Branching

**Quick Legend**

<table>
  <tr>
   <td><strong>Instance</strong>
   </td>
   <td><strong>Branch</strong>
   </td>
   <td><strong>Description, Instructions, Notes</strong>
   </td>
  </tr>
  <tr>
   <td>Stable
   </td>
   <td>stable
   </td>
   <td>Accepts merges from Working and Hotfixes
   </td>
  </tr>
  <tr>
   <td>Working
   </td>
   <td>master
   </td>
   <td>Accepts merges from Features/Issues and Hotfixes
   </td>
  </tr>
  <tr>
   <td>Features/Issues
   </td>
   <td>topic-*
   </td>
   <td>Always branch off HEAD of Working
   </td>
  </tr>
  <tr>
   <td>Hotfix
   </td>
   <td>hotfix-*
   </td>
   <td>Always branch off Stable
   </td>
  </tr>
</table>

### Main Branches

The main repository will always hold two evergreen branches:

*   `master`
*   `stable`

The main branch should be considered `origin/master` and will be the main branch where the source code of `HEAD`always reflects a state with the latest delivered development changes for the next release. As a developer, you will be branching and merging from `master`.

Consider `origin/stable` to always represent the latest code deployed to production. During day to day development, the `stable` branch will not be interacted with.

When the source code in the `master` branch is stable and has been deployed, all of the changes will be merged into `stable` and tagged with a release number. _How this is done in detail will be discussed later._

### Supporting Branches

Supporting branches are used to aid parallel development between team members, ease tracking of features, and to assist in quickly fixing live production problems. Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:

*   Feature branches
*   Bug branches
*   Hotfix branches

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets. Each branch and its usage is explained below.

### Feature Branches

Feature branches are used when developing a new feature or enhancement which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the master branch.

During the lifespan of the feature development, the lead should watch the `master` branch (network tool or branch tool in GitHub) to see if there have been commits since the feature was branched. Any and all changes to `master` should be merged into the feature before merging back to `master`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

`<tbd number>` represents the project to which Project Management will be tracked.

*   Must branch from: `master`
*   Must merge back into: `master`
*   Branch naming convention: `feature-<tbd number>`

_Working with a feature branch_

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A feature branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.


```
$ git checkout -b feature-id master                 // creates a local branch for the new feature
$ git push origin feature-id                        // makes the new feature remotely available
```

Periodically, changes made to `master` (if any) should be merged back into your feature branch.

```
$ git merge master                                  // merges changes from master into feature branch
```

When development on the feature is complete, the lead (or engineer in charge) should merge changes into `master` and then make sure the remote branch is deleted.

```
$ git checkout master                               // change to the master branch  
$ git merge --no-ff feature-id                      // makes sure to create a commit object during merge
$ git push origin master                            // push merge changes
$ git push origin :feature-id                       // deletes the remote branch
```

### Bug Branches

Bug branches differ from feature branches only semantically. Bug branches will be created when there is a bug on the live site that should be fixed and merged into the next deployment. For that reason, a bug branch typically will not last longer than one deployment cycle. Additionally, bug branches are used to explicitly track the difference between bug development and feature development. No matter when the bug branch will be finished, it will always be merged back into `master`.

Although likelihood will be less, during the lifespan of the bug development, the lead should watch the `master` branch (network tool or branch tool in GitHub) to see if there have been commits since the bug was branched. Any and all changes to `master` should be merged into the bug before merging back to `master`; this can be done at various times during the project or at the end, but time to handle merge conflicts should be accounted for.

`<tbd number>` represents the github.com Issue # to which Project Management will be tracked.

*   Must branch from: `master`
*   Must merge back into: `master`
*   Branch naming convention: `bug-<tbd number>`

**Working with a bug branch**

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A bug branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b bug-id master                     // creates a local branch for the new bug
$ git push origin bug-id                            // makes the new bug remotely available
```

Periodically, changes made to `master` (if any) should be merged back into your bug branch.


```
$ git merge master                                  // merges changes from master into bug branch
```


When development on the bug is complete, [the Lead] should merge changes into `master` and then make sure the remote branch is deleted.

```
$ git checkout master                               // change to the master branch  
$ git merge --no-ff bug-id                          // makes sure to create a commit object during merge
$ git push origin master                            // push merge changes
$ git push origin :bug-id                           // deletes the remote branch
```

### Hotfix Branches

A hotfix branch comes from the need to act immediately upon an undesired state of a live production version. Additionally, because of the urgency, a hotfix is not required to be be pushed during a scheduled deployment. Due to these requirements, a hotfix branch is always branched from a tagged `stable` branch. This is done for two reasons:

*   Development on the `master` branch can continue while the hotfix is being addressed.
*   A tagged `stable` branch still represents what is in production. At the point in time where a hotfix is needed, there could have been multiple commits to `master` which would then no longer represent production.

`<tbd number>` represents the Basecamp project to which Project Management will be tracked.

*   Must branch from: tagged `stable`
*   Must merge back into: `master` and `stable`
*   Branch naming convention: `hotfix-<tbd number>`

*Working with a hotfix branch*
___

If the branch does not exist yet (check with the Lead), create the branch locally and then push to GitHub. A hotfix branch should always be 'publicly' available. That is, development should never exist in just one developer's local branch.

```
$ git checkout -b hotfix-id stable                  // creates a local branch for the new hotfix
$ git push origin hotfix-id                         // makes the new hotfix remotely available
```

When development on the hotfix is complete, [the Lead] should merge changes into `stable` and then update the tag.

```
$ git checkout stable                               // change to the stable branch
$ git merge --no-ff hotfix-id                       // forces creation of commit object during merge
$ git tag -a <tag>                                  // tags the fix
$ git push origin stable --tags                     // push tag changes
```

Merge changes into `master` so not to lose the hotfix and then delete the remote hotfix branch.

```
$ git checkout master                               // change to the master branch
$ git merge --no-ff hotfix-id                       // forces creation of commit object during merge
$ git push origin master                            // push merge changes
$ git push origin :hotfix-id                        // deletes the remote branch
```

# Deployment

There are three sites that make up our deployment flow:

1. Dev:         [https://cmedev.wpengine.com](https://cmedev.wpengine.com)
2. Staging:     [https://cmestaging.wpengine.com](https://cmestaging.wpengine.com)
3. Production:  [https://mediaengagement.org](https://mediaengagement.org)

If it is not [a hotfix](#hotfix-branches), the flow for a normal deployment is:

1. _FIRST_ make sure you run `npm run production` before deploying.

2. `master` gets deployed to [https://cmedev.wpengine.com](https://cmedev.wpengine.com) for testing.

    ```
    $ git push dev master                    // deploy to dev
    ```


3. If all checks out well, `master` gets merged into `stable`:

    ```
    $ git checkout stable                    // change to the stable branch
    $ git merge master                       // merge without the commit object so we can just tag the spot instead of having a separate commit. Kind of like an active, rolling release branch
    ```

    > In terminal VIM enter `:wq` to write the current file and exit.

    ```
    $ git tag -a <tag> -m "<add a message if you want or just include the tag>"    // tags the fix
    $ git push origin stable --tags                                                // push tag changes
    ```

4. Push stable to staging for testing:

    ```
    $ git push staging stable                 // push stable to staging
    ```

5. If all checks out well, push stable to production for the launch:

    ```
    $ git push production stable              // push stable to production
    ```

6. Login to WP Engine and clear all caches

![WP Engine Clear all caches](https://i.ibb.co/dQY3vR6/Screen-Shot-2021-06-22-at-9-33-49-AM.png)

or clear the cache & reset file permissions per-site through the WordPress WP Engine plugin:

![cme-reset-file-permissions](https://user-images.githubusercontent.com/30611098/191086368-e0056a02-0c5d-4f8f-a450-01e71e0ff2c3.png)


##### Git Troubleshooting

1. Merge conflicts: 

    $ git merge --abort    // aborts the merge

2. If the merge issue is in the .css or .js files, rebuild production assets:

```
npm run production
```
if it works, commit the merge.

3. If the WP Engine codebase differs from the GitHub repo (like a WordPress or plugin update), an error will show when you try to push. So you’ll need to pull from that source and resolve conflicts, if any.

4. If you get a `failed to push some refs` error like this: 

```
! [rejected]          stable -> stable (fetch first)
error: failed to push some refs to 'git@git.wpengine.com:production/cmengage.git'
```

> !!! AT YOUR OWN RISK!! run a force push:

```
$ git push -f production stable
```

##### Workflow Diagram

![Workflow Diagram](https://i.ibb.co/WP5xNFt/687474703a2f2f662e636c2e6c792f6974656d732f3369315a336e3154316b3339327231413351306d2f676974666c6f772d6d6f64656c2e3030312e706e67.png)

##### Command line

`npm` commands

To open a browser window with live reloading run: 

    npm run watch

When you are done, to compile your code & minify for the production server be sure to run:

    npm run production

##### Terminal commands

See where your local files are at

    git status
 
Move to master branch

    git checkout master
 
Pull from master

    git pull origin master
 
Merge feature branch with master branch

    git merge feature-slider-mobile-fix
 
Push to dev master

    git push dev master
 
Check your remote setup

    git remote -v
 
Add dev remote to your setup

    git remote add dev git@git.wpengine.com:production/cmedev.git
 
Pull changes from master

    git pull
 
Force push to dev master

    git push -f dev master

Add all files to commit
 
    git add .

Set remote repository URL
 
    git remote add staging git@git.wpengine.com:production/cmestaging.git
 
    git remote add production git@git.wpengine.com:production/cmengage.git
 
Confirm WP Engine connectivity
 
    ssh git@git.wpengine.com info

##### Git Push with WPEngine

Setting up Git Push for WPEngine

1. Navigate to the ‘[cmengage](https://my.wpengine.com/installs/cmengage)’ instance on WPEngine

2. On the left sidebar, select ‘Git push’

3. Type in developer name with the format cmengage-(yourname)

4. Get your ssh key by going to terminal (or for Windows systems, Git Bash) and inputting:

    ```
    ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/wpegitkey
    ```
_** Be sure to replace your_email@example.com with your own email address_

5. Leave the passphrase blank by hitting enter or return again, without typing anything.

6. Press enter or return again to confirm the password entry.

7. Doing this will generate your public/private key pair

8. Print and copy the text of your new public key file, called wpegitkey.pub:

    ```
    cat ~/.ssh/wpegitkey.pub
    ```

9. Paste the entire key into the SSH public key field on WPEngine ([Sites/cmengage/Git push](https://my.wpengine.com/installs/cmengage/git_push))

10. Click ‘Add Developer’. The changes take a few minutes to register.

11. Open terminal

12. To ensure that the repositories are added run:

    ```
    ssh -v git@git.wpengine.com info
    ```

13. cd into your local website directory `~/app/public/wp-content/themes/engage`

14. To add production run:

    ```
    git remote add production git@git.wpengine.com:production/cmengage.git
    ```
15. To add staging run:

    ```
    git remote add staging git@git.wpengine.com:staging/cmengage.git
    ```
16. To check the remote repositories were added run:

    ```
    git remote -v
    ```
17. You should see an output like this if all remote repos have been added:

    ```
    dev     git@git.wpengine.com:production/cmedev.git (fetch)
    dev     git@git.wpengine.com:production/cmedev.git (push)
    origin  https://github.com/engagingnewsproject/enp-platform.git (fetch)
    origin  https://github.com/engagingnewsproject/enp-platform.git (push)
    production      git@git.wpengine.com:production/cmengage.git (fetch)
    production      git@git.wpengine.com:production/cmengage.git (push)
    staging git@git.wpengine.com:production/cmestaging.git (fetch)
    staging git@git.wpengine.com:production/cmestaging.git (push)
    ```

- [WP Engine Git Version Control System Docs](https://wpengine.com/support/git/?_gl=1*dje4od*_ga*MTY2MTM5NTM3Ni4xNjUxNjA0NDQ2*_ga_9HX6WG40N2*MTY2MzYxNTcxNi4yMi4xLjE2NjM2MTY0MzQuMC4wLjA.)
- [WP Engine Add SSH Key to User Portal Docs](https://wpengine.com/support/git/#Add_SSH_Key_to_User_Portal)

# Wordpress
## Hooks and filters

They're the foundation of how to build things in WordPress. The very, very basic idea is: 
- Hooks are used when you want something to happen at a certain time. Like, when a post is saved, do this unrelated thing.

- Filters are used when you want to change the data that gets used. Like, when a post is saved, change it to all caps or whatever...

- Learn about [WP_Query()](https://developer.wordpress.org/reference/classes/wp_query/)

You'll use this A LOT. It's very powerful and you can access whatever posts you want by building the right query. You shouldn't ever really need to write your own SQL query to get what you need. `WP_Query()` can likely do what you want.

## Images

When small images are resized to make them larger, it is very noticeable and the larger they become, the more blurred they are. It is a serious problem. Upload an image that is too small for your website and the result will be blurred images.

If you don’t know what size to use, upload a larger image than you might need rather than a smaller one because there is less blurring with shrinking images to fit than with stretching them.

[More info here.](https://rawinfopages.co.uk/are-your-photos-blurry-on-wordpress-solve-image-problems/)

## Editing
Simple interface for adding new publications to the publications page: 

![CME Publications Page Edit](https://i.ibb.co/Px51VXv/cme-publications-edit.png)

1. Add a new publication
2. Drag to reorder
3. Delete a publication.
4. Add a publication in between.

## New Post Type/Taxonomy

How to add a new post type or taxonomy.

1. Add the post type and taxonomy as one file under `/Managers/Structures/PostTypes`

2. Add the rewrites for the new post type following the format under `/Managers/Permalinks`

3. Add the rewrites for the vertical under `/Managers/Permalinks/addVerticalRewrites()`

4. Add the taxonomy slug to the $taxRewriteMap in `/Models/Permalinks`

5. Register the Post Type to the Vertical Taxonomy under `/Managers/Taxonomies/Taxonomies`

6. Update Permalinks

7. Register a new filter menu for the item in Globals.php following the format for the other post types

8. Edit `/archive.php` to specify what filter menu should apply for your new archive, however you need it set-up

9. Go to Options -> Custom Fields -> Archive Landing Pages -> Landing Pages -> Landing Page Type and add the post type slug as an option for this field

10. Test it out!

# Plugins

Only make edits on the Engage theme & never use the Theme Editor. 

![Never use the WP Theme Editor](https://i.ibb.co/WKg3z0F/Screen-Shot-2021-01-28-at-12-11-17-PM.png)

Wordpress core and plugin files should not be edited/changed due to ongoing updates, as your edits will be overwritten. If you would like to make changes related to plugins do those from within the plugin’s admin settings inside the WordPress admin dashboard on your local install.

## ENP Registration Plugin

WordPress registration email edit

See the [enp-custom-registration](https://github.com/engagingnewsproject/enp-custom-registration) repo/plugin.

## SEO / Rank Math

**Understanding Rank Math**

Important links:

- Use [Google Trends](https://trends.google.com/trends/) to explore the keyword's search ranking.
- [Choosing Focus Keywords](https://rankmath.com/kb/score-100-in-tests/#first-step-choosing-focus-keywords)
- [Understanding Rank Math Color Codes](https://rankmath.com/kb/score-100-in-tests/#making-sense-of-rank-math-s-recommendations-the-color-codes)
- [Focus Keyword in the Meta Description](https://rankmath.com/kb/score-100-in-tests/#focus-keyword-in-the-meta-description-primary-focus-keyword-only)
- [Focus Keyword in the URL](https://rankmath.com/kb/score-100-in-tests/#focus-keyword-in-the-url-primary-focus-keyword-only)
- [Focus Keyword at the beginning of the content](https://rankmath.com/kb/score-100-in-tests/#focus-keyword-at-the-beginning-of-the-content)

**SEO on Research pages**

1. Add the focus keyword

    ![add the focus keyword here](https://user-images.githubusercontent.com/30611098/125837621-c8e3d7fc-0915-47bc-ab99-c2ceca544742.png)

2. Add meta description (with the focus keyword in copy)

    ![meta-description-01](https://user-images.githubusercontent.com/30611098/125838079-a760f9ee-8512-4fe2-9b4b-c734910dc322.png)
    ![meta-description-02](https://user-images.githubusercontent.com/30611098/125838081-07fcea36-c79d-44de-a03c-056c899b9d16.png)

3. Add the focus keyword as alt text to Featured Image.
  
    ![feat-image-01](https://user-images.githubusercontent.com/30611098/125838239-24de3647-d49f-4c2b-aa18-321c8fd5dd8d.png)
    ![feat-image-02](https://user-images.githubusercontent.com/30611098/125838665-5e621a82-98da-482f-b5cf-eedd3f8289ff.png)


**Use the _Analytics_ & _SEO Analysis_  pages to dig into:**

- Top pages, posts and research to optimize.
- Possible errors highlighted in red on the _SEO Analysis_ page

  ![Screen Shot 2021-07-15 at 11 05 37 AM](https://user-images.githubusercontent.com/30611098/125836219-36b56b4d-f995-45c1-b004-3c3ac8325ba9.png)

- [Also, check out these Rank Math pages for more help.](https://github.com/engagingnewsproject/enp-platform/wiki/WordPress-Plugins#rank-math)
