---
id: e-signature
title: E-Signature
sidebar_label: E-Signature
description: BuildFire E-Signature component
keywords:
  - BuildFire
  - signature
  - esignature
  - pdf
  - component
slug: /e-signature
---

# `buildfire.components.signatureBox`


`eSignature` -or signatureBox- is a component that allows a plugin to make use of electronic form handwritten signatures, it handles showing the signature box view for signing, getting the user written signature and transforming back the data in different representation. The component does not rely on any UI framework with consideration to the configured branding (app theme).

<img src="/img/e-signature.png" alt="eSignature Demo" width="600"/>

## Requirements

### Widget

```html
<head>
  <!-- JS -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/components/signatureBox/signatureBox.js"></script>
</head>
```

:::warning
Document's `head` element is necessary for the component to inject needed dependencies.
:::

## Methods

### `openDialog()` <div class="label widget"></div>

`buildfire.components.signatureBox.openDialog(options, callback)`

This method is used to show the signature view with its associated controls.

```javascript
buildfire.components.signatureBox.openDialog({ width: '500', height: '100' });
```

#### `options`

| Name          | Type    | Required | Description                                                                                                                 | Default |
| ------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `width`        | string  | no      | Used to set the Canvas width                                                                                               |    '200'     |
| `height`      | string  | no       | Used to set the Canvas height. |  '400'       |

#### `callback(err, data)`

When the Save button is clicked, the result data is returned within the callback.

| Name     | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful |
| `data` | object | An object with `dataUrl` and `base64` properties which are representations of the submitted signature.                 |

#### More Examples

```javascript
buildfire.components.signatureBox.openDialog(
  { width: '150', height: '400' },
  (err, data) => {
    if (err) return console.error(err);

    console.log(data);
})
```
