---
id: contacts
title: Contacts
sidebar_label: Contacts
description: How to get devices' contacts in BuildFire's apps
keywords:
  - buildfire
  - contacts
  - feature
  - device
  - android
  - ios
slug: /contacts
---

# `buildfire.device.contacts`

This feature allows the app to access and to get devices contacts.

:::note
This feature works only on devices; so it will return an error if it was triggered outside devices
:::

## Requirements

### `plugin.json`

In [plugin.json](/docs/plugin-json-file) add `Contacts` in your features array `"features" : [{"name" : "Contacts"}]`

## Methods

### `showDialog()` <div class="label widget"></div>

`buildfire.device.contacts.showDialog(options, callback)`

This function allows you to select one contact, where it shows the contacts in the device via native UI and you can select one of them. It may also ask the user for permission to access the device's contacts if it hasn't previously.

```javascript
buildfire.device.contacts.showDialog({}, (err, contact) => {
  if(err) return console.error(err);
  console.log("The Selected Contact", contact);
});
```

#### `callback(err, data)`

Callback function after selecting a contact

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | Error string, `null` when operation is successful |
| `data` | object | The selected contact                              |

##### `data`

| Name           | Type     | Description                                                                                                                      |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | string   | The name of the contact                                                                                                          |
| `emails`       | [object] | Array of the contact's emails, example  `"emails": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}`              |
| `photos`       | [object] | Array of the contact's photos, example  `"photos": [{"value":<string>,"pref":<bool>,"type":<string>`                             |
| `phoneNumbers` | [object] | Array of the contact's phone numbers, example  `"phoneNumbers": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}` |

:::caution note
`pref` and `type` in (`emails`, `photos` and `phoneNumbers`) are widely supported but make sure to check nullability (or being undefined) for both of them
:::

### Example of the received data


```
{
  "name":"John Appleseed",
  "emails": [
    {
      "value":"John-Appleseed@mac.com","pref":false,"id":0,"type":"work"
    }
  ],
  "photos": [
    {
      "value":"/Users/buildfire/Library/Developer/CoreSimulator/Devices/2384C1C9-2898-4633-AB6B-E8A76DDC0B1D/data/Containers/Data/Application/
       099B01C2-290E-446B-A0A2-D760FB78AF14/tmp/contact_photo_3","type":"url","pref":"false"
    }
  ],
  "phoneNumbers": [
    {
      "value":"888-555-5512","pref":false,"id":0,"type":"mobile"
    },
    {
      "value":"888-555-1212","pref":false,"id":1,"type":"home"
    }
  ]
}
```
---

### `search()`<div class="label widget"></div>

`buildfire.device.contacts.search(options, callback)`

This function allows you to select multiple contacts, where you will get all the contacts (in a drawer) from the device and you can select from them. It may also ask the user for permission to access the device's contacts if it hasn't previously.


```javascript
buildfire.device.contacts.search({}, (err, contacts) => {
  if(err) return console.error(err);
    console.log("The Selected Contacts", contacts);
});
```

#### `options`

| Name               | Type   | Required | Description                                                           | Default     |
| ------------------ | ------ | -------- | --------------------------------------------------------------------- | ----------- |
| `header`           | string | no       | Text or HTML to be rendered as the drawer's header                    |
| `content`          | string | no       | Text or HTML to be rendered in the drawer's body                      |             |
| `drawerButtonText` | string | no       | Text of the button                                                    | `'Import'`  |
| `drawerButtonType` | string | no       | Type of the button (primary, success, info, danger, warning, default) | `'success'` |

#### `callback(err, data)`

Callback function after selecting contacts

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| `err`  | string   | Error string, `null` when operation is successful |
| `data` | [object] | Array of the selected contacts                    |

##### `data`

| Name           | Type     | Description                                                                                                                      |
| -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | string   | The name of the contact                                                                                                          |
| `emails`       | [object] | Array of the contact's emails, example  `"emails": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}`              |
| `photos`       | [object] | Array of the contact's photos, example  `"photos": [{"value":<string>,"pref":<bool>,"type":<string>`                             |
| `phoneNumbers` | [object] | Array of the contact's phone numbers, example  `"phoneNumbers": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}` |

:::caution note
`pref` and `type` in (`emails`, `photos` and `phoneNumbers`) are widely supported but make sure to check nullability (or being undefined) for both of them
:::

### Example of the received data

```
{
  "name":"John Appleseed",
  "emails": [
    {
      "value":"John-Appleseed@mac.com","pref":false,"id":0,"type":"work"
    }
  ],
  "photos": [
    {
      "value":"/Users/buildfire/Library/Developer/CoreSimulator/Devices/2384C1C9-2898-4633-AB6B-E8A76DDC0B1D/data/Containers/Data/Application/
       099B01C2-290E-446B-A0A2-D760FB78AF14/tmp/contact_photo_3","type":"url","pref":"false"
    }
  ],
  "phoneNumbers": [
    {
      "value":"888-555-5512","pref":false,"id":0,"type":"mobile"
    },
    {
      "value":"888-555-1212","pref":false,"id":1,"type":"home"
    }
  ]
}
```

#### More Examples

```javascript
buildfire.device.contacts.search(
  {
    header: "Contacts", 
    content: "Select Contacts", 
    drawerButtonText: "Import Contacts", 
    drawerButtonType: 'primary'
  }, 
  (err, contacts) => {
  if(err) return console.error(err);
  console.log("The Selected Contacts", contacts);
});
```
