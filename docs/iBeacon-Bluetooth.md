---
id: ibeacon-bluetooth
title: iBeacon Bluetooth
sidebar_label: iBeacon Bluetooth
description:
keywords:
  - buildfire
  - bluetooth
  - ibeacon
  - service
slug: /ibeacon-bluetooth
---

# `buildfire.services.bluetooth.iBeacon`

iBeacon is a protocol developed by Apple and introduced at the Apple Worldwide Developers Conference in 2013.[1] Various vendors have since made iBeacon-compatible hardware transmitters - typically called beacons - a class of Bluetooth low energy (BLE) devices that broadcast their identifier to nearby portable electronic devices. The technology enables smartphones, tablets, and other devices to perform actions when in close proximity to an iBeacon ref: https://en.wikipedia.org/wiki/IBeacon

:::caution Info
This service works only on devices
:::

## Requirements

### Widget

Include `iBeacon.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/bluetooth/iBeacon.js"></script>
</head>
```

### `plugin.json`

In [plugin.json](/docs/plugin-json-file) add `iBeacon` in your features array `"features" : [{"name" : "iBeacon"}]`

## Methods

### `createBeaconRegion()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.createBeaconRegion(uuid, identifier, minor, major)`

Use this factory method to create a beacon region. This synchronous function will return `beaconRegion`

:::note
If you specify only a uuid and not the major or minor then it will scan all majors and minors
:::

```javascript
const beaconRegion = buildfire.services.bluetooth.iBeacon.createBeaconRegion(
  "cd5bdf9e-9339-4678-9c07-c4c627894fe6",
  "myIbeacon"
);
```

#### `arguments`

| Name         | Type   | Required | Description                          | Default |
| ------------ | ------ | -------- | ------------------------------------ | ------- |
| `uuid`       | string | yes      | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | no       | Unique identifier                    |         |
| `minor`      | number | no       | iBeacon minor number                 |         |
| `major`      | number | no       | iBeacon major number                 |         |

---

### `startMonitoring()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.startMonitoring(beaconRegion, callback)`

Used to tell the OS to begin listening for this region of beacons. When you enter or exit a region events will trigger such as `onRegionEntered` and `onRegionExited`. The OS will wake up the app in the background if it's killed and trigger these events. The app will be alive only for a few seconds.

```javascript
const beaconRegion = buildfire.services.bluetooth.iBeacon.createBeaconRegion(
  "cd5bdf9e-9339-4678-9c07-c4c627894fe6",
  "myIbeacon"
);
buildfire.services.bluetooth.iBeacon.startMonitoring(beaconRegion, (err) => {
  if (err) return console.error(err);

  console.log("Started monitoring on beacon region", beaconRegion);
});
```

#### `beaconRegion`

An object representing iBeacon region. Usually created using `createBeaconRegion` method

| Name         | Type   | Required | Description                          | Default |
| ------------ | ------ | -------- | ------------------------------------ | ------- |
| `uuid`       | string | yes      | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | no       | Unique identifier                    |         |
| `minor`      | number | no       | iBeacon minor number                 |         |
| `major`      | number | no       | iBeacon major number                 |         |

#### `callback(err)`

Callback function after monitoring has started

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `stopMonitoring()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.stopMonitoring(beaconRegion, callback)`

Used to tell the OS to stop listening for this region of beacons.

```javascript
const beaconRegion = buildfire.services.bluetooth.iBeacon.createBeaconRegion(
  "cd5bdf9e-9339-4678-9c07-c4c627894fe6",
  "myIbeacon"
);
buildfire.services.bluetooth.iBeacon.stopMonitoring(beaconRegion, (err) => {
  if (err) return console.error(err);

  console.log("Stopped monitoring on beacon region", beaconRegion);
});
```

#### `beaconRegion`

An object representing iBeacon region. Usually created using `createBeaconRegion` method

| Name         | Type   | Required | Description                          | Default |
| ------------ | ------ | -------- | ------------------------------------ | ------- |
| `uuid`       | string | yes      | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | no       | Unique identifier                    |         |
| `minor`      | number | no       | iBeacon minor number                 |         |
| `major`      | number | no       | iBeacon major number                 |         |

#### `callback(err)`

Callback function after monitoring has stopped

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `startRanging()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.startRanging(beaconRegion, callback)`

Begin aggressively ranging nearby beacons. This will help you determine the distance of each beacon detected. Updates will trigger the `onRangingUpdate` event.

```javascript
const beaconRegion = buildfire.services.bluetooth.iBeacon.createBeaconRegion(
  "cd5bdf9e-9339-4678-9c07-c4c627894fe6",
  "myIbeacon"
);
buildfire.services.bluetooth.iBeacon.startRanging(beaconRegion, (err) => {
  if (err) return console.error(err);

  console.log("Started ranging on beacon region", beaconRegion);
});
```

#### `beaconRegion`

An object representing iBeacon region. Usually created using `createBeaconRegion` method

| Name         | Type   | Required | Description                          | Default |
| ------------ | ------ | -------- | ------------------------------------ | ------- |
| `uuid`       | string | yes      | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | no       | Unique identifier                    |         |
| `minor`      | number | no       | iBeacon minor number                 |         |
| `major`      | number | no       | iBeacon major number                 |         |

