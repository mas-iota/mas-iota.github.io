---
id: thumbnail
title: Thumbnail
sidebar_label: Thumbnail
keywords:
  - buildfire
  - thumbnail
  - component
slug: /thumbnail
---

# `buildfire.components.images`

This component simplifies the development of the management controls when adding images. Typically used on the Control side of a plugin, it allows the app owner to add, edit and delete images.

This name space consists of one major class:

- `thumbnail` which is the class that instantiates an image component typically used on the control side to add, edit and delete images

## Requirements

### Control

```html
<head>
  <!-- Load helper.css to use our helper classes -->
  <link href="../../../../styles/helper.css" rel="stylesheet" />
  <link href="../../../../styles/siteIcons.css" rel="stylesheet" />

  <!-- JS -->
  <script src="../../../../scripts/buildfire.js"></script>
  <script src="../../../../scripts/buildfire/components/images/thumbnail.js"></script>
</head>
```

## `thumbnail`

Class instance for image thumbnail. Typically used on the control side to add, edit and delete images.

![Thumbnail](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/ImagesThumbnail.png)

For full example see https://github.com/BuildFire/textPlugin/blob/master/src/control/design/index.html

In your controller body create an html container element for thumbnail component

```html
<body>
  <div class=".thumbnail"></div>
</body>
```

### Methods

### `thumbnail()` <div class="label control"></div>

`let thumbnail = new buildfire.components.images.thumbnail(selector, options);`

Thumbnail class constructor method.

```javascript
let thumbnail = new buildfire.components.images.thumbnail(".thumbnail");
```

#### Arguments

| Name       | Type             | Required | Description                                                 | Default |
| ---------- | ---------------- | -------- | ----------------------------------------------------------- | ------- |
| `selector` | string           | no       | Css selector of element that will contain the sortable list |
| `options`  | string \| object | no       | Image url or options object                                 |

#### `options`

If options is not string (image url) it can be an object with following properties

| Name              | Type   | Required | Description                                                                                        | Default              |
| ----------------- | ------ | -------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| `imageUrl`        | string | yes      | A string holds a background image URL to load                                                      |
| `title`           | string | no       | Label for the image                                                                                | `"Background Image"` |
| `dimensionsLabel` | string | no       | A label to show under the image to give the user indication about the optimal image size to upload | `"750x1334"`         |

---

### `thumbnail.init()` <div class="label control"></div>

`thumbnail.init(selector)`

Initializes the thumbnail component

```javascript
let thumbnail = new buildfire.components.images.thumbnail();

thumbnail.init(".thumbnail");
```

#### `selector`

| Name       | Type   | Required | Description                                                       | Default |
| ---------- | ------ | -------- | ----------------------------------------------------------------- | ------- |
| `selector` | string | yes      | Css selector of element that will contain the thumbnail component |

---

### `thumbnail.loadbackground()` <div class="label control"></div>

`thumbnail.loadbackground(imageUrl)`

Loads an image into the component

```javascript
let thumbnail = new buildfire.components.images.thumbnail(".thumbnail");

thumbnail.loadbackground("https://placekitten.com/750/1334");
```

#### `imageUrl`

| Name       | Type   | Required | Description                                     | Default |
| ---------- | ------ | -------- | ----------------------------------------------- | ------- |
| `imageUrl` | string | yes      | Image url to be loaded into thumbnail component |

---

### `thumbnail.clear()` <div class="label control"></div>

`thumbnail.clear()`

Removes the image from thumbnail component

```javascript
let thumbnail = new buildfire.components.images.thumbnail(".thumbnail");

thumbnail.clear();
```

---

### Handlers

### `thumbnail.onDelete()` <div class="label control"></div>

`thumbnail.onDelete(imageUrl)`

An overridable handler that is called when the image is deleted

```javascript
let thumbnail = new buildfire.components.images.thumbnail(".thumbnail");

thumbnail.onDelete = (imageUrl) => {
  console.log("Image was delted", imageUrl);
};
```

---

### `thumbnail.onChange()` <div class="label control"></div>

`thumbnail.onChange(imageUrl)`

An overridable handler that is called when the image is changed

```javascript
let thumbnail = new buildfire.components.images.thumbnail(".thumbnail");

thumbnail.onChange = (imageUrl) => {
  console.log("Image was changed to", imageUrl);
};
```

---
