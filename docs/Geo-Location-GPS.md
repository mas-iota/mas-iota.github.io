---
id: geo-location-gps-feature
title: Geo Location (GPS) Feature
sidebar_label: Geo Location (GPS) Feature
description:
keywords:
  - buildfire
  - geo
  - location
  - geolocation
  - service
  - gps
  - tracking
slug: /geo-location-gps-feature
---

# `buildfire.geo`

This service lets you access users location. It helps request and watch the location of the device.

## Methods

### `getCurrentPosition()` <div class="label control"></div><div class="label widget"></div>

`buildfire.geo.getCurrentPosition(options, callback)`

Gets the device current location

```javascript
buildfire.geo.getCurrentPosition(null, (err, position) => {
  if (err) return console.error(err);

  console.log("Lat", position.coords.latitude);
  console.log("Lng", position.coords.longitude);
});
```

#### `options`

| Name                 | Type    | Required | Description                                                                                                                                                                                                                                                              | Default |
| -------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `enableHighAccuracy` | boolean | no       | Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning. | `false` |
| `timeout`            | number  | no       | The maximum length of time (milliseconds) that is allowed to pass from the call to `getCurrentPosition` until the success callback executes. If the success callback is not invoked within this time, the error callback is passed a `PositionError.TIMEOUT` error code. |         |
| `maximumAge`         | number  | no       | Accept a cached position whose age is no greater than the specified time in milliseconds.                                                                                                                                                                                |

#### `callback(err, position)`

Callback function after the geolocation has beed retrieved

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `err`      | string | error string, `null` when operation is successful |
| `position` | object | Retrieved geolocation position                    |

#### `position`

| Name           | Type    | Description                                           |
| -------------- | ------- | ----------------------------------------------------- |
| `coords`       | object  | Object containing coordinates                         |
| `timestamp`    | number  | Location timestamp                                    |
| `isBackground` | boolean | Indicates whether location was captured in background |

##### `position.coords`

| Name               | Type   | Description                           |
| ------------------ | ------ | ------------------------------------- |
| `accuracy`         | number | Location estimated accuracy in meters |
| `latitude`         | number | Location latitude                     |
| `longitude`        | number | Location longitude                    |
| `altitude`         | number | Location altitude                     |
| `altitudeAccuracy` | number | Altitude accuracy                     |
| `speed`            | number | Movement speed if device is moving    |
| `heading`          | number | Movement direction as angle           |

---

### `watchPosition()` <div class="label control"></div><div class="label widget"></div>

`buildfire.geo.watchPosition(options, callback)`

Allows you watch the devices location and will trigger every time a location change occurs

```javascript
buildfire.geo.watchPosition({ timeout: 30000 }, (position) => {
  console.log("Position changed");
  console.log("New Lat", position.coords.latitude);
  console.log("New Lng", position.coords.longitude);
});
```

:::tip
You can use `watchPosition` in combination with [background service](/docs/background-services) to track users position in background. Note that additional item `BackgroundGeo` is needed in `plugin.json` file.
:::

#### `options`

| Name                 | Type    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                           | Default |
| -------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `enableHighAccuracy` | boolean | no       | Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning.                                                                                                                                                              | `false` |
| `timeout`            | number  | no       | The maximum length of time (milliseconds) that is allowed to pass from the call to `geolocation.watchPosition` until the corresponding success callback executes. If the success callback is not invoked within this time, the error callback is passed a `PositionError.TIMEOUT` error code. When used in conjunction with `geolocation.watchPosition`, the error callback will be called on an interval every timeout milliseconds. |         |
| `maximumAge`         | number  | no       | Accept a cached position whose age is no greater than the specified time in milliseconds.                                                                                                                                                                                                                                                                                                                                             |

#### `callback(position)`

Callback function triggered every time a location change occurs on device

#### `position`

Object containing position and `watchId`.

| Name           | Type    | Description                                                          |
| -------------- | ------- | -------------------------------------------------------------------- |
| `watchId`      | number  | Remember the `watchId` so that you can stop watching position later. |
| `coords`       | object  | See [position.coords](/docs/geo-location-gps-feature#positioncoords) |
| `timestamp`    | number  | Location timestamp                                                   |
| `isBackground` | boolean | Indicates whether location was captured in background                |

---

### `clearWatch()` <div class="label control"></div><div class="label widget"></div>

`buildfire.geo.clearWatch(watchId, callback)`

Stops watching the location changes of the device

```javascript
buildfire.geo.clearWatch(1, () => {
  console.log("Stopped watching position");
});
```

#### `watchId`

The id you were given in the callback of `watchPosition`

| Name      | Type   | Required | Description                                              | Default |
| --------- | ------ | -------- | -------------------------------------------------------- | ------- |
| `watchId` | number | yes      | The id you were given in the callback of `watchPosition` |         |

#### `callback()`

Optional callback function that is called when the watcher is cleared
