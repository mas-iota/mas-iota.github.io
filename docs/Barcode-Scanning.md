---
id: barcode-scanning
title: Barcode Scanning
sidebar_label: Barcode Scanning
description: How to use BuildFire Barcode Scanning Camera Service
keywords:
  - buildfire
  - barcode
  - scanning
  - qr
  - camera
  - service
slug: /barcode-scanning
---

# `buildfire.services.camera.barcodeScanner`

This service accesses the device camera and scans for barcodes or qr codes in their various forms.

:::caution Info
This service works only on devices
:::

## Requirements

### Widget

Include `barcodeScanner.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/camera/barcodeScanner.js"></script>
</head>
```

### `plugin.json`

In [plugin.json](/docs/plugin-json-file) add `BarCodeScanner` in your features array `"features" : [{"name" : "BarCodeScanner"}]`

## Methods

### `scan()` <div class="label widget"></div>

`buildfire.services.camera.barcodeScanner.scan(options, callback)`

This will invoke the scanning process. It may also ask the user for permission to access the Camera if it hasn't previously.

```javascript
buildfire.services.camera.barcodeScanner.scan(
  {
    preferFrontCamera: true,
    showFlipCameraButton: true,
    formats: "QR_CODE,PDF_417",
  },
  (err, result) => {
    if (err) return console.error(err);

    buildfire.dialog.alert({
      message: `Barcode scanned! Result: ${result.text} Format: ${result.format} Cancelled: ${result.cancelled}`,
    });
  }
);
```

#### `options`

| Name                    | Type    | Required | Description                                                                                                      | Default                                     |
| ----------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `preferFrontCamera`     | boolean | no       | Preference to start with the Front Camera or Back if available on the device.                                    | false                                       |
| `showFlipCameraButton`  | boolean | no       | Allow user to flip between camera's                                                                              | false                                       |
| `showTorchButton`       | boolean | no       | Turns on the flashlight                                                                                          | false                                       |
| `torchOn`               | boolean | no       | Android only. Launch with the torch switched on (if available)                                                   | false                                       |
| `prompt`                | string  | no       | Prompt to display to user                                                                                        | `"Place a barcode inside the scan area"`    |
| `resultDisplayDuration` | number  | no       | Android only. Display scanned text for certain number of milliseconds. 0 suppresses it entirely                  | `1500`                                      |
| `formats`               | string  | no       | Comma separated values. See [table below](/docs/barcode-scanning#supported-barcode-formats) for possible formats | All except `"PDF_417"` and `"RSS_EXPANDED"` |

#### `callback(err, result)`

Callback function after scanning the code

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Scanned barcode / qrcode result                   |

#### `result`

| Name        | Type    | Description                     |
| ----------- | ------- | ------------------------------- |
| `text`      | string  | Scanned result text             |
| `format`    | string  | Scanned barcode / qrcode format |
| `cancelled` | boolean | Indicates if scan was cancelled |

---

## Supported Barcode Formats

The following barcode types are currently supported:

| Android          | iOS             |
| ---------------- | --------------- |
| `"QR_CODE"`      | `"QR_CODE"`     |
| `"DATA_MATRIX"`  | `"DATA_MATRIX"` |
| `"UPC_E"`        | `"UPC_E"`       |
| `"UPC_A"`        | `"UPC_A"`       |
| `"EAN_8"`        | `"EAN_8"`       |
| `"EAN_13"`       | `"EAN_13"`      |
| `"CODE_128"`     | `"CODE_128"`    |
| `"CODE_39"`      | `"CODE_39"`     |
| `"CODE_93"`      |
| `"CODABAR"`      |
| `"ITF"`          | `"ITF"`         |
| `"RSS14"`        |
| `"RSS_EXPANDED"` |
