---
id: notifications
title: Notifications
sidebar_label: Notifications
keywords:
  - buildfire
  - notifications
  - beep
  - vibrate
  - prompt
slug: /notifications
---

# `buildfire.notifications`

Provides a way to notify user using device native features such as beep and vibrate.

:::note
If you are looking for push or local notifications check out:

- [Push Notifications](/docs/push-notifications)
- [Local Notifications](/docs/local-notifications)

:::

## Methods

### `beep()` <div class="label widget"></div>

`buildfire.notifications.beep(options, callback)`

Reproduces beep sound on device

```javascript
buildfire.notifications.beep({ times: 3 }, () => {
  console.log("Done beeping");
});
```

#### `options`

| Name    | Type   | Required | Description                             | Default |
| ------- | ------ | -------- | --------------------------------------- | ------- |
| `times` | number | no       | The number of times to repeat the beep. | 1       |

#### `callback()`

Callback function after beeping is done

---

### `vibrate()` <div class="label widget"></div>

`buildfire.notifications.vibrate(options, callback)`

Vibrates the device

```javascript
buildfire.notifications.vibrate({ milliseconds: 3000 }, () => {
  console.log("Done vibrating");
});
```

#### `options`

| Name           | Type   | Required | Description                                                                  | Default |
| -------------- | ------ | -------- | ---------------------------------------------------------------------------- | ------- |
| `milliseconds` | number | no       | The number of milliseconds to vibrate. iOS only supports `1000` Milliseconds | `1000`  |

#### `callback()`

Callback function after vibration is done

---

### `prompt()` <div class="label widget"></div>

`buildfire.notifications.prompt(options, callback)`

Prompts the user for input

```javascript
buildfire.notifications.prompt({ title: "Hi. Whats your name?" }, (result) => {
  console.log("Hello ", result);
});
```

#### `options`

| Name           | Type     | Required | Description                               | Default           |
| -------------- | -------- | -------- | ----------------------------------------- | ----------------- |
| `title`        | string   | yes      | Prompt title                              |                   |
| `message`      | string   | no       | Prompt message                            |                   |
| `buttonLabels` | [string] | no       | Array of strings specifying button labels | `["OK","Cancel"]` |
| `defaultText`  | string   | no       | Default textbox input value               |                   |

#### `callback(value)`

Callback function the value given by user

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| `value` | string | Users input |

---

### `alert()` - deprecated <div class="label control"></div><div class="label widget"></div>

`buildfire.notifications.alert(options, callback)`

