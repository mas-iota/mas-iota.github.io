---
id: dialogs
title: Dialogs
sidebar_label: Dialogs
description:
keywords:
  - buildfire
  - dialog
  - confirmation
  - alert
slug: /dialogs
---

# `buildfire.dialog`

**`buildfire.dialog`** is used to show the dialogs in app and control panel. Whether you want to display an alert that needs to grab users attention, ask for a confirmation or perform a more complex operation inside a dialog window, `buildfire.dialog` has all of it covered.
This is a built-in API that allows your control or widget to use built-in dialogs.

## Methods

### `alert()` <div class="label control"></div><div class="label widget"></div>

`buildfire.dialog.alert(options, callback)`

The alert method displays an alert popup with a specified message and an OK button. An alert popup is often used if you want to make sure information comes through to the user.

```javascript
buildfire.dialog.alert({
  message: "You don't have permission to access this section!",
});
```

#### `options`

| Name            | Type    | Required | Description                                                                         | Default   |
| --------------- | ------- | -------- | ----------------------------------------------------------------------------------- | --------- |
| `title`         | string  | no       | Dialog title.                                                                       | `"Alert"` |
| `subtitle`      | string  | no       | Dialog subtitle. If empty, no subtitle will be displayed                            |
| `message`       | string  | yes      | Message or html to be displayed inside of the dialog                                |
| `isMessageHTML` | boolean | no       | specifies whether message should be rendered as sanitized html instead of plaintext | `false`   |
| `okButtonText`  | string  | no       | Changes the ok button text                                                          | `"OK"`    |

#### `callback(err, data)`

Callback function after the end user clicked on button. Data is always undefined since there is only one button that can be clicked.

| Name   | Type   | Description                                                                  |
| ------ | ------ | ---------------------------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful                            |
| `data` | object | This value is always null since there is only one button that can be clicked |

#### More Examples

```javascript
buildfire.dialog.alert({
  title: "Access Denied!",
  subtitle: "Operation not allowed!",
  message: "You don't have permission to access this section!",
});
```

