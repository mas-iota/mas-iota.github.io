---
id: imagelib
title: Image Library
sidebar_label: Image Library
description:
keywords:
  - buildfire
  - imagelib
  - image
  - library
  - icons
  - resize
  - crop
slug: /imagelib
---

# `buildfire.imageLib`

Image library is used **to store and manipulate images on the BuildFire image server.** This article goes through the steps for using Image Lib in your plugin.

There are 3 ways you can access your Image Library images:

1. Directly. When an image is selected from the image lib you are given a url that allows you to access the image directly from the image server
2. CDN. When you pass the image lib url to the `buildfire.imagelib` framework for resizing or cropping the framework redirects you to a cached version of the manipulated image for speed. However, this still requires an internet connection
3. (DEPRECATED) Locally. When you pass the image lib url to the `buildfire.imagelib.local` framework for resizing or cropping. The buildfire.js then checks if the image is available locally. If so, it will then serve the image from the local file system for speed and offline more. If not found, then will revert back to the CDN.

The level of complexity of implementation increases from 1 to 3 how ever the performance increases with each step.

:::tip
Because the framework may adjust the width and height of the image based on pixel density it is always a good idea to constrain your image size with CSS and do not rely on the image size fitting perfectly
:::
## Methods

### `showDialog()` <div class="label control"></div>

`buildfire.imageLib.showDialog(options, callback)`

Displays a dialog that helps the user upload, reuse and manage images and icons. It also provides an integrated search for stock images that can be freely used inside the BuildFire app.

```javascript
buildfire.imageLib.showDialog({}, (err, result) => {
  if (err) return console.error(err);

  console.log("Selected images and icons: ", result);
});
```

#### `options`

| Name             | Type    | Required | Description                                                 | Default |
| ---------------- | ------- | -------- | ----------------------------------------------------------- | ------- |
| `showIcons`      | boolean | no       | Shows the "Icons" tab inside the dialog                     | `true`  |
| `showFiles`      | boolean | no       | Shows the "My Images" tab inside the dialog                 | `true`  |
| `multiSelection` | boolean | no       | Allows the user to choose multiple icons and multiple files | `true`  |

:::note
You can either select stock images or uploaded images at once. Selecting both will return only the latest selected items.
:::

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                            |
| -------- | ------ | ------------------------------------------------------ |
| `err`    | string | error string, `undefined` when operation is successful |
| `result` | object | Result object containing selected files and/or icons   |

##### `result`

| Name            | Type     | Description                                                           |
| --------------- | -------- | --------------------------------------------------------------------- |
| `selectedFiles` | [string] | Array of image urls selected from "My Images" or "Stock Images" tab   |
| `selectedIcons` | [string] | Array of selected glyphicon icons ex. `["glyphicon glyphicon-cloud"]` |

---

### `resizeImage()` <div class="label control"></div><div class="label widget"></div>

`buildfire.imageLib.resizeImage(url, options, element, callback)`

Because users may upload large high resolution images to the image server, it may be necessary to resize the image before downloading it to the client to increase performance of your plugin. This method allows you to pass the url of the image with options to resize it and download a smaller, properly sized image.

```javascript
let resizedImage = buildfire.imageLib.resizeImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "half_width", aspect: "16:9" }
);
console.log("Resized image url", resizedImage);
```

:::note
`element` and `callback` are optional parameters used to enable image caching on devices.
:::

#### `url`

| Name  | Type   | Required | Description                    | Default |
| ----- | ------ | -------- | ------------------------------ | ------- |
| `url` | string | yes      | Url of the image to be resized |         |

#### `options`

| Name                | Type    | Required | Description                                                                                   | Default |
| ------------------- | ------- | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `size`              | string  | yes      | Desired image width size                                                                      |         |
| `aspect`            | string  | yes      | Desired image aspect ratio                                                                    |         |
| `disablePixelRatio` | boolean | no       | Disables the multiplier of the screens pixel ration to account for things like retina display | `false` |

##### `options.size`

Determines image width. Two types of sizes are available, fixed and responsive. Responsive sizes will detect the screen width and provide the correct size. For example, `half_width` will calculate image width to fill half the screen, regardless of device size.

