---
id: listview
title: ListView
sidebar_label: ListView
description:
keywords:
  - buildfire
  - listview
  - list
  - view
  - component
slug: /listview
---

# `buildfire.components.listView`

The `listView` component provides a simple, consistent tool to display lists of items.

## Requirements

### Widget

```html
<head>
  <!-- CSS -->
  <link rel="stylesheet" href="../../../styles/components/listView.css" />

  <!-- JS -->
  <script src="../../../scripts/buildfire.js"></script>
  <script src="../../../scripts/buildfire/components/listView/listView.js"></script>
</head>
```

In your widget body create html container element for list view items.

```html
<body>
  <div id="listViewContainer"></div>
</body>
```

## Methods

### `listView()`

`const listView = new buildfire.components.listView(containerId, options);`

ListView class constructor method which initializes the list view component.

```javascript
const listView = new buildfire.components.listView('listViewContainer', { enableAddButton: true });
```

#### Arguments

| Name       | Type             | Required | Description                                                 | Default |
| ---------- | ---------------- | -------- | ----------------------------------------------------------- | ------- |
| `containerId` | string           | yes       | Element ID that will contain the list view items  |
| `options`  | object | no       | options object                                 |

#### `options`

| Name              | Type   | Required | Description                                                                                        | Default              |
| ----------------- | ------ | -------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| `enableAddButton` | boolean | no       | If true, A floating add button is rendered.                                                                             | `false` |

---

### `loadListViewItems()`

`listView.loadListViewItems(items)`

Takes in an array of items, and loads them into the list view.

:::note
This method replaces all existing items if there were any.
:::

```javascript
const listView = new buildfire.components.listView('listViewContainer');

listView.loadListViewItems([
  {
    id: '1',
    title: 'buildfire',
    imageUrl: 'https://via.placeholder.com/150',
    subtitle: 'The Most Powerful App Maker For iOS & Android',
    description: 'BuildFire’s powerful and easy to use mobile app builder...',
    action: {
      icon: 'glyphicon glyphicon-ok'
    }
  }
]);
```

#### Arguments

| Name    | Type               | Required | Description                                                                                                                 | Default |
| ------- | ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `items` | [object] \| object | yes      | Array of items, or single item to be appended to list view. For possible objects see [item](/docs/listview#item) |


##### `item`

Each item has the following properties

| Name           | Type   | Description                                                                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `id`          | string | Unique id                                                                                                     |
| `title`    | string | Title of the item                                             |
| `imageUrl`  | string | Renders as the item's image                         |
| `subtitle`        | string | Renders as a subtitle below the title                                                                                          |
| `description`    | string | Optional description                                                                                             |
| `action`     | object | Object containing action options fields|
| `action.icon`     | string | Icon class list                                                                                              |
| `action.iconTextContent`     | string | Icon text content                                                                                           |
| `data`  | object | Optional item data, does not render.                                                                                      |
---

### `append()`

`listView.append(items)`

Appends an item or many items into the list view

```javascript
const listView = new buildfire.components.listView('listViewContainer');

listView.append([
  {
    id: '1',
    title: 'buildfire',
    imageUrl: 'https://via.placeholder.com/150',
    subtitle: 'The Most Powerful App Maker For iOS & Android',
    description: 'BuildFire’s powerful and easy to use mobile app builder...',
    action: {
      icon: 'glyphicon glyphicon-ok'
    }
  }
]);
```

#### Arguments

| Name    | Type               | Required | Description                                                                                                                 | Default |
| ------- | ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `items` | [object] \| object | yes      | Array of items, or sigle item to be appended to list view. For possible objects see [item](/docs/listview#item) |

---

### `clear()`

`listView.clear()`

Clears the list view

```javascript
const listView = new buildfire.components.listView('listViewContainer');

listView.clear();
```

### `addItem()` - deprecated

`listView.addItem(item)`

:::warning
This method is deprecated. Please use [ListView Append](/docs/listview#append) instead.
:::

Appends a single [item](/docs/listview#item) to the ListView.

## Handlers
The following event handlers can be assigned:

### `onAddButtonClicked`
Triggered when the add button is clicked.

### `onItemClicked(item)`
Triggered when an item is clicked. Passes the item in as the parameter.

### `onItemActionClicked(item)`
Triggered when an item's action is clicked. Passes the item in as the parameter.

## Updating items
An item's data can be changed. Once a change is made, calling `item.update()` will update the item.

## Examples

```javascript
// <div id="listViewContainer"></div> <-- this is included in the body

const listView = new buildfire.components.listView('listViewContainer', { enableAddButton: true });

listView.onAddButtonClicked = () => {
  console.log('button clicked');
};

listView.onItemClicked = item => {
  console.log(item.title);
};

listView.onItemActionClicked = item => {
  console.log(item.title);
};

listView.loadListViewItems([
  {
    id: '1',
    title: 'buildfire',
    imageUrl: 'https://via.placeholder.com/150',
    subtitle: 'The Most Powerful App Maker For iOS & Android',
    description: 'BuildFire’s powerful and easy to use mobile app builder...',
    action: {
      icon: 'icon glyphicon glyphicon-ok'
    }
  }
]);

listView.append([
  {
    id: '2',
    title: 'more of buildfire',
    imageUrl: 'https://via.placeholder.com/150',
    subtitle: 'The Most Powerful App Maker For iOS & Android',
    description: 'BuildFire’s powerful and easy to use mobile app builder...',
    action: {
      icon: 'material-icons',
      iconTextContent: 'star'
    }
  }
]);
```
