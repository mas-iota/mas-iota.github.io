---
id: file-system
title: File System
sidebar_label: File System
keywords:
  - buildfire
  - file
  - system
  - services
slug: /file-system
---

# `buildfire.services.fileSystem.fileManager`

The File System Service provides secure access to the file system.

:::caution Info
This service works only on devices
:::

## Requirements

### Widget

Include `fileManager.js` file in widget header, after the `buildfire.min.js` tag.

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/fileSystem/fileManager.js"></script>
</head>
```

## Methods

### `download()` <div class="label widget"></div>

`buildfire.services.fileSystem.fileManager.download(options, callback)`

This method allows you to download a file from a URI to the local persistent file system

```javascript
buildfire.services.fileSystem.fileManager.download(
  {
    uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    path: "/data/images",
    fileName: "image.jpg",
  },
  (err, filePath) => {
    if (err) return console.error(err);

    console.log("Downloaded File to ", filePath);
  }
);
```

:::tip
You can add `onProgress` parameter to track the file download progress.
:::

`buildfire.services.fileSystem.fileManager.download(options, onProgress, callback)`

```javascript
buildfire.services.fileSystem.fileManager.download(
  {
    uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    path: "/data/images",
    fileName: "image.jpg",
  },
  (onProgress) => {
      console.log("onProgress" + JSON.stringify(onProgress));
  },
  (err, filePath) => {
    if (err) return console.error(err);

    console.log("Downloaded File to ", filePath);
  }
);
```

#### `options`

| Name       | Type   | Required | Description                                                                      | Default |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------- | ------- |
| `uri`      | string | yes      | Url of the file to download to the local filesystem, ex. `https://.../image.png` |         |
| `path`     | string | yes      | Destination path for the file, ex. `/cache/images`                               |         |
| `fileName` | string | yes      | The name of downloaded file                                                      |         |

#### `onProgress`

Function that will be invoked repeatedly while the operation is in progress, returns a `percentage` property representing the current progress of the operation.

| Name         | Type     | Description                                                                                                                                                     |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onProgress` | function | Function that will be invoked repeatedly while the operation is in progress, returns a `percentage` property representing the current progress of the operation |

---
#### `callback(err, filePath)`

Callback function that will be called when the download is complete

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `err`      | string | Error string, `null` when operation is successful |
| `filePath` | string | The local path to the downloaded file             |

---

### `readFileAsText()` <div class="label widget"></div>

`buildfire.services.fileSystem.fileManager.readFileAsText(options, callback)`

This method allows you to read a file in the local persistent file system

```javascript
buildfire.services.fileSystem.fileManager.readFileAsText(
  { path: "/data/people/", fileName: "managers.json" },
  (err, fileContent) => {
    if (err) return console.error(err);

    console.log("File content", fileContent);
  }
);
```

#### `options`

| Name       | Type   | Required | Description              | Default |
| ---------- | ------ | -------- | ------------------------ | ------- |
| `path`     | string | yes      | File local path          |         |
| `fileName` | string | yes      | Name of the file to read |         |

#### `callback(err, fileContent)`

Callback function after the file has been read

| Name          | Type   | Description                                       |
| ------------- | ------ | ------------------------------------------------- |
| `err`         | string | Error string, `null` when operation is successful |
| `fileContent` | string | Contents of the file                              |

---

### `writeFileAsText()` <div class="label widget"></div>

`buildfire.services.fileSystem.fileManager.writeFileAsText(options, callback)`

This method allows you to write to a file in the local persistent file system

```javascript
buildfire.services.fileSystem.fileManager.writeFileAsText(
  {
    path: "/data/people/",
    fileName: "names.txt",
    content: "Daniel, Isabelle, Christian",
  },
  (err, isWritten) => {
    if (err) return console.error(err);

    console.log("File is written");
  }
);
```

#### `options`

| Name       | Type    | Required | Description                                | Default |
| ---------- | ------- | -------- | ------------------------------------------ | ------- |
| `path`     | string  | yes      | File local path                            |         |
| `fileName` | string  | yes      | Name of the file to write to               |         |
| `content`  | string  | yes      | Content to write to the file               |         |
| `append`   | boolean | no       | To append to existing file or overwrite it | `false` |

#### `callback(err, isWritten)`

Callback function after writing to file is complete

| Name        | Type    | Description                                       |
| ----------- | ------- | ------------------------------------------------- |
| `err`       | string  | Error string, `null` when operation is successful |
| `isWritten` | boolean | Indicates whether writing to file was successful  |

---

### `deleteFile()` <div class="label widget"></div>

`buildfire.services.fileSystem.fileManager.deleteFile(options, callback)`

This method allows you to delete a file in the local persistent file system

```javascript
buildfire.services.fileSystem.fileManager.deleteFile(
  { path: "/data/people/", fileName: "managers.json" },
  (err, isDeleted) => {
    if (err) return console.error(err);

    if (isDeleted) console.log("File is deleted");
  }
);
```

#### `options`

| Name       | Type   | Required | Description                | Default |
| ---------- | ------ | -------- | -------------------------- | ------- |
| `path`     | string | yes      | File local path            |         |
| `fileName` | string | yes      | Name of the file to delete |         |

#### `callback(err, isDeleted)`

Callback function after file is delete

| Name        | Type    | Description                                       |
| ----------- | ------- | ------------------------------------------------- |
| `err`       | string  | Error string, `null` when operation is successful |
| `isDeleted` | boolean | Indicates if file was deleted successfully        |

---
