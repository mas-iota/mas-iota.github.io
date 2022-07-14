---
id: public-files
title: Public Files
sidebar_label: Public Files
description:
keywords:
  - buildfire
  - public
  - files
  - sdk
  - fileserver
slug: /public-files
---

# `buildfire.services.publicFiles`

API accessible via the plugin SDK that allows plugin developers to upload files to our servers.

:::note
Additional charges may be added to the app owner. Current Maximum file size is 1 GB.
:::

## Requirements

### Widget

Include `publicFiles.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/publicFiles/publicFiles.js"></script>
</head>
```

### Control

Include `publicFiles.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/publicFiles/publicFiles.js"></script>
</head>
```

## Methods

### `showDialog()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.publicFiles.showDialog(options, onProgress, onComplete, callback)`

This method will show up the browse dialog in order to be used by the app user to select the needed files.

```javascript
buildfire.services.publicFiles.showDialog(
  { filter: ["image/jpeg", "image/png"], allowMultipleFilesUpload: true },
  (onProgress) => {
    console.log("onProgress" + JSON.stringify(onProgress));
  },
  (onComplete) => {
    console.log("onComplete" + JSON.stringify(onComplete));
  },
  (err, files) => {
    if (err) return console.error(err);

    console.log("Files", files);
  }
);
```

#### `options`

| Name                       | Type     | Required | Description                                                                                                                                                                                                                                                                     | Default |
| -------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `allowMultipleFilesUpload` | boolean  | no       | This property will give the plugin developers the functionality for allowing the users to select multiple files or single file.                                                                                                                                                 | `false` |
| `filter`                   | [string] | no       | This property will give the plugin developers the functionality to filter the file types allowed to be uploaded.                                                                                                                                                                |         |
| `permissions`              | object   | no       | This property will give the plugin developers the functionality to restrict file access by managing users who have read, write, delete and admin access to file. If no permissions object is passed, file will be public by default. Read more on permissions management below. |         |

#### `onProgress`

Function that will be invoked when uploading each file and it will return the percentage of completion for each file

| Name         | Type     | Required | Description                                                                                                          | Default |
| ------------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| `onProgress` | function | yes      | Function that will be invoked when uploading each file and it will return the percentage of completion for each file |         |

#### `onComplete`

Function will be invoked after each file has been uploaded and it will be called on each file completion.

| Name         | Type     | Required | Description                                                                                               | Default |
| ------------ | -------- | -------- | --------------------------------------------------------------------------------------------------------- | ------- |
| `onComplete` | function | yes      | Function will be invoked after each file has been uploaded and it will be called on each file completion. |         |

#### `callback(err, files)`

| Name    | Type     | Description                                       |
| ------- | -------- | ------------------------------------------------- |
| `err`   | string   | error string, `null` when operation is successful |
| `files` | [object] | Array of file objects                             |

#### file

| Name       | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `fileId`   | string | File unique id                               |
| `fileName` | string | Name of the file                             |
| `url`      | string | File url used to access the file             |
| `size`     | number | File size in KB                              |
| `status`   | []     | File upload status `"failed"` or `"success"` |
| `type`     | string | File type                                    |

---

### `getFileUrl()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.publicFiles.getFileUrl(options, callback)`

This method will get signed url that enables access to private files. Any file without "public" in read permissions is considered private.
:::note
In case the file is not private, it can be accessed directly using url returned from showDialog callback. Read more on permissions management below.
:::

```javascript
buildfire.services.publicFiles.getFileUrl(
  { fileId: "thisIsFileIdFromShowDialogCallback" },
  (err, file) => {
    if (err) return console.error(err);

    console.log("File url", file.url);
  }
);
```

#### `options`

| Name     | Type   | Required | Description    | Default |
| -------- | ------ | -------- | -------------- | ------- |
| `fileId` | string | yes      | Unique file id |         |

#### `callback(err, file)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `file` | object | Object containing `url`                           |

---

### `modifyPermissions()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.publicFiles.modifyPermissions(options, callback)`

This method will modify file permissions. User needs to be file admin in order to change file permissions. Read more on permissions management below.

```javascript
buildfire.services.publicFiles.modifyPermissions(
  {
    fileId: "thisIsFileIdFromShowDialogCallback",
    permissions: {
      read: ["public"],
      write: ["user@email.com"],
      delete: ["user@email.com"],
      admin: ["user@email.com"],
    },
  },
  (err, file) => {
    if (err) return console.error(err);

    console.log("File permissions updated", file);
  }
);
```

#### `options`

