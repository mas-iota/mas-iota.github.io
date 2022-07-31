---
id: material-design-theme
title: Material Design Theme
sidebar_label: Material Design Theme
keywords:
  - buildfire
  - material
  - design
  - theme
slug: /material-design-theme
---

### How to use

A plugin that uses Material Design can inherit app colors and font into the plugin by injecting the [meta tag](/docs/meta-tags) `enableMDTheme` as following

```html
<head>
  <!-- ... -->
  <meta name="buildfire" content="enableMDTheme" />
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
</head>
```

:::warning
Meta tags must be added to the head of the HTML document before [buildfire.min.js](/docs/buildfire.js) is referenced
:::

Injected styles use CSS custom properties as explained in https://material.io/develop/web/components/theme/

### Referencing Material Design

You can reference Material Design JS and CSS files instead of having to include them in your plugin resources as following:

#### Control

```html
<head>
  <!-- Enable material theme using meta tag -->
  <meta name="buildfire" content="enableMDTheme" />

  <!-- Include buildfire.js -->
  <script src="../../../../scripts/buildfire.min.js"></script>

  <!-- Include material design css and js -->
  <link
    href="../../../../styles/materialDesign/material-components-web@4.0.0.min.css"
    rel="stylesheet"
  />
  <script
    src="../../../../scripts/materialDesign/material-components-web@4.0.0.min.js"
    type="text/javascript"
  ></script>
</head>
```

#### Widget

```html
<head>
  <!-- Enable material theme using meta tag -->
  <meta name="buildfire" content="enableMDTheme" />

  <!-- Include buildfire.js -->
  <script src="../../../scripts/buildfire.min.js"></script>

  <!-- Include material design css and js -->
  <link
    href="../../../styles/materialDesign/material-components-web@4.0.0.min.css"
    rel="stylesheet"
  />
  <script
    src="../../../scripts/materialDesign/material-components-web@4.0.0.min.js"
    type="text/javascript"
  ></script>
</head>
```

### Predefined classes

Predefined custom properties can apply app styles to most of the components. However, for components or elements that do not have colors defined it is recommended to use the following predefined classes

| Custom property                           | Description                                                                  |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| `mdc-theme--primary`                      | Sets the text color to the theme primary color.                              |
| `mdc-theme--secondary`                    | Sets the text color to the theme secondary color.                            |
| `mdc-theme--background`                   | Sets the background color to the theme background color.                     |
| `mdc-theme--surface`                      | Sets the background color to the surface background color                    |
| `mdc-theme--error`                        | Sets the text color to the theme error color.                                |
| `mdc-theme--on-primary`                   | Sets the text color to the color configured for text on the primary color.   |
| `mdc-theme--on-secondary`                 | Sets the text color to the color configured for text on the secondary color. |
| `mdc-theme--on-surface`                   | Sets the text color to the color configured for text on the surface color.   |
| `mdc-theme--on-error`                     | Sets the text color to the color configured for text on the error color.     |
| `mdc-theme--text-primary-on-background`   | Primary text on top of the theme background color.                           |
| `mdc-theme--text-secondary-on-background` | Secondary text on top of the theme background color.                         |
| `mdc-theme--text-hint-on-background`      | Hint text on top of the theme background color.                              |
| `mdc-theme--text-disabled-on-background`  | Disabled text on top of the theme background color.                          |
| `mdc-theme--text-icon-on-background`      | Icon on top of the theme background color.                                   |
| `mdc-theme--text-primary-on-light`        | Primary text on top of a light-colored background.                           |
| `mdc-theme--text-secondary-on-light`      | Secondary text on top of a light-colored background.                         |
| `mdc-theme--text-hint-on-light`           | Hint text on top of a light-colored background.                              |
| `mdc-theme--text-disabled-on-light`       | Disabled text on top of a light-colored background.                          |
| `mdc-theme--text-icon-on-light`           | Icons on top of a light-colored background.                                  |
| `mdc-theme--text-primary-on-dark`         | Primary text on top of a dark-colored background.                            |
| `mdc-theme--text-secondary-on-dark`       | Secondary text on top of a dark-colored background.                          |
| `mdc-theme--text-hint-on-dark`            | Hint text on top of a dark-colored background.                               |
| `mdc-theme--text-disabled-on-dark`        | Disabled text on top of a dark-colored background.                           |
| `mdc-theme--text-icon-on-dark`            | Icons on top of a dark-colored background.                                   |
| `mdc-theme--primary-bg`                   | Sets the background color to the theme primary color.                        |
| `mdc-theme--secondary-bg`                 | Sets the background color to the theme secondary color.                      |

:::tip
Test your plugin on an app using light BuildFire color theme and dark theme as well to make sure it displays properly on both.
:::

You can also access the app theme programmatically by using
[`buildfire.appearance.getAppTheme()`](/docs/Appearance#getapptheme) function.

### Javascript Implementation Tips

When implementing standard material components make sure to use CommonJS Approach `mdc.componentName.MDCComponent();`. There is no need to install any additional npm packages.

#### Example components

```javascript
// Checkbox
const checkbox = new mdc.checkbox.MDCCheckbox(
  document.querySelector(".mdc-checkbox")
);

// textfield
const textfield = new mdc.textField.MDCTextField(
  document.querySelector(".mdc-text-field")
);
```
