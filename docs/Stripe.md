---
id: stripe
title: Stripe
sidebar_label: Stripe
description: BuildFire Stripe Integration
keywords:
  - buildfire
  - stripe
  - service
  - integration
  - checkout
  - charge
  - payment
  - stripe connect
  - stripe transfer
slug: /stripe
---

# `buildfire.services.stripe`

This is a built in API that allows your control or widget to integrate with Stripe Checkout.

With stripe checkout you can start accepting payments for your products and create subscription for your services, with buildfire stripe service we made it super easy and simple for you to integrate with it. The new version of stripe checkout is a smart payment page hosted by Stripe that creates payments or subscriptions.

#### Enable checkout in your dashboard

To begin using Checkout, log into the Stripe Dashboard and navigate to the Checkout settings. From here you can enable the client integration and customize the look and feel of your checkout page. please check stripe docs for more details.

:::caution important
Make sure to add `buildfire.com` and `pluginserver.buildfire.com` to the **Domains** section in [Checkout settings page](https://dashboard.stripe.com/account/checkout/settings) _before you go LIVE._
:::

#### Running Example

https://github.com/BuildFire/simpleBuildFireJSExamples/tree/master/exampleStripeCheckout

## Requirements

### Keys

This service requires [Buildfire API Public Key](/docs/api-keys#buildfire-api-public-key) and [Stripe Publishable Key](/docs/api-keys#stripe-publishable-key)

### Widget

Include `stripe.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/stripe/stripe.js"></script>
</head>
```

### Control

Include `stripe.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/stripe/stripe.js"></script>
</head>
```

## Methods

### `charge()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.charge(options, callback)`

Add dynamic product catalog and pricing and charge the customer. This is best used when you want to be able to charge customers without setting up Products in the Stripe dashboard. So it will be a dynamic amount that can be charged in realtime. If you'd like to have predefined items with fixed pricing per item then check out the Purchase method.

```javascript
buildfire.services.stripe.charge(
  {
    items: [
      {
        name: "Test Stripe Product",
        description: "This product has been generated from Buildfire SDK",
        amount: "1000", //equals 10 USD
      },
    ],
  },
  (err, result) => {
    if (err) return console.error(err);
    if (result) {
      console.log("Payment Success");
    }
  }
);
```

#### `options`

| Name            | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                        | Default       |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| `items`         | [object] | yes      | An array of items                                                                                                                                                                                                                                                                                                                                                  |               |
| `submitType`    | string   | no       | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. Supported values are `"auto"`, `"book"`, `"donate"`, or `"pay"`                                                                                                                                                          |               |
| `customerId`    | string   | no       | ID of an existing customer, if one exists. If blank, Checkout will create a new customer object based on information provided during the session. The email stored on the customer will be used to prefill the email field on the Checkout page. If the customer changes their email on the Checkout page, the Customer object will be updated with the new email. |               |
| `customerEmail` | string   | no       | If provided, this value will be used when the Customer object is created. If not provided, customers will be asked to enter their email address. Use this parameter to prefill customer data if you already have an email on file. To access information about the customer once a session is complete, use the customer field.                                    |               |
| `captureMethod` | string   | no       | Controls when the funds will be captured from the customer’s account. Possible enum values `["automatic", "manual"]`                                                                                                                                                                                                                                               | `"automatic"` |
| `automaticTax`  | boolean  | no       | Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions. to be enable should set it to `true`                                                                                                                                                                                                                       | `false`       |

#### `options.items`

| Name          | Type   | Required | Description                                                                                                                                                                                                                               | Default         |
| ------------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `name`        | string | yes      | The name for the line item                                                                                                                                                                                                                |                 |
| `description` | string | yes      | The description for the line item                                                                                                                                                                                                         |                 |
| `amount`      | number | yes      | The amount to be charged in cents                                                                                                                                                                                                         |                 |
| `currency`    | string | no       | Three-letter ISO currency code, in lowercase. Must be a supported, for more details check [stripe docs](https://stripe.com/docs/currencies)                                                                                               | `"usd"`         |
| `taxBehavior` | string | no       | Specifies whether the amount is considered inclusive of taxes or exclusive of taxes. One of `inclusive` or `exclusive`. Once specify as either `inclusive` or `exclusive` cannot be changed. **Required** when `automatic tax` is enabled | `"unspecified"` |

#### `callback(err, result)`

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | Object | The result of the completed stripe checkout session |

#### Example result

```json
{
    "id": "checkout_session_id",
    "object": "checkout.session",
    "billing_address_collection": null,
    "cancel_url": "http://app.buildfire/payments/cancel",
    "success_url": "http://app.buildfire/payments/success"
    "client_reference_id": "unqiue_key_provided_by_buildfire",
    "customer": "customer_id",
    "customer_email": "customer_email_if_provided",
    "display_items": [
        {
            "amount": 1000,
            "currency": "usd",
            "custom": {
                "description": null,
                "images": null,
                "name": "Test Product"
            },
            "quantity": 1,
            "type": "custom"
        }
    ],
    "livemode": false,
    "locale": null,
    "payment_intent": "payment_intent_id",
    "payment_method_types": [
        "card"
    ],
    "submit_type": null,
    "subscription": null,
}
```

---

### `subscribe()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.subscribe(options, callback)`

Subscribe to specific stripe plan defined in your stripe dashboard.

```javascript
buildfire.services.stripe.subscribe(
  {
    items: [
      {
        planId: "YOUR_PLAN_ID",
      },
    ],
    trialPeriodDays: 2,
  },
  (err, result) => {
    if (result) {
      console.log("Success Subscription");
    }
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
| `automaticTax`    | boolean  | no       | Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions.                                                                                                                                                                                                                                                            | `false` |

#### `options.items`

| Name       | Type   | Required | Description            | Default |
| ---------- | ------ | -------- | ---------------------- | ------- |
| `planId`   | string | yes      | Plan ID for this item  |         |
| `quantity` | number | nno      | Quantity for this item | `1`     |

#### `callback(err, result)`

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | The result of the completed stripe checkout session |

#### Example response

```json
{
  "id": "checkout_session_id",
  "object": "checkout.session",
  "billing_address_collection": null,
  "cancel_url": "http://app.buildfire/payments/cancel",
  "success_url": "http://app.buildfire/payments/success",
  "client_reference_id": "app_id_123_123",
  "customer": "customer_id",
  "customer_email": "customer_email_if_provided",
  "display_items": [
    {
      "amount": 1300,
      "currency": "gbp",
      "plan": {
        "id": "plan_id",
        "object": "plan",
        "active": true,
        "aggregate_usage": null,
        "amount": 1300,
        "billing_scheme": "per_unit",
        "created": 1564005954,
        "currency": "gbp",
        "interval": "month",
        "interval_count": 1,
        "livemode": false,
        "metadata": {},
        "nickname": "Monthly",
        "product": "product_id",
        "tiers": null,
        "tiers_mode": null,
        "transform_usage": null,
        "trial_period_days": null,
        "usage_type": "licensed"
      },
      "quantity": 1,
      "type": "plan"
    }
  ],
  "livemode": false,
  "locale": null,
  "payment_intent": null,
  "payment_method_types": ["card"],
  "submit_type": null,
  "subscription": "subscription_id"
}
```

---

### `purchase()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.purchase(options, callback)`

Purchase stripe products defined in your stripe dashboard. This method is best used when you have a predefined list of products and prices in the Stripe dashboard that you can reference per sku and not worry about pricing being passed in by the client.

```javascript
buildfire.services.stripe.purchase({
    items: [{
        sku: "PRODUCT_SKU_ID",
        quantity: 2
    }]
}, (err, result) => {
    if (err) return console.error(err);
    if (result) {
        console.log("Success Purchase");
    }
});
```

#### `options`

| Name            | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                        | Default |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `items`         | [object] | yes      | An array of items                                                                                                                                                                                                                                                                                                                                                  |         |
| `submitType`    | string   | no       | Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button. Supported values are `"auto"`, `"book"`, `"donate"`, or `"pay"`                                                                                                                                                          |
| `customerId`    | string   | yes      | ID of an existing customer, if one exists. If blank, Checkout will create a new customer object based on information provided during the session. The email stored on the customer will be used to prefill the email field on the Checkout page. If the customer changes their email on the Checkout page, the Customer object will be updated with the new email. |         |
| `customerEmail` | string   | yes      | If provided, this value will be used when the Customer object is created. If not provided, customers will be asked to enter their email address. Use this parameter to prefill customer data if you already have an email on file. To access information about the customer once a session is complete, use the customer field.                                    |         |
| `automaticTax`  | boolean  | no       | Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions. to be enable should set it to true. just work with prices (use `price` instead of `sku` in item object)                                                                                                                                                    | `false` |

#### `options.items`

| Name       | Type   | Required      | Description                                                                                      | Default |
| ---------- | ------ | ------------- | ------------------------------------------------------------------------------------------------ | ------- |
| `sku`      | string | conditionally | The ID of the SKU that the customer would like to purchase. One of `sku` or `price` is required. |         |
| `price`    | string | conditionally | The ID of the Price object. One of `price` or `sku` is required.                                 |         |
| `quantity` | number | no            | Quantity for this item                                                                           | `1`     |

#### `callback(err, result)`

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | The result of the completed stripe checkout session |

---

### `getSubscription()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.getSubscription(options, callback)`

Get stripe subscription details.

```javascript
buildfire.services.stripe.getSubscription(
  {
    subscriptionId: "SUBSCRIPTION_ID",
  },
  (err, result) => {
    if (result) {
      console.log("subscription object", result);
    }
  }
);
```

#### `options`

| Name             | Type   | Required | Description            | Default |
| ---------------- | ------ | -------- | ---------------------- | ------- |
| `subscriptionId` | string | yes      | Stripe subscription id |         |

#### `callback(err, result)`

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | The result of the completed stripe checkout session |

#### Example response

```json
{
  "id": "SUBSCRIPTION_ID",
  "object": "subscription",
  "application_fee_percent": null,
  "billing": "charge_automatically",
  "billing_cycle_anchor": 1565625862,
  "billing_thresholds": null,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": null,
  "collection_method": "charge_automatically",
  "created": 1565193862,
  "current_period_end": 1565625862,
  "current_period_start": 1565193862,
  "customer": "CUSTOMER_ID",
  "days_until_due": null,
  "default_source": null,
  "default_tax_rates": [],
  "discount": null,
  "ended_at": null,
  "items": {
    "object": "list",
    "data": [
      {
        "id": "ID",
        "object": "subscription_item",
        "billing_thresholds": null,
        "created": 1565193863,
        "metadata": {},
        "plan": {
          "id": "PLAN_ID",
          "object": "plan",
          "active": true,
          "nickname": "Monthly",
          "product": "PRODUCT_ID",
          "transform_usage": null,
          "trial_period_days": null
        },
        "quantity": 1,
        "subscription": "SUBSCRIPTION_ID",
        "tax_rates": []
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/subscription_items?subscription=SUBSCRIPTION_ID"
  },
  "livemode": false,
  "metadata": {},
  "pending_setup_intent": null,
  "plan": {
    "id": "PLAN_ID",
    "object": "plan",
    "active": true,
    "nickname": "Monthly",
    "product": "PRODUCT_ID"
  },
  "quantity": 1,
  "schedule": null,
  "start": 1565193862,
  "start_date": 1565193862,
  "status": "trialing",
  "tax_percent": null,
  "trial_end": 1565625862,
  "trial_start": 1565193862
}
```

---

### `cancelSubscription()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.cancelSubscription(options, callback)`

Cancel stripe subscription details.

```javascript
buildfire.services.stripe.cancelSubscription(
  {
    subscriptionId: "SUBSCRIPTION_ID",
    customerId: "CUSTOMER_ID",
  },
  (err, result) => {
    if (result) {
      console.log("subscription object", result);
    }
  }
);
```

#### `options`

| Name             | Type   | Required | Description            | Default |
| ---------------- | ------ | -------- | ---------------------- | ------- |
| `subscriptionId` | string | yes      | Stripe subscription id |         |
| `customerId`     | string | yes      | Stripe customer id     |         |

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | The result of the completed cancel subscription   |

#### Example response

```json
{
  "id": "SUBSCRIPTION_ID",
  "object": "subscription",
  "application_fee_percent": null,
  "billing": "charge_automatically",
  "billing_cycle_anchor": 1565625862,
  "billing_thresholds": null,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": 1565216551,
  "collection_method": "charge_automatically",
  "created": 1565193862,
  "current_period_end": 1565625862,
  "current_period_start": 1565193862,
  "customer": "CUSTOMER_ID",
  "days_until_due": null,
  "default_source": null,
  "default_tax_rates": [],
  "discount": null,
  "ended_at": null,
  "items": {
    "object": "list",
    "data": [
      {
        "id": "ID",
        "object": "subscription_item",
        "billing_thresholds": null,
        "created": 1565193863,
        "metadata": {},
        "plan": {
          "id": "PLAN_ID",
          "object": "plan",
          "active": true,
          "nickname": "Monthly",
          "product": "PRODUCT_ID",
          "transform_usage": null,
          "trial_period_days": null
        },
        "quantity": 1,
        "subscription": "SUBSCRIPTION_ID",
        "tax_rates": []
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/subscription_items?subscription=SUBSCRIPTION_ID"
  },
  "livemode": false,
  "metadata": {},
  "pending_setup_intent": null,
  "plan": {
    "id": "PLAN_ID",
    "object": "plan",
    "active": true,
    "nickname": "Monthly",
    "product": "PRODUCT_ID"
  },
  "quantity": 1,
  "schedule": null,
  "start": 1565193862,
  "start_date": 1565193862,
  "status": "canceled",
  "tax_percent": null,
  "trial_end": 1565625862,
  "trial_start": 1565193862
}
```

---

### `refundPayment()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.refundPayment(options, callback)`

Refund stripe payment.

```javascript
buildfire.services.stripe.refundPayment(
  {
    paymentIntentsId: "PAYMENT_INTENTS_ID",
    amount: 1000,
    reason: "REASON",
    metadata: {},
  },
  (err, result) => {
    if (result) {
      console.log("refund payment object", result);
    }
  }
);
```

#### `options`

| Name               | Type    | Required | Description                                                                                                                                                                                                                                                                                                             | Default |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `paymentIntentsId` | string  | yes      | stripe payment intents id                                                                                                                                                                                                                                                                                               |         |
| `amount`           | integer | no       | Default is entire charge. A positive integer in cents representing how much of this charge to refund. Can refund only up to the remaining, unrefunded amount of the charge                                                                                                                                              |         |
| `reason`           | string  | no       | The reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying fraudulent as the reason will add the associated card and email to your block lists, and will also help us improve our fraud detection algorithms |         |
| `metadata`         | object  | no       | A set of key-value pairs that you can attach to a Refund object. This can be useful for storing additional information about the refund in a structured format. You can unset individual keys if you POST an empty value for that key. You can clear all keys if you POST an empty value for metadata                   |         |

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | The result of the completed stripe refund payment |

---

### `cancelPayment()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.cancelPayment(options, callback)`

Cancel stripe payment.

```javascript
buildfire.services.stripe.cancelPayment(
  {
    paymentIntentsId: "PAYMENT_INTENTS_ID",
    cancellationReason: "CANCELLATION_REASON",
  },
  (err, result) => {
    if (result) {
      console.log("cancel payment object", result);
    }
  }
);
```

#### `options`

| Name                 | Type   | Required | Description                                                                                                                     | Default |
| -------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `paymentIntentsId`   | string | yes      | stripe payment intents id                                                                                                       |         |
| `cancellationReason` | string | no       | Reason for canceling this PaymentIntent. Possible values are `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned` |         |

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | The result of the completed stripe cancel payment |

---

### `addCustomer()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.addCustomer(options, callback)`

Add Stripe Customer

```javascript
buildfire.services.stripe.addCustomer(
  {
    email: "CUSTOMER_EMAIL",
    name: "CUSTOMER_NAME",
    description: "CUSTOMER_DESCRIPTION",
    metadata: "CUSTOMER_METADATA_OBJECT"
  },
  (err, result) => {
    if (result) {
      console.log("Customer object", result);
    }
  }
);
```

#### `options`

| Name          | Type   | Required | Description                                                                                                                                                                                                                                                                          | Default |
| ------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `email`       | string | yes      | Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to 512 characters.                                                                                                                    |         |
| `name`        | string | no       | The customer’s full name or business name.                                                                                                                                                                                                                                           |         |
| `description` | string | no       | An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.                                                                                                                                                               |         |
| `metadata`    | object | no       | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata. |         |

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | The result of the newly added Stripe Customer     |

#### Example response

```json
{
  "customer": "CUSTOMER-ID"
}
```

### `addCustomerCard()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.addCustomerCard(options, callback)`

Add Customer Card

```javascript
buildfire.services.stripe.addCustomerCard(
  {
    customerId: "CUSTOMER_ID"
  },
  (err, result) => {
    if (result) {
      console.log("paymentMethod object", result);
    }
  }
);
```

#### `options`

| Name         | Type   | Required | Description        | Default |
| ------------ | ------ | -------- | ------------------ | ------- |
| `customerId` | string | yes      | Stripe customer id |         |

#### `callback(err, result)`

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | The result of the completed stripe checkout session |

#### Example response

```json
{
  "success": true
}
```

### `capturePayment()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.capturePayment(options, callback)`

Capture payment

```javascript
buildfire.services.stripe.capturePayment(
  {
    paymentIntentsId: "PAYMENT INTENT ID",
    amountToCapture: 1000,
  },
  (err, result) => {
    if (result) {
      console.log("capturePayment object", result);
    }
  }
);
```

#### `options`

| Name               | Type   | Required | Description                                                                                                                                                                        | Default |
| ------------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `paymentIntentsId` | string | yes      | Stripe payment intents id                                                                                                                                                          |         |
| `amountToCapture`  | number | no       | The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Any additional amount will be automatically refunded. Defaults to the full. |         |

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | The result of the payment intent object           |

#### Example response

```json
{
  "success": true
}
```


### `account()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.connect.account(options, callback)`

__Connect__ is a set of programmable APIs and tools that lets you facilitate payments on your software platform, build a marketplace, and pay out sellers or service providers globally—all while shifting payments compliance to Stripe.

When using __Stripe Connect__, you need to create an account (known as a connected account) for each user that receives money on your platform.

This method will create `Express` connected account to your platform, you can later send funds from your Stripe account to the connected account.

:::note
Prerequisites:
1. <a href="https://dashboard.stripe.com/connect/tasklist">Register your platform</a>
2. Add business details to <a href="https://dashboard.stripe.com/account/onboarding">activate your account</a>
3. Complete your <a href="https://dashboard.stripe.com/connect/settings/profile">platform profile</a>
4. <a href="https://dashboard.stripe.com/settings/connect">Customize brand settings</a>
::: 

```javascript
buildfire.services.stripe.connect.account(
  {},
  (err, result) => {
    if (result) {
      console.log("Stripe connect account object", result);
    }
  }
);
```

#### `options`

| Name       | Type   | Required | Description                                                                                                                                                                                                                                                             | Default |
| ---------- | ------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `email`    | string | no       | The email address of the account holder. This is only to make the account easier to identify to you. Stripe will never directly email Custom accounts.                                                                                                                  |         |
| `metadata` | object | no       | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value |         |

#### `callback(err, result)`

| Name                             | Type    | Description                                                           |
| -------------------------------- | ------- | --------------------------------------------------------------------- |
| `err`                            | string  | error string, `null` when operation is successful                     |
| `result`                         | object  | The result of the stripe connect account object                       |
| `result.status`                  | string  | Account status, values `['pending', 'active']`                        |
| `result.is_active`               | boolean | Account activity status                                               |
| `result.bf_stripe_connect_token` | string  | BuildFire Stripe connect token, this should be saved in your database |

### `deleteAccount()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.stripe.connect.deleteAccount(options, callback)`


This method will delete the connected Stripe account from your platform.

:::note
This method will automatically check the current logged user and delete the connected Stripe account attached to it.
::: 

```javascript
buildfire.services.stripe.connect.deleteAccount(
  {},
  (err, result) => {
    if (result) {
      console.log("Stripe delete connected account object", result);
    }
  }
);
```

#### `options`

No options available

#### `callback(err, result)`

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | empty object                                      |