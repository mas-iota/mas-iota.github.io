---
id: in-app-purchases-commerce
title: In App Purchases
sidebar_label: In App Purchases
description:
keywords:
  - buildfire
  - in
  - app
  - purchases
  - commerce
  - service
  - subscription
  - product
slug: /in-app-purchases-commerce
---

# `buildfire.services.commerce.inAppPurchase`

IAP (In App Purchases) allows the user to gain access to premium digital content or features. Both iOS and Android supports IAP.

Check links below for more info:

- iOS: https://developer.apple.com/in-app-purchase/
- Android: https://developer.android.com/google/play/billing/billing_overview.html

If you haven't setup your app for In App Purchases in buildfire or have not yet added any products go through the following links first:

- [Set up IAP for iOS](/docs/set-up-iap-for-ios)
- [Set up IAP for Google play](/docs/set-up-iap-for-google-play)

:::note
Testing purchases only works on a mobile device.
:::

:::note Notes for Android

- For testing purchases the build must be a release build and installed from Google Play Store (Alpha, Beta or Production).
- Only testers added in your Google Play Store account can test purchases without requiring a real payment to be processed.
- The Google Play Store account user cannot be an IAP tester or have the account user linked on testing devices.

:::
:::note Notes for iOS

- For testing purchases the build must be downloaded from TestFlight.

:::

## Requirements

### Widget

Include `inAppPurchase.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/commerce/inAppPurchase.js"></script>
</head>
```

### Control

Include `inAppPurchase.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/commerce/inAppPurchase.js"></script>
</head>
```

## Methods

### `getProducts()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.commerce.inAppPurchase.getProducts(callback)`

Fetches a list of products, defined in the buildfire control panel.

```javascript
buildfire.services.commerce.inAppPurchase.getProducts((err, products) => {
  if (err) return console.error(err);

  console.log('In app purchase products', products);
});
```

#### `callback(err, products)`

Callback function called when products are fetched. Might get error if called too early before InAppPurchase initializes.

| Name       | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| `err`      | string   | error string, `null` when operation is successful |
| `products` | [object] | Array of products available                       |

#### `product`

Each `product` has the following properties, as defined in the control panel.

| Name                | Type   | Description                                                                                |
| ------------------- | ------ | ------------------------------------------------------------------------------------------ |
| `id`                | string | Unique, randomly generated identifier                                                      |
| `name`              | string | Display name, assigned in the control panel                                                |
| `platformProductId` | string | Unique identifier, assigned to the product when it is created on Apple or Android platform |
| `tag`               | string | Tag assigned to a user when they purchase a product.                                       |

---

### `getSubscriptions()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.commerce.inAppPurchase.getSubscriptions(callback)`

Fetches a list of subscriptions, defined in the buildfire control panel.

```javascript
buildfire.services.commerce.inAppPurchase.getSubscriptions((err, subscriptions) => {
  if (err) return console.error(err);

  console.log('In app purchase subscriptions', subscriptions);
});
```

#### `callback(err, products)`

Callback function called when subscriptions are fetched. Might get error if called too early before InAppPurchase initializes.

| Name            | Type     | Description                                       |
| --------------- | -------- | ------------------------------------------------- |
| `err`           | string   | error string, `null` when operation is successful |
| `subscriptions` | [object] | Array of subscriptions available                  |

#### `subscription`

Each `subscription` has the following properties, as reflected in the control panel.

| Name                | Type   | Description                                                                                |
| ------------------- | ------ | ------------------------------------------------------------------------------------------ |
| `id`                | string | Unique, randomly generated identifier                                                      |
| `name`              | string | Display name, assigned in the control panel                                                |
| `platformProductId` | string | Unique identifier, assigned to the product when it is created on Apple or Android platform |
| `tag`               | string | Tag assigned to a user when they purchase a subscription.                                  |

---

### `purchase()` <div class="label widget"></div>

`buildfire.services.commerce.inAppPurchase.purchase(productId, callback)`

Initiates a purchase request.

```javascript
buildfire.services.commerce.inAppPurchase.purchase('m1eo1i1e91da2si2d12', (err, result) => {
  if (err) return console.error(err);

  console.log('Purchase request result', result);
});
```

#### `productId`

Id assigned to the product. Note that this ID is not the Google Play product ID, or the iOS product ID. It is an auto generated id that can be retrieved using `getProducts` function.

| Name        | Type   | Required | Description                                                                                                                                                                            | Default |
| ----------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `productId` | string | yes      | Id assigned to the product. Note that this ID is not the Google Play product ID, or the iOS product ID. It is an auto generated id that can be retrieved using `getProducts` function. |         |

#### `callback(err, result)`

Callback function executed when purchase request is completed. May not be called if user leaves the purchase. Returns the result of the purchase request, if successful (the request, not the purchase itself).

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Object containing purchase result details         |

#### `result`

| Name          | Type    | Description                         |
| ------------- | ------- | ----------------------------------- |
| `product`     | object  | Product object                      |
| `isApproved`  | boolean | Indicates if payment is approved    |
| `hasErrors`   | boolean | Indicates if payment error happened |
| `isCancelled` | boolean | Indicates if payment was cancelled  |

---

### `checkIsPurchased()` <div class="label widget"></div>

`buildfire.services.commerce.inAppPurchase.checkIsPurchased(options, callback)`

Checks if a product or subscription has been purchased. In addition, this will check if a subscription is expired or invalid.

```javascript
const options = { productId: 'm1eo1i1e91da2si2d12', type: 'subscription' };

buildfire.services.commerce.inAppPurchase.checkIsPurchased(options, (err, isPurchased) => {
  if (err) return console.error(err);

  console.log('Item Purchased:', isPurchased);
});
```

#### `options`

| Name        | Type   | Required | Description                                                                                                                                                                            | Default   |
| ----------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `productId` | string | yes      | Id assigned to the product. Note that this ID is not the Google Play product ID, or the iOS product ID. It is an auto generated id that can be retrieved using `getProducts` function. |           |
| `type`      | string | no       | Determines the type of purchase to check for (subscription or product).                                                                                                                | `product` |

#### `callback(err, result)`

Callback function executed when the request is complete. Returns ownership state as a boolean.

| Name     | Type    | Description                                                                                                                                           |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful                                                                                                     |
| `result` | boolean | Returns true if the product has been purchased. Returns false if the product is not purchased, a subscription is expired, or any purchase is invalid. |
