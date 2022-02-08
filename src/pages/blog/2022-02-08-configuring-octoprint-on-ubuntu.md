---
templateKey: blog-post
title: Configuring Octoprint on Ubuntu
date: 2022-02-05T20:43:44.002Z
description: Describing Octoprint setup.
featuredpost: true
featuredimage: /img/logo.svg
tags:
  - HomeServer
---
- Running docker-compose
    - modifying the ports
- Tweaking Nginx reverse proxy
    - standard tweaks didn't work because octoprint needs websockets
- step through setup wizard in octoprint's UI
    - (Connectivity check) octoprint asks for a DNS IP address (default is Google). I changed it to my local pi-hole server
