---
id: image-preview
title: Image Preview
sidebar_label: Image Preview
keywords:
  - buildfire
  - image
  - preview
  - component
slug: /image-preview
---

# `buildfire.imagePreviewer`

The fullscreen image preview allows a developer to instantiate a fullscreen image carousel in app. This is to give a better viewing experience to the end user.

## Methods

### `show()` <div class="label widget"></div>

`buildfire.imagePreviewer.show(options, callback)`

Displayes a full screen image previewer

```javascript
buildfire.imagePreviewer.show(
  {
    images: ["https://placekitten.com/"],
  },
  () => {
    console.log("Image previewer closed");
  }
);
```

#### `options`

| Name     | Type     | Required | Description                                                  | Default |
| -------- | -------- | -------- | ------------------------------------------------------------ | ------- |
| `images` | [string] | tes      | Array of image urls to display in full screen image carousel |
| `index`  | number   | no       | Index of image to start carousel from                        | 0       |

#### `callback()`

Callback function that gets called when carousel is closed
