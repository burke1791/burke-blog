---
templateKey: blog-post
title: Setting Up CheckMk Server Monitoring
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

Create site
`omd create burke_monitor`

Change password for website user
`htpasswd etc/htpasswd cmkadmin`

CheckMk uses Apache, but I already have Nginx running on this machine. Update apache to listen on port 8080 (`/etc/apache2/sites-enabled/000-default.conf`). Then configure Nginx to reverse proxy traffic to apache (`/etc/nginx/nginx.conf`)

The apache config already has its own proxy rules, so I had to configure nginx to not step on apache's toes, e.g.:

```
server {
    listen 80;
    server_name monitor.burkcules.burke;

    location / {
        return 301 /burke_monitor; # return a redirect
    }

    location /burke_monitor {
        proxy_pass http://127.0.0.1:5000; # forward the correct path to the base path in apache
    }
}
```

Add the new domain `monitor.burkcules.burke` to my local DNS server (Pi-Hole).

Follow instructions in the checkmk [docs](https://docs.checkmk.com/latest/en/intro_setup_monitor.html) to setup monitoring on any machines you want.