| Name          | Type   | Required | Description     | Default |
| ------------- | ------ | -------- | --------------- | ------- |
| `fileId`      | string | yes      | Unique file id  |         |
| `permissions` | object | yes      | New permissions |         |

#### `callback(err, file)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `file` | object | Modified file                                     |

---

### `deleteFile()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.publicFiles.deleteFile(options, callback)`

This method will modify file permissions. User needs to be file admin in order to change file permissions. Read more on permissions management below.

```javascript
buildfire.services.publicFiles.deleteFile(
  {
    fileId: "thisIsFileIdFromShowDialogCallback",
  },
  (err, file) => {
    if (err) return console.error(err);

    console.log("File deleted", file);
  }
);
```

#### `options`

| Name     | Type   | Required | Description    | Default |
| -------- | ------ | -------- | -------------- | ------- |
| `fileId` | string | yes      | Unique file id |         |

#### `callback(err, file)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `file` | object | Deleted file                                      |

---

### `uploadFiles()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.publicFiles.uploadFiles(files, options, onProgress, onComplete, callback)`

This method lets plugin developers upload files without showing file dialog. This way developer has more freedom on how to display file selection.

:::note
The user must be logged in otherwise the function will return a callback error
:::

```javascript
buildfire.services.publicFiles.uploadFiles(
  {
    files: [new File()],
  },
  (onProgress) => {
    console.log("onProgress" + JSON.stringify(onProgress));
  },
  (onComplete) => {
    console.log("onComplete" + JSON.stringify(onComplete));
  },
  (err, files) => {
    if (err) return console.error(err);

    console.log("Files", files);
  }
);
```

#### `files`

Array of javascript `File` objects

#### `options`

| Name                       | Type     | Required | Description                                                                                                                                                                                                                                                                     | Default |
| -------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `allowMultipleFilesUpload` | boolean  | no       | This property will give the plugin developers the functionality for allowing the users to select multiple files or single file.                                                                                                                                                 | `false` |
| `filter`                   | [string] | no       | This property will give the plugin developers the functionality to filter the file types allowed to be uploaded.                                                                                                                                                                |         |
| `permissions`              | object   | no       | This property will give the plugin developers the functionality to restrict file access by managing users who have read, write, delete and admin access to file. If no permissions object is passed, file will be public by default. Read more on permissions management below. |         |

#### `onProgress`

Function that will be invoked when uploading each file and it will return the percentage of completion for each file

| Name         | Type     | Required | Description                                                                                                          | Default |
| ------------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| `onProgress` | function | yes      | Function that will be invoked when uploading each file and it will return the percentage of completion for each file |         |

#### `onComplete`

Function will be invoked after each file has been uploaded and it will be called on each file completion.

| Name         | Type     | Required | Description                                                                                               | Default |
| ------------ | -------- | -------- | --------------------------------------------------------------------------------------------------------- | ------- |
| `onComplete` | function | yes      | Function will be invoked after each file has been uploaded and it will be called on each file completion. |         |

#### `callback(err, files)`

| Name    | Type     | Description                                       |
| ------- | -------- | ------------------------------------------------- |
| `err`   | string   | error string, `null` when operation is successful |
| `files` | [object] | Array of file objects                             |

#### file

| Name       | Type   | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `fileId`   | string | File unique id                               |
| `fileName` | string | Name of the file                             |
| `url`      | string | File url used to access the file             |
| `size`     | number | File size in KB                              |
| `status`   | []     | File upload status `"failed"` or `"success"` |
| `type`     | string | File type                                    |

---

### Managing Permissions

Permissions object

| Name     | Type  | Description                                             |
| -------- | ----- | ------------------------------------------------------- |
| `read`   | Array | Who can access file?                                    |
| `write`  | Array | Who can edit file?                                      |
| `delete` | Array | Who can delete file?                                    |
| `admin`  | Array | Who can change the read, write and delete arrays above? |

Each Array above can be made by each of the following:

- `userId` BuildFire user id
- `email` Email linked to BuildFire user
- `tag` BuildFire tag
- `public` word public

Example:

```json
{
  "read": ["public"],
  "write": ["janedoe@example.com", "__ADMIN__"],
  "delete": ["user@example.com"],
  "admin": ["user@example.com"]
}
```

In the example above, anyone with link can access file since read permission have word public inside. User with email `janedoe@example` and anyone with tag `__ADMIN__` can edit file. Only user with `user@example.com` can delete file and change file permissions.

If no permsissions object is passed in any of the functions above it defaults to

```json
{
  "read": ["public"],
  "write": ["public"],
  "delete": ["public"],
  "admin": ["user@example.com"]
}
```

where user@example.com is email of the user uploading the file.
