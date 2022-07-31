---
id: plugin-instances
title: Plugin Instances
sidebar_label: Plugin Instances
keywords:
  - buildfire
  - instances
slug: /plugin-instances
---

# `buildfire.pluginInstance`

This is an object within the `buildfire` singleton that is for retrieving other plugins instances that are added to the current app context.

## What is a plugin instance?
a plugin instance is a new occurrence of a plugin type. For example you can have installed one Text Plugin but have two instances of it.  

Typically this is used in launcher or folder type plugins. These types of plugins help the user navigate to other plugins.

* Gotchya: Be careful when saving the plugin instances data to your local datastore. The instance may be deleted or modified after your save. __Use Dynamic Data Injection to get latest data__


## Methods
### `showDialog()` <div class="label control"></div>

`buildfire.pluginInstance.showDialog(options, callback)`

Used on the control side. This method will display a dialog that allows the user to search and select one or many plugins

```javascript
buildfire.pluginInstance.showDialog({
    skipPluginInstances: true
}, function(error, instances){
    if (err) {
        console.error(err);
    } else if (instances.length > 0) {
        console.log(instances[0].title);
    }
});
```
#### `options`
| Name                       | Type    | Required | Description                                                                                                                       | Default         |
| -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `skipPluginInstances`      | boolean | no       | Shows the create plugin instance dialog directly, without showing the select plugin instances dialog                              | `false`         |


#### `callback(error, instances)`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | string  | Error string, `null` when operation is successful                                                                                 |
| `instances`                | array   | Array of selected plugin instances                                                                                                |

##### `instances[]`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `folderName`               | string  | Folder Name                                                                                                                       |
| `iconUrl`                  | string  | String url of plugin instance icon                                                                                                |
| `instanceId`               | string  | Unique identifier for the plugin instance                                                                                         |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |
| `pluginTypeName`           | string  | Name of the plugin type                                                                                                           |
| `title`                    | string  | Title of the plugin                                                                                                               |



### `get()` <div class="label control"></div> <div class="label widget"></div>

`buildfire.pluginInstance.get(instanceId, callback)`

Will fetch a plugin based on the provided `instanceId`   

```javascript
buildfire.pluginInstance.get('123', function(error, instance){
    if (err) {
        console.error(err);
    } else if (instance) {
        console.log(instance.title);
    }
});
```

#### `instanceId`
| Name                       | Type    | Required | Description                                                                                                                       | Default         |
| -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `instanceId`               | string  | yes      | Unique identifier of the plugin to retrieve                                                                                       | N/A             |


#### `callback(error, instance)`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | string  | Error string, `null` when operation is successful                                                                                 |
| `instance`                 | object  | Object representing the plugin instance                                                                                           |

##### `instance`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `iconUrl`                  | string  | String url of plugin instance icon                                                                                                |
| `instanceId`               | string  | Unique identifier for the plugin instance                                                                                         |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |
| `title`                    | string  | Title of the plugin                                                                                                               |

### `search()` <div class="label control"></div> <div class="label widget"></div>

`buildfire.pluginInstance.search(options, callback)`

Will search all the plugins and return results paginated

```javascript
buildfire.pluginInstance.search({ title: 'myPlugin' }, function(error, instances){
    if (err) {
        console.error(err);
    } else if (instances.length > 0) {
        console.log(instances[0].title);
    }
});
```
#### `options`
| Name                       | Type    | Required | Description                                                                                                                       | Default         |
| -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `title`                    | string  | no       | Title of the plugin to search for                                                                                                 | undefined       |
| `pageIndex`                | integer | no       | Page number to return                                                                                                             | 0               |
| `pageSize`                 | integer | no       | Entries per page, max 20                                                                                                          | 20              |

#### `callback(error, instances)`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | string  | Error string, `null` when operation is successful                                                                                 |
| `instances`                | array   | Array of plugin instances                                                                                                         |
| `totalRecord`              | integer | Number of results found                                                                                                           |

##### `instances[]`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `data`                     | object  | Object containing plugin instance data                                                                                            |
| `id`                       | string  | Unique identifier used by the database                                                                                            |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |

##### `instances[].data`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `iconUrl`                  | string  | String url of plugin instance icon                                                                                                |
| `instanceId`               | string  | Unique identifier for the plugin instance                                                                                         |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |
| `title`                    | string  | Title of the plugin                                                                                                               |

