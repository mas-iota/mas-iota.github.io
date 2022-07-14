---
id: device-safe-areas
title: Safe Areas
sidebar_label: Safe Areas
description:
keywords:
  - buildfire
  - device
  - safe
  - areas
slug: /device-safe-areas
---

### Overview

On iPhones X and later, the “safe-area” inset at the bottom of the screen causes user interface issues if not handled correctly.  Due to the differences from plugin to plugin, there is no “one fits all” solution. Currently, plugin frames do not extend below the safe area, causing a gap at the bottom of the screen.

To address this issue and provide an excellent experience to our users, we are making major changes to our platform. Plugin developers will be responsible for preparing for this update, which we will be rolling out on {{deployment date}} at {{deployment time}}.

Plugin frames will now extend to the bottom of the screen, overlapping the safe area inset. Therefore, some plugins will experience user interface issues if the inset is not properly handled.

BuildFire will automatically apply padding to the body of every plugin. In addition, an HTML attribute will be applied to devices that use safe areas. This will be sufficient for most plugins, but not all. To disable the padding, override the padding-bottom of the body tag, using !important. 

To make your plugin(s) conform to the new standard, please see the following instructions. The platform update will roll out in such a way that your changes will not apply until the aforementioned date.


### What are Safe Areas?

The concept of “safe-areas” arose with the rise of edge to edge displays found on most new phones, and allow apps to extend to the edges of the display. These spaces are reserved for system functionality; however, apps can still display backgrounds and content behind them. In figure 1 below, the safe area insets are in white, while any buttons and content should remain in the blue safe area.


Deciding if content should render outside of safe areas is contextual. Scrolling content can be displayed outside of safe areas, so long as users can scroll the first and last items into the safe area completely. This can be achieved through padding at the top and bottom of scrolling containers. In figure 2, note that the padding below the last list item matches the bottom inset: this container is scrolled to the bottom.  In figure 3, note how the list items overlap the safe area inset while scrolling. If this were a launcher (home) plugin, the same would apply to the top inset. This plugin is compatible with the safe area.

### CSS environmental variables

Devices running iOS use CSS environmental variables to calculate safe areas. You should not hard code these values, as they will vary from device to device; in addition, the safe areas of future iOS devices may differ. Below are the CSS variables to use.
#### Use the following variable in your plugin

`safe-area-inset-bottom`
#### Use the following functions in your plugin.

- iOS 11.2 and later: `env(safe-area-inset-bottom)`
- iOS 11.2 and earlier: `constant(safe-area-inset-bottom)`

:::caution
The `env()` function shipped in iOS 11 with the name `constant()`. Beginning with iOS 11.2 beta, `constant()` has been removed and replaced with `env()`. You can use the CSS fallback mechanism to support both versions. -[Webkit](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
:::

#### Example
```css
html[safe-area="true"] .my-class {
  bottom: calc(8px + constant(safe-area-inset-bottom)) !important;
  bottom: calc(8px + env(safe-area-inset-bottom)) !important;
}
```

### HTML attribute

BuildFire applies an HTML attribute to every plugin loaded on a device that uses safe areas. 
Your plugin must include this code. 
`html[safe-area="true"] .my-class {...}`

### Background Images

As we are applying padding to `<body>` tags, plugins should have their background images on the body. If a plugin does not conform to this standard, it may need to handle padding-bottom to avoid a gap below the background image. 

### Bottom navigation bars
 Increase the height with padding, using the following CSS:
```css
html[safe-area="true"] .my-class {
        padding-bottom: env(safe-area-inset-bottom) !important;
        padding-bottom: constant(safe-area-inset-bottom) !important;
}
```

Increase the height with calc():
```css
html[safe-area="true"] .my-class {
    height: calc(<original height> + env(safe-area-inset-bottom)) !important;
    height: calc(<original height> + constant(safe-area-inset-bottom)) !important;
}
```

Adjust any containers above the navbar to avoid overlap

### List items
Add padding-bottom
```css
html[safe-area="true"] .my-class {
    padding-bottom: env(safe-area-inset-bottom) !important;
    padding-bottom: constant(safe-area-inset-bottom) !important;
}
```
### Additional resources
* [Designing websites for iPhone X (webkit.org)](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
* [BuildFire Developer Portal](http://dev.buildfire.com/#/resources)
* [BuildFire SDK wiki](https://github.com/BuildFire/sdk/wiki)
* [For designers](https://poqcommerce.com/app-commerce/2019/01/design-with-safe-area/)
