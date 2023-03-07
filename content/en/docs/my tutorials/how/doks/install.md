---
title: "Create a Doks website"
description: ""
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  docs:
    parent: "how"
    identifier: "ipsum-898b778d9e4b73c456e9d6b443abb1f3"
weight: 100
toc: true
---

<!-- <img-simple src="navigation-mobile.png" alt="Navigation Mobile" class="d-block mx-auto shadow my-5" >
<img-simple src="navigation-structure-mobile.png" alt="Navigation Structure Mobile" class="d-block mx-auto my-5 shadow" style="padding:10px" > -->

Full tutorial at [Doks](https://getdoks.org/) website

## What is Doks?

Doks is a free and open source Hugo theme for creating documentation websites. 

Doks provides a clean and responsive design, multiple navigation options, search functionality, and support for code highlighting. It also includes several shortcodes and partials to help you build your documentation website more easily.

Doks is designed to be customizable and extensible, so you can use it as a starting point and customize it to fit your specific needs. It is maintained by the DigitalOcean community, and contributions are welcome on its GitHub repository.

The Doks theme is published as an npm (Node Package Manager) package, which means that you can use npm to install and manage it, along with any other dependencies required by your project. When you install the Doks theme using npm, it downloads the theme files and places them in your project directory, where you can then customize them as needed to build your documentation website.

## Requirements

- <a href="https://git-scm.com/" target="_blank">Git</a> — latest source release
- <a href="https://nodejs.org/" target="_blank">Node.js</a> — latest LTS version or newer


## Start a new Doks project

Create a new site, change directories, install dependencies, and start development server.

### Create a new site

Doks is available as a child theme and a starter theme.

#### Child theme

- Intended for novice to intermediate users
- Intended for minor customizations
- [Easily update npm packages]

```bash
git clone https://github.com/h-enk/doks-child-theme.git my-doks-site
```

#### Starter theme

- Intended for intermediate to advanced users
- Intended for major customizations
- [Easily update npm packages]

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```


Not sure which one is for you? Pick the child theme.


### Change directories

```bash
cd my-doks-site
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run start
```

Doks will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.


----------------------------------------------

## Commands

Doks comes with commands for common tasks.

> 💡 You can change the commands in the `scripts` section of `./package.json`.

### Create

Create new content for your site:

     npm run create [path] [flags]

### Docs based tree

Create a docs based tree — with a single command:

     npm run create -- --kind docs [section]



For example, create a docs based tree named guides:

     npm run create -- --kind docs guides



### Lint

Check scripts, styles, and markdown for errors:

     npm run lint


#### Scripts

Check scripts for errors:

     npm run lint:scripts [-- --fix]


#### Styles

Check styles for errors:

npm run lint:styles [-- --fix]


#### Markdown

Check markdown for errors:

     npm run lint:markdown [-- --fix]


### Clean

Delete temporary directories:

     npm run clean



### Start

Start local development server:

     npm run start



### Build

Build production website:

     npm run build

### Functions

Build Lambda functions:

     npm run build:functions

### Preview

Build production website including draft and future content:

     npm run build:preview

These commands can be used to manage and maintain your documentation website built with Doks and Hugo. You can run these commands in your terminal or command prompt from the root directory of your Hugo site.

----------------------------------------------------------------------------------------------------------
## Directory Structure

```bash
.
├── archetypes/
├── assets/
├── config/
├── content/
├── data/
├── layouts/
├── static/
├── .eslintignore
├── .eslintrc.json
├── .markdownlint.json
├── .markdownlintignore
├── .stylelintignore
├── .stylelintrc.json
├── babel.config.js
├── netlify.toml
└── package.json
```

## Root directories

### archetypes

```bash
..
├── blog.md
├── default.md
└── docs.md
```


### assets

```bash
..
├── fonts/
├── images/
├── js/
│   ├── vendor/
│   └── app.js
├── lambda/
└── scss/
    ├── common/
    ├── components/
    ├── layouts/
    ├── vendor/
    └── app.scss
```


### config

```bash
..
├── _default/
│   ├── config.toml
│   ├── menus.toml
│   └── params.toml
├── production/
├── staging/
└── postcss.config.js
```



### content

```bash
..
├── blog/
├── contributors/
├── docs/
└── _index.md
```

### data



### layouts

```bash
..
├── _default/
│   ├── baseof.html
│   ├── list.html
│   └── single.html
├── blog/
│   └── single.html
├── categories/
│   ├── list.html
│   └── terms.html
├── partials/
│   ├── content/
│   ├── footer/
│   │   ├── footer.html
│   │   └── script-footer.html
│   ├── head/
│   │   ├── favicons.html
│   │   ├── head.html
│   │   ├── opengraph.html
│   │   ├── resource-hints.html
│   │   ├── script-header.html
│   │   ├── seo.html
│   │   ├── structured-data.html
│   │   ├── stylesheet.html
│   │   └── twitter_cards.html
│   ├── header/
│   │   ├── alert.html
│   │   └── header.html
│   └── sidebar/
├── shortcodes/
│   ├── alert.html
│   ├── email.html
│   ├── img-simple.html
│   └── img.html
├── 404.html
├── index.headers
├── index.html
├── index.redirects
├── robots.txt
├── rss.xml
└── sitemap.xml
```



## Global navigation


```bash
./config/_default/menus/menus.en.toml
```

### Add to main menu

```toml
[[main]]
  name = "Docs"
  url = "/docs/overview/introduction/"
# url = "/docs/1.0/overview/introduction/"
  weight = 10

[[main]]
  name = "Blog"
  url = "/blog/"
  weight = 20

[[main]]
  name = "Get Started"
  weight = 30
  identifier = "get-started"
  url = "/docs/overview/introduction/"

[[main]]
  name = "Quick Start"
  weight = 40
  identifier = "quick-start"
  url = "/docs/overview/quick-start/"
  parent = "get-started"

[[main]]
  name = "Tutorial"
  weight = 50
  identifier = "tutorial"
  url = "https://getdoks.org/docs/tutorial/introduction/"
  parent = "get-started"
```

### Add to social menu

< alert icon="👉" text="Doks uses <a href=\"https://feathericons.com/\">Feather Icons</a>"

```toml
[[social]]
  name = "Twitter"
  pre = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-twitter\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path></svg>"
  url = "https://twitter.com/gethyas"
  weight = 10

[[social]]
  name = "GitHub"
  pre = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-github\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg>"
  url = "https://github.com/h-enk/doks"
  post = "v0.1.0"
  weight = 20
```

## Section navigation

### Configure

In `./config/_default/params.toml` set menu options:

```toml
[menu]
  [menu.section]
    auto = true
    collapsibleSidebar = true
```

You have the option to let Doks __auto__ generate the section menu from the directory folder (tree) structure. Available for both the collapsibile section menu and the default one.

### Set order

#### Auto generated menus

Set weight in the front matter of pages.

#### Manual generated menus

- For first level pages, set weight in the menu config file.
- For lower level pages, set weight in the front matter of pages.

### Add to docs menu

Set __first__ level menu items in `./config/_default/menus/menus.en.toml`:

```toml
..
[[docs]]
  name = "overview"
  weight = 10
  identifier = "overview"
  url = "/docs/overview/"

[[docs]]
  name = "Help"
  weight = 60
  identifier = "help"
  url = "/docs/help/"

# [[docs]]
#   name = "Lorem"
#   weight = 70
#   identifier = "lorem"
#   url = "/docs/lorem/"
..
```

Set __second__ level menu items in the frontmatter of a docs page (manual mode):

```md
..
menu:
  docs:
    parent: "lorem"
    identifier: "ipsum"
..
```

Set __third__ level menu items in the frontmatter of a docs page (manual mode):

```md
..
menu:
  docs:
    parent: "ipsum"
..
```

## Page navigation

### Set levels

The On this page (Table of Contents) section is automatically generated. In `./config/_default/markup.toml`, set the levels you'd like to show:

```toml
[tableOfContents]
  endLevel = 3
  ordered = false
  startLevel = 2
```

## Footer navigation

### Add to footer menu

```toml
[[footer]]
  name = "Privacy"
  url = "/privacy-policy/"
  weight = 10
```
