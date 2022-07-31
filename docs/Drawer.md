---
id: drawer
title: Drawer
sidebar_label: Drawer
keywords:
  - buildfire
  - drawer
  - component
slug: /drawer
---

# `buildfire.components.drawer`

The `drawer` component provides a contextual modal that slides up from the bottom of the app. It will appear above any plugins, along with a backdrop that will dismiss the modal.

This component supports multiple tabs, which can be populated with either fully custom markup, or a list of actions and it also supports multi-selection mode, where users can select muliple items.

## Requirements

### Widget

```html
<head>
  <!-- JS -->
  <script src="../../../scripts/buildfire.js"></script>
  <script src="../../../scripts/buildfire/components/drawer/drawer.js"></script>
</head>
```

## Methods

### `open()` <div class="label widget"></div>

`buildfire.components.drawer.open(options, callback)`

This method takes an `options` object and builds the drawer UI. The `callback` will be executed with information (would be a single item or multiple items) on actions taken by the user.

```javascript
buildfire.components.drawer.open(
  {
    header: "List of Contacts",
    content: 'Pick Contacts',
    multiSelection: true,
    allowSelectAll : true,
    multiSelectionActionButton: {text: 'Save', type: 'success'},
    enableFilter : true,
    isHTML: true,
    triggerCallbackOnUIDismiss: false,   
    autoUseImageCdn: true,
    listItems: [
      {text:'John Doe', secondaryText: '+69128564795', imageUrl:'', selected: false},
      {text:'Jane Doe', secondaryText: '+40197454359', imageUrl:'', selected: false},
      {text:'John Doe', secondaryText: '+32134468726', imageUrl:'', selected: true}
    ]
  },
  (err, result) => {
    if (err) return console.error(err);
    console.log("Selected Contacts", result);
  }
);
```

#### `options`

| Name                         | Type     | Required | Description                                                                                                                                                                                                            | Default |
| ---------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `height`                     | string   | no       | The height of the drawer. If not provieded, the height will depend on the number of items in the drawer (auto)                                                                                                         |         |
| `header`                     | string   | no       | Text or HTML to be rendered as the drawer's header                                                                                                                                                                     |
| `content`                    | string   | no       | Text or HTML to be rendered in the drawer's body                                                                                                                                                                       |
| `multiSelection`             | boolean  | no       | Enable multi-selection mode                                                                                                                                                                                            | `false` |
| `allowSelectAll`             | boolean  | no       | Allow users to select/deselect all the items in the drawer                                                                                                                                                             | `true`  |
| `multiSelectionActionButton` | object   | no       | A button to get the selected items in the multi-selection mode                                                                                                                                                         |
| `enableFilter`               | boolean  | no       | Allow users to search items in the drawer                                                                                                                                                                              | `true`  |
| `isHTML`                     | boolean  | no       | Specifies whether the provided strings for (header, content, listItems...) should be rendered as sanitized HTML instead of plaintext                                                                                   | `true`  |
| `triggerCallbackOnUIDismiss` | boolean  | no       | Trigger a callback when users dismiss the drawer by clicking outside the drawer (in the backdrop)                                                                                                                      | `false` |
| `autoUseImageCdn`            | boolean  | no       | Use an image CDN to process and optimize images                                                                                                                                                                        | `true`  |
| `listItems`                  | [object] | no       | Array of `listItems`. In multi-selection mode, the user can select and get multiple items through the callback, otherwise (not multi-selection mode) when a `listItem` is clicked the callback executes with that item |
| `tabs`                       | [object] | no       | Array of `tabs`, which  used to render multiple tabs in the drawer                                                                                                                                                     |


:::caution notes
If you provide both `listItems` and `tabs`, only `listItems` will appear.

Multi-selection mode is not supported for `tabs`.

It is recommended to not setting the `height` option for the drawer, where the height will be (auto) by default

If the height option was hardcoded and was high, the drawer's height eventaully won't exceed the max-height that app allows
:::

##### `options.multiSelectionActionButton`

