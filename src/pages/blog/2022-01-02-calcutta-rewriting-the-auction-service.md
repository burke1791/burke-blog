---
templateKey: blog-post
title: "Calcutta: Rewriting the Auction Service"
date: 2022-01-02T15:09:14.684Z
description: The current auction service architecture is built with websockets
  throught AWS API Gateway and lambda functions connecting to RDS. Because
  lambdas need RDS access, they live inside my VPC; and in order for the lambdas
  to broadcast a message to all active websocket connections, they need internet
  access. The only way to give them internet access while inside a VPC is by
  using a NAT Gateway and they are quite expensive.
featuredpost: true
featuredimage: /img/auction-service-current.png
---
![Current Architecture](../../../static/img/Auction Service - Current.png)