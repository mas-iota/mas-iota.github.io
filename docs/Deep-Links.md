---
id: deep-links
title: Deep Links
sidebar_label: Deep Links
description: How to Deep Link into BuildFire plugin using SDK.
keywords:
  - buildfire
  - deep
  - links
  - linking
  - navigation
slug: /deep-links
---

# `buildfire.deeplink`

This is an object within the `buildfire` singleton that is responsible for receiving deep link data and compiling deep links for use.

## What is a deep link?

a deep link is similar to a URL you use on the web. However, it has two major distinctions.

- the protocol is different the your standard `http://` or `https://`
- and it doesn't trigger your browser to open up a page

It relies on applications installed on your device that assumes the responsibility of handing that custom protocol/schema. In this case, it would be your app. With a deep link and the app installed you can not only open the app with the link, you can drill down to a particular plugin. That functionality is taken care of by the BuildFire framework.

There are some times where you would want to drill down even further into a plugin. This is where the custom development comes in.

A deeplink can also be registered to be used with action items allowing the user to navigate to your plugin passing the data you have already registered.

## Methods

### `registerDeeplink()` <div class="label control"></div><div class="label widget"></div>

`buildfire.deeplink.registerDeeplink(options, callback)`

Registers a deeplink into the appData. Registered deeplinks can be selected in the Control Panel action item dialogs as highlighted below:

![Deep Link](https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/actionItemDialog-withDeeplink-highlighted.png?)

In this example the developer has registered a deeplink with the name "John Doe" so that when the action item is executed it would navigate to the plugin passing the data that identifies "John Doe" allowing the plugin to internally navigate to that person.

For more info about action items dialog on control side please refer to [action-Items](/docs/action-Items).

```javascript
buildfire.deeplink.registerDeeplink(
  {
    id: "PERSON-431",
    name: "John Doe",
    deeplinkData: { personId: "PERSON-431" },
  },
  (err, result) => {
    if (err) return console.log(err);
    console.log("INSERTED/UPDATED DEEPLINK", result);
  }
);
```

#### `options`

| Name           | Type   | Required | Description                                                                           | Default |
| -------------- | ------ | -------- | ------------------------------------------------------------------------------------- | ------- |
| `id`           | string | yes      | Id of the deeplink record                                                             |
| `name`         | string | yes      | The name of the deeplink in action items dialog                                       |
| `deeplinkData` | object | yes      | Custom object that will be sent when navigating to the plugin through the action item |
| `imageUrl`     | string | no       | An image url to show next to the deeplink in action items dialog                      |

#### `callback(err, deepLink)`

Callback function that will be executed when the insertion is finished

| Name       | Type   | Description                                          |
| ---------- | ------ | ---------------------------------------------------- |
| `err`      | string | Error string, or `null` when operation is successful |
| `deepLink` | object | Inserted or updated deeplink                         |

##### `deepLink`

| Name               | Type   | Description                                                                           |
| ------------------ | ------ | ------------------------------------------------------------------------------------- |
| `deeplinkData`     | object | Custom object that will be sent when navigating to the plugin through the action item |
| `deeplinkId`       | string | Id of the deeplink record                                                             |
| `name`             | string | The name of the deeplink in action items dialog                                       |
| `pluginInstanceId` | string | Plugin instance id of the plugin where deep link can be used                          |
| `pluginTypeId`     | string | Plugin type id of the plugin where deep link can be used                              |

---

### `getDeeplink()`<div class="label widget"></div>

`buildfire.deeplink.getDeeplink(deeplinkId, callback)`

Gets a deeplink by the `deeplinkId`

```javascript
buildfire.deeplink.getDeeplink("PERSON-431", (err, result) => {
  if (err) return console.log(err);
  if (result) {
    console.log("Deep link found", result.data);
  } else {
    console.log("Deep link not found");
  }
});
```

##### `deeplinkId`

| Name         | Type   | Description               |
| ------------ | ------ | ------------------------- |
| `deeplinkId` | string | Id of the deeplink record |

#### `callback(err, result)`

Callback function after operation is complete

