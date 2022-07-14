---
id: context
title: Context
sidebar_label: Context
description: How to get apps'/plugins' contexts in BuildFire
keywords:
  - context
  - getContext
  - buildfire
slug: /context
---

# `buildfire.getContext`


### `getContext()` <div class="label control"></div><div class="label widget"></div>

`buildfire.getContext(callback)`

Used to get the context of the current app/plugin, like (appId, appTheme, pluginId... )

```javascript
buildfire.getContext((err, context) => {
  if(err) return console.log(`ERROR:${err}`);
  console.log(`Context: ${JSON.stringify(context)}`);
})
```

#### `callback(err, data)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object | The context object                                |

##### `data`

| Name                 | Type    | Description                                                                                                                                                                 |
| -------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKeys`            | object  | [API keys](/docs/api-keys/#api-keys) configure for the app                                                                                                                  |
| `appId`              | string  | Unique app id                                                                                                                                                               |
| `appTheme`           | object  | The customized [app theme object](/docs/appearance/#getapptheme) from the branding page in the control panel. In control side default control panel theme will be returned. |
| `configType`         | string  | The app's configuration type (plan); (`enterprise`, `professional`, `premium`, ...)                                                                                         |
| `device`             | object  | Information about the used device (`platform`, `manufacturer`, `version`, ...)                                                                                              |
| `instanceId`         | string  | The plugin instance id                                                                                                                                                      |
| `liveMode`           | number  | Returns (1) if live mode and (0) if draft mode                                                                                                                              |
| `pluginId`           | string  | The plugin type id                                                                                                                                                          |
| `widgetTheme`        | object  | Widget appTheme for usage in the control side only                                                                                                                          |
| `title`              | string  | The given title of the plugin (widget side only)                                                                                                                            |
| `offlineModeEnabled` | boolean | Tells if the offline mode is enabled for the app or not (mobile devices only)                                                                                               |
| `navbarEnabled`      | boolean | Tells if the navbar (footer) is enabled or not in the navbar settings                                                                                                       |


