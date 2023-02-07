---
templateKey: blog-post
title: "Building a Simple Postgres Clone - Part 0: Introduction"
date: 2023-02-07T00:26:42.874Z
tags:
  - Postgres
---
I﻿ recently came across an excellent series of blog posts cataloging Github user `cstack`'s progress building a sqlite clone in order to help him better understand how databases work under the hood ([Link](https://cstack.github.io/db_tutorial/)). There are 13 blog posts in all and I thought it was an excellent series, which inspired me to do my own.

I﻿ am a database engineer by day, so unlike `cstack` I already have a solid grasp of database internals; however, I have no idea how to write C code. The target audience of my blog posts will be someone interested in learning postgres internals, but the reason I'm going through this is to teach myself C. So as you go through the series, don't be alarmed if you see some UGLY C code or a lot of anti-patterns because that is what you're going to get.