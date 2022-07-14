---
id: app-developer-mode
title: App Developer Mode
sidebar_label: App Developer Mode
description: How to debug BuildFire plugin using App Developer Mode
keywords:
  - buildfire
  - dev
  - developer
  - mode
  - debug
  - plugin
slug: /app-developer-mode
---

App developer mode enables plugin developers to reroute their plugin source to use a remote version instead of the of the device local version.

Rerouting a plugin source allows the developer to test real device features that cannot be tested inside the plugin tester. It also allows quick refresh for testing while developing without having to publish every time.

## Enabling Developer Mode:
1. On Control Panel, open up "App Components" > "Side Menu"
2. Swithc to "Language" tab
3. Assign a language entry for "Dev Mode" to enable developer mode option on the device or clear it to disable it. Remember to publish your changes and for the app to get the updated content for it enable / disable developer mode.

<img src="https://s3-us-west-2.amazonaws.com/imageserver.prod/32f6b63d-50d1-11e9-8fc5-06e43182e96c/devmodecp.png" width="600" />

4. Enable the developer mode option on the device in Menu => App Settings => (Developer Mode Option) 

<img src="https://s3-us-west-2.amazonaws.com/imageserver.prod/32f6b63d-50d1-11e9-8fc5-06e43182e96c/8b6ea900-8dbe-11eb-b4f0-4969a79b669b.png" width="200" />

## Rerouting Plugins:

1. After setting up your development environment ([How to setup your development environment](/docs/How-to-setup-your-development-environment)) you need to give access to your plugin source files by exposing SDK via a web server (HTTP / HTTPS).

> You can use a simple web server such as node JS 'http-server' https://www.npmjs.com/package/http-server or 'ngrok' https://ngrok.com/ in front of your local server If your mobile device is not connected to the same network as your development environment.

> Make sure that there is no firewall blocking incoming connections from the device to the server.

2. To reroute the source of plugin simply expand developer mode actions

![](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/devMode/devMode-Marker.png?c)

3. Click on the code `</>` icon and specify your web server url and the folder name that is hosted inside your sdk/plugins/ folder.

<img src="https://s3-us-west-2.amazonaws.com/imageserver.prod/32f6b63d-50d1-11e9-8fc5-06e43182e96c/screenshot_2021-03-26-00-07-19-326_com.l32f6b63d50d1.www.jpg" width="200" />


4. After specifying valid url and folder name your plugin should reload with your remote source code. You can apply changes to your plugin source code and hit the reload icon to view them instantly.

> If your plugin does not load correctly make sure that the device can access your plugin source code by clicking the generated url.

## Feature Diagnostics:

Feature diagnostics tool allows all app users to debug device native features, check which features are enabled and run tests for enabled features. It also allows users to check which native plugins are installed and what's their version number. 
Feature diagnostics tool will show up automatically when dev mode is enbled. You can find it in app settings right above the dev mode.

<img src="https://s3-us-west-2.amazonaws.com/imageserver.prod/32f6b63d-50d1-11e9-8fc5-06e43182e96c/8b62e930-8dbe-11eb-bd90-1b9a806a7bfa.png" width="200" />

### To diagnose a feature:
- Open up feature diagnostics tool
- Select active feature you want to diagnose

<img src="https://s3-us-west-2.amazonaws.com/imageserver.prod/32f6b63d-50d1-11e9-8fc5-06e43182e96c/89eb7650-8dbc-11eb-b4f0-4969a79b669b.jpg" width="200" />

- Some features have input fields you can use to change test behavior
- Hit "RUN TEST" button
- Bottom drawer will open up showing the test logs

<img src="https://s3-us-west-2.amazonaws.com/imageserver.prod/32f6b63d-50d1-11e9-8fc5-06e43182e96c/89e73090-8dbc-11eb-b633-055cb3039509.jpg" width="200" />
