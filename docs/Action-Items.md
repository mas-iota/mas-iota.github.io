---
id: action-items
title: Action Items
sidebar_label: Action Items
description: How to create and execute an Action Item using Buildfire SDK.
keywords:
  - buildfire
  - action
  - items
slug: /action-items
---

# `buildfire.actionItems`

**Action Items** is an object that represent an **action to take**. This could be a link to open in a browser, could be a telephone number to call or sms, and/or could be an address to navigate to. The details of these objects shouldn't concern you. All you need to do is save it in your datastore and when it's time to execute an item just call `buildfire.actionItems.execute`

## Methods

### `showDialog()` <div class="label control"></div>

`buildfire.actionItems.showDialog(actionItem, options, callback)`

Shows a dialog for the App Owner to create an Action Item.

```javascript
buildfire.actionItems.showDialog(null, null, (err, actionItem) => {
  if (err) return console.error(err);
  console.log("Action item created", actionItem);
});
```

#### `actionItem`

Allows you to pass a previously saved `actionItem` that the user would like to edit

Possible action items are:

##### `linkToWeb`

```javascript
title: "build fire",
url: "https://www.facebook.com/buildfireapps",
action: "linkToWeb",
openIn: "_blank" or "_system",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `linkToApp`

```javascript
instanceId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2-1449796387765";
action: "linkToApp",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `sendEmail`

```javascript
title: "Send Email",
subject : "action Item Test"
body : "We are testing action Item send Email"
email: "support@buildfire.com",
action: "sendEmail",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `callNumber`

```javascript
phoneNumber: "+1-541-754-3010",
action: "callNumber",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `sendSMS`

```javascript
title: "Send SMS",
subject : "action Item SMS Example"
phoneNumber: "+1-541-754-3010",
action: "sendSMS",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `navigateToAddress`

```javascript
title: "Navigate to address title",
lat: "37.7944988",
lng: "-122.3947446",
address :"1 Market Street, San Francisco, CA, United States"
action: "navigateToAddress",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `navigateToAddress`

```javascript
title: "Navigate to address title",
lat: "37.7944988",
lng: "-122.3947446",
address :"1 Market Street, San Francisco, CA, United States"
action: "navigateToAddress",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `linkToSocialGoogle`

```javascript
title: "Link to google",
url: "https://plus.google.com/+Buildfireapps"
action: "linkToSocialGoogle",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `linkToSocialInstagram`

```javascript
title: "Link to instagram",
url:"https://instagram.com/google/?hl=en",
action: "linkToSocialInstagram",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `linkToSocialLinkedIn`

```javascript
title: "Link to LinkedIn",
url:"https://www.linkedin.com/company/buildfire",
action: "linkToSocialLinkedIn",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `linkToSocialFaceBook`

```javascript
title: "Link to Facebook",
url:"https://www.facebook.com/buildfireapps",
action: "linkToSocialFacebook",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `linkToSocialTwitter`

```javascript
title: "Link to Twitter",
url:"https://twitter.com/buildfire",
action: "linkToSocialTwitter",
iconUrl: "", // Link to icon image used to represent this action item
```

##### `noAction`

```javascript
title: "No Action",
action: "noAction",
iconUrl: "", // Link to icon image used to represent this action item
```

#### `options`

| Name              | Type    | Required | Description                                                              | Default                |
| ----------------- | ------- | -------- | ------------------------------------------------------------------------ | ---------------------- |
| `showIcon`        | boolean | no       | Specifies if you want to show the "icon"                                 | `false`                |
| `allowNoAction`   | boolean | no       | Allows the [`noAction`](/docs/action-items#noaction) action              | `false`                |
| `actionTextLabel` | string  | no       | Custom label to show next to the action item display text field          | `"Action Button Text"` |
| `hideActionText`  | boolean | no       | Does not ask the user to provide a display text value to the action item | `false`                |

#### `callback(err, actionItem)`

Callback function after action item dialog is completed.

| Name         | Type   | Description                                                    |
| ------------ | ------ | -------------------------------------------------------------- |
| `err`        | string | error string, `null` when operation is successful              |
| `actionItem` | object | [`actionItem`](/docs/action-items#actionitem) that was created |

![Deep Link](/img/actionItemDialog-withDeeplink.png)

#### More Examples

```javascript
buildfire.actionItems.showDialog(
  { title: "Change the title", action: "noAction" },
  { showIcon: true, allowNoAction: true },
  (err, actionItem) => {
    if (err) return console.error(err);
    console.log("Action item created", actionItem);
  }
);
```

---

### `execute()` <div class="label widget"></div>

`buildfire.actionItems.execute(actionItem, callback)`

It will take a previously saved `actionItem` and execute it. If its a link it will open in a browser, if its a telephone number it will call that phone number, etc..

```javascript
buildfire.actionItems.execute(
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
  },
  (err) => {
    if (err) return console.error(err);
  }
);
```

#### `actionItem`

See [`actionItem`](/docs/action-items#actionitem)

#### `callback(err)`

Callback function after action item is executed

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `list()`<div class="label widget"></div>

`buildfire.actionItems.list(actionItems, options, callback)`

Takes an array of previously saved `actionItem`s and lists them in a standard popup.

```javascript
buildfire.actionItems.list(
  [
    {
      title: "Open Facebook",
      url: "https://www.facebook.com/buildfireapps",
      action: "linkToSocialFacebook",
    },
    {
      title: "Open Linkedin",
      url: "https://www.linkedin.com/company/buildfire",
      action: "linkToSocialLinkedIn",
    },
  ],
  {
    executeItem: true,
  },
  (err, actionItem) => {
    if (err) return console.error(err);

    console.log("Executed", actionItem);
  }
);
```

#### `actionItems`

Array of [`actionItems`](/docs/action-items#actionitem)

#### `options`

| Name          | Type    | Required | Description                                      | Default |
| ------------- | ------- | -------- | ------------------------------------------------ | ------- |
| `executeItem` | boolean | no       | Automatically execute after user selects an item | `true`  |

#### `callback(err, actionItem)`

Callback function after action item is executed

| Name         | Type   | Description                                                          |
| ------------ | ------ | -------------------------------------------------------------------- |
| `err`        | string | error string, `null` when operation is successful                    |
| `actionItem` | object | Selected [`actionItem`](/docs/action-items#actionitem) from the list |