#### `callback(err)`

Callback function after ranging has started

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `stopRanging()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.stopRanging(beaconRegion, callback)`

Stop ranging beacons in the region provided.

:::tip
Make sure you only range when needed since it will drain the battery if you don't.
:::

```javascript
const beaconRegion = buildfire.services.bluetooth.iBeacon.createBeaconRegion(
  "cd5bdf9e-9339-4678-9c07-c4c627894fe6",
  "myIbeacon"
);
buildfire.services.bluetooth.iBeacon.stopRanging(beaconRegion, (err) => {
  if (err) return console.error(err);

  console.log("Stopped ranging on beacon region", beaconRegion);
});
```

#### `beaconRegion`

An object representing iBeacon region. Usually created using `createBeaconRegion` method

| Name         | Type   | Required | Description                          | Default |
| ------------ | ------ | -------- | ------------------------------------ | ------- |
| `uuid`       | string | yes      | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | no       | Unique identifier                    |         |
| `minor`      | number | no       | iBeacon minor number                 |         |
| `major`      | number | no       | iBeacon major number                 |         |

#### `callback(err)`

Callback function after ranging has stopped

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

## Events

### `onRegionEntered()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.onRegionEntered(beaconRegion)`

Gets called when entering a new beacon region matching a region you are monitoring. Override this method with your handler

```javascript
const handleRegionEntered = (beaconRegion) => {
  console.log("Beacon region entered", beaconRegion);
};

buildfire.services.bluetooth.iBeacon.onRegionEntered = handleRegionEntered;
```

#### `beaconRegion`

Region that was entered

| Name         | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| `uuid`       | string | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | Unique identifier                    |
| `minor`      | number | iBeacon minor number                 |
| `major`      | number | iBeacon major number                 |

---

### `onRegionExited()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.onRegionExited(beaconRegion)`

Gets called when exited a new beacon region matching a region you are monitoring. Override this method with your handler.

```javascript
const handleRegionExited = (beaconRegion) => {
  console.log("Beacon region entered", beaconRegion);
};

buildfire.services.bluetooth.iBeacon.onRegionExited = handleRegionExited;
```

#### `beaconRegion`

Region that was exited

| Name         | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| `uuid`       | string | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | Unique identifier                    |
| `minor`      | number | iBeacon minor number                 |
| `major`      | number | iBeacon major number                 |

---

### `onRangingUpdate()` <div class="label widget"></div>

`buildfire.services.bluetooth.iBeacon.onRangingUpdate(beaconRegion)`

Gets called when exited a new beacon region matching a region you are monitoring. Override this method with your handler.

```javascript
const handleRangingUpdate = (beaconRegions) => {
  console.log("Beacon region entered", beaconRegions.region);
  console.log("Detected beacons", beaconRegions.beacons);
};

buildfire.services.bluetooth.iBeacon.onRangingUpdate = handleRangingUpdate;
```

#### `beaconRegions`

Object containing the region detected and an array of beacons detected in that region

| Name      | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| `region`  | object   | iBeacon region detected                 |
| `beacons` | [object] | Array of `beacons` detected in a region |

---

#### `beaconRegions.region`

Region that was detected

| Name         | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| `uuid`       | string | iBeacons uuid, must be valid UUID v4 |
| `identifier` | string | Unique identifier                    |
| `minor`      | number | iBeacon minor number                 |
| `major`      | number | iBeacon major number                 |

#### `beaconRegions.beacons`

Beacons in a region that were detected

| Name        | Type   | Description                                                                                                                                                                                                                                                                |
| ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `minor`     | number | iBeacon minor number                                                                                                                                                                                                                                                       |
| `major`     | number | iBeacon major number                                                                                                                                                                                                                                                       |
| `rssi`      | number | Received Signal Strength Indicator. It is the strength of the beacon's signal as seen on the receiving device. RSSI is used to approximate the distance between the device and the beacon using another value defined by the iBeacon standard: Measured Power (see below). |
| `proximity` | string | String estimating proximity. Can be: `"ProximityImmediate"` (very close to the beacon), `"ProximityNear"` (about 1-3 m from the beacon), `"ProximityFar"` (further away or the signal is fluctuating too much to make a better estimate) or `"ProximityUnknown"`           |
| `accuracy`  | number | Accuracy estimate in meters                                                                                                                                                                                                                                                |
| `uuid`      | string | iBeacons unique uuid                                                                                                                                                                                                                                                       |

:::note Notes

- Since this only works on a mobile device, iBeacons will only function on the widget side of your plugins
- There is a limit from the OS on how many `UUID`s you can monitor. However, you can have thousands of `major` and `minor` ranges
- Monitoring a beacon region will trigger events even if your app is killed (unlike ranging). The app will wake up in the background and only live for a few seconds before its killed again
- Since Monitoring is always scanning, it does this very passively. For example, it will check only every few seconds (will vary) to see if you have entered a region. It will wait 30 seconds (or so) outside a region to be sure you have left before triggering the exited event
  :::
