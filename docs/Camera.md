---
id: camera
title: Camera Service
sidebar_label: Camera Service
keywords:
  - buildfire
  - camera
  - service
slug: /camera
---

# `buildfire.services.camera`

This service accesses the device's camera.

:::caution Info
This service works only on devices
:::

## Requirements

### Widget

Include `camera.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/camera/camera.js"></script>
</head>
```

## Methods

### `getPicture()` <div class="label widget"></div>

`buildfire.services.camera.getPicture(options, callback)`

This method will open the device's default camera application that allows users to snap pictures by default. It may also ask the user for permission to access the Camera if it hasn't previously.

```javascript
buildfire.services.camera.getPicture({}, (err, imageData) => {
  if (err) return console.error(err);

  console.log("Image src is" + imageData);
});
```

#### `options`

| Name              | Type    | Required | Description                                                                                                                                                                                        | Default |
| ----------------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `quality`         | number  | no       | Quality of the saved image, expressed as a range of 0-100, where 100 is typically full resolution with no loss from file compression.                                                              | 50      |
| `destinationType` | number  | no       | Choose the format of the return value. 0 for Data_URL, 1 for FILE_URI.                                                                                                                             | 1       |
| `sourceType`      | number  | no       | Set the source of the picture. "0 for PHOTOLIBRARY, 1 for CAMERA and 2 for SAVEDPHOTOALBUM".                                                                                                       | 1       |
| `upload`          | boolean | no       | Allows automatic upload of the captured image to [pubilcFiles](/docs/public-files). The callback will return a url to the uploaded image. Setting this option to true will ignore destinationType. | false   |

#### `callback(err, imageData)`

Callback function that provides the image data

| Name        | Type   | Description                                           |
| ----------- | ------ | ----------------------------------------------------- |
| `err`       | string | error string, `null` when operation is successful     |
| `imageData` | string | Image src or data uri, depending on `destinationType` |

---

### `getVideo()` <div class="label widget"></div>

`buildfire.services.camera.getVideo(options, callback)`

This method will open the device's default camera application that allows users to record videos. It may also ask the user for permission to access the camera and microphone if it hasn't previously.

```javascript
buildfire.services.camera.getVideo({}, (err, videoData) => {
  if (err) return console.error(err);

  console.log("Video src is" + videoData.localURI);
});
```

#### `options`

| Name       | Type    | Required | Description                                                       | Default |
| ---------- | ------- | -------- | ----------------------------------------------------------------- | ------- |
| `quality`  | number  | no  | `0` will record in low quality, `1` records high quality               | 0       |
| `duration` | number  | no  | Maximum Recording duration, in seconds.                                | 300     |
| `upload`   | boolean | no  | Allows automatic upload of the captured video to [pubilcFiles](/docs/public-files). The callback will return a url to the uploaded video. | false   |

:::note
Some Android devices do not support `duration`. The video will be trimmed to match the max duration, and `trimmed` will return as `true`
:::

#### `callback(err, videoData)`

Callback function that provides the video data

| Name                 | Type    | Description                                                                             |
| -------------------- | ------- | --------------------------------------------------------------------------------------- |
| `err`                | string  | error string, `null` when operation is successful                                       |
| `imageData.localURI` | string  | Local URI for the captured video                                                        |
| `imageData.path`     | string  | Full path for the captured video                                                        |
| `imageData.url`      | string  | If `upload` was passed, this URL points to the uploaded video                           |
| `imageData.trimmed`  | boolean | If `duration` was passed, but the device does not support it, the video will be trimmed |

---
