---
id: carousel
title: Carousel
sidebar_label: Carousel
description:
keywords:
  - buildfire
  - component
  - carousel
slug: /carousel
---
# `buildfire.components.carousel`

This namespace consists of two major classes:

- `editor` which is the class that instantiates the editor component typically used on the control side to add, edit and delete images from your carousel
- `view` which is the class that instantiates the viewer component typically used on the widget side to display the carousel images and handle clicks and actions of images

## Requirements

### Control

```html
<head>
  <!-- Load helper.css to use our helper classes -->
  <link href="../../../../styles/helper.css" rel="stylesheet" />
  <link href="../../../../styles/siteIcons.css" rel="stylesheet" />

  <!-- JS -->
  <script src="../../../../scripts/jquery/jquery-1.11.2.min.js"></script>
  <script src="../../../../scripts/buildfire.js"></script>
  <script src="../../../../scripts/sortable.min.js"></script>
  <script src="../../../../scripts/buildfire/components/carousel/carousel.js"></script>
</head>
```

### Widget

```html
<head>
  <!-- CSS -->
  <link href="../../../scripts/owlCarousel/owlCarousel.css" rel="stylesheet" />

  <!-- JS -->
  <script src="../../../scripts/buildfire.js"></script>
  <script src="../../../scripts/jquery/jquery-1.11.2.min.js"></script>
  <script src="../../../scripts/owlCarousel/owlCarousel.js"></script>
  <script src="../../../scripts/buildfire/components/carousel/carousel.js"></script>
</head>
```

## `editor`

Class instance for carousel editor. Typically used on the control side to add, edit and delete carousel action items.

![Editor](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/carousel_editor.png)

In your controller body create an html container element for carousel editor

```html
<body>
  <div class="carousel"></div>
</body>
```

### `editor()` <div class="label control"></div>

`let editor = new buildfire.components.carousel.editor(selector, items);`

Carousel editor class constructor method which initializes the sortable list component.

```javascript
let editor = new buildfire.components.carousel.editor(".carousel", []);
```

For full example see https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/exampleCarousel/control/content/index.html

#### Arguments

| Name       | Type     | Required | Description                                                                                                              | Default |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| `selector` | string   | yes      | Css selector of element that will contain the sortable list                                                              |
| `items`    | [object] | no       | Optional array of items to be preloaded into sortable list. For possilble objects see [Action Items](/docs/action-Items) |

#### More Examples

```javascript
let editor = new buildfire.components.carousel.editor(".carousel", [
  {
    title: "buildfire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
  {
    action: "noAction",
    iconUrl: "https://placekitten.com/600/300",
    title: "image"
  }
]);
```

### Methods

### `editor.loadItems()` <div class="label control"></div>

`editor.loadItems(items, appendItems)`

Loads new items into the list

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.loadItems([
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
]);
```

#### Arguments

| Name          | Type     | Required | Description                                                                                                  | Default |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| `items`       | [object] | yes      | Array of items to be loaded into sortable list. For possilble objects see [Action Items](/docs/action-Items) |
| `appendItems` | boolean  | no       | If `true` it will append items to list, otherwise it will replace the list                                   | `false` |

---

### `editor.append()` <div class="label control"></div>

`editor.append(items)`

Appends an item or many items to the list

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.append([
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
]);
```

#### Arguments

| Name    | Type               | Required | Description                                                                                                                 | Default |
| ------- | ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `items` | [object] \| object | yes      | Array of items, or sigle item to be appended to sortable list. For possilble objects see [Action Items](/docs/action-Items) |

---

### `editor.clear()` <div class="label control"></div>

`editor.clear(items)`

Clears the sortable list

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.clear();
```

### Handlers

Handlers are overridable functions that serve as event listener when items are added, edited removed or reordered.

:::tip
You can use handler methods to persist data to [datastore](/docs/datastore)
:::

### `editor.onItemChange()` <div class="label control"></div>

`editor.onItemChange(item, index)`

Will be triggered when item in list is edited

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.onItemChange = (item, index) => {
  console.log(`Item on index ${index} changed`, item);
};
```

#### Arguments

| Name    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| `item`  | object | Action item object. See [Action Items](/docs/action-items) |
| `index` | number | Action item index in list                                  |

---

### `editor.onOrderChange()` <div class="label control"></div>

`editor.onOrderChange(item, oldIndex, newIndex)`

