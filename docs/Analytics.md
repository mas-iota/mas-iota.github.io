---
id: analytics
title: Analytics
sidebar_label: Analytics
description: How to capture Analytics for your BuildFire plugin
keywords:
  - buildfire
  - analytics
  - capture
  - statistics
  - event
  - views
  - actions
slug: /analytics
---

# `buildfire.analytics`

BuildFire provides a way for developers to track plugin views and user actions with minimal setup so they can retrieve all these analytical data later.
These events will be sent to our **analytics server** and then forwarded to the developer [segment.io](https://segment.io) account which will be set by the developer. Our Intergration with segment.io, will allow developers to receive events at any of the endpoints supported by segment.io.

:::danger important
Events will be also accessible to BuildFire, White Label owners and the app owner so it is very important NOT to use it to send sensitive information such as user passwords or anything that may violate users privacy.
:::

## Methods

### `trackView()` <div class="label control"></div><div class="label widget"></div>

`buildfire.analytics.trackView(eventName, metaData)`

Tracks the view in analytics

```javascript
buildfire.analytics.trackView("home");
```

#### arguments

The name of the view you wish to track

| Name        | Type | Required | Description                                                   | Default |
| ----------- | ---- | -------- | ------------------------------------------------------------- | ------- |
| `eventName` | type | yes      | The name of the view you wish to track                        |         |
| `metaData`  | type | no       | Any extra information you would like to add to the user event |         |

:::note
To have aggregation reports in Control Side, you need to pass aggregation value inside metadata obj like so:

```json
_buildfire: {
  aggregationValue: 10
}

```

:::

#### Aggregation example

```javascript
buildfire.analytics.trackView("home", {
  _buildfire: { aggregationValue: 10 },
});
```

---

### `trackAction()` <div class="label control"></div><div class="label widget"></div>

`buildfire.analytics.trackAction(eventName, metaData)`

User actions, such as a button click, can be tracked by using the trackAction function

```javascript
buildfire.analytics.trackAction("sheet-entry", { totalEntries: 5 });
```

#### arguments

| Name        | Type | Required | Description                                                   | Default |
| ----------- | ---- | -------- | ------------------------------------------------------------- | ------- |
| `eventName` | type | yes      | The name of the view you wish to track                        |         |
| `metaData`  | type | no       | Any extra information you would like to add to the user event |         |

:::note
To have aggregation reports in Control Side, you need to pass aggregation value inside metadata obj like so:

```json
_buildfire: {
  aggregationValue: 10
}

```

:::

#### Aggregation example

```javascript
buildfire.analytics.trackAction("home",  {
  totalEntries: 5
  _buildfire: { aggregationValue: 5 },
});
```

---

### `registerEvent()` <div class="label control"></div>

`buildfire.analytics.registerEvent(event, options, callback)`

This function used to register an event for your plugin.

```javascript
buildfire.analytics.registerEvent(
  {
    title: "custom-event",
    key: "customEvent",
    description: "Custom event description",
  },
  { silentNotification: true }
);
```

#### `event`

Event object

| Name          | Type   | Required | Description       | Default |
| ------------- | ------ | -------- | ----------------- | ------- |
| `title`       | string | yes      | Event title       |         |
| `key`         | string | yes      | Event unique key  |         |
| `description` | string | no       | Event description |         |

#### `options`

| Name                 | Type    | Required | Description                                                                                         | Default |
| -------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------- | ------- |
| `silentNotification` | boolean | no       | Determine wether you want to display a notification to the customer, with the new registered event. | `false` |

#### `callback(err, result)`

Optional callback function after registering event

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result from saving your event in database         |

#### How to create Custom Event for your plugin

Plugin events are useful to give the customer detailed analytics of the user's behavior in your plugin. You can do that by registering your plugin events in the control side of your plugin. Once you register your custom events, you can track them using the above examples using `trackAction`.

The Analytics tab in the Control side, will have three reports:

1. **Daily Report:** Will show the total count of the selected event.

   **Daily report without Aggregation value:**

   ![Daily Report](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/plugin-analytics/daily-events-report.png?v=3)

   **Daily report with Aggregation value:**

   ![Daily Report Aggregation](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/plugin-analytics/aggregation-event-report.png?v=1)

2. **Top Users Report:** Will show the top users for the selected event.

![Top Users](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/plugin-analytics/top-users-report.png?v=3)

3. **Details Report:** will show detail info about each user.

![Details Report](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/plugin-analytics/details-users-report.png?v=3)

These three reports will recalculate the data depending on the selected event from the list on the left top corner, or when changing the selected days period on the right top corner.

![Registered Events](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/plugin-analytics/events-dropdownlist.png?v=3)

Once you register your plugins in the control side, the customers will see a notification in the Analytics tab, to inform them that there is a new event registered to the plugin, so they can check the reports related to the new event. This notification is controled by `silentNotification`

![Notification](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/plugin-analytics/register-event-notificaiton.png)

---

### `unregisterEvent()` <div class="label control"></div>

`buildfire.analytics.unregisterEvent(key, callback)`

This function is used to unregister an event for your plugin.

```javascript
buildfire.analytics.unregisterEvent("customEvent");
```

#### `key`

Event key

| Name  | Type   | Required | Description | Default |
| ----- | ------ | -------- | ----------- | ------- |
| `key` | string | yes      | Event key   |         |

#### `callback(err, result)`

Optional callback function after unregistering event

| Name     | Type              | Description                                       |
| -------- | ----------------- | ------------------------------------------------- |
| `err`    | string            | error string, `null` when operation is successful |
| `result` | Unregister result | Usually `{status: "deleted"}`                     |

---

### `showReports()` <div class="label control"></div>

`buildfire.analytics.showReports(options, callback)`

This function is used to show the analytic reports modal for specific event.

```javascript
buildfire.analytics.showReports({ eventKey: "customEvent" });
```

#### `options`

| Name       | Type   | Required | Description                            | Default |
| ---------- | ------ | -------- | -------------------------------------- | ------- |
| `eventKey` | string | yes      | Event key for which to display reports |         |

#### `callback(err, result)`

Optional callback after modal is shown

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful |
| `result` | boolean | `true` when dialog is displayed                   |

---
