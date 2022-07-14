# `buildfire.services.stripe`

This is a built in API that allows your control or widget to integrate with Stripe Checkout.

## Requirements

### Widget

Include `example.js` file in widget header right after the `buildfire.min.js`

```html
<head>
<!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/example.js"></script>
</head>
```

### Control

Include `example.js` file in control header right after the `buildfire.min.js`

```html
<head>
<!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/example.js"></script>
</head>
```


## Methods

### `charge()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.charge(options, callback)`

Add dynamic product catalog and pricing and charge the customer. This is best used when you want to be able to charge customers without setting up Products in the Stripe dashboard. So it will be a dynamic amount that can be charged in realtime. If you'd like to have predefined items with fixed pricing per item then check out the Purchase method.

```javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
```

#### `options`



| Name            | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                        | Default |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `items`         | [object] | yes      | An array of items                                                                                                                                                                                                                                                                                                                                                  |         |
| `submitType`    | string   | yes      | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. Supported values are "auto, book, donate, or pay"                                                                                                                                                                        |         |
| `customerId`    | string   | no       | ID of an existing customer, if one exists. If blank, Checkout will create a new customer object based on information provided during the session. The email stored on the customer will be used to prefill the email field on the Checkout page. If the customer changes their email on the Checkout page, the Customer object will be updated with the new email. |         |
| `customerEmail` | string   | yes      | If provided, this value will be used when the Customer object is created. If not provided, customers will be asked to enter their email address. Use this parameter to prefill customer data if you already have an email on file. To access information about the customer once a session is complete, use the customer field.                                    |         |
#### `callback(err, result)`



| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | Object | The result of the completed stripe checkout session |


---

### `subscribe()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.subscribe(options, callback)`

Subscribe to specific stripe plan defined in your stripe dashboard.

```javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
```

#### `options`



| Name              | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                        | Default |
| ----------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `items`           | [object] | yes      | An array of items                                                                                                                                                                                                                                                                                                                                                  |         |
| `trialPeriodDays` | integer  | no       | The number of trial period days before the customer is charged for the first time.                                                                                                                                                                                                                                                                                 |         |
| `customerId`      | string   | yes      | ID of an existing customer, if one exists. If blank, Checkout will create a new customer object based on information provided during the session. The email stored on the customer will be used to prefill the email field on the Checkout page. If the customer changes their email on the Checkout page, the Customer object will be updated with the new email. |         |
| `customerEmail`   | string   | yes      | If provided, this value will be used when the Customer object is created. If not provided, customers will be asked to enter their email address. Use this parameter to prefill customer data if you already have an email on file. To access information about the customer once a session is complete, use the customer field.                                    |         |
#### `callback(err, result)`



| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | The result of the completed stripe checkout session |


---

### `purchase()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.purchase(options, callback)`

Purchase stripe products defined in your stripe dashboard. This method is best used when you have a predefined list of products and prices in the Stripe dashboard that you can reference per sku and not worry about pricing being passed in by the client.

```javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
```

#### `options`



| Name            | Type     | Required | Description                                                                                                                                                                                 | Default |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `items`         | [object] | yes      | An array of items                                                                                                                                                                           |         |
| `submitType`    | string   | yes      | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. Supported values are "auto, book, donate, or pay" |         |
| `customerId`    | string   | yes      |                                                                                                                                                                                             |         |
| `customerEmail` | string   | no       |                                                                                                                                                                                             |         |
#### `callback()`



| Name | Type | Description |
| ---- | ---- | ----------- |



---

### `result()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.result()`

The result of the completed stripe checkout session

```javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
```



---

### `()` 

`buildfire.services.stripe.()`



```javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
```



---

### `()` 

`buildfire.services.stripe.()`



```javascript
buildfire.example.method(
  {
    option1: "Something",
  },
  (err, data) => {
    console.log(err, data);
  }
);
```



---
