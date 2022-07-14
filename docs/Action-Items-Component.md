---
id: action-items-component
title: Action Items Component
sidebar_label: Action Items
description: How to use buildfire Action Items Component
keywords:
  - buildfire
  - action
  - items
  - componentPlu
slug: /action-items-component
---

# `buildfire.components.actionItems`

This component simplifies the development of the management controls when adding [Action Items](/docs/action-items). Used on the Control side of a plugin, it allows the app owner to add, edit, delete and sort action items.

This name space consists of one major class:

- `sortableList` which is the class that instantiates the editor component typically used on the control side to add, edit and delete action items.

## Requirements

### Control

```html
<head>
  <!-- Load helper.css to use our helper classes -->
  <link href="../../../../styles/helper.css" rel="stylesheet" />
  <link href="../../../../styles/siteIcons.css" rel="stylesheet" />

  <!-- JS -->
  <script src="../../../../scripts/buildfire.js"></script>
  <script src="../../../../scripts/sortable.min.js"></script>
  <script src="../../../../scripts/buildfire/components/actionItems/sortableList.js"></script>
</head>
```

## `sortableList`

Class instance for Sortable List. Typically used on the control side to add, edit and delete action items and handle

![Editor](https://s3-us-west-2.amazonaws.com/pluginserver/docResources/ActionItems.png)

In your controller body create an html container element for sortable list

```html
<body>
  <div class="sortable-list"></div>
</body>
```

### Methods

### `sortableList()` <div class="label control"></div>

`let sortableList = new buildfire.components.actionItems.sortableList(selector, items);`

Sortable list class constructor method.

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list",
  []
);
```

For full example see https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/exampleActionItems/control/content/index.html

#### Arguments

| Name       | Type     | Required | Description                                                                                                              | Default |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| `selector` | string   | yes      | Css selector of element that will contain the sortable list                                                              |
| `items`    | [object] | no       | Optional array of items to be preloaded into sortable list. For possilble objects see [Action Items](/docs/action-Items) |

### `sortableList.init()` <div class="label control"></div>

`sortableList.init()`

Initializes the sortable list component.

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.init();
```

---

### `sortableList.loadItems()` <div class="label control"></div>

`sortableList.loadItems(items, appendItems)`

Loads new items into the list

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.loadItems([
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
  },
]);
```

#### Arguments

| Name          | Type     | Required | Description                                                                                                  | Default |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| `items`       | [object] | yes      | Array of items to be loaded into sortable list. For possilble objects see [Action Items](/docs/action-Items) |
| `appendItems` | boolean  | no       | If `true` it will append items to list, otherwise it will replace the list                                   | `false` |

---

### `sortableList.append()` <div class="label control"></div>

`sortableList.append(items)`

Appends an item or many items to the list

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.append([
  {
    title: "build fire",
    url: "https://www.facebook.com/buildfireapps",
    action: "linkToWeb",
    openIn: "_blank",
  },
]);
```

#### Arguments

| Name    | Type               | Required | Description                                                                                                                 | Default |
| ------- | ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `items` | [object] \| object | yes      | Array of items, or sigle item to be appended to sortable list. For possilble objects see [Action Items](/docs/action-Items) |

---

### `sortableList.clear()` <div class="label control"></div>

`sortableList.clear()`

Clears the sortable list

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.clear();
```
---

### Handlers

Handlers are overridable functions that serve as event listener when items are added, edited removed or reordered.

:::tip
You can use handler methods to persist data to [datastore](/docs/datastore)
:::

### `sortableList.onItemChange()` <div class="label control"></div>

`sortableList.onItemChange(item, index)`

Will be triggered when item in list is edited

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.onItemChange = (item, index) => {
  console.log(`Item on index ${index} changed`, item);
};
```

#### Arguments

| Name    | Type   | Description                                                |
| ------- | ------ | ---------------------------------------------------------- |
| `item`  | object | Action item object. See [Action Items](/docs/action-items) |
| `index` | number | Action item index in list                                  |

---

### `sortableList.onOrderChange()` <div class="label control"></div>

`sortableList.onOrderChange(item, oldIndex, newIndex)`

Will be triggered when item in list is reordered

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.onOrderChange = (item, oldIndex, newIndex) => {
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

### `sortableList.onAddItems()` <div class="label control"></div>

`sortableList.onAddItems(items)`

Will be triggered when new item is added to list, item index will be `items.length`

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.onAddItems = (items) => {
  console.log("New item added. Items are", items);
};
```

#### Arguments

| Name    | Type   | Description                                                          |
| ------- | ------ | -------------------------------------------------------------------- |
| `items` | object | Array of action item objects. See [Action Items](/docs/action-items) |

---

### `sortableList.onDeleteItem()` <div class="label control"></div>

`sortableList.onDeleteItem(item, index)`

Will be triggered when item is deleted from the list

```javascript
let sortableList = new buildfire.components.actionItems.sortableList(
  ".sortable-list"
);

sortableList.onDeleteItem = (item, index) => {
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
