# engagingnewsproject.github.io

CME Documentation for all projects built with:

- [GitHub Pages](https://pages.github.com/)
- [Jekyll](https://jekyllrb.com/)
- [Minima Theme](https://github.com/jekyll/minima)
- [jekyll-toc](https://github.com/toshimaru/jekyll-toc)
- [lanyon theme sidebar](https://github.com/poole/lanyon)

## Edit the content/pages

- [Creating new posts](https://jekyllrb.com/docs/posts/)


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