| Name   | Type   | Required | Description                                                           | Default     |
| ------ | ------ | -------- | --------------------------------------------------------------------- | ----------- |
| `text` | string | no       | Text of the button                                                    | `'OK'`      |
| `type` | string | no       | Type of the button (primary, success, info, danger, warning, default) | `'primary'` |

##### `options.listItems`

Array of actions presented to the user.

| Name            | Type    | Required | Description                                                                                           | Default |
| --------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------- | ------- |
| `id`            | string  | no       | Unique identifier to differentiate actions taken by the user, which is sent back through the callback |
| `text`          | string  | yes      | Text presented to the user                                                                            |
| `secondaryText` | string  | no       | Additional text presented to the user                                                                 |
| `imageUrl`      | string  | no       | Image of the `listItem`                                                                               |
| `selected`      | boolean | no       | To specify if this `listItem` is already selected when the drawer open                                | `false` |

###### `options.tabs`

| Name        | Type     | Required | Description                                                                                 | Default |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------- | ------- |
| `text`      | string   | yes      | Text to be used as the tab header                                                           |
| `content`   | string   | no       | Text or HTML to be rendered in tab                                                          |
| `listItems` | [object] | no       | Array of `listItems`. When a `listItem` is clicked the callback will execute with that item |

:::caution note
If you provide both tab's `content` and tab's `listItems`, only tab's `listItems` will appear.
:::

#### `callback(err, result)`

Callback function after selection is complete or without selection and having the option `triggerCallbackOnUIDismiss` set to `true`

| Name     | Type               | Description                                                                                                                                                              |
| -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `err`    | string             | Error string, `null` when operation is successful                                                                                                                        |
| `result` | [object] or object | Array of `listItems`, which would be selected by users in (multi-selection mode), a single `listItem` if not (multi-selection mode) or `null` if the drawer is dismissed |

#### More examples

```javascript
buildfire.components.drawer.open(
  {
    header: "List of Contacts",
    content: 'Pick Contacts',
    enableFilter : false,
    isHTML: true,
    tabs:[
      {
        text:'<span class="glyphicon glyphicon-user"></span>',
        listItems: [
          {id:'profile', icon:'glyphicon glyphicon-circle-arrow-right', text:'Open Profile'},
          {id:'delete', icon:'glyphicon glyphicon-remove-circle', text:'delete'}]
      },
      {
        text:'<span class="glyphicon glyphicon-tags"></span>',
        content:'<div>Rich HTML here</div>'
      }
    ]
  },
  (err, result) => {
    if (err) return console.error(err);
    console.log("Selected Contacts", result);
  }
);
```

---

### `closeDrawer()` <div class="label widget"></div>

`buildfire.components.drawer.closeDrawer()`

Programatically closes the drawer.

```javascript
buildfire.components.drawer.closeDrawer();
```

---

:::warning
The following section of `components.drawer` is deprecated and should not be used
:::

### `openBottomDrawer()` - Deprecated <div class="label widget"></div>

`buildfire.components.drawer.openBottomDrawer(options, callback)`

This method takes an `options` object and builds the drawer UI. The `callback` will be executed with information on actions taken by the user.

```javascript
buildfire.components.drawer.openBottomDrawer(
  {
    listItems: [
      {
        id: "item1",
        text: "Item 1",
      },
    ],
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log("Action selected:", result.id);
  }
);
```

#### `options`

| Name        | Type     | Required | Description                                                                                 | Default |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------- | ------- |
| `header`    | string   | no       | Text or HTML to be rendered as drawer header                                                |
| `content`   | string   | no       | Text or HTML to be rendered in drawers body                                                 |
| `listItems` | [object] | no       | Array of `listItem`s. When `listItem` is clicked the callback executes with that items data |
| `tabs`      | [object] | no       | Array of `tab`s used to render multiple tabs in the drawer.                                 |

##### `options.listItem`

Array of actions presented to the user.

| Name   | Type   | Required | Description                                                  | Default |
| ------ | ------ | -------- | ------------------------------------------------------------ | ------- |
| `id`   | string | yes      | Unique identifier to differentiate actions taken by the user |
| `text` | string | yes      | Text presented to the user                                   |

##### `options.tabs`

