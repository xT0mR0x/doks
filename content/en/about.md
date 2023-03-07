---
title: ""
description: ""
lead: ""
date: 2022-01-25T14:41:39+01:00
lastmod: 2022-01-25T14:41:39+01:00
draft: false
images: []
type: docs
menu:
  docs:   
weight: 100
toc: true
---

# Tom Rosenzweig


<iframe width="560" height="315" src="https://www.youtube.com/embed/aSd_Ha5nDkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

###  This is the first row

       this is the second row


<p style="color:red; font-size:15px;">HELLO</p>


   <div class="col-lg-9 col-xl-8 text-center">
      <p class="lead">{{ .Params.lead | safeHTML }}</p>
      <a class="btn btn-primary btn- px-4 mb-2" href="/docs/" role="button">Resources</a>
      <a class="btn btn-primary btn- px-4 mb-2" href="/blog/" role="button">Projects</a>
      <!-- <p class="meta">Open-source MIT Licensed. <a href="https://github.com/h-enk/doks">GitHub v{{ $data := getJSON "/package.json" }}{{ $data.version }}</a></p> -->
    </div>