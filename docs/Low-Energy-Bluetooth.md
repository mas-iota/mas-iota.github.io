---
id: low-energy-bluetooth
title: Low Energy Bluetooth (BLE)
sidebar_label: Low Energy Bluetooth (BLE)
description:
keywords:
  - buildfire
  - low
  - energy
  - bluetooth
  - ble
  - service
slug: /low-energy-bluetooth
---

# `buildfire.services.bluetooth.ble`

This is a service that allows your widget to link to the devices bluetooth signal and paired devices. This is very useful when developing for IoT (Internet of Things)

:::caution Info
This service works only on devices
:::

## Requirements

### Widget

Include `ble.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/bluetooth/ble.js"></script>
</head>
```

### `plugin.json`

In [plugin.json](/docs/plugin-json-file) add `Bluetooth` in your features array `"features" : [{"name" : "Bluetooth"}]`

## Methods

### `connect()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.connect(deviceId, callback)`

Use this method to connect to the device

```javascript
buildfire.services.bluetooth.ble.connect(deviceId, (err, data) => {
  if (err) return console.error(err);

  console.log("Connected to device from device");
});
```

#### `deviceId`

The device Id you received from the paired device list

#### `callback(err, data)`

Callback function after device is connected or failed to connect

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object | Device connected                                  |

---

### `disconnect()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.disconnect(callback)`

Use this method to disconnect the device

```javascript
buildfire.services.bluetooth.ble.disconnect((err, data) => {
  if (err) return console.error(err);

  console.log("Disconnected from device");
});
```

#### `callback(err, data)`

Callback function after device is disconnected or failed to disconnect

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object | Device disconnected                               |

---

### `listPairedDevices()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.listPairedDevices(callback)`

Use this method to get a list of paired bluetooth devices

```javascript
buildfire.services.bluetooth.ble.listPairedDevices((err, pairedDevices) => {
  if (err) return console.error(err);

  console.log("Paired devices", pairedDevices);
});
```

#### `callback(err, pairedDevices)`

Callback function after getting the list of paired devices

| Name            | Type     | Description                                       |
| --------------- | -------- | ------------------------------------------------- |
| `err`           | string   | error string, `null` when operation is successful |
| `pairedDevices` | [object] | Array of objects containing `deviceId`            |

---

### `write()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.write(data, callback)`

Use this method to send data to the device

```javascript
buildfire.services.bluetooth.ble.write("Hi there", (err, data) => {
  if (err) return console.error(err);

  console.log("Written to device.");
});
```

#### `callback(err, pairedDevices)`

Callback function after writing data

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object |                                                   |

---

### `available()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.available(callback)`

Use this method to check if device is available

```javascript
buildfire.services.bluetooth.ble.available((err, isAvailable) => {
  if (err) return console.error(err);

  console.log("Device", isAvailable ? "is" : "is not", "available");
});
```

#### `callback(err, isAvailable)`

Callback function after checking device availability

| Name          | Type    | Description                                       |
| ------------- | ------- | ------------------------------------------------- |
| `err`         | string  | error string, `null` when operation is successful |
| `isAvailable` | boolean | Indicating if device is available                 |

---

### `read()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.read(callback)`

Use this method to read the buffer from bluetooth

```javascript
buildfire.services.bluetooth.ble.read((err, buffer) => {
  if (err) return console.error(err);

  console.log("Read data", buffer);
});
```

#### `callback(err, buffer)`

Callback function after reading data

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `buffer` | string | Read data                                         |

---

### `readUntil()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.readUntil(terminator, callback)`

Use this method to read from the buffer until the terminator is found. For example if the terminator equals `,` it will continue to read until it finds the next comma.

```javascript
buildfire.services.bluetooth.ble.readUntil(",", (err, buffer) => {
  console.log(err, buffer);
});
```

#### `callback(err, buffer)`

Callback function reading is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `buffer` | string | Read buffer                                       |

---

### `subscribe()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.subscribe(terminator, callback)`

Will automatically send you the buffer when the terminator if found.

```javascript
buildfire.services.bluetooth.ble.subscribe(",", (err, buffer) => {
  console.log(err, buffer);
});
```

#### `callback(err, buffer)`

Callback function after reading data

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `buffer` | string | Read data                                         |

---

### `unsubscribe()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.unsubscribe(terminator, callback)`

Will unsubscribe from device

```javascript
buildfire.services.bluetooth.ble.unsubscribe((err) => {
  if (err) return console.error(err);

  console.log("Unsubscribed from device");
});
```

#### `callback(err, buffer)`

Callback function after device is unsubscribed

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `clear()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.clear(callback)`

Use this method to clear the buffer

```javascript
buildfire.services.bluetooth.ble.clear((err) => {
  if (err) return console.error(err);

  console.log("Buffer is cleared");
});
```

#### `callback(err, buffer)`

Callback function after device is disconnected or failed to disconnect

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `isConnected()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.isConnected(callback)`

Use this method to check if the connection is still alive

```javascript
buildfire.services.bluetooth.ble.isConnected((err, isConnected) => {
  if (err) return console.error(err);

  console.log("Device", isConnected ? "is" : "is not", "connected");
});
```

#### `callback(err, isConnected)`

Callback function after checking connection

| Name          | Type    | Description                                       |
| ------------- | ------- | ------------------------------------------------- |
| `err`         | string  | error string, `null` when operation is successful |
| `isConnected` | boolean | Indicates if connection is still alive            |

---

### `isEnabled()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.isEnabled(callback)`

Use this method to check if bluetooth is enabled

```javascript
buildfire.services.bluetooth.ble.isEnabled((err, isEnabled) => {
  if (err) return console.error(err);

  console.log("Bluetooth", isEnabled ? "is" : "is not", "enabled");
});
```

#### `callback(err, isEnabled)`

Callback function after checking if bluetooth is enabled

| Name        | Type    | Description                                       |
| ----------- | ------- | ------------------------------------------------- |
| `err`       | string  | error string, `null` when operation is successful |
| `isEnabled` | boolean | Indicates if bluetooth is enabled                 |

---

## Events

### `onConnect()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.onConnect()`

Gets called when connection is established. Override this method with your handler

```javascript
const handleOnConnect = () => {
  console.log("Device is connected");
};

buildfire.services.bluetooth.ble.onConnect = handleOnConnect;
```

### `onDisconnect()` <div class="label widget"></div>

`buildfire.services.bluetooth.ble.onDisconnect()`

Gets called when connection is severed. Override this method with your handler

```javascript
const handleOnDisconnect = () => {
  console.log("Device is disconnected");
};

buildfire.services.bluetooth.ble.onDisconnect = handleOnDisconnect;
```
