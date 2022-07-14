---
id: messaging-to-sync-your-control-to-widget
title: Messaging
sidebar_label: Messaging
description: How to use BuildFire Messaging to sync widget and control
keywords:
  - buildfire
  - messaging
  - sync
  - widget
  - control
slug: /messaging-to-sync-your-control-to-widget
---

# `buildfire.messaging`

Use messaging to communicate messages to and from the widget and control. This is usefull if you want to sync your cp with widget side emulator on Control Panel.

## Methods

### `sendMessageToControl()` <div class="label widget"></div>

`buildfire.messaging.sendMessageToControl(message)`

Send a message from the widget to the active control (content, design or settings)

```javascript
buildfire.messaging.sendMessageToControl({
  section: "details",
  subItem: 123123123,
});
```

#### `message`

| Name      | Type | Required | Description                                                                                                                                                | Default |
| --------- | ---- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `message` | any  | yes      | May be a simple data type or an object. Will be sent to the widget and will trigger the callback function `buildfire.messaging.onReceivedMessage(message)` |

### `sendMessageToWidget()`<div class="label control"></div>

`buildfire.messaging.sendMessageToWidget(message)`

Sends a message from the control to the widget emulator.

```javascript
buildfire.messaging.sendMessageToWidget({
  section: "details",
  subItem: 123123123,
});
```

#### `message`

| Name      | Type | Required | Description                                                                                                                                                 | Default |
| --------- | ---- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `message` | any  | yes      | May be a simple data type or an object. Will be sent to the control and will trigger the callback function `buildfire.messaging.onReceivedMessage(message)` |

### `sendMessageToService()`<div class="label widget"></div>

`buildfire.messaging.sendMessageToService(message)`

Sends a message from the widget to the [widget background service](/docs/background-services).

```javascript
buildfire.messaging.sendMessageToService({
  section: "details",
  subItem: 123123123,
});
```

#### `message`

| Name      | Type | Required | Description                                                                                                                                                 | Default |
| --------- | ---- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `message` | any  | yes      | May be a simple data type or an object. Will be sent to the control and will trigger the callback function `buildfire.messaging.onReceivedMessage(message)` |

### `onReceivedMessage()`<div class="label control"></div><div class="label widget"></div>

`buildfire.messaging.onReceivedMessage(message)`

Override this call back on widget, control or service to listen for any incoming messages

```javascript
buildfire.messaging.onReceivedMessage = (message) => {
  console.log("Message received", message);
};
```

#### `message`

| Name      | Type | Description                                                                        |
| --------- | ---- | ---------------------------------------------------------------------------------- | --- |
| `message` | any  | Message sent by widget, control or service depending where the lister is initiated |     |

---
