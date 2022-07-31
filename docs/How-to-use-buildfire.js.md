---
id: buildfire.js
title: buildfire.js
sidebar_label: buildfire.js
keywords:
  - buildfire
  - buildfire.js
  - setup
slug: /buildfire.js
---

# `buildfire.js`
`buildfire.js` is an **open source framework** provided to plugin developers to allow their plugin to have **access and integrate with the BuildFire platform.**

Both the **control and widget** sections of a plugin **need to import `buildfire.js`**

`buildfire.js` can be found in the root folder of your **sdk** in the scripts folder: 

`[root]/scripts/buildfire.js`

***

When referencing `buildfire.js`, make sure you do so with a **relative path** because your plugin will be moved around in many environments and your root will constantly change; however, **your relative path to `buildfire.js` should remain the same.**

*example*

* from your widget 

`<script type="text/javascript" src="../../../scripts/buildfire.js"></script>`

* from your control

`<script type="text/javascript" src="../../../../scripts/buildfire.js"></script>`

***

Out of the box
Just by referencing the file, you will be exposed to the **`buildfire` singleton object**. Just like JQuery exposes `$` or Angular exposes `angular`, BuildFire exposes `buildfire`

Automatically **additional CSS files are added** to your document. [Bootstrap](http://getbootstrap.com) or [Material Design](/docs/material-design-theme) and environment specific CSS are added into your *control* and *widget* pages. (see [Style-Guide](https://app.buildfire.com/styles/helpers.html) for additional CSS helpers)
