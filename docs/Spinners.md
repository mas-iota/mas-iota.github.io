---
id: spinners
title: Spinners
sidebar_label: Spinners
keywords:
  - buildfire
  - spinners
  - loading
slug: /spinners
---

# `buildfire.spinner`

This is an object within the `buildfire` singleton that is responsible for showing and hiding the environments spinner. Use this whenever you need to display to the user that there is a noticeable processing going on in the background. While you may develop your own spinners this is and easy and unified way to display a familiar spinner to the user.

:::note
The spinner may look different in different environments
:::

## Methods

### `show()` <div class="label widget"></div>

`buildfire.spinner.show()`

Shows the spinner.

```javascript
buildfire.spinner.show();
```

### `hide()` <div class="label widget"></div>

`buildfire.spinner.hide()`

Hides the spinner.

```javascript
buildfire.spinner.hide();
```
