---
id: how-to-test-your-plugin-locally
title: How to Test Your Plugin Locally
sidebar_label: How to Test Your Plugin Locally
keywords:
  - buildfire
  - plugin
  - test
  - locally
  - debug
slug: /how-to-test-your-plugin-locally
---

1. Create **an account** at [http://dev.buildfire.com](http://dev.buildfire.com)

2. Set up the [Buildfire CLI](https://github.com/BuildFire/sdk-cli). Detailed instructions can be found [on this medium article](https://medium.com/@attilabuturla/creating-plugins-with-the-cli-7592522ed277)

3. Make sure when using the plugin tester, you **run your local environment as static web server and _not_ from your file system** by using `buildfire run`.
Most IDE's should work (WebStorm, Eclipse, Brackets, Visual Studio, ...etc)

  * **If you don't run it from a local server, your plugin won't run.**
