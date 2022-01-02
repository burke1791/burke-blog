---
templateKey: about-page
path: /projects
title: My Projects
---
### March Madness Calcutta

Live site: [https://calcuttaleague.com](https://calcuttaleague.com).

Repos: [Front End](https://github.com/burke1791/march-madness-calcutta) | [Back End](https://github.com/burke1791/march-madness-calcutta-api)

This is a full stack web app that runs a March Madness Calcutta pool for you and your friends. It will host a live auction for everyone to bid on the teams they want, and keep track of payouts as the tournament progresses.

The front end is built with React and hosted through Firebase hosting; however, I'll probably end up moving to AWS Route 53 and S3 for hosting since the back end is all on AWS.

The back end consists of API Gateway calling a bunch of lambda functions which connect to a MS SQL Server instance running in AWS RDS.

### Personal Finance App

Repos: [Front End](https://github.com/burke1791/budget-dashboard) | [Back End](https://github.com/burke1791/budget-api)

This app is heavily inspired by [You Need A Budget](https://www.youneedabudget.com/), but because I didn't want to pay for it and I needed something to run on my home server I decided to make my own.

This app does not have a live site because I only intend to run it on my local server setup. I MIGHT create a dummy site and put it on the public internet, but currently I don't see any benefit to doing so.

The front end is built with React, and the back end is a .NET API that connects to a MS SQL Server instance running on my local network.

### Home Server


### Miscellaneous Raspberry Pi Projects

