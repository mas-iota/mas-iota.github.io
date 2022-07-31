---
id: meta-tags
title: MetaTags
sidebar_label: MetaTags
keywords:
  - buildfire
  - metatags
  - meta
  - tags
slug: /meta-tags
---

There are different functionalities which affect your plugin widget index page and it may be useful to turn them on or off. You can do that by using BuildFire meta tags.

### How to use

Meta tags must be added to the head of the HTML document **before** [`buildfire.min.js`](/docs/buildfire.js) is referenced.

```html
<head>
  <!-- ... -->
  <meta name="buildfire" content="disableTheme,enableMDTheme" />
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
</head>
```

### Available Meta Tags

#### Disable App Theme

By adding this meta tag your html page will not be affected by the whole app theme which has been selected by the app owner. (If still wish to obtain the theme settings, but not the actual CSS, you can utilize the [buildfire.appearance.getAppTheme](/docs/appearance#getapptheme) function.)

```html
<meta name="buildfire" content="disableTheme" />
```

---

#### Disable Bootstrap

By adding this meta tag your html page will not be affected by [bootstrap](https://getbootstrap.com/docs/3.3/) styling.

```html
<meta name="buildfire" content="disableBootstrap" />
```

---

#### Disable Fastclick

By adding this meta tag the functionality for the fastclick.js library will not be applied to your html page. For more information about fastClick.js please check https://github.com/ftlabs/fastclick

```html
<meta name="buildfire" content="disableFastClick" />
```

---

#### Disable Eternal Link Override

By adding this meta tag all the anchor elements in your page will not be opened through InAppBrowser plugin instead it will allow the anchor element to be open in the standard cordova webview. For more information about InAppBrowser plugin please check https://github.com/apache/cordova-plugin-inappbrowser

```html
<meta name="buildfire" content="disableExternalLinkOverride" />
```

---

#### Enable Metarial Design Theme

By adding this meta tag default app theme styles will be disabled (`disableTheme` and `disableBootstrap`) and material design theme styles will be injected instead. For more info please refer to [Material Design Theme Wiki](/docs/Material-Design-Theme)

```html
<meta name="buildfire" content="enableMDTheme" />
```

---

:::note
**If you need to use a combination of BuildFire meta tags** you have to do add them in one meta tag separated by comma (`,`) and not add multiple BuildFire meta tags to your page

```html
<meta name="buildfire" content="disableTheme,disableFastClick" />
```
:::
