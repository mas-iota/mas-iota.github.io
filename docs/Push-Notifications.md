---
id: push-notifications
title: Push Notifications
sidebar_label: Push Notifications
keywords:
  - buildfire
  - push
  - notifications
  - api
slug: /push-notifications
---

# `buildfire.notifications.pushNotification`

This is a built-in API that allows your control or widget to schedule push notifications to be sent out to devices. If you wish to schedule a Notification to be sent to the device you are currently on use [Local Notifications](/docs/local-notifications).

Running Example: https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/examplePushNotifications/widget/index.html

## Requirements

### Widget

Include `pushNotifications.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/notifications/pushNotifications.js"></script>
</head>
```

### Control

Include `pushNotifications.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/notifications/pushNotifications.js"></script>
</head>
```

## Methods

### `schedule()` <div class="label control"></div><div class="label widget"></div>

`buildfire.notifications.pushNotification.schedule(options, callback)`

:::info
You must `subscribe()` on the device to receive notifications.
:::

Used to schedule push notification

```javascript
buildfire.notifications.pushNotification.schedule(
  {
    title: "Push notification",
    text: "Hello there!",
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log("Push notification scheduled", result);
  }
);
```

#### `options`

| Name           | Type     | Required | Description                                                                        | Default                |
| -------------- | -------- | -------- | ---------------------------------------------------------------------------------- | ---------------------- |
| `title`        | string   | yes      | A short string describing the purpose of the notification                          |                        |
| `text`         | string   | yes      | Push notification text                                                             |                        |
| `inAppMessage` | string   | no       | The HTML text of the message displayed if the push notification is received in app |                        |
| `at`           | Date     | no       | Time to send the push notification at                                              | now                    |
| `users`        | [string] | no       | Array of `userIds` to send the push notification to specific users                 |                        |
| `userTags`     | [string] | no       | Array of user tags to send push notification to users with specific tags           |                        |
| `groupName`    | string   | no       | Send the push notification to specific group                                       | default instance group |
| `queryString`  | string   | no       | Will be added to the plugin when the push notification triggers the plugin to open |                        |
| `sendToSelf`   | boolean  | no       | If false, the device scheduling the push notification will not receive it          | true                   |

#### `callback(err, result)`

Callback function after the push notification scheduling is completed.

| Name     | Type   | Description                                                                                 |
| -------- | ------ | ------------------------------------------------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful                                           |
| `result` | object | Result contains `notificationId`, which is the id of the newly scheduled push notification. |

---

### `cancel()` <div class="label control"></div><div class="label widget"></div>

`buildfire.notifications.pushNotification.cancel(notificationId, callback)`

Used to cancel a scheduled push notification

```javascript
buildfire.notifications.pushNotification.cancel(
  "608adde30af35105452a3c96",
  (err, isCancelled) => {
    if (err) return console.error(err);

    console.log("Notification cancelled", isCancelled);
  }
);
```

#### `notificationId`

| Name             | Type   | Required | Description                                                                                       | Default |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- | ------- |
| `notificationId` | string | yes      | The id of the notification that you wish to cancel. Can be obtained from `schedule` result object |         |

#### `callback(err, result)`

| Name          | Type    | Description                                               |
| ------------- | ------- | --------------------------------------------------------- |
| `err`         | string  | error string, `null` when operation is successful         |
| `isCancelled` | boolean | Indicates whether notification was cancelled successfully |

---

### `subscribe()` <div class="label widget"></div>

`buildfire.notifications.pushNotification.subscribe(options, callback)`

Use to subscribe current user to group. You can use this to create custom push notification groups within the app.

```javascript
buildfire.notifications.pushNotification.subscribe(
  { groupName: "testGroup" },
  (err, subscribed) => {
    if (err) return console.error(err);

    console.log("User subscribed to group", subscribed);
  }
);
```

#### `options`

| Name        | Type   | Required | Description                            | Default                |
| ----------- | ------ | -------- | -------------------------------------- | ---------------------- |
| `groupName` | string | no       | Name of the group to subscribe user to | default instance group |

#### `callback(err, subscribed)`

Callback function when the subscribtion is completed.

| Name         | Type    | Description                                                 |
| ------------ | ------- | ----------------------------------------------------------- |
| `err`        | string  | error string, `null` when operation is successful           |
| `subscribed` | boolean | Indicated whether user was successfully subscribed to group |

---

### `unsubscribe()` <div class="label control"></div><div class="label widget"></div>

`buildfire.notifications.pushNotification.unsubscribe(options, callback)`

Use to unsubscribe current user from group.

```javascript
buildfire.notifications.pushNotification.unsubscribe(
  { groupName: "testGroup" },
  (err, unsubscribed) => {
    if (err) return console.error(err);

    console.log("User unsubscribed from group", unsubscribed);
  }
);
```

#### `options`

| Name        | Type   | Required | Description                            | Default |
| ----------- | ------ | -------- | -------------------------------------- | ------- |
| `groupName` | string | yes      | Name of the group to subscribe user to |         |

#### `callback(err, unsubscribed)`

Callback function when the unsubscription is completed.

| Name           | Type    | Description                                                     |
| -------------- | ------- | --------------------------------------------------------------- |
| `err`          | string  | error string, `null` when operation is successful               |
| `unsubscribed` | boolean | Indicated whether user was successfully unsubscribed from group |

---