### `showCreatePluginInstancesDialog()` <div class="label control"></div>

`buildfire.pluginInstance.showCreatePluginInstancesDialog(options, callback)`

Used on the control side. This method will display a dialog that allows the user to add a new plugin instance of a specific type, and return that plugin instance to the caller

```javascript
buildfire.pluginInstance.showCreatePluginInstancesDialog(function(error, instances){
    if (error) {
        console.error(error);
    } else if (instances.length > 0) {
        console.log(instances[0].title);
    }
});
```

#### `callback(error, instances)`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | string  | Error string, `null` when operation is successful                                                                                 |
| `instances`                | array   | Array of selected plugin instances                                                                                                |

##### `instances[]`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `folderName`               | string  | Folder Name                                                                                                                       |
| `iconUrl`                  | string  | String url of plugin instance icon                                                                                                |
| `instanceId`               | string  | Unique identifier for the plugin instance                                                                                         |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |
| `pluginTypeName`           | string  | Name of the plugin type                                                                                                           |
| `title`                    | string  | Title of the plugin                                                                                                               |

### `create()` <div class="label control"></div>

`buildfire.pluginInstance.create(options, callback)`

This method allows the user to directly install a plugin from the marketplace without interaction with marketplace

```javascript
buildfire.pluginInstance.create({
    pluginTypeName: "Folder",
    newPluginTitle: "My Folder"
}, function (error, instance){
    if (error) { 
        console.error(error); 
    } else {
        console.log(instance.title);
    }
});
```

#### `options`
| Name                       | Type    | Required | Description                                                                                                                       | Default         |
| -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `pluginTypeName`           | string  | yes      | marketplace plugin type name - *must be the exact plugin type name, but not case sensitive*                                       | N/A             |
| `newPluginTitle`           | string  | yes      | New plugin instance name                                                                                                          | N/A             |
#### `callback(error, instance)`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | string  | Error string, `null` when operation is successful                                                                                 |
| `instance`                 | object  | Object containing new plugin instance data                                                                                        |

##### `instance`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `instanceId`               | string  | Unique identifier for the new plugin instance                                                                                     |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |
| `pluginTypeName`           | string  | Name of the plugin type                                                                                                           |
| `title`                    | string  | Title of the new plugin                                                                                                           |
| `token`                    | string  | Token for the original plugin                                                                                                     |
| `folderName`               | string  | Folder name of the new plugin                                                                                                     |
| `refId`                    | string  | Reference id of the new plugin                                                                                                    |
| `iconClassName`            | string  | Icon class name of the new plugin                                                                                                 |
| `iconUrl`                  | string  | Icon URL of the new plugin                                                                                                        |

### `clone()` <div class="label control"></div>

`buildfire.pluginInstance.clone(options, callback)`

This method allows the user to clone an existing plugin within the app, it searches the installed plugins on the app and clones the closest plugin it finds to the provided pluginTitle. 

```javascript
const options = ;
buildfire.pluginInstance.clone({
    pluginTitle: "My Folders",
    newPluginTitle: "Shared Folders"
}, function (err, instance) {
    if (err) { 
        console.error(err); 
    } else {
        console.log(instance);
    };
});
```

#### `options`
| Name                       | Type    | Required | Description                                                                                                                       | Default         |
| -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `pluginTitle`              | string  | yes      | Existing plugin title installed on the app                                                                                        | N/A             |
| `newPluginTitle`           | string  | yes      | New plugin instance name                                                                                                          | N/A             |

#### `callback(error, instance)`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `error`                    | string  | Error string, `null` when operation is successful                                                                                 |
| `instance`                 | object  | Object containing new plugin instance data                                                                                        |

##### `instance`
| Name                       | Type    | Description                                                                                                                       |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `instanceId`               | string  | Unique identifier for the new plugin instance                                                                                     |
| `pluginTypeId`             | string  | Unique identifier for the plugin type                                                                                             |
| `pluginTypeName`           | string  | Name of the plugin type                                                                                                           |
| `title`                    | string  | Title of the new plugin                                                                                                           |
| `token`                    | string  | Token for the original plugin                                                                                                     |
| `folderName`               | string  | Folder name of the new plugin                                                                                                     |
| `refId`                    | string  | Reference id of the new plugin                                                                                                    |
| `iconClassName`            | string  | Icon class name of the new plugin                                                                                                 |
| `iconUrl`                  | string  | Icon URL of the new plugin                                                                                                        |
