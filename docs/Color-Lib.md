---
id: color-lib
title: Color Lib
sidebar_label: Color Lib
description:
keywords:
  - buildfire
  - color
  - lib
  - design
slug: /color-lib
---

# `buildfire.colorLib`

Color library is used to generate Gradient/Solid Colors.

## Methods

### `showDialog()` <div class="label control"></div>

`buildfire.colorLib.showDialog(data, options, onChange, callback)`

Dialog with color pickers used to generate solid color or color gradient

```javascript
buildfire.colorLib.showDialog(null, null, null, (err, result) => {
  if (result.colorType === "solid") {
    console.log("Selected color is", result.solid.color);
  } else {
    console.log("Background gradient is", result.gradient.backgroundCSS);
  }
});
```

#### `data`

Object used to preload data into dialog.

| Name        | Type   | Required | Description                                            | Default      |
| ----------- | ------ | -------- | ------------------------------------------------------ | ------------ |
| `colorType` | string | no       | Specifies color type. Can be `"solid"` or `"gradient"` | `"gradient"` |
| `gradient`  | object | no       | Object specifying gradient                             |              |
| `solid`     | object | no       | Object specifying solid color                          |              |

##### `data.gradient`

Object specifying gradient color

| Name            | Type     | Required | Description                                                                                                                                  | Default       |
| --------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `colors`        | [object] | no       | Array of color objects explaining the gradient                                                                                               |               |
| `gradientType`  | string   | no       | Gradient direction `"to bottom"`,`"to right"`,`"to top left"`,`"to top right"`,`"to top"`,`"to left"`,`"to bottom left"`,`"to bottom right"` | `"to bottom"` |
| `backgroundCSS` | string   | no       | CSS to be used as `backgroundColor` css property                                                                                             |               |

##### `data.gradient.colors[]`

Object specifying color in gradient

| Name         | Type   | Required | Description                                 | Default               |
| ------------ | ------ | -------- | ------------------------------------------- | --------------------- |
| `color`      | string | no       | Color css property                          | `rgba(255,255,255,1)` |
| `percentage` | number | no       | Percentage this color will take on gradient | `0`                   |
| `opacity`    | number | no       | Opacity, `0`-`100`                          | `100`                 |

##### `data.solid`

Object specifying solid color

| Name            | Type   | Required | Description                                      | Default                           |
| --------------- | ------ | -------- | ------------------------------------------------ | --------------------------------- |
| `color`         | string | no       | RGBA value of selected color                     | `rgba(255,255,255,1)`             |
| `colorHex`      | string | no       | HEX value of selected color                      |                                   |
| `opacity`       | number | no       | Opacity, `0`-`100`                               | `100`                             |
| `backgroundCSS` | string | no       | CSS to be used as `backgroundColor` css property | `background: rgba(255,255,255,1)` |
| `css property`  | string | no       | CSS to be used as `color` css property           | `color: rgba(255,255,255,1)`      |

#### `options`

Object used to preload data into dialog.

| Name           | Type    | Required | Description                                                        | Default  |
| -------------- | ------- | -------- | ------------------------------------------------------------------ | -------- |
| `backdrop`     | boolean | no       | Specifies if you want to show the backdrop for the dialog          | `true`   |
| `position`     | string  | no       | Specifies the dialog position. `"left"` or `"right"` or `"center"` | `center` |
| `hideGradient` | boolean | no       | Specifies if you want to hide the Gradient UI                      | `false`  |
| `hideSolid`    | boolean | no       | Specifies if you want to hide the Solid UI                         | `false`  |

#### `onChange(err, result)`

Function called every time a color is changed inside the picker

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Color object, see [data](/docs/color-lib#data)    |

#### `callback(err, result)`

Function called after closing the dialog. If a save is clicked the result will be the new value, but if the cancel is clicked the result will be the old value.

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Color object, see [data](/docs/color-lib#data)    |

#### More examples

```javascript
buildfire.colorLib.showDialog(
  { colorType: "solid" },
  { hideGradient: true },
  console.log,
  (err, result) => {
    console.log("Selected color is", result.solid.color);
  }
);
```

#### Example data object
```json
{
  "gradient": {
    "colors": [
      {
        "color": "rgba(47,211,211,1)",
        "percentage": 0,
        "opacity": 100,
        "colorHex": "#2fd3d3"
      },
      {
        "color": "rgba(2,9,9,1)",
        "percentage": 100,
        "opacity": 100,
        "colorHex": "#020909"
      }
    ],
    "gradientType": "to bottom",
    "backgroundCSS": "background: linear-gradient(to bottom, rgba(47,211,211,1) 0%, rgba(2,9,9,1) 100%)"
  },
  "solid": {
    "color": "rgba(255,255,255,1)",
    "opacity": 100,
    "backgroundCSS": "background: rgba(255,255,255,1)",
    "colorCSS": "color: rgba(255,255,255,1)"
  },
  "colorType": "gradient"
}
```