:::warning
This method is deprecated. Please use [Dialog Alert](/docs/dialogs#alert) instead.
:::

The alert method displays an alert popup with a specified message and an OK button. An alert popup is often used if you want to make sure information comes through to the user.

```javascript
buildfire.notifications.alert(
  {
    title: "Access Deined",
    message: "You don't have the permission to access this section!",
    okButton: { text: "Ok" },
  },
  (err, data) => {
    if (err) return console.error(err);

    console.log(data.selectedButton);
  }
);
```

#### `options`

| Name       | Type   | Required | Description                                        | Default   |
| ---------- | ------ | -------- | -------------------------------------------------- | --------- |
| `title`    | string | no       | Dialog title.                                      | `"Alert"` |
| `message`  | string | yes      | Message to be displayed inside of the dialog       |
| `size`     | string | no       | Size of the dialog. Can be `"sm"` `"md"` or `"lg"` | `"sm"`    |
| `okButton` | object | no       | Modifies the ok button                             |           |

#### `options.okButton`

| Name   | Type   | Required | Description                                                                                              | Default     |
| ------ | ------ | -------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `text` | string | no       | Button text.                                                                                             | `"Ok"`      |
| `key`  | string | no       | Button key. To be used in the callback to know what button user clicked                                  | `"ok"`      |
| `type` | string | no       | Determines button style. Can be `"default"`, `"primary"`, `"success"`, `"info"`, `"warning"`, `"danger"` | `"primary"` |

#### `callback(err, data)`

Callback function after the end user clicked on button. Data contains the selected button object

| Name   | Type   | Description                                                                  |
| ------ | ------ | ---------------------------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful                            |
| `data` | object | Contains `selectedButton` object ex `{selectedButton:{text:"Ok", key:'ok'}}` |

---

### `confirm()` - deprecated <div class="label control"></div><div class="label widget"></div>

`buildfire.notifications.confirm(options, callback)`

:::warning
This method is deprecated. Please use [Dialog Confirm](/docs/dialogs#confirm) instead.
:::

The confirm method displays a confirm popup with a specified message, along with an OK and a Cancel button. A confirm popup is often used if you want the user to verify or accept something.

```javascript
buildfire.notifications.confirm(
  {
    title: "Are you sure?",
    message: "Are you sure to delete this record?",
    confirmButton: { text: "Yes", key: "yes", type: "danger" },
    cancelButton: { text: "No", key: "no", type: "default" },
  },
  (err, data) => {
    if (err) return console.error(err);

    console.log(data.selectedButton);
  }
);
```

#### `options`

| Name            | Type   | Required | Description                                        | Default   |
| --------------- | ------ | -------- | -------------------------------------------------- | --------- |
| `title`         | string | no       | Dialog title.                                      | `"Alert"` |
| `message`       | string | yes      | Message to be displayed inside of the dialog       |
| `size`          | string | no       | Size of the dialog. Can be `"sm"` `"md"` or `"lg"` | `"sm"`    |
| `confirmButton` | object | no       | Modifies the ok button                             |           |
| `cancelButton`  | object | no       | Modifies the ok button                             |           |

#### `options.confirmButton`

| Name   | Type   | Required | Description                                                                                              | Default     |
| ------ | ------ | -------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `text` | string | no       | Button text.                                                                                             | `"Confirm"` |
| `key`  | string | no       | Button key. To be used in the callback to know what button user clicked                                  | `"confirm"` |
| `type` | string | no       | Determines button style. Can be `"default"`, `"primary"`, `"success"`, `"info"`, `"warning"`, `"danger"` | `"primary"` |

#### `options.cancelButton`

| Name   | Type   | Required | Description                                                                                              | Default     |
| ------ | ------ | -------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `text` | string | no       | Button text.                                                                                             | `"Cancel"`  |
| `key`  | string | no       | Button key. To be used in the callback to know what button user clicked                                  | `"cancel"`  |
| `type` | string | no       | Determines button style. Can be `"default"`, `"primary"`, `"success"`, `"info"`, `"warning"`, `"danger"` | `"default"` |

#### `callback(err, data)`

Callback function after the end user clicked on button. Data contains the selected button object

| Name   | Type   | Description                                                                            |
| ------ | ------ | -------------------------------------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful                                      |
| `data` | object | Contains `selectedButton` object ex `{selectedButton:{text:"Confirm", key:'confirm'}}` |

---

### `showDialog()` - deprecated <div class="label control"></div>

`buildfire.notifications.showDialog(options, callback)`

:::warning
This method is deprecated. Please use [Dialog Show](/docs/dialogs#show) instead.
:::

The `showDialog` method displays a popup with a specified title and message. A `showDialog` popup is used if you want to build a popup with generic buttons.

```javascript
buildfire.notifications.showDialog(
  {
    title: "options available",
    message: "Please select the t-shirt size",
    buttons: [
      { text: "Small", key: "small", type: "default" },
      { text: "Medium", key: "medium", type: "default" },
      { text: "Large", key: "large", type: "default" },
    ],
  },
  (err, data) => {
    if (err) return console.error(err);

    console.log(data.selectedButton);
  }
);
```

#### `options`

| Name      | Type     | Required | Description                                        | Default |
| --------- | -------- | -------- | -------------------------------------------------- | ------- |
| `title`   | string   | yes      | Dialog title.                                      |         |
| `message` | string   | no       | Message to be displayed inside of the dialog       |
| `size`    | string   | no       | Size of the dialog. Can be `"sm"` `"md"` or `"lg"` | `"sm"`  |
| `buttons` | [object] | no       | Array of buttons to be shown in modal              |         |

#### `options.buttons[]`

| Name   | Type   | Required | Description                                                                                              | Default     |
| ------ | ------ | -------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| `text` | string | yes      | Button text.                                                                                             |             |
| `key`  | string | yes      | Button key. To be used in the callback to know what button user clicked                                  |             |
| `type` | string | no       | Determines button style. Can be `"default"`, `"primary"`, `"success"`, `"info"`, `"warning"`, `"danger"` | `"default"` |

#### `callback(err, data)`

Callback function after the end user clicked on button. Data contains the selected button object

| Name   | Type   | Description                                                                        |
| ------ | ------ | ---------------------------------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful                                  |
| `data` | object | Contains `selectedButton` object ex `{selectedButton:{text:"Small", key:'small'}}` |

---
