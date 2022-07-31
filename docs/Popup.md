---
id: popup
title: Popup Component
sidebar_label: Popup Component
keywords:
  - buildfire
  - popup
  - component
slug: /popup
---

# `buildfire.components.popup`

This component provides a rich modal for plugins.

## Requirements

### Widget

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.js"></script>
  <script src="../../../scripts/buildfire/components/popup/popup.js"></script>
</head>
```

## Methods

### `display()`

`buildfire.components.popup.display(options, callback)`

Displays a popup

```javascript
buildfire.components.popup.display(
  {
    title: "Popup title",
    richContent: "Hello I am rich content!",
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log(result);
  }
);
```

#### `options`

| Name                | Type    | Required | Description                                              | Default |
| ------------------- | ------- | -------- | -------------------------------------------------------- | ------- |
| `title`             | string  | no       | Dialog title.                                            |         |
| `subtitle`          | string  | no       | Dialog subtitle. If empty, no subtitle will be displayed |
| `showDismissButton` | boolean | no       | If true, shows a dismiss button in dialog footer         | `true`  |
| `action`            | object  | no       | Action Item. Will show as additional button.             |
| `richContent`       | string  | no       | Message or html to be displayed inside of the dialog     |
| `design`            | object  | no       | Dialog design configuration                              |

##### `options.design`

| Name              | Type    | Required | Description                                             | Default             |
| ----------------- | ------- | -------- | ------------------------------------------------------- | ------------------- |
| `title`           | object  | no       | Dialog title css as object. ex. (`{ align: 'center' }`) |                     |
| `fullScreen`      | boolean | no       | Controls if dialog takes up full screen                 | `false`             |
| `textColor`       | string  | no       | Dialog text color                                       | inherits from theme |
| `backgroundColor` | string  | no       | Dialog background color                                 | inherits from theme |

#### `callback(err, result)`

Callback function after the end user clicked on button.

| Name     | Type   | Description                                                                  |
| -------- | ------ | ---------------------------------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful                            |
| `result` | object | This value is always null since there is only one button that can be clicked |

##### `result`

| Name         | Type   | Description               |
| ------------ | ------ | ------------------------- |
| `buttonType` | string | `"dismiss"` or `"action"` |
| `value`      | object | Value of the action       |