| Name     | Type   | Description                                                                                                             |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful                                                                       |
| `result` | number | Result object containing deep link in `data` property. `result.data` is in [deepLink](/docs/deep-links#deeplink) format |

---

### `getAllDeeplinks()` <div class="label control"></div><div class="label widget"></div>

`buildfire.deeplink.getAllDeeplinks(options, callback)`

Gets all the deeplinks from the appData according to the plugin `instanceId`

```javascript
buildfire.deeplink.getAllDeeplinks(null, (err, results) => {
  if (err) return console.log(err);
  if (results) {
    console.log(
      "ALL DEEPLINKS",
      results.map((result) => result.data)
    );
  }
});
```

#### `options`

Reserved for future usage. can be passed as `null`.

#### `callback(err, results)`

Callback function after something is done

| Name      | Type     | Description                                                                                                                  |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `err`     | string   | Error string, `null` when operation is successful                                                                            |
| `results` | [object] | Array of objects containing deep link in `data` property. `result[].data` is in [deepLink](/docs/deep-links#deeplink) format |

---

### `unregisterDeeplink()` <div class="label control"></div><div class="label widget"></div>

`buildfire.deeplink.unregisterDeeplink(deeplinkId, callback)`

Deletes / unregisters a deep link.

```javascript
buildfire.deeplink.unregisterDeeplink("PERSON-431", (err, result) => {
  if (err) return console.log(err);
  console.log("DELETED DEEPLINK", result);
});
```

##### `deeplinkId`

| Name         | Type   | Description               |
| ------------ | ------ | ------------------------- |
| `deeplinkId` | string | Id of the deeplink record |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                                             |
| -------- | ------ | ----------------------------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful                       |
| `result` | object | `{"success": true}` when operation is successful, `undefined` otherwise |

---

### `setData()` <div class="label control"></div>

`buildfire.deeplink.setData(data, options, callback)`

Takes in an object and compiles a deep link with object data. User may use the link to send to others directly into the widget and pass object data to your widget so you can use [`buildfire.deeplink.getData()`](/docs/deep-links#getdata) to retrieve the data and do whatever you need with it.

```javascript
buildfire.deeplink.setData({ myData: "data" }, null, (err, link) => {
  if (err) return console.error(err);
  console.log("Deep link", link);
});
```

##### `data`

Any data object you may want to set as the `deeplinkData`.

##### `options`

Reserved for future usage. can be passed as `null`.

#### `callback(err, link)`

Callback function after link has been created.

| Name   | Type   | Description                                                                                                                       |
| ------ | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `err`  | string | Error string, `null` when operation is successful                                                                                 |
| `link` | string | Deep link (ex. `appdc3app://plugin/ba4139dd-09c6-4121-aa4a-c72570af07fc-9997799406344?dld=%7B%22myWidgetData%22%3A%22data%22%7D`) |

---

### `getData()` <div class="label widget"></div>

`buildfire.deeplink.getData(callback)`

Used to fetch the deep link data if any was passed down to plugin.

```javascript
buildfire.deeplink.getData((deeplinkData) => {
  if (deeplinkData) console.log("Deep link data: ", deeplinkData);
});
```

#### `callback(deeplinkData)`

Callback function with link data

| Name           | Type   | Description                       |
| -------------- | ------ | --------------------------------- |
| `deeplinkData` | object | Object with custom deep link data |

---

### `onUpdate()` <div class="label widget"></div>

`buildfire.deeplink.onUpdate(callback)`

Listens for any deeplink updates. Executed whenever a new deeplink is passed to the plugin.

```javascript
buildfire.deeplink.onUpdate((deeplinkData) => {
  if (deeplinkData) console.log("Deep link data: ", deeplinkData);
});
```

#### `callback(deeplinkData)`

Callback function with link data

| Name           | Type   | Description                       |
| -------------- | ------ | --------------------------------- |
| `deeplinkData` | object | Object with custom deep link data |

---

### `createLink()` Deprecated <div class="label widget"></div> 

`buildfire.deeplink.createLink(obj)`

Returns the deep link URL for your plugin with the attached Deep Link Data that has already been set with `buildfire.deeplink.setData()`

```javascript
let link = buildfire.deeplink.createLink({data: "Mydata"});
```

#### `callback(err, deeplink)`

Takes in an object or string and compiles a deep link so that the user may use the link to send others directly into the widget subsection (obsolete)

## Sharing a deep link outside of your app

See [Share Links and Deep Linking](/docs/share-links-and-deep-linking)
