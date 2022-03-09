---
templateKey: blog-post
title: Setting Up SQL Server in EC2
date: 2022-03-07T20:02:05.561Z
description: This post describes the steps I take to launch an EC2 instance and
  install SQL Server to host the Calcutta database.
featuredpost: true
featuredimage: /img/logo.svg
tags:
  - Calcutta
---
* Download SQL Express installer
* Download and install sqlcmd
* Download AWS CLI
* Configure new SQL Server instance

  * Custom Install
  * Do not install machine learning services
  * Name the instance `STAGE` or `PROD`
  * Set SQL Server Browser to automatic startup
  * Enable Mixed Mode Auth
  * After the server is running enable TCP/IP access and restart the server

    * In the IPAll section, make sure "TCP Dynamic Ports" is blank and "TCP Port" is set to 1433
* Open TCP and UDP ports for SQL Server (1433, 1434)
* Run `aws configure --profile ...` using the programmatic access keys for the S3 user