Will be triggered when item in list is reordered

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.onOrderChange = (item, oldIndex, newIndex) => {
  console.log("Item", item, `reordered from ${oldIndex} to ${newIndex}`);
};
```

#### Arguments

| Name       | Type   | Description                                                |
| ---------- | ------ | ---------------------------------------------------------- |
| `item`     | object | Action item object. See [Action Items](/docs/action-items) |
| `oldIndex` | number | Old action item index in list                              |
| `newIndex` | number | New action item index in list                              |

---

### `editor.onAddItems()` <div class="label control"></div>

`editor.onAddItems(items)`

Will be triggered when new item is added to list, item index will be `items.length`

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.onAddItems = (items) => {
  console.log("New item added. Items are", items);
};
```

#### Arguments

| Name    | Type   | Description                                                          |
| ------- | ------ | -------------------------------------------------------------------- |
| `items` | object | Array of action item objects. See [Action Items](/docs/action-items) |

---

### `editor.onDeleteItem()` <div class="label control"></div>

`editor.onDeleteItem(item, index)`

Will be triggered when item is deleted from the list

```javascript
let editor = new buildfire.components.carousel.editor(".carousel");

editor.onDeleteItem = (item, index) => {
  console.log(
    `Item was delted from the list on index ${index}. Item was`,
    item
  );
};
```

#### Arguments

| Name    | Type   | Description                                                          |
| ------- | ------ | -------------------------------------------------------------------- |
| `item`  | object | Array of action item objects. See [Action Items](/docs/action-items) |
| `index` | number | Index of delted item                                                 |

---

## `view`

Class instance for carousel viewer. Typically used on the widget side to display the carousel images and handle clicks and actions of images.

![Viewer](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/carousel_viewer.png)

In your widget body create an html container element for carousel viewer

```html
<body>
  <div class="carousel"></div>
</body>
```

For full example see https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/exampleCarousel/widget/index.html

### `view()` <div class="label widget"></div>

`let viewer = new buildfire.components.carousel.view(selector, items, mode);`

Carousel viewer class constructor method which initializes the carousel viewer.

```javascript
let viewer = new buildfire.components.carousel.view(".carousel");
```

#### Arguments

| Name       | Type     | Required | Description                                                                                                      | Default |
| ---------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| `selector` | string   | yes      | Css selector of element that will contain the carousel                                                           |
| `items`    | [object] | no       | Optional array of items to be loaded into carousel. For possilble objects see [Action Items](/docs/action-Items) |
| `mode`     | string   | no       | Determines the display mode in which you want to show the slider                                                 |

:::caution note
If you don't have `items` and you want to pass `mode`, pass the second parameter as an empty array ex `(".carousel", [], "WideScreen")`
:::

##### `mode`

Possible values for `mode` argument

| Name           | Description                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"WideScreen"` | 16:9 aspect ratio                                                                                                                                                              |
| `"Square"`     | 1:1 acpect ratio where the width and height will be the device with (note the max image width is 380px so if your image is taller than this value it will scale down to 380px) |
| `"Cinema"`     | 2.39:1 aspect ratio                                                                                                                                                            |

#### More Examples

```javascript
let viewer = new buildfire.components.carousel.view(".carousel", [
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/600/300",
  }
]);
```


### Methods

### `view.loadItems()` <div class="label widget"></div>

`view.loadItems(items, appendItems)`

Loads new items into the carousel

```javascript
let viewer = new buildfire.components.carousel.view(".carousel");

viewer.loadItems([
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
]);
```

#### Arguments

| Name          | Type     | Required | Description                                                                                                  | Default |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| `items`       | [object] | yes      | Array of items to be loaded into sortable list. For possilble objects see [Action Items](/docs/action-Items) |
| `appendItems` | boolean  | no       | If `true` it will append items to list, otherwise it will replace the list                                   | `false` |

---

### `view.append()` <div class="label widget"></div>

`view.append(items)`

Appends an item or many items to the list

```javascript
let viewer = new buildfire.components.carousel.view(".carousel");

viewer.append([
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
    iconUrl: "https://placekitten.com/800/400",
  },
]);
```

#### Arguments

| Name    | Type               | Required | Description                                                                                                                 | Default |
| ------- | ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `items` | [object] \| object | yes      | Array of items, or sigle item to be appended to sortable list. For possilble objects see [Action Items](/docs/action-Items) |
