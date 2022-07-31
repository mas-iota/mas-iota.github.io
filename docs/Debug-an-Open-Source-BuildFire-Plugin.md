---
id: how-to-debug-an-open-source-plugin
title: How to Debug an Open Source Buildfire Plugin
sidebar_label: How to Debug an Open Source Buildfire Plugin
keywords:
  - buildfire
  - debug
  - open
  - source
  - plugin
slug: /how-to-debug-an-open-source-plugin
---

# Context

BuildFire is a mobile app building platform that allows developers through HTML, JS and CSS to create plugins for the platform to extend mobile app functionality. learn more at https://buildfire.com

## Prerequisites

- NodeJS - [download](https://nodejs.org/en/)
- npm
- git
- knowledge on how to create a pull-request on github

### Install

- BuildFire SDK `npm i buildfire` you may need to be admin or super user depending on your environment
- Init SDK `buildfire init` this will install the SDK in a folder called `BuildFireSDK`
- Navigate to folder `cd BuildFireSDK`
- Clone plugin `buildfire plugin clone <plugin name>`

#### Example:

```
buildfire plugin clone folderPlugin
```
from the repo https://github.com/BuildFire/folderPlugin

## Run plugin locally

- Run tester `buildfire run` this will run a web server on `http://localhost:3030`
- in the Plugin input box enter in the name of your plugin. example: 'folderPlugin' depending on your OS this could be case sensitive

## Understanding the autonomy of a BuildFire Plugin

- the Control: is the right hand side of the plugin meant to live in the BuildFire control panel/dashboard
- the Widget: is the left hand side of the plugin meant to live in the mobile app
  to learn more [click here](/docs/How-to-create-a-Plugin)

## Submit a pull request

- After fixing the issue navigate to the folder with the plugin. example `cd BuildFireSDK/plugins/folderPlugin`
- submit `pull-request` on github https://help.github.com/articles/creating-a-pull-request/

## Additional Information

- BuildFire SDK https://github.com/BuildFire/sdk/wiki
- BuildFire open source plugins https://github.com/BuildFire?q=plugin
