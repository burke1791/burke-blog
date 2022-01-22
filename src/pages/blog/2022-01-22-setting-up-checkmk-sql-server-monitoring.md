---
templateKey: blog-post
title: Setting Up Checkmk Server Monitoring
date: 2022-01-22T12:50:08.567Z
description: I don't really need a monitoring solution for my home network SQL
  Servers, but I thought it might be a fun exercise to set one up and see what
  it can do. After a very un-thorough and un-scientific search, I decided to use
  Checkmk - primarily because they have a free version.
featuredpost: true
featuredimage: /img/checkmk-logo.png
tags:
  - HomeServer
---
![Checkmk Main Dashboard](../../../img/checkmk-main.png)

In this post I provide a surface-level description of how I got Checkmk running on my home network. The instructions on their website are pretty comprehensive and well-written, so I'll just go over the quirks I had to deal with on my network. Their installation and setup instructions can be found [here](https://docs.checkmk.com/latest/en/intro_setup.html).

After downloading and installing the server software, then running the following initial setup commands:

```
omd create burke_monitor

# change the password for the web app user
htpasswd etc/htpasswd cmkadmin
```

I had to jump through some extra hoops because Checkmk uses Apache as its webserver, but I already have Nginx running for the other services on the machine. Since I already have Nginx listening on the http ports, I had to reconfigure apache to listen elsewhere by updating `/etc/apache2/sites-enabled/000-default.conf`.

Then I had to configure Nginx to forward all requests for the Checkmk web app to the Apache server. In my local network I want the Checkmk monitor web app to be at `http://monitor.burkcules.burke`, so I edited the Nginx config as follows:

```
# /etc/nginx/nginx.conf
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

With the two webservers playing nicely together, the final piece is to add the domain name to the local DNS server - in my case I'm using Pi-Hole.

Now that we have Checkmk up and running (and the web app accessible), all you need to do is follow the instructions in their documentation (linked above) to configure monitoring.