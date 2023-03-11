---
title: "Introduction to Hugo"
description: ""
lead: ""
date: 2023-03-05T17:59:31+02:00
lastmod: 2023-03-05T17:59:31+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "quickstart-da40f6aec24d8a285156fe22161bdf97"
weight: 50
toc: true
---
-----------------------------

<style>
  .border {
    border: 2px solid #333;
    border-radius: 10px;
    padding: 10px;
    background-color: #f7f7f7;
    box-shadow: 0px 3px 3px #ccc;
    width: fit-content;
  }
</style>

<div class="border">
  <img src="hugo.png"/>
</div>

## What is Hugo?

Hugo is a static HTML and CSS website generator written in [Go](https://go.dev/).
It is optimized for speed, ease of use, and configurability.
Hugo takes a directory with content and templates and renders them into a full HTML website.

Hugo relies on Markdown files with front matter for metadata, and you can run Hugo from any directory.
This works well for shared hosts and other systems where you don’t have a privileged account.

Hugo renders a typical website of moderate size in a fraction of a second.
A good rule of thumb is that each piece of content renders in around 1 millisecond.

Hugo is designed to work well for any kind of website including blogs, tumbles, and docs.

---------------------------------------------------------

### Before you begin this tutorial you must:

<a href="https://gohugo.io/installation/" target="_blank">Install Hugo</a>

<a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">Install Git</a>

--------------------------------------------------

###### You must also be comfortable working from the command line.
## Create a site

Commands:

###### If you are a Windows user:

- Do not use the Command Prompt

- Do not use Windows PowerShell

- Run these commands from PowerShell or a Linux terminal such as WSL or Git Bash

- PowerShell and Windows PowerShell are different applications.

###### Run these commands to create a Hugo site with the Ananke theme. The next section provides an explanation of each command.

    hugo new site quickstart
    
    cd quickstart
    
    git init
    
    git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
    
    echo "theme = 'ananke'" >> config.toml
    
    hugo server

View your site at the URL displayed in your terminal. Press Ctrl + C to stop Hugo’s development server.

## Explanation of commands

Create the directory structure for your project in the quickstart directory.

     hugo new site quickstart

Change the current directory to the root of your project.

     cd quickstart

Initialize an empty Git repository in the current directory.

  
      git init

Clone the Ananke theme into the themes directory, adding it to your project as a Git submodule.

      git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke

Append a line to the site configuration file, indicating the current theme.

      echo "theme = 'ananke'" >> config.toml

Start Hugo’s development server to view the site.

      hugo server

Press Ctrl + C to stop Hugo’s development server.

## Add content

Add a new page to your site.

     hugo new posts/my-first-post.md

Hugo created the file in the content/posts directory. Open the file with your editor.

    ---
    title: "My First Post"
    date: 2022-11-20T09:03:20-08:00
    draft: true
    ---

Notice the draft value in the front matter is true. By default, Hugo does not publish draft content when you build the site. Learn more about draft, future, and expired content.

Add some markdown to the body of the post, but do not change the draft value.

    ---
    title: "My First Post"
    date: 2022-11-20T09:03:20-08:00
    draft: true
    ---
----------> <a href="https://gohugo.io/" target="_blank">Full Tutorial and more information</a>

 <a href="/docs/tutorials/how/doks/install/"> &rarr; Creare a Doks website</a>