```javascript
buildfire.dialog.alert(
  {
    title: "Access Denied!",
    subtitle: "Operation not allowed!",
    message: `You don't have permission to access this section! Ask your site administrator to enable this for you! More info <a href="#">here</a>`,
    isMessageHTML: true,
  },
  (err, data) => {
    if (err) console.error(err);
    buildfire.analytics.trackAction("access-denied");
  }
);
```

---

### `confirm()` <div class="label control"></div><div class="label widget"></div>

`buildfire.dialog.confirm(options, callback)`

The confirm method displays a confirm dialog with a specified message, along with a Confirm and a Cancel button. A confirm dialog is often used if you want the user to verify or accept something. Confirm dialog can not be dismissed by clicking on backdrop and will force user to either click Confirm or Cancel button.

```javascript
buildfire.dialog.confirm(
  {
    message: "Are you sure you want to go back? Your edits might not be saved.",
  },
  (err, isConfirmed) => {
    if (err) console.error(err);

    if (isConfirmed) {
      //Go back
    } else {
      //Prevent action
    }
  }
);
```

#### `options`

| Name            | Type            | Required | Description                                                                         | Default                               |
| --------------- | --------------- | -------- | ----------------------------------------------------------------------------------- | ------------------------------------- |
| `title`         | string          | no       | Dialog title.                                                                       | `"Alert"`                             |
| `subtitle`      | string          | no       | Dialog subtitle. If empty, no subtitle will be displayed                            |
| `message`       | string          | yes      | Message or html to be displayed inside of the dialog                                |
| `isMessageHTML` | boolean         | no       | specifies whether message should be rendered as sanitized html instead of plaintext | `false`                               |
| `confirmButton` | `ConfirmButton` | no       | Changes the confirm button text                                                     | `{ type: "primary", text: "Confirm"}` |

##### `ConfirmButton`

| Name   | Type   | Required | Description                                                                                                                | Default     |
| ------ | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `type` | string | no       | Button type, used to show the button style. Styles available: `default`, `primary`, `success`, `info`, `warning`, `danger` | `"primary"` |
| `text` | string | no       | Button text                                                                                                                | `"Confirm"` |

#### `callback(err, isConfirmed)`

Callback function after the end user clicked on button.

| Name          | Type    | Description                                              |
| ------------- | ------- | -------------------------------------------------------- |
| `err`         | string  | error string, `null` when operation is successful        |
| `isConfirmed` | boolean | Either true or false indicating if dialog was confirmed. |

#### More Examples

```javascript
buildfire.dialog.confirm(
  {
    message: "Are you sure you want to delete this item.",
    confirmButton: {
      text: "Yes",
      type: "danger",
    },
  },
  (err, isConfirmed) => {
    if (err) console.error(err);

    if (isConfirmed) {
      //Delete item
    } else {
      //Prevent action
    }
  }
);
```

---

### `show()` <div class="label control"></div><div class="label widget"></div>

`buildfire.dialog.show(options, callback)`

This function is the most advanced one and allows user full control over dialog. It can be useful when there is more than one possible feedback option from user.

```javascript
buildfire.dialog.show(
  {
    title: "Couldn't import user",
    subtitle: "User already exists",
    message:
      "The user with email <b>john@example.com</b> you are trying to import already exists.",
    isMessageHTML: true,
    showCancelButton: true,
    actionButtons: [
      {
        text: "Try again",
        type: "primary",
        action: () => {
          console.log("Import user again");
        },
      },
      {
        text: "Continue without importing",
        type: "primary",
        action: () => {
          console.log("Continue importing without this user");
        },
      },
    ],
  },
  (err, actionButton) => {
    if (err) console.error(err);

    if (actionButton && actionButton.text == "Cancel") {
      console.log("Cancel clicked");
    }
  }
);
```

#### `options`

| Name               | Type     | Required | Description                                                                         | Default    |
| ------------------ | -------- | -------- | ----------------------------------------------------------------------------------- | ---------- |
| `title`            | string   | yes      | Dialog title                                                                        |            |
| `subtitle`         | string   | no       | Dialog subtitle. If empty, no subtitle will be displayed                            |            |
| `message`          | string   | yes      | Message or html to be displayed inside of the dialog                                |            |
| `isMessageHTML`    | boolean  | no       | Specifies whether message should be rendered as sanitized html instead of plaintext | `false`    |
| `showCancelButton` | boolean  | no       | Specifies whether "Cancel" button will be displayed                                 | `false`    |
| `cancelButtonText` | string   | no       | Cance button text                                                                   | `"Cancel"` |
| `forceAction`      | boolean  | no       | Forses user to click one of the buttons to dismiss modal                            | `false`    |
| `actionButtons`    | [object] | yes      | Array of action buttons to be displayed in dialog footer                            |            |

##### `options.actionButtons[]`

| Name     | Type     | Required | Description                                                                                                                | Default     |
| -------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `text`   | string   | yes      | Action button text                                                                                                         |             |
| `type`   | string   | yes      | Button type, used to show the button style. Styles available: `default`, `primary`, `success`, `info`, `warning`, `danger` | `"primary"` |
| `action` | function | yes      | Action to be called when the button is clicked                                                                             | `() => {}`  |

#### `callback(err, actionButton)`

Callback function after the end user clicked on button.

| Name           | Type   | Description                                       |
| -------------- | ------ | ------------------------------------------------- |
| `err`          | string | error string, `null` when operation is successful |
| `actionButton` | object | Action button that was clicked                    |

---

### `toast()` <div class="label control"></div><div class="label widget"></div>

`buildfire.dialog.toast(options, callback)`

Toast can be used to deliver a short simple message to user such as "Saved" or "Edited", or just to indicate that some accion was or was not successful without asking for additional feedback

```javascript
buildfire.dialog.toast({
  message: "Importing users...",
});
```

#### `options`

| Name                | Type    | Required | Description                                                                                           | Default  |
| ------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- | -------- |
| `message`           | string  | yes      | Toast message to be displayed                                                                         |          |
| `duration`          | number  | no       | Toast duration in milliseconds                                                                        | `8000`   |
| `type`              | string  | no       | Changes toast background color. Options: `default`, `primary`, `success`, `info`, `warning`, `danger` | `"info"` |
| `hideDismissButton` | boolean | no       | Hide/show dismiss button on the right side of the toast                                               | false    |
| `actionButton`      | object  | no       | Action button added to the toast if optional feedback is required from user                           |          |

##### `options.actionButton`

| Name     | Type     | Required | Description                                         | Default |
| -------- | -------- | -------- | --------------------------------------------------- | ------- |
| `text`   | string   | yes      | Action button text                                  |         |
| `action` | function | yes      | Function to be called when action button is clicked |         |

#### `callback(err, data)`

Callback is called only when action button is present and clicked

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object | Toast action button that was clicked              |

#### More Examples

```javascript
buildfire.dialog.toast({
  message: "successfully imported users",
  type: "success",
});
```

```javascript
buildfire.dialog.toast({
  message: "User import failed",
  type: "danger",
  actionButton: {
    text: "Try again",
    action: () => {
      console.log("Import user again");
    },
  },
});
```

:::note
If isMessageHTML is true, message content will be tested for cross site scripting and data will be sanitized.
:::
