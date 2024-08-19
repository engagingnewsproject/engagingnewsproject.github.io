# engagingnewsproject.github.io

[**CME Documentation**](https://docs.mediaengagement.org/) for all projects built with:

- [GitHub Pages](https://pages.github.com/)
- [Jekyll](https://jekyllrb.com/)
- [Minima Theme](https://github.com/jekyll/minima)
- [jekyll-toc](https://github.com/toshimaru/jekyll-toc)
- [lanyon theme sidebar](https://github.com/poole/lanyon)
- [Best Jekyll Cheat Sheet](https://cloudcannon.com/cheat-sheets/jekyll/)
- [How to Change Your Jekyll Theme](https://www.inmotionhosting.com/support/website/jekyll/how-to-change-your-jekyll-theme-with-rubygems/)
## Edit the content/pages

- [Creating new posts](https://jekyllrb.com/docs/posts/)

## Local Dev

Run dev server:

`npm run watch`

This port only serves livereload.js over HTTP

If you open `LiveReload address: http://127.0.0.1:35729` a window with "This port only serves livereload.js over HTTP." is expected behavior. This port is specifically for serving the livereload.js script, which enables live reloading of your site during development. It's not intended to serve your site content.

To view your Jekyll site, you should open `Server address: http://127.0.0.1:4001/` in your browser instead. This is the server address where your site is running.

Overview:

- http://127.0.0.1:35729: This is the port used by the LiveReload script. It's responsible for watching your files and reloading the page automatically when changes are detected. The message you see is normal when accessing this port directly.

- http://127.0.0.1:4001/: This is the port where your actual Jekyll site is being served. This is the address you should use to view and interact with your site.

- `--port` is set in `_congig.yml`

### Dev server issues

- `Your Ruby version is 3.1.3, but your Gemfile specified 3.1.4`

  - [Manage Ruby version with asdf](https://mac.install.guide/ruby/6.html)
	
	
# New Documentation Page/Post
### 1. New Post File Name

In `/_posts` directory create a new markdown file with a filename in the following format:

```
YEAR-MONTH-DAY-title.md
```

Example:
```
2011-12-31-new-years-eve-is-awesome.md
```
### 2. New Post Default Post Markdown

All new pages/post files must begin with [front matter](https://jekyllrb.com/docs/front-matter/):

```markdown
---
layout: post
title:  "Facebook Study"
date:   2023-06-22 02:12:12 -0700
categories: docs
site: 
site_shortname: 
excerpt: Facebook study.
github: https://github.com/engagingnewsproject/fb-study
github_shortname: engagingnewsproject/fb-study
---
Content here <-- Actual page/post markdown content add after `---` above.
```
