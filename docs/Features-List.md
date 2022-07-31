---
id: features-list
title: Features List
sidebar_label: Features List
keywords:
  - buildfire
  - features
  - list
slug: /features-list
---

There are some features that should be added to your `plugin.json` features list to allow your plugin to do certain things and communicate with the device.

---

### `Bluetooth low energy`

This feature will allow your plugin to use the [BLE functionality](/docs/low-energy-bluetooth)

```json
"features" : [{"name" : "ble"}]
```

### `iBeacon `

This feature will allow your app to use [iBeacon service](/docs/ibeacon-bluetooth)

```json
"features" : [{"name" : "iBeacon"}]
```

### `BackgroundAudio`

This feature will allow audio playback while app is in background.

```json
"features" : [{"name" : "BackgroundAudio"}]
```

### `Geo`

This feature will allow your app to use [Geo service](/docs/geo-location-gps-feature).

```json
"features" : [{"name" : "Geo"}]
```

### `Background Geo`

This feature will allow for Geo functionality while app is in background.

```json
"features" : [{"name" : "BackgroundGeo"}]
```

### `BackgroundMode`

This feature will allow the app to function while the app is in background or if the phone is locked.

```json
"features" : [{"name" : "BackgroundMode"}]
```

### `Calendar`

This feature will allow calendar functionality.

```json
"features" : [{"name" : "Calendar"}]
```

### `Local Notification`

This feature will allow the app to send [local notifications](/docs/local-notifications).

```json
"features" : [{"name" : "localNotification"}]
```

### `Sharing`

This feature will allow your plugin to use sharing functionality.

```json
"features" : [{"name" : "sharing"}]
```

### `Barcode Scanner`

This feature will allow your plugin to use [barcode scanner](/docs/barcode-scanning/).

```json
"features" : [{"name" : "BarCodeScanner"}]
```

### `Contacts`

This feature will allow the app to get the device's [contacts](/docs/contacts).

```json
"features" : [{"name" : "Contacts"}]
```

---

## Here is an example of plugin.json with more than one feature added

```json
{
  "author": "John Doe",
  "pluginName": "Example Plugin ",
  "pluginDescription": "This is a simple example plugin",
  "supportEmail": "support@buildfire.com",
  "control": {
    "content": {
      "enabled": true
    },
    "design": {
      "enabled": true
    },
    "settings": {
      "enabled": false
    }
  },
  "features": [{ "name": "Geo" }, { "name": "Bluetooth" }],
  "languages": ["en", "fr"]
}
```
