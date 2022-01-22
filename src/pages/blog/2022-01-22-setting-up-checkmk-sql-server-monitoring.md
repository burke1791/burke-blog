---
templateKey: blog-post
title: Setting Up CheckMk SQL Server Monitoring
date: 2022-01-22T12:50:08.567Z
description: I don't really need a monitoring solution for my home network SQL
  Servers, but I thought it might be a fun exercise to set one up and see what
  it can do. After a very un-thorough and un-scientific search, I decided to use
  CheckMk - primarily because they have a free version.
featuredpost: true
featuredimage: /img/checkmk-logo.png
tags:
  - HomeServer
---
In this post I provide a surface-level description of how I got CheckMk running on my network.

CheckMk uses Apache, but I already have Nginx running on this machine. Update apache to listen on port 8080 (`/etc/apache2/sites-enabled/000-default.conf`). Then configure Nginx to reverse proxy traffic to apache (`/etc/nginx/nginx.conf`)

Add the new domain `monitor.burkcules.burke` to my local DNS server (Pi-Hole).