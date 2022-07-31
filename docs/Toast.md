---
id: toast
title: Toast
sidebar_label: Toast
keywords:
  - buildfire
  - toast
  - component
slug: /toast
---

# `buildfire.components.toast`

:::warning
Toast component is deprecated. Please use [dialog.toast](/docs/dialogs#toast) instead.
:::

The `toast` component provides brief, contextual messages about app processes at the bottom of the screen. Each toast message contains a message and an optional action.

## Requirements

### Widget

```html
<head>
  <!-- JS -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/components/toast/toast.js"></script>
</head>
```

## Methods

### `showToastMessage()` <div class="label widget"></div>

`buildfire.components.toast.showToastMessage(options, callback)`

This method is used to show a toast message. The toast will automatically close after a short period of time.

```javascript
buildfire.components.toast.showToastMessage({ text: "Hi. I am a toast!" });
```

#### `options`

| Name          | Type    | Required | Description                                                                                                                 | Default |
| ------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `text`        | string  | yes      | Toast message to be displayed                                                                                               |         |
| `action`      | object  | no       | Custom action object or an action item to be executed when action button is clicked. See [Action Items](/docs/action-items) |         |
| `hideDismiss` | boolean | no       | If `true`, the dismiss button will be hidden from the toast.                                                                | `false` |

#### `callback(err, action)`

When the action button is clicked, the action is returned in the callback.

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful |
| `action` | object | Action passed to `options.action`                 |

#### More Examples

```javascript
buildfire.components.toast.showToastMessage(
  {
    text: "Hi I am toast with action!",
    action: {
      customData: "Action Clicked",
    },
  },
  (err, action) => {
    if (err) return console.error(err);

    console.log(action.customData);
  }
);
```

---

### `closeToastMessage()` <div class="label widget"></div>

`buildfire.components.toast.closeToastMessage(options, callback)`

This method is used to close toast message.

```javascript
buildfire.components.toast.closeToastMessage();
```

#### `options`

| Name    | Type    | Required | Description                                  | Default |
| ------- | ------- | -------- | -------------------------------------------- | ------- |
| `force` | boolean | no       | If `true`, the toast will close immediately. | `false` |

#### `callback(err)`

Executed when the closing action is successfully registered.

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | Error string, `null` when operation is successful |

#### More examples

```javascript
buildfire.components.toast.closeToastMessage(
  {
    force: true,
  },
  (err) => {
    if (err) console.error(err);

    console.log("Toast closed");
  }
);
```
