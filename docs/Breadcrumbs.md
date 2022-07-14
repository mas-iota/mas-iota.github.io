---
id: breadcrumbs
title: Breadcrumbs
sidebar_label: Breadcrumbs
description:
keywords:
  - buildfire
  - breadcrumbs
  - navigation
  - history
slug: /breadcrumbs
---

# `buildfire.history`

Breadcrumbs keep track of user navigation between different plugins and sections within a plugin. You can add to breadcrumbs inside your plugin to give the user the ability to navigate back to any breadcrumb you added.

## Methods

### `push()` <div class="label control"></div><div class="label widget"></div>

`buildfire.history.push(label, options)`

Whenever you drill down a level in your plugin and wish to reflect this in the breadcrumb simply use push to add to the breadcrumb history

```javascript
buildfire.history.push("Log in");
```

#### `label`

| Name    | Type   | Required | Description                            | Default |
| ------- | ------ | -------- | -------------------------------------- | ------- |
| `label` | string | no       | Breadcrumb label, can be used as title |         |

#### `options`

Options object where you can pass the data that is needed to take the user back to the view when breadcrumb is clicked (optional).

| Name                  | Type    | Required | Description                                       | Default |
| --------------------- | ------- | -------- | ------------------------------------------------- | ------- |
| `showLabelInTitlebar` | boolean | no       | Shows `label` instead of plugin title in titlebar | `false` |

#### More Examples

```javascript
buildfire.history.push("Profile", {
  showLabelInTitlebar: true,
  user: { name: "John Doe" },
  id: 1234,
});
```

---

### `pop()`<div class="label control"></div><div class="label widget"></div>

`buildfire.history.pop()`

Whenever you would want to go back one level in your own plugin breadcrumbs and wish to reflect this in the breadcrumb simply use pop to pop the latest breadcrumb in breadcrumb history.

:::note
You can only pop breadcrumbs added by your plugin.
:::

```javascript
buildfire.history.pop();
```

---

### `onPop()` <div class="label control"></div><div class="label widget"></div>

`buildfire.history.onPop(callback, allowMultipleHandlers)`

Event that triggers whenever a breadcrumb is popped

```javascript
buildfire.history.onPop((breadcrumb) => {
  console.log("Breadcrumb popped", breadcrumb);
});
```

#### `callback(breadcrumb)`

Function that will get called on every event.

| Name         | Type   | Description                       |
| ------------ | ------ | --------------------------------- |
| `breadcrumb` | object | Breadcrumb object that was popped |

#### `allowMultipleHandlers`

| Name                    | Type    | Required | Description                                     | Default |
| ----------------------- | ------- | -------- | ----------------------------------------------- | ------- |
| `allowMultipleHandlers` | boolean | no       | Tells the method to override all other handlers | `false` |

---

### `get()` <div class="label control"></div><div class="label widget"></div>

`buildfire.history.get(options, callback)`

Used to retrieve the list of all breadcrumbs

```javascript
buildfire.history.get(
  {
    pluginBreadcrumbsOnly: true,
  },
  (err, result) => {
    console.info("Current Plugin Breadcrumbs", result);
  }
);
```

#### `options`

Function that will get called on every event.

| Name                    | Type    | Required | Description                                      | Default |
| ----------------------- | ------- | -------- | ------------------------------------------------ | ------- |
| `pluginBreadcrumbsOnly` | boolean | no       | Filter out to current plugin breadcrumbs if true | `false` |

#### `callback(err, result)`

| Name     | Type     | Description                                       |
| -------- | -------- | ------------------------------------------------- |
| `err`    | string   | Error string, `null` when operation is successful |
| `result` | [object] | Array of breadcrumb objects                       |
