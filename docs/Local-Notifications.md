---
id: local-notifications
title: Local Notifications
sidebar_label: Local Notifications
keywords:
  - buildfire
  - notifications
  - local
slug: /local-notifications
---

# `buildfire.notifications.localNotification`

This is a built-in API that allows your widget to schedule local notifications. Local Notifications differ from Push Notifications in that they are scheduled to be viewed on the current device. While Push Notifications are also capable of achieving this, it requires an internet connection unlike Local Notifications and are generally used to send notifications to other devices.

:::note
For existing apps, a hard build is required to add this functionality.
:::

Running Example: https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/exampleLocalNotifications/widget/index.html

## Requirements

### Widget

Include `localNotifications.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/notifications/localNotifications.js"></script>
</head>
```

## Methods

### `checkPermission()` <div class="label widget"></div>

`buildfire.notifications.localNotification.checkPermission(callback)`

Use this method to check if permissions have been granted to the device.

```javascript
buildfire.notifications.localNotification.checkPermission(
  (err, hasPermissions) => {
    if (err) return console.error(err);

    console.log(
      hasPermissions ? "Permissions granted" : "Permissions not granted"
    );
  }
);
```

#### `callback(err, hasPermissions)`

Callback function after permissions have been checked

| Name             | Type    | Description                                         |
| ---------------- | ------- | --------------------------------------------------- |
| `err`            | string  | error string, `null` when operation is successful   |
| `hasPermissions` | boolean | Indicates whether the permissions have been granted |

---

### `requestPermission()` <div class="label widget"></div>

`buildfire.notifications.localNotification.requestPermission(callback)`

Use this method to request permissions to notifications from the device. First it checks if permissions have been granted to the app. If permissions have already been granted, the callback receives true. If permission haven't yet been granted, it will request permissions. The callback will then receive the value of that request.

```javascript
buildfire.notifications.localNotification.requestPermission(
  (err, hasPermissions) => {
    if (err) return console.error(err);

    console.log(
      hasPermissions ? "Permissions granted" : "Permissions not granted"
    );
  }
);
```

#### `callback(err, hasPermissions)`

Callback function called when permissions are accepted or rejected.

| Name             | Type    | Description                                                 |
| ---------------- | ------- | ----------------------------------------------------------- |
| `err`            | string  | error string, `null` when operation is successful           |
| `hasPermissions` | boolean | Indicates whether the permissions have been granted or not. |

---

### `schedule()` <div class="label widget"></div>

`buildfire.notifications.localNotification.schedule(options, callback)`

Use to schedule a notification

```javascript
buildfire.notifications.localNotification.schedule(
  {
    title: "Local notification",
    text: "Hi!",
    at: new Date(),
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log("Notification scheduled", result);
  }
);
```

#### `options`

| Name                       | Type   | Required | Description                                                                                                                                                | Default |
| -------------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `title`                    | string | yes      | Notification title                                                                                                                                         |         |
| `text`                     | string | yes      | Notification text                                                                                                                                          |         |
| `at`                       | Date   | yes      | Time to send notification at.                                                                                                                              |         |
| `data`                     | object | no       | Data that you want to persist for when the notification is clicked or triggered.                                                                           |         |
| `returnToPluginInstanceId` | string | no       | The ID of the plugin instance to return to. If the value of 'none' is specified, then it will simply open the app without navigation to a specific plugin. |         |

#### `callback(err, result)`

Callback function after the notification scheduling is completed.

| Name     | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful  |
| `result` | object | Contains `id` of the newly scheduled notification. |

---

### `send()` <div class="label widget"></div>

`buildfire.notifications.localNotification.send([object Object], [object Object])`

Use to send a notification immediately

```javascript
buildfire.notifications.localNotification.send(
  {
    title: "Local notification",
    text: "Hi!",
    data: {
      hello: "world",
    },
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log("Notification sent", result);
  }
);
```

#### `options`

| Name                       | Type   | Required | Description                                                                                                                                                | Default |
| -------------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `title`                    | string | yes      | Notification title                                                                                                                                         |         |
| `text`                     | string | yes      | Notification text                                                                                                                                          |         |
| `data`                     | object | no       | Data that you want to persist for when the notification is clicked or triggered.                                                                           |         |
| `returnToPluginInstanceId` | string | no       | The ID of the plugin instance to return to. If the value of 'none' is specified, then it will simply open the app without navigation to a specific plugin. |         |

#### `callback(err, result)`

Callback function after the notification is sent.

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Contains `id` of the sent notification.           |

---

### `cancel()` <div class="label widget"></div>

`buildfire.notifications.localNotification.cancel(notificationId, callback)`

Use to cancel a scheduled notification.

```javascript
buildfire.notifications.localNotification.cancel(1235123214, (err, result) => {
  if (err) return console.error(err);

  console.log("Notificaition cancelled. Id: ", result.id);
});
```

#### `notificationId`

| Name             | Type   | Required | Description                                         | Default |
| ---------------- | ------ | -------- | --------------------------------------------------- | ------- |
| `notificationId` | number | yes      | The id of the notification that you wish to cancel. |         |

#### `callback(err, result)`

Callback function when the notification is canceled

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Contains `id` of the cancelled notification.      |

---

## Events

### `onClick()` <div class="label widget"></div>

`buildfire.notifications.localNotification.onClick(data)`

Triggers every time local notification is clicked or opened. Override this with your handler

```javascript
buildfire.notifications.localNotification.onClick = (data) => {
  console.log("Notification clicked. Notification data is", data);
};
```

#### `data`

| Name   | Type   | Description                                                                                     |
| ------ | ------ | ----------------------------------------------------------------------------------------------- |
| `data` | object | It originates from the `options.data` property which is passed in the `schedule` / `send` call. |

---
