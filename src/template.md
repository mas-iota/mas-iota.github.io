---
id: template
title: Template Title
sidebar_label: Template Label
description: This is documentation template
keywords:
  - template
slug: /template
---

# `buildfire.example.namespace`

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## Requirements

### Widget

Include `example.js` file in widget header right after the `buildfire.min.js`

```javascript
<head>
  // ...
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/components/example/example.js"></script>
</head>
```

### Control

Include `example.js` file in control header right after the `buildfire.min.js`

```javascript
<head>
  // ...
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/components/example/example.js"></script>
</head>
```

## Methods

### `method()` <div class="label control"></div><div class="label widget"></div>

`buildfire.example.method(options, callback)`

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

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

| Name      | Type    | Required | Description          | Default     |
| --------- | ------- | -------- | -------------------- | ----------- |
| `option1` | string  | yes      | Option description   |
| `option2` | boolean | no       | Option 2 description | `false`     |
| `option3` | number  | no       | Option 3 description | `500`       |
| `option4` | string  | no       | Option 4 description | `"Example"` |

#### `callback(err, data)`

Callback function after something is done

| Name   | Type   | Description                                        |
| ------ | ------ | -------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | number | Amount of examples done                            |

:::tip
Connect with [Action Items](/docs/action-items) for better user experience
:::

#### More Examples

```javascript
buildfire.example.method(
  {
    option1: "Hello",
    option2: true,
    option4: "Not example",
  },
  (err, data) => {
    if (err) return console.error(err);

    console.log("Data is " + data);
  }
);
```

---

### `method2()`<div class="label widget"></div>

`buildfire.example.method2(options, callback)`

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

```javascript
buildfire.example.method2(
  {
    option1: "Example",
  },
  (err, data) => {
    if (err) return console.error(err);

    console.log(data);
  }
);
```

:::caution Warning
This is a widget only method and it can't be used on control side! If you need similar behavior on control side see [Lorem Ipsum](#)
:::

#### `options`

| Name             | Type    | Required | Description               | Default                                      |
| ---------------- | ------- | -------- | ------------------------- | -------------------------------------------- |
| `option1`        | string  | yes      | Option description        |
| `option2`        | boolean | no       | Option 2 description      | `false`                                      |
| `advancedOption` | object  | no       | Advanced option is object | `{ subOption: "Hello", subOption2: "World"}` |

##### `options.advancedOption`

| Name         | Type   | Required | Description | Default   |
| ------------ | ------ | -------- | ----------- | --------- |
| `subOption`  | string | no       | Be creative | `"Hello"` |
| `subOption2` | string | no       | Lorem ipsum | `"World"` |

#### `callback(err, data)`

Callback function after something is done

| Name   | Type   | Description                                        |
| ------ | ------ | -------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | number | Amount of examples done                            |

#### More Examples

```javascript
buildfire.dialog.method2(
  {
    option1: "I am different",
    advancedOption: {
      subOption: "Yes",
      subOption2: "I am",
    },
  },
  (err, data) => {
    if (err) return console.error(err);
    console.log(data);
  }
);
```
