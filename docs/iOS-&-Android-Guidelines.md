---
id: ios-and-android-guidelines
title: iOS and Android Guidelines
sidebar_label: iOS and Android Guidelines
description:
keywords:
  - buildfire
  - ios
  - android
  - guidelines
slug: /ios-and-android-guidelines
---

## iOS
As upgrading to iOS 13 and migrating to [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) from UIWebViews  brings security and performance enhancements it has the limitations below that needs to be addressed in buildfire plugins:

### LocalStorage
See /docs/LocalStorage

### IndexedDB 
`indexedDB.open()` will now cause an error `called in an invalid security context`.
We recommend switching to [File System Services](/docs/File-System) for widget side on devices and keep using indexedDB on control or widget side on web side.

You can figure out the platform using the following snippet:

    var isDevice = window.buildfire.getContext().device.platform !== 'web'

If the storage required by the plugin instance is small local storage can be used instead on both sides (web and devices) for the widget.

### WebSQL
Web SQL is no longer supported in iOS and throws `Web SQL is deprecated` error when used. We recommend using alternatives explained in indexedDB section.

## Android

### LocalStorage
See /docs/LocalStorage

