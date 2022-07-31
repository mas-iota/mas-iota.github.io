---
id: local-storage
title: Local Storage
sidebar_label: Local Storage
keywords:
  - buildfire
  - local
  - storage
  - localstorage
slug: /local-storage
---

# `buildfire.localStorage`

## Shared Local Storage

LocalStorage works in isolated mode for plugins so that plugin instances don't share the same `localStorage`. This behavior is applied on the standard `window.localStorage` or using `buildfire.localStorage`.

:::warning important
LocalStorage is limited to 2k (2048) characters in length for the plugin instance as a whole. If more storage is required consider using [File System](/docs/file-system).
:::

:::tip
If you are trying to save data in order for it to be accessable on other plugins, consider using [`appData`](/docs/app-data). It has more features, its scalable and persisted.
:::

:::tip
It is recommended to use `buildfire.localStorage` instead of standard `window.localStorage` to have access to errors and to avoid browser incompatibilities in the future.
:::

## `buildfire.localStorage`

Acting very similar to `window.localStorage`. However, called _synchronously_ with a callback and a return value when applicable.

### `getItem()` <div class="label control"></div><div class="label widget"></div>

`buildfire.localStorage.getItem(key, callback)`

Retrieves the previously saved value under this key and returns the value inside the callback.

```javascript
buildfire.localStorage.getItem("myItem", (error, value) => {
  if (error) return console.error("something went wrong!", error);
  if (value) {
    console.log("myItem: ", value);
  } else {
    console.log("Nothing was previously saved");
  }
});
```

#### `key`

| Name  | Type   | Required | Description                     | Default |
| ----- | ------ | -------- | ------------------------------- | ------- |
| `key` | string | yes      | Unique identifier for your data |

#### `callback(err, value)`

| Name    | Type   | Description                                       |
| ------- | ------ | ------------------------------------------------- |
| `err`   | string | error string, `null` when operation is successful |
| `value` | string | Value saved in localstorage                       |

---

### `setItem()` <div class="label control"></div><div class="label widget"></div>

`buildfire.localStorage.setItem(key, value, callback)`

This method will tell the app to save the `value` under the `key` and does not return a value.

```javascript
buildfire.localStorage.setItem("myItem", "Hello World", (error) => {
  if (error) return console.error("something went wrong!", error);
  console.log("All is well, data saved and other plugins can now access it");
});
```

#### `key`

| Name  | Type   | Required | Description                     | Default |
| ----- | ------ | -------- | ------------------------------- | ------- |
| `key` | string | yes      | Unique identifier for your data |

#### `value`

| Name    | Type   | Required | Description                         | Default |
| ------- | ------ | -------- | ----------------------------------- | ------- |
| `value` | string | yes      | Value to be saved in `localStorage` |

#### `callback(err)`

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `removeItem()` <div class="label control"></div><div class="label widget"></div>

`buildfire.localStorage.removeItem(key, callback)`

Removes the previously saved value under the `key` and does not return a value.

```javascript
buildfire.localStorage.removeItem("myItem", (error) => {
  if (error) return console.error("something went wrong!", error);

  console.log("value removed");
});
```

#### `key`

| Name  | Type   | Required | Description                     | Default |
| ----- | ------ | -------- | ------------------------------- | ------- |
| `key` | string | yes      | Unique identifier for your data |

#### `callback(err)`

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `clear()` <div class="label control"></div><div class="label widget"></div>

`buildfire.localStorage.clear(callback)`

Removes all plugin's `localStorage` keys and values. It does not return any value.

```javascript
buildfire.localStorage.clear((error) => {
  if (error) return console.error("something went wrong!", error);

  console.log("localStorage cleared");
});
```

## `window.localStorage`

### `getItem()` <div class="label control"></div><div class="label widget"></div>

`window.localStorage.getItem(key)`

Gets the item from local storage

```javascript
let myItem = window.localStorage.getItem("myItem");
```

---

### `setItem()` <div class="label control"></div><div class="label widget"></div>

`window.localStorage.setItem(key, value)`

Asigns a new value to local storage item

```javascript
window.localStorage.setItem("myItem", "newValue");
```

---

### `removeItem()` <div class="label control"></div><div class="label widget"></div>

`window.localStorage.removeItem(key)`

Removes a value from local storage

```javascript
window.localStorage.removeItem("myItem");
```

---

### `clear()` <div class="label control"></div><div class="label widget"></div>

`window.localStorage.clear()`

Clears whole local storage

```javascript
window.localStorage.clear();
```

---

:::note
Using indexed syntax `[]` is not supported and is not persisted in iOS. `setItem` and `getItem` should be used instead.
:::
