---
id: navigation
title: Navigation
sidebar_label: Navigation
keywords:
  - buildfire
  - navigation
slug: /navigation
---

# `buildfire.navigation`

Navigate to other plugins, home, or even an external web page.

## Methods

### `navigateTo()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.navigateTo(pluginData)`

Use this method to navigate away to a different plugin. This is used commonly in Launcher or Folder type plugins.

```javascript
buildfire.navigation.navigateTo({
  instanceId: "YOUR_INSTNACE_ID_HERE",
});
```

#### `pluginData`

| Name          | Type    | Required                      | Description                                                                                                             | Default |
| ------------- | ------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| `pluginId`    | string  | yes if there is no instanceId | The id of the plugin type you'd like to navigate to.                                                                    |
| `instanceId`  | boolean | no                            | Instance id of the plugin type you'd like to navigate to.                                                               |         |
| `folderName`  | number  | no                            | The folder name of the plugin that you'd like to navigate to.                                                           |         |
| `title`       | string  | no                            | The title that should show up in the title bar once the plugin is loaded.                                               |         |
| `queryString` | string  | no                            | Query string that will be passed to the next plugin's `window.location.search` ex` "name=Larry&age=36&showDetails=true" |         |

:::note
At minimum either the plugin id or the instance id must be provided. If a plugin id is passed without an instance id then the first instance of the specified plugin type will be navigated to.
:::

---

### `navigateToSocialWall()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.navigateToSocialWall(options, callback)`

This method is quick shortcut to navigate to community wall plugins without having to specify the community wall plugin type id. A common use for it is to navigate to any social wall instance without having to specify an instance id or a plugin type id.
If no community wall instance is found, it will try to look for a premium social wall instance. If not, lastly will check for a social wall instance.

```javascript
buildfire.navigation.navigateToSocialWall(
  {
    title: "Wall title",
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log("NAVIGATION FINISHED");
  }
);
```

#### `options`

| Name              | Type     | Required | Description                                                                                                                                                                                                            | Default                                     |
| ----------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `title`           | string   | no       | The title that should show up in the title bar once the plugin is loaded.                                                                                                                                              |
| `queryString`     | string   | no       | Query string that will be passed to the next plugin's `window.location.search`                                                                                                                                         |                                             |
| `wallUserIds`     | [string] | no       | Array of user ids you want to create a wall id for, where the generated wall id for social users will be appended to the `options.querystring`                                                                         |                                             |
| `pluginTypeOrder` | [string] | no       | The developer can use this option to change the default order we will be using to look for instances based on the type (_community wall_ => _premium social wall_ => _social wall_). Index 0 has the highest priority. | `['community', 'premium_social', 'social']` |

#### `callback(err, result)`

Callback function after navigation is finished

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful |
| `result` | object | `{ status: "completed" }`                         |

---

### `navigateHome()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.navigateHome()`

Closes out the current plugin and navigates to the Home Plugin.

```javascript
buildfire.navigation.navigateHome();
```

---

### `openWindow()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.openWindow(url, target, callback)`

Opens a web page in the app browser or in the system browser

```javascript
buildfire.navigation.openWindow("https://google.com", "_system");
```

#### `options`

| Name     | Type   | Required | Description                                                           | Default  |
| -------- | ------ | -------- | --------------------------------------------------------------------- | -------- |
| `url`    | string | yes      | The url of the web page you'd like to open                            |
| `target` | string | no       | `_blank` - opens in app browser, or `_system` opens in system browser | `_blank` |

#### `callback(err)`

Callback function when the window closes on widget side. Will fire immediately on Control side

---

### `onBackButtonClick()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.onBackButtonClick()`

This handler will be called when the user clicks on the back button on the title bar or hits the back button on their phone (if applicable). You can override this handler to modify they behavior within your own plugin.

```javascript
buildfire.navigation.onBackButtonClick = () => {
  console.log("BACK BUTTON CLICKED");
};
```

---

### `restoreBackButtonClick()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.restoreBackButtonClick()`

This function will restore the original functionality of `buildfire.navigation.onBackButtonClick` if it was overridden.

```javascript
buildfire.navigation.restoreBackButtonClick();
```

---

### `goBack()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.goBack()`

This function will trigger the Back functionality.

```javascript
buildfire.navigation.goBack();
```

---

### `makeSafeLinks()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.makeSafeLinks(element)`

Parses the external links and makes them open up in In App Browser, otherwise a link will open in the app itself and the user can't find a way to go back to the app. This is used commonly after assigning the data from WYSIWYG control in your widget.

```javascript
buildfire.navigation.makeSafeLinks("my_container_div");
```

#### `element`

| Name      | Type                | Required | Description                                        | Default |
| --------- | ------------------- | -------- | -------------------------------------------------- | ------- |
| `element` | string or `Element` | yes      | Id of the container element, or the element itself |

#### More Examples

```javascript
let element = document.getElementById("my_container_div");
buildfire.navigation.makeSafeLinks(element);
```

---

### `scrollTop()` <div class="label control"></div><div class="label widget"></div>

`buildfire.navigation.scrollTop()`

Use this method to have the containing Control Panel page to scroll up to the top. This is usually used when hiding and showing content in the plugin that may cause the page to scroll down further than the content.

```javascript
buildfire.navigation.scrollTop();
```

---

### `navigateToTab()` <div class="label control"></div>

`buildfire.navigation.navigateToTab(options, callback)`

This method provides the users a way to navigate the CP's tabs through the SDK, with the ability to pass deeplink data.

```javascript
buildfire.navigation.navigateToTab(
  {
    tabTitle: "Content",
    deeplinkData: { username: "John"}
  },
  (err) => {
    if (err) return console.error(err); // `Content` tab was not found

    console.log("NAVIGATION FINISHED");
  }
);
```

#### `options`

| Name           | Type   | Required | Description                                                                          | Default |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------ | ------- |
| `tabTitle`     | string | yes      | The title of the tab that the user wants to navigate to, this is case insensitive.   |
| `deeplinkData` | object | no       | An object which contains the deeplink data the user wants to pass to the opened tab. |

#### `callback(err)`

Callback function after navigation is finished

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | Error string, `null` when operation is successful |

---
