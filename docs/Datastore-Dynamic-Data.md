---
id: datastore-dynamic-data
title: Datastore Dynamic Data
sidebar_label: Datastore Dynamic Data
keywords:
  - buildfire
  - dynamic
  - data
  - datastore
slug: /datastore-dynamic-data
---

# `buildfire.datastore`

Datastore Dynamic Data is a feature that allows plugin developers to combine multiple requests to certain supported data types in one request.

Dynamic Data can be used by adding a special `_buildfire` object inside your main datastore data object. This special object, describes the data needed to be fetched. Such object can be placed anywhere within a datastore data object.

### Why use Dynamic Data?

While this doesnt apply everywhere, there are some instances where you cannot store data locally within your data object because it keeps changing.

Imagine having a plugin that displays a list of images and titles that link to other plugins in the app. You could acomplish this by getting the list of plugins with `buildfire.pluginInstance.search` and store the result in datastore as normal data, but there is one issue with that approach. If user changes the name of the plugin, plugin icon or deletes the icon, your plugin will not be aware of those changes. If you were developing a folder plugin that the app owner could add other plugin instances in. You cant simply save the selected plugin instances titles , images, etc. because these are referencing data that may be changes outside of your plugin. If you do save it locally it would simply be a snapshot in time. With Dynamic Data injection you can just keep reference to the plugins and at run time the datastore will inject the latest data properties into your object. Datastore dynamic data steps in to resolve that problem.

You can see example implementation on [BuildFire Folder Plugin](https://github.com/buildfire/folderPlugin)

### Data Structure

The `_buildfire` object should have the following structure:

```json
{

_buildfire: {
        [propertyName]: { // this could be any valid property name to identify or access the dynamic data and you can add more than one.
            dataType: <SUPPORTED-DATA-TYPE>, // the type of the dynamic data to retrieve.
            data: <PARAMETER-DATA>, // static data that identifies the dynamic data to be retrieved. format and structure depends on the specified dataType.
            result: <INJECTED-RESULT>, // result will have the requested dynamic data. this is a readonly field and should not be set by the developer.
            err: <ERROR-RESULT> // returned if an error occurs while retrieving data
        }
}
}
```

#### Example

```javascript
let myMainObject = {
  staticProperty1: "static data",
  staticProperty2: "static data",
  _buildfire: {
    myDynamicPluginCollection: {
      data: "55f71347d06b61b4010351dc",
      dataType: "pluginInstance",
    },
  },
};
```

## Methods

### `getWithDynamicData()` <div class="label control"></div><div class="label widget"></div>

`buildfire.datastore.getWithDynamicData(tag, callback)`

After the object has been saved to the datastore (save / insert / update) using the structure explained above getWithDynamicData can be used to get the data back along with the dynamic data result injected.

```javascript
buildfire.datastore.getWithDynamicData("plugins", function (err, result) {
  if (err) return console.error(err);

  console.log(result);
});

// The above function would return result similar to this
let result = {
  _buildfire: {
    staticProperty1: "static data",
    staticProperty2: "static data",
    myDynamicPluginCollection: {
      data: "55f71347d06b61b4010351dc",
      dataType: "pluginInstance",
      result: [
        {
          id: "55f71347d06b61b4010351dc",
          data: {
            pluginTypeId: 3212,
            token: "6372b101-addf-45da-bb0a-9208a09e7b6b",
            title: "YouTube Plugin",
            iconUrl:
              "http://s3-us-west-2.amazonaws.com/pluginserver/plugins/6372b101-addf-45da-bb0a-9208a09e7b6b/resources/image.png",
          },
          hasAccess: true, //if the current loggedIn user has access to the plugin
        },
      ],
    },
  },
};
```

:::note
The regular datastore get would return the data as is and will not have dynamic data injected. It is recommended to use the regular datastore get method when there is no use of the dynamic data result in the current invocation as it would be perform faster.
:::

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after dynamic data is fetched

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Datastore record with dynamic data attached       |

## Supported Data Types (`dataType`)

### `pluginInstance`

Retrieves plugin instances. Data holds a plugin instance id or an array of ids to be retrieved in result as an array.

| Name       | Type               | Description                                        |
| ---------- | ------------------ | -------------------------------------------------- |
| `data`     | [string] or string | Plugin instance id or array of plugin instance ids |
| `dataType` | string             | `pluginInstance`                                   |

#### Example Data

```json
{
  "id": "56038ca5c3bd16240b4bd5c3",
  "lastUpdated": "2015-10-01T22:47:49.877Z",
  "data": {
    "pluginTypeId": 257,
    "token": "8a50db06-fcf6-6a84b66d0f47",
    "title": "Contact Us D",
    "iconUrl": "https://imagelibserver.buildfire.com/9060.jpg",
    "pluginType": {
      "pluginTypeId": 257,
      "name": "Contact Us",
      "token": "8a50db06-fcf6-41a7-6a84b66d0f47",
      "description": "Helps to allow users to add the contact information for their business into the app.",
      "author": "BuildFire",
      "supportEmail": "support@buildfire.com",
      "folderName": "1e171363-6faf-4236-ab95-0bbf197d70"
    }
  }
}
```

### `pluginType`

Retrieves plugin types. Data holds a plugin type id or an array of ids to be retrieved in result as an array.

| Name       | Type               | Description                                |
| ---------- | ------------------ | ------------------------------------------ |
| `data`     | [string] or string | Plugin type id or array of plugin type ids |
| `dataType` | string             | `pluginType`                               |
