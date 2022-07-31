---
id: plugin-json-file
title: '"plugin.json" File'
sidebar_label: '"plugin.json" File'
keywords:
  - buildfire
  - plugin
  - json
  - plugin.json
  - config
slug: /plugin-json-file
---

`plugin.json` is main configuration file used to configure the preferences for your plugin.

---

## Config File Elements:

### Author

- `author` (**required**): the developer/author's name for the plugin.

  _example_: `"author":"Harry Potter"`

### Plugin Name

- `pluginName` (**required**): the name for the plugin.

  _example_: `"pluginName":"Event Calendar"`

### Plugin Description

- `pluginDescription` (**required**): a short and meaningful description for your plugin .

  _example_: `"pluginDescription":"This is a simple Event Calendar plugin"`

### Support Email

- `supportEmail` (**required**): the support email for the plugin which will be used by App Owners for reporting bugs or suggestions.

  _example_: `"supportEmail":"support@buildfire.com"`

### Support Site

- `supportSite`: a url that will be used in the Control Panels > Plugin Help button. This will open up a new browser window with the url given.

  _example_: `"supportSite":"http://learn.appdocumentation.com/plugin-tutorials/using-the-text-wysiwyg-feature"`

### Disable Delete

- `disableDelete`: if set to true, once the plugin has been added to an app, it can't be deleted.

  _example_: `"disableDelete": true`

### Singleton

- `singleton `: if set to true, once the plugin has been added to an app, another instance can't be added.

  _example_: `"singleton": true`

### Menu

- `menu`: allows you to add a link to your plugin instance(s) from the left hand navigation of the control panel. The menu item can be a top level link, or can be a submenu item under "Plugins". You can specify the text used for the menu item, and the order to display the menu item. The sort is ordered from lowest to highest. For example, and item with a sort of 1, will appear before an item with a sort of 2. The out of the box menu items have a sort of 0. Therefore if you wish your menu item to come before the out of the box menu items, you need to specify a negative number. Each plugin can have one menu item. A single app can multiple custom menu items; one for each plugin that specifies a custom menu item. The sort order between menu items is respected.

> Example 1

```json
"menu": {
  "root": "Plugins", //Submenu item under Plugins
  "item": "My Plugin",
  "sort": -1 //Appear as the first item in the submenu
}
```

> Example 2

```json
"menu": {
  "root": "", //Top level menu item
  "item": "My Plugin",
  "sort": 1 //Appear on the bottom
}
```

### Control

- `control` (**required**): this element will be used to enable/disable the plugin major components (**Content, Design, Settings**) and allows defining additional **Custom Tabs** to show on the control, **Remove Header** to hide the control's header and **Height** to set the height of the control (in pixels).

> Example

```json
"control": {
  "content": {
    "enabled": true
  },
  "design": {
    "enabled": true
  },
  "settings": {
    "enabled": false
  },
  /* optional */
  "customTabs": [
    { "title": "BuildFire.com", "url": "http://www.buildfire.com" },
    { "title": "Custom Control", "url": "/customTab/index.html" }
  ],
  "removeHeader": true,
  "height": 600
}
```

### Custom Tabs

- `customTabs` (**not required**): tabs defined here will be appended to the control tabs and will have the specified URL loaded into the tab when opened. If the URL is a relative URL then it must map to a local file under **Control** folder.

### Widget

- `widget` (**not required**): this element will be used to show/hide the emulator on the BuildFire control panel and make your plugin controller full width when your plugin gets loaded on the control panel .

> Example

```json
"widget": {
  "enabled": true
}
```

### Features

- `features`: the supported features for your plugin.

> Example

```json
"features": [
  { "name": "GPS" },
  { "name": "Bluetooth" }
]
```

### Languages

- `languages`: the supported languages for your plugin

  _example_: `"languages": ["en" , "fr"]`
  :::note
  You **must use** the abbreviation for the language.
  :::

### Enable Offline Support

- `enableOfflineSupport`: this element will be used to specify whether the plugin on the mobile device side supports working offline (without an internet connection) or does the plugin not support this feature. An example is if your plugin pulls content from third party server, it will work on offline mode.

  _example_: `"enableOfflineSupport": true`
  :::note
  Datastore operations are supported in both online and offline mode.
  :::

### Media

- `media` (**not required**): allow you to provide screenshots and video that showcase your plugin feature and
  functionality on the control panel market place, you can help your plugin attract new users, in case `media` is not provided in the config file **the `image.png` in the `resources` folder will be used to showcase your plugin** in the marketplace.

- Media will be array of objects and **can't be empty** and each object should have two properties:
  - `type` :
    - `image-resource`: indicates that media is an image and it's located inside the resources
      folder for the plugin.
    - `image`: indicates that media is an image and it should be fetched from external URL.
    - `youtube-video`: indicates that media is youtube video and it should be fetched from
      external URL.
  - `path`: the path for the resource inside the resources folder or the URL for the external resource.

:::danger IMPORTANT
`youtube-video` && `image` types will be fetched from external URL and no need to be stored in the resources folder but for `image-resource` the image should be exists in the resources folder, otherwise you get an error while trying to upload the plugin through the developer portal.
:::

> Example

```json
"media": [
  { "type": "image-resource", "path": "promo.gif" },
  {
    "type": "image",
    "path": "https://buildfire.com/wp-content/uploads/2018/11/app-builder@2x.jpg"
  },
  {
    "type": "youtube-video",
    "path": "https://www.youtube.com/embed/Y_MjvCy8Ugo"
  }
]
```

### Keywords

- `keywords` (**not required / max 255 characters**): hidden keywords which will be used to filter out your plugin in the marketplace when the app owner search for plugins, this will increase your plugin discoverability in the marketplace.

  _example_: `"keywords": "social,twitter,tweets "`

### Require Login

- `requireLogin` (**not required**): this element will be used to force the user to login before the app load the widget.

  _example_: `"requireLogin": true`

:::note
The element will be available after plugin is published and opened in Control Panel
:::

## A full example of plugin.json file:

```json
{
  "author": "Harry Poter",
  "pluginName": "Event Calendar ",
  "pluginDescription": "This is a simple Event Calendar",
  "supportEmail": "support@buildfire.com",
  "supportSite": "http://learn.appdocumentation.com/plugin-tutorials/using-the-text-wysiwyg-feature",
  "control": {
    "content": {
      "enabled": true
    },
    "design": {
      "enabled": true
    },
    "settings": {
      "enabled": false
    }
  },
  "features": [{ "name": "GPS" }, { "name": "Bluetooth" }],
  "languages": ["en", "fr"],
  "enableOfflineSupport": true,
  "media": [
    { "type": "image-resource", "path": "promo.gif" },
    {
      "type": "image",
      "path": "https://buildfire.com/wp-content/uploads/2018/11/app-builder@2x.jpg"
    },
    {
      "type": "youtube-video",
      "path": "https://www.youtube.com/embed/Y_MjvCy8Ugo"
    }
  ],
  "keywords": "events,scheduling",
  "requireLogin": true
}
```
