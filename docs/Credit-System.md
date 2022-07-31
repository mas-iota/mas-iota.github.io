---
id: credit-system
title: Credit System
sidebar_label: Credit System
keywords:
  - buildfire
  - credit
  - system
slug: /credit-system
---

# `buildfire.services.credits`

API accessible via the Buildfire plugin SDK that allows plugin developers to add and manage user credits. Credits can be managed and consumed via the API.

:::caution Notes

- The user must be logged in and authenticated for credit-system API calls to succeed.
- Bundles are configured through the Control Panel side of a Buildfire app and are not accessible through the SDK API.

:::

The following link is an example of how to create a plugin with the Buildfire credit-system API. https://github.com/BuildFire/simpleBuildFireJSExamples/tree/master/examplePluginCreditSystem

Examples included in demo plugin:

- Integration with the credit-system on the control panel side to add bundles.
- A complete example of UI integrated with the credit-system API.

## Requirements

### Widget

Include `credits.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/credits/credits.js"></script>
</head>
```

### Control

Include `credits.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/credits/credits.js"></script>
</head>
```

## Methods

### `getBundles()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.credits.getBundles(callback)`

This method will return all bundles available.

```javascript
buildfire.services.credits.getBundles((err, bundles) => {
  if (err) return console.err(err);

  console.log("Credit bundles", bundles);
});
```

#### `callback(err, bundles)`

Callback function thta will be called after all bundles have been retrieved.

| Name      | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| `err`     | string   | error string, `null` when operation is successful |
| `bundles` | [object] | Array of bundles                                  |

---

### `purchaseBundle()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.credits.purchaseBundle(options, callback)`

This method will facilitate the purchase of a bundle. When you call it your chosen payment provider will be called and credits will be deducted from the users balance within the credit system.

```javascript
buildfire.services.credits.purchaseBundle(
  { bundleId: "my_bundle_id" },
  (err, result) => {
    if (err) return console.err(err);

    console.log("Purchase bundle result", result);
  }
);
```

#### `options`

| Name       | Type   | Required | Description                             | Default |
| ---------- | ------ | -------- | --------------------------------------- | ------- |
| `bundleId` | string | yes      | Id of the bundle the user is purchasing |         |
| `memo`     | string | no       |                                         |         |
| `xRef1`    | string | no       |                                         |         |
| `xRef2`    | string | no       |                                         |         |
| `xRef3`    | string | no       |                                         |         |

#### `callback(err, result)`

Callback function that will be invoked after purchasing the bundle has been completed.

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Purchasing bundle result                          |

---

### `consumeCredits()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.credits.consumeCredits(options, callback)`

Calling this method will subtract credits from the balance of a user.

```javascript
buildfire.services.credits.consumeCredits(
  { creditAmount: 10 },
  (err, result) => {
    if (err) return console.err(err);

    console.log("Credits consumed", result);
  }
);
```

#### `options`

| Name           | Type   | Required | Description                                                           | Default |
| -------------- | ------ | -------- | --------------------------------------------------------------------- | ------- |
| `creditAmount` | number | yes      | NumberAmount of credit you would like to subtract from users account. |         |
| `memo`         | string | no       |                                                                       |         |
| `xRef1`        | string | no       |                                                                       |         |
| `xRef2`        | string | no       |                                                                       |         |
| `xRef3`        | string | no       |                                                                       |         |

#### `callback(err, data)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object |                                                   |

---

### `getUser()` <div class="label control"></div>

`buildfire.services.credits.getUser(callback)`

This method will retrieve the details of a users account.

```javascript
buildfire.services.credits.getUser((err, user) => {
  if (err) return console.err(err);

  console.log("User", user);
});
```

#### `callback(err, user)`

Will be invoked after user info is available.

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `user` | object | User object                                       |

---

### `getUserTransactions()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.credits.getUserTransactions(options, callback)`

This method returns the history of transactions for the currently logged in user.

```javascript
buildfire.services.credits.getUserTransactions(
  { pageSize: 20, pageIndex: 0 },
  (err, transactions) => {
    if (err) return console.err(err);

    console.log("User transactions", transactions);
  }
);
```

#### `options`

| Name        | Type   | Required | Description                                         | Default |
| ----------- | ------ | -------- | --------------------------------------------------- | ------- |
| `pageSize`  | number | yes      | Indicates the amount of results to return per call. |         |
| `pageIndex` | number | yes      | Page number to return                               |         |

#### `callback(err, transactions)`

Callback function after transactions are fetched

| Name           | Type     | Description                                       |
| -------------- | -------- | ------------------------------------------------- |
| `err`          | string   | error string, `null` when operation is successful |
| `transactions` | [object] | Array of users transactions                       |

---

### `transferCredits()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.credits.transferCredits(options, callback)`

This method transfer credits from current loggedIn user to another user.

```javascript
buildfire.services.credits.transferCredits(
  { receiverUserEmail: "johndoe@buildfire.com", creditAmount: 10 },
  (err, result) => {
    if (err) return console.err(err);

    console.log("Transaction result", result);
  }
);
```

#### `options`

| Name                | Type   | Required | Description                                                                           | Default |
| ------------------- | ------ | -------- | ------------------------------------------------------------------------------------- | ------- |
| `receiverUserToken` | string | yes      | The userId for the receiving user. Required if `receiverUserEmail` is not present     |         |
| `receiverUserEmail` | string | yes      | The user email for the receiving user. Required if `receiverUserToken` is not present |         |
| `creditAmount`      | number | yes      | Amount of credits to transfer                                                         |         |

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Transaction result                                |

---

### `showTransactions()` <div class="label control"></div>

`buildfire.services.credits.showTransactions()`

Show the transactions popup for all users

```javascript
buildfire.services.credits.showTransactions();
```

---
