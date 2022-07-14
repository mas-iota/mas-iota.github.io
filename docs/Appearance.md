---
id: appearance
title: Appearance
sidebar_label: Appearance
description: How to use Appearance
keywords:
  - buildfire
  - appearance
  - design
  - theme
slug: /appearance
---

# `buildfire.appearance`

Appearance is used to modify the appearance of the plugin and sometimes the surrounding platform.

:::caution Note
Appearance settings will go back to default after user has logged in or logged out. If you need your plugin to always have the same outline make sure to implement [onLogin](/docs/auth/#onlogin) and [onLogout](/docs/auth/#onlogout) handlers and call the appearance methods inside of it.
:::

## Methods

### `setHeaderVisibility()` <div class="label control"></div>

`buildfire.appearance.setHeaderVisibility(headerVisibility)`

Used to hide and show the Header in the Control Panel

```javascript
buildfire.appearance.setHeaderVisibility(true);
```

#### `headerVisibility`

| Name               | Type    | Required | Description                      | Default |
| ------------------ | ------- | -------- | -------------------------------- | ------- |
| `headerVisibility` | boolean | no       | Determines the header visibility | `false` |

---

### `titlebar.show()` <div class="label widget"></div>

`buildfire.appearance.titlebar.show(options, callback)`

Forces showing the title bar on the app emulator or the mobile app.

```javascript
buildfire.appearance.titlebar.show(null, (err) => {
  if (err) return console.error(err);

  console.log("Titlebar is visible");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after titlebar has been shown

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `titlebar.hide()` <div class="label widget"></div>

`buildfire.appearance.titlebar.hide()`

Forces hiding the title bar on the app emulator or the mobile app.

```javascript
buildfire.appearance.titlebar.hide(null, (err) => {
  if (err) return console.error(err);

  console.log("Titlebar is hidden");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after titlebar has been hidden

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `navbar.show()` <div class="label widget"></div>

`buildfire.appearance.navbar.show(options, callback)`

Forces showing the navbar on the app emulator or the mobile app.

:::note
In order for this method to work, Navbar must be enabled on Control panel `App Components > Navbar`
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.navbar.show(null, (err) => {
  if (err) return console.error(err);

  console.log("Navbar is visible");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after navbar has been shown

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `navbar.hide()` <div class="label widget"></div>

`buildfire.appearance.navbar.hide()`

Forces hiding the navbar on the app emulator or the mobile app.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.navbar.hide(null, (err) => {
  if (err) return console.error(err);

  console.log("Navbar is hidden");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after navbar has been hidden

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `sideMenu.show()` <div class="label widget"></div>

`buildfire.appearance.sideMenu.show(options, callback)`

Forces showing the side menu icon on the app emulator or the mobile app.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.sideMenu.show(null, (err) => {
  if (err) return console.error(err);

  console.log("Side menu icon is visible");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after side menu icon has been shown

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `sideMenu.hide()` <div class="label widget"></div>

`buildfire.appearance.sideMenu.hide()`

Forces hiding the side menu icon on the app emulator or the mobile app.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.sideMenu.hide(null, (err) => {
  if (err) return console.error(err);

  console.log("Side menu icon is hidden");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after side menu icon has been hidden

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `sideMenu.open()` <div class="label widget"></div>

`buildfire.appearance.sideMenu.open(options, callback)`

Opens the side menu on the app emulator or the mobile app.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.sideMenu.show(null, (err) => {
  if (err) return console.error(err);

  console.log("Side menu is opened");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after side menu has been opened

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `sideMenu.close()` <div class="label widget"></div>

`buildfire.appearance.sideMenu.close()`

Closes the side menu on the app emulator or the mobile app.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.sideMenu.close(null, (err) => {
  if (err) return console.error(err);

  console.log("Side menu is closed");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after side menu has been closed

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `fullScreenMode.enable()` <div class="label widget"></div>

`buildfire.appearance.fullScreenMode.enable(options, callback)`

Enables the fullscreen mode. This will hide the titlebar, navbar and menu icon if they are visible.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.fullScreenMode.enable(null, (err) => {
  if (err) return console.error(err);

  console.log("Fullscreen mode is enabled");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after fullscreen mode has been enabled

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `fullScreenMode.disable()` <div class="label widget"></div>

`buildfire.appearance.fullScreenMode.disable()`

Disables the fullscreen mode. Plugin will go to the same state before `fullScreenMode.enable` was called.

:::note
This functionality is not available on plugin tester
:::

```javascript
buildfire.appearance.fullScreenMode.disable(null, (err) => {
  if (err) return console.error(err);

  console.log("Fullscreen mode is disabled");
});
```

#### `options`

Can be passed as `null`. This is reserved for future use

#### `callback(err)`

Callback function after fullscreen mode has been disabled

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `getAppTheme()` <div class="label control"></div><div class="label widget"></div>

`buildfire.appearance.getAppTheme(callback)`

Pulls the `appTheme` object

```javascript
buildfire.appearance.getAppTheme((err, appTheme) => {
  if (err) return console.error(err);
  console.log(appTheme);
});
```

#### `callback(err, appTheme)`

Callback function after something is done

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `err`      | string | error string, `null` when operation is successful |
| `appTheme` | object | App theme object with fonts, colors and app name  |

##### `appTheme`

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `appName`  | string | error string, `null` when operation is successful |
| `colors`   | object | App theme object with all colors defined          |
| `fontId`   | string | Id of the font, usually the same as font name     |
| `fontName` | string | Name of the font                                  |

##### `appTheme.colors`

| Name                        | Type   | Description                             |
| --------------------------- | ------ | --------------------------------------- |
| `backgroundColor`           | string | Main background color                   |
| `titleBar`                  | string | App titlebar background color           |
| `titleBarTextAndIcons`      | string | Color of text and icons on app titlebar |
| `headerText`                | string | Color of text inside of header tags     |
| `bodyText`                  | string | Body text color                         |
| `icons`                     | string | Color of icons                          |
| `primaryTheme`              | string | Primary color                           |
| `successTheme`              | string | Success color                           |
| `infoTheme`                 | string | Info color                              |
| `warningTheme`              | string | Warning color                           |
| `dangerTheme`               | string | Danger color                            |
| `defaultTheme`              | string | Default color                           |
| `footerMenuBackgroundColor` | string | Background color of footer menu         |
| `footerMenuIconColor`       | string | Color of icons on footer menu           |

##### Example `appTheme` object

```json
{
  "appName": "test App",
  "colors": {
    "backgroundColor": "#0b0c0b",
    "titleBar": "#09a3ee",
    "titleBarTextAndIcons": "#ffffff",
    "headerText": "#09a3ee",
    "bodyText": "#3765c1",
    "icons": "#09a3ee",
    "primaryTheme": "#09a3ee",
    "successTheme": "#14cb5d",
    "infoTheme": "#69d5ff",
    "warningTheme": "#faba41",
    "dangerTheme": "#ed4b4b",
    "defaultTheme": "#0677ae",
    "footerMenuBackgroundColor": "#f05524",
    "footerMenuIconColor": "#f19969"
  },
  "fontId": "Helvetica",
  "fontName": "Helvetica"
}
```

---

### `onUpdate()` <div class="label widget"></div>

`buildfire.appearance.onUpdate(callback, allowMultipleHandlers)`

Allows you to pass a callback function that is called whenever the control updates appearance settings (appTheme) in the branding page. Use this method in the widget to be notified that the appearance has changed so you can reflect that change directly in the widget. Returns a cleanup function to clear the listener.


```javascript
buildfire.appearance.onUpdate(function(appTheme){
  console.log(`New appTheme: ${appTheme}`);
});
```

---

### `ready()` <div class="label widget"></div>

`buildfire.appearance.ready()`

Called when plugin content is fully loaded. Hides the [buildfire spinner](/docs/spinners) and makes the plugin immediately available.

---

### `triggerOnUpdate()` - deprecated <div class="label widget"></div>

`buildfire.appearance.triggerOnUpdate()`

It's possible that the appearance settings can change after the app has been loaded. If you wish to keep track of these changes, override the `buildfire.appearance.triggerOnUpdate` function with your own custom function. Within your custom function you can make an additional call to `buildfire.appearance.getAppTheme` and update the styling of your plugin as necessary.

:::note
It is recommended to use `onUpdate()` instead as the onUpdate will pass the appTheme itself and can subscribe multiple handlers to it 
:::

```javascript
buildfire.appearance.triggerOnUpdate = () => {
  buildfire.appearance.getAppTheme((err, appTheme) => {
    if (err) return console.error(err);

    console.log("New app theme", appTheme);
  });
};
```