###### Fixed

| Name     | Size   |
| -------- | ------ |
| `"xxs"`  | 32px   |
| `"xs"`   | 64px   |
| `"s"`    | 128px  |
| `"m"`    | 200px  |
| `"l"`    | 304px  |
| `"xl"`   | 416px  |
| `"xxl"`  | 600px  |
| `"720"`  | 720px  |
| `"1080"` | 1080px |
| `"1440"` | 1440px |

###### Responsive

| Name              | Size                        |
| ----------------- | --------------------------- |
| `"full_width"`    | Full device width           |
| `"half_width"`    | Half device width           |
| `"third_width"`   | One third of device width   |
| `"quarter_width"` | One quarter of device width |
| `"fifth_width"`   | One fifth of device width   |
| `"sixth_width"`   | One sixth of device width   |

##### `options.aspect`

Aspect will calculate the image height based on the `size` passed.

| Aspect     | Description                       |
| ---------- | --------------------------------- |
| `"1:1"`    | Square image, height equals width |
| `"4:3"`    | Height is 3/4 of width            |
| `"16:9"`   | Height is 9/16 of width           |
| `"9:16"`   | Height is 16/9 of width           |
| `"11:5"`   | Height is 5/11 of width           |
| `"4:1"`    | Height is 1/4 of width            |
| `"2.39:1"` | Height is 1/2.39 of width         |

:::warning important
`aspect` and `size` must be used together. Both are required!
:::

:::note
If image size does not have the same aspect ratio as chosen in options, it will not be cropped to fit that aspect ratio when used in `resizeImage`. The image will be conained inside of that aspect ratio.
:::

#### `element`

BuildFire's `imageLib` provides native caching to accelerate load times. Passing the `element` or `callback` parameter will enable the cache.

:::caution note
Caching only applies on devices
:::

| Name      | Type        | Required | Description                                                                                                                                                                                 | Default |
| --------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `element` | HTMLElement | no       | If an `<img/>` is passed, sets the elements src to the locally cached image. If any other element is passed, sets the elements `background-image` css property to the locally cached image. |

#### callback(resizedImage)

:::caution note
Caching only applies on devices
:::

| Name           | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `resizedImage` | string | Cached image local path |

#### More Examples

Responsive full width image, 16:9 aspect ratio, caching enabled

```javascript
let element = document.body;
let resizedImage = buildfire.imageLib.resizeImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "full_width", aspect: "16:9" },
  element,
  (cachedImageUrl) => {
    console.log("Cached image url", cachedImageUrl);
  }
);
console.log("Resized image url", resizedImage);
```

Responsive half width image, 16:9 aspect ratio

```javascript
//
let resizedImage = buildfire.imageLib.resizeImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "half_width", aspect: "16:9" }
);
console.log("Resized image url", resizedImage);
```

Fixed icon, square aspect ratio

```javascript
let resizedImage = buildfire.imageLib.resizeImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "xs", aspect: "1:1" }
);
console.log("Resized image url", resizedImage);
```

Responsive icon, square aspect ratio

```javascript
let resizedImage = buildfire.imageLib.resizeImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "sixth_width", aspect: "1:1" }
);
console.log("Resized image url", resizedImage);
```

---

### `cropImage()` <div class="label control"></div><div class="label widget"></div>

`buildfire.imageLib.cropImage(url, options)`

Because users may upload large high resolution images to the image server, it may be necessary to crop the image before downloading it to the client to increase performance of your plugin. This method allows you to pass the url of the image with options to crop it and download a smaller, properly sized image. Function is _synchronous_ and returns modified image url.

```javascript
let croppedImage = buildfire.imageLib.cropImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "half_width", aspect: "16:9" }
);
console.log("Cropped image url", croppedImage);
```

#### `url`

| Name  | Type   | Required | Description                    | Default |
| ----- | ------ | -------- | ------------------------------ | ------- |
| `url` | string | yes      | Url of the image to be resized |         |

#### `options`