| Name        | Type     | Required | Description                                                                                 | Default |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------- | ------- |
| `text`      | string   | yes      | Text to be used as the tab header                                                           |
| `content`   | string   | no       | Text or HTML to be rendered in tab                                                          |
| `listItems` | [object] | no       | Array of `listItems`. When a `listItem` is clicked the callback will execute with that item |

:::caution note
If you provide both tab's `content` and tab's `listItems`, only tab's `listItems` will appear.
:::
#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful |
| `result` | object | The selected `listItem`                           |

#### More examples

```javascript
buildfire.components.drawer.openBottomDrawer(
  {
    header: `
      <div class="avatar">
        <img src="https://s3-us-west-2.amazonaws.com/imagelibserver/52a3afae-f77c-11ea-b714-067610557690/8.png" />
      </div>
    `,
    enableFilter: false,
    tabs: [
      {
        text: `<span class="glyphicon glyphicon-user"></span>`,
        listItems: [
          {
            id: "profile",
            icon: "glyphicon glyphicon-circle-arrow-right",
            text: "Open Profile",
          },
          {
            id: "delete",
            icon: "glyphicon glyphicon-remove-circle",
            text: "delete",
          },
        ],
      },
      {
        text: `<span class="glyphicon glyphicon-tags"></span>`,
        content: `<div>Rich HTML here</div>`,
      },
    ],
  },
  (error, result) => {
    if (error) return console.error(error);
    console.log("Selected action", result.id);
  }
);
```

---

### `openBottomListDrawer()` - Deprecated <div class="label widget"></div>

`buildfire.components.drawer.openBottomListDrawer(options, callback)`

This method takes an `options` object and builds the drawer UI. Only supports `header`, `content`, and `listItems`. The callback will be executed with information on actions taken by the user.

```javascript
buildfire.components.drawer.openBottomListDrawer(
  {
    listItems: [
      {
        id: "item1",
        text: "Item 1",
      },
    ],
  },
  (err, result) => {
    if (err) return console.error(err);

    console.log("Action selected:", result.id);
  }
);
```

#### `options`

| Name        | Type     | Required | Description                                                                                 | Default |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------- | ------- |
| `header`    | string   | no       | Text or HTML to be rendered as drawer header                                                |
| `content`   | string   | no       | Text or HTML to be rendered in drawers body                                                 |
| `listItems` | [object] | no       | Array of `listItem`s. When `listItem` is clicked the callback executes with that items data |

##### `options.listItem`

See [`listItem`](/docs/drawer#optionslistitem);

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful |
| `result` | object | The selected `listItem`                           |

---

### `openBottomTabDrawer()` - Deprecated <div class="label widget"></div>

`buildfire.components.drawer.openBottomTabDrawer(options, callback)`

This method takes an `options` object and builds the drawer UI. Only supports `header`, `content`, and `tabs`. The callback will be executed with information on actions taken by the user.

```javascript
buildfire.components.drawer.openBottomTabDrawer(
  {
    tabs: [
      {
        text: `<span class="glyphicon glyphicon-user"></span>`,
        listItems: [
          {
            id: "profile",
            icon: "glyphicon glyphicon-circle-arrow-right",
            text: "Open Profile",
          },
          {
            id: "delete",
            icon: "glyphicon glyphicon-remove-circle",
            text: "delete",
          },
        ],
      },
      {
        text: `<span class="glyphicon glyphicon-tags"></span>`,
        content: `<div>Rich HTML here</div>`,
      },
    ],
  }, 
  (err, result) => {
  if (err) return console.error(err);
  console.log("Action selected:", result.id);
});
```

#### `options`

| Name      | Type     | Required | Description                                                 | Default |
| --------- | -------- | -------- | ----------------------------------------------------------- | ------- |
| `header`  | string   | no       | Text or HTML to be rendered as drawer header                |
| `content` | string   | no       | Text or HTML to be rendered in drawers body                 |
| `tabs`    | [object] | no       | Array of `tab`s used to render multiple tabs in the drawer. |

##### `options.tabs`

See [`tabs`](/docs/drawer#optionstabs)
#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | Error string, `null` when operation is successful |
| `result` | object | The selected `listItem`                           |

---
