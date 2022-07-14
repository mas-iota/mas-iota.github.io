---
id: bookmarks
title: Bookmarks
sidebar_label: Bookmarks
description: How to add Bookmarks using BuildFire SDK.
keywords:
  - buildfire
  - bookmarks
  - favorites
slug: /bookmarks
---

# `buildfire.bookmarks`

`buildfire.bookmarks` provides a simple way to allow users to save their favorite content for easy access. Saved bookmarks appear under the "bookmarks" section of the side menu.

## Methods

### `add()` <div class="label widget"></div>

`buildfire.bookmarks.add(options, callback)`

Adds a new bookmark

```javascript
buildfire.bookmarks.add(
  {
    id: "BOOKMARK_ID",
    title: "My Bookmark",
    icon: "https://placekitten.com/32/32",
    payload: {
      data: { myData: "Hello World" },
    },
  },
  (err, bookmark) => {
    if (err) return console.error(err);

    console.log("Bookmark ", bookmark);
  }
);
```

#### `options`

| Name      | Type   | Required | Description                                                                           | Default |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------- | ------- |
| `id`      | string | no       | Unique identifier                                                                     |
| `title`   | string | no       | Title of the item being bookmarked, will be displayed on the bookmarks page           |         |
| `icon`    | string | no       | Icon for the bookmarked item, will be displayed on the bookmarks page                 |         |
| `payload` | object | no       | Custom payload object that will be passed to plugin once its reached through bookmark |         |

#### `callback(err, bookmark)`

Callback after bookmark is created

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `err`      | string | error string, `null` when operation is successful |
| `bookmark` | object | Created bookmark                                  |

##### `bookmark`

| Name               | Type   | Description                                                                                                                                      |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`               | string | Unique identifier                                                                                                                                |
| `title`            | string | Bookmark title text                                                                                                                              |
| `icon`             | string | Bookmark icon url                                                                                                                                |
| `payload`          | object | Custom payload object that will be passed to plugin once its reached through bookmark                                                            |
| `pluginInstanceId` | string | Instance id of the plugin bookmark was created from. This is the plugin that will be navigated to once the bookmark is clicked on bookmarks page |

#### Consuming payload

The `payload` is a serializable object that can be used to pass data back to the plugin. The app will navigate to the plugin to which the bookmark belongs, and this data is passed along through [deeplinking](/docs/deep-links).

To access the payload from the bookmark simply use [`buildfire.deeplink.getData()`](/docs/deep-links#getdata)

```javascript
buildfire.deeplink.getData((deeplinkData) => {
  if (deeplinkData) console.log("Deep link data: ", deeplinkData);
});
```

---

### `delete()` <div class="label widget"></div>

`buildfire.bookmarks.delete(bookmarkId, callback)`

Deletes a bookmark

```javascript
buildfire.bookmarks.delete("BOOKMARK_ID", () => {
  console.log("Bookmark deleted successfully");
});
```

#### `bookmarkId`

| Name         | Type   | Required | Description                                 | Default |
| ------------ | ------ | -------- | ------------------------------------------- | ------- |
| `bookmarkId` | string | yes      | Unique identifier of bookmark to be deleted |

#### `callback()`

Callback function after bookmark has been deleted

---

### `getAll()` <div class="label widget"></div>

`buildfire.bookmarks.getAll(callback)`

Gets all bookmarks for current plugin

```javascript
buildfire.bookmarks.getAll((err, bookmarks) => {
  if (err) return console.error(err);

  console.log(bookmarks);
});
```

#### `callback(err, bookmarks)`

Callback function after bookmarks are fetched

| Name        | Type     | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| `err`       | string   | error string, `undefined` when operation is successful |
| `bookmarks` | [object] | Array of [bookmark](/docs/bookmarks#bookmark) objects  |