Same as [options for `resizeImage()`](/docs/imagelib#options-1)

| Name                | Type    | Required | Description                                                                                   | Default |
| ------------------- | ------- | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `size`              | string  | yes      | Desired image width size                                                                      |         |
| `aspect`            | string  | yes      | Desired image aspect ratio                                                                    |         |
| `disablePixelRatio` | boolean | no       | Disables the multiplier of the screens pixel ration to account for things like retina display | `false` |

#### `element`

BuildFire's `imageLib` provides native caching to accelerate load times. Passing the `element` or `callback` parameter will enable the cache.

:::caution note
Caching only applies on devices
:::

| Name      | Type        | Required | Description                                                                                                                                                                                 | Default |
| --------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `element` | HTMLElement | no       | If an `<img/>` is passed, sets the elements src to the locally cached image. If any other element is passed, sets the elements `background-image` css property to the locally cached image. |

#### callback(resizedImage)

:::caution note
Caching only applies on devices
:::

| Name           | Type   | Description             |
| -------------- | ------ | ----------------------- |
| `resizedImage` | string | Cached image local path |

#### More Examples

Responsive full width image, 16:9 aspect ratio, caching enabled

```javascript
let element = document.body;
let croppedImage = buildfire.imageLib.cropImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "full_width", aspect: "16:9" },
  element,
  (cachedImageUrl) => {
    console.log("Cached image url", cachedImageUrl);
  }
);
```

Responsive half width image, 16:9 aspect ratio

```javascript
//
let croppedImage = buildfire.imageLib.cropImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "half_width", aspect: "16:9" }
);
console.log("Cropped image url", croppedImage);
```

Fixed icon, square aspect ratio

```javascript
let croppedImage = buildfire.imageLib.cropImage(
  "https://www.google.com/images/srpr/logo11w.png",
  { size: "xs", aspect: "1:1" }
);
console.log("Cropped image url", croppedImage);
```

---

## DEPRECATED METHODS

:::warning
The following section of `imageLib` is deprecated and should not be used
:::

### `local.resizeImage();`

`buildfire.imageLib.local.resizeImage(url, options, callback)`

This option will attempt to fetch the file from the local device if not found it will default back to CDN mode. Because this is meant for use on a physical device. When on the web it will revert to CDN mode. If the file is not located on the device it will also revert back to CDN mode automatically.

#### `url`

| Name  | Type   | Required | Description                    | Default |
| ----- | ------ | -------- | ------------------------------ | ------- |
| `url` | string | yes      | Url of the image to be resized |         |

#### `options`

| Name                | Type   | Required | Description                                                                                   | Default |
| ------------------- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `width`             | number | yes      | Desired image width in pixels or "full" to calculate 100% of device width                     |         |
| `height`            | number | yes      | Desired image height in pixels or "full" to calculate 100% of device height                   |         |
| `disablePixelRatio` | string | no       | Disables the multiplier of the screens pixel ration to account for things like retina display | `false` |

#### `callback(err, resizedUrl)`

| Name         | Type   | Description                                       |
| ------------ | ------ | ------------------------------------------------- |
| `err`        | string | error string, `null` when operation is successful |
| `resizedUrl` | string | Resized image url                                 |

---
### `local.cropImage();`

`buildfire.imageLib.local.cropImage(url, options, callback)`

This option will attempt to fetch the file from the local device if not found it will default back to CDN mode. Because this is meant for use on a physical device. When on the web it will revert to CDN mode. If the file is not located on the device it will also revert back to CDN mode automatically.

#### `url`

| Name  | Type   | Required | Description                    | Default |
| ----- | ------ | -------- | ------------------------------ | ------- |
| `url` | string | yes      | Url of the image to be resized |         |

#### `options`

| Name                | Type   | Required | Description                                                                                   | Default |
| ------------------- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `width`             | number | yes      | Desired image width in pixels or "full" to calculate 100% of device width                     |         |
| `height`            | number | yes      | Desired image height in pixels or "full" to calculate 100% of device height                   |         |
| `disablePixelRatio` | string | no       | Disables the multiplier of the screens pixel ration to account for things like retina display | `false` |

#### `callback(err, resizedUrl)`

| Name         | Type   | Description                                       |
| ------------ | ------ | ------------------------------------------------- |
| `err`        | string | error string, `null` when operation is successful |
| `resizedUrl` | string | Resized image url                                 |
