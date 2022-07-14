---
id: datastore
title: Datastore
sidebar_label: Datastore
description:
keywords:
  - buildfire
  - database
  - datastore
slug: /datastore
---

# `buildfire.datastore`

Datastore is a framework provided in buildfire.js that allows the plugin developer to save and retrieve simple and complex data. The framework facilitates CRUD operations common to all data operations as well as searching, sorting and paging complex data.
This service also takes care of all server side infrastructure to unburden the developer and app owner for developing the server side components and the costs of running a server. This service is provided out of the box at no additional charge.
The datastore service also handles complex synchronizations between the control and widget. For example, it will notify the widget when the control has made changes to the data. It also handles caching of data and other performance enhancements.
The use of the datastore is completely optional. The developer may choose to communicate with his own custom api. The only caveat to keep in mind is when a plugin is in draft mode of live mode (see publish). You can work around this with publish web hooks [see publish web hooks](#) TODO

:::important
Datastore is intended to be used for CMS Data. It has read/write permissions on control side, and **read only** permissions on widget side. Datastore does not support indexes and is should not hold large amounts of data.
:::

## Methods

### `get()` <div class="label control"></div><div class="label widget"></div>

`buildfire.datastore.get(tag, callback)`

Calls the datastore to retrieve plugin data objects in JSON format.

:::note
If there are many objects with the same id, only one random record will be returned
:::

```javascript
buildfire.datastore.get("main record", (err, result) => {
  if (err) return console.error("Error while retrieving your data", err);
  console.log("Main record", result.data);
});
```

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result object containing datastore tag and data   |

##### result

| Name   | Type   | Description                                      |
| ------ | ------ | ------------------------------------------------ |
| `data` | object | Object saved in datastore under the selected tag |
| `tag`  | string | Object tag                                       |

#### More Examples

If your datastore has only one object and does not use tags, you can skip the tag argument

```javascript
buildfire.datastore.get((err, result) => {
  if (err) return console.error(err);

  console.log("Data: ", result.data);
});
```

---

### `getById()` <div class="label control"></div><div class="label widget"></div>

`buildfire.datastore.getById(id, tag, callback)`

Calls the datastore to retrieve plugin data object by id in JSON format.

```javascript
buildfire.datastore.getById(
  "55bfa813032868a0115c5f98",
  "main record",
  (err, result) => {
    if (err) return console.error("Error while retrieving your data", err);
    console.log("Object: ", result.data);
  }
);
```

#### `id`

| Name | Type   | Required | Description         | Default |
| ---- | ------ | -------- | ------------------- | ------- |
| `id` | string | yes      | Datastore object id |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result object containing datastore tag and data   |

##### result

| Name   | Type   | Description                                     |
| ------ | ------ | ----------------------------------------------- |
| `data` | object | Object saved in datastore under the selected id |
| `tag`  | string | Object datastore tag                            |

---

### `save()` <div class="label control"></div>

`buildfire.datastore.save(obj, tag, callback)`

This method calls the datastore to update **all** plugin data objects that have that tag. if no object is found it will create one, and does not check for duplicates

:::note
Data objects saved using `save()` method will not get assigned ids. Data will be saved in the same format as provided.
:::

```javascript
buildfire.datastore.save(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  (err, result) => {
    if (err) return console.error("Error while saving your data", err);

    console.log("Data saved successfully", result);
  }
);
```

#### `obj`

| Name  | Type   | Required | Description                      | Default |
| ----- | ------ | -------- | -------------------------------- | ------- |
| `obj` | object | yes      | Object to be stored in datastore |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result object containing datastore tag and data   |

##### result

| Name   | Type   | Description               |
| ------ | ------ | ------------------------- |
| `data` | object | Object saved in datastore |
| `tag`  | string | Object datastore tag      |

---

### `insert()` <div class="label control"></div>

`buildfire.datastore.insert(obj, tag, checkDuplicate, callback)`

Calls the datastore to insert a data object. If an object already exists with this tag and `checkDuplicate` is false it will create another record otherwise it will return a duplicate entry error. Use this method to save multiple records under the same tag. Every inserted item will get unique id. You can use this id later in [`getById`](#)

```javascript
buildfire.datastore.insert(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  false,
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Insert successful", result);
  }
);
```

#### `obj`

| Name  | Type   | Required | Description                      | Default |
| ----- | ------ | -------- | -------------------------------- | ------- |
| `obj` | object | yes      | Object to be stored in datastore |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `checkDuplicate`

| Name             | Type    | Required | Description                                                                                   | Default |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `checkDuplicate` | boolean | no       | If `true` it will prevent insertion of duplicate records, if `false` it will allow duplicates | `false` |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | Result object containing datastore tag, data and id |

##### `result`

| Name   | Type   | Description                  |
| ------ | ------ | ---------------------------- |
| `data` | object | Object inserted in datastore |
| `tag`  | string | Object datastore tag         |
| `id`   | string | Object unique id             |

---

### `bulkInsert()` <div class="label control"></div>

`buildfire.datastore.bulkInsert(obj, tag, callback)`

Calls the datastore to insert multiple data objects at once. If objects already exist with this tag it will create new records. Use this method to save multiple records with single API call.

:::note
Data objects inserted using `bulkInsert()` method will not get assigned ids.
:::

```javascript
buildfire.datastore.bulkInsert(
  [
    { name: "John Doe", tel: "555-111-1111" },
    { name: "Jane Doe", tel: "555-222-2222" },
  ],
  "contactInfo",
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Insert successful", result);
  }
);
```

#### `obj`

| Name  | Type     | Required | Description                                 | Default |
| ----- | -------- | -------- | ------------------------------------------- | ------- |
| `obj` | [object] | yes      | Array of object to be inserted in datastore |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | Result object containing datastore tag, data and id |

##### `result`

| Name   | Type   | Description                        |
| ------ | ------ | ---------------------------------- |
| `data` | object | Object array inserted in datastore |
| `tag`  | string | Object datastore tag               |

---

### `update()` <div class="label control"></div>

`buildfire.datastore.update(id, obj, tag, callback)`

Calls the datastore to update the data object that matches that tag and id. If an object doesn't exist this operation will fail. Use this method to update a single record.

```javascript
buildfire.datastore.update(
  "55bfa813032868a0115c5f98", // Replace this with your object id
  { name: "John Doe", tel: "555-111-2222" },
  "contactInfo",
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Update successful", result);
  }
);
```

#### `id`

| Name | Type   | Required | Description         | Default |
| ---- | ------ | -------- | ------------------- | ------- |
| `id` | string | yes      | Datastore object id |

#### `obj`

Can be one of two options:

1. The JSON object you'd like saved.

| Name  | Type   | Required | Description                                                                             | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------- | ------- |
| `obj` | object | yes      | Object to be updated in datastore. Object must contain the original `id` of the object. |

2. A command object meant to pass [data modifying operators](/docs/data-modifying-operators) to the datastore to update certain properties only

| Name  | Type   | Required | Description            | Default |
| ----- | ------ | -------- | ---------------------- | ------- |
| `obj` | object | yes      | Data modifying object. |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                         |
| -------- | ------ | --------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful   |
| `result` | object | Result object containing datastore tag, data and id |

##### `result`

| Name   | Type   | Description                        |
| ------ | ------ | ---------------------------------- |
| `data` | object | Object array inserted in datastore |
| `tag`  | string | Object datastore tag               |
| `id`   | string | Object unique id                   |

#### More Examples

```javascript
buildfire.datastore.insert(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  false,
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Insert successful", result);
    let objectId = result.id;

    buildfire.datastore.update(
      objectId,
      { name: "John Doe", tel: "555-111-2222" },
      "contactInfo",
      (err, updatedResult) => {
        if (err) return console.error("Error while updating your data", err);

        console.log("Update successful", updatedResult);
      }
    );
  }
);
```

---

### `searchAndUpdate()` <div class="label control"></div>

`buildfire.datastore.searchAndUpdate(search, obj, tag, callback)`

Calls the datastore to search and update the data object that matches that tag and search query. Use this method to update a multiple records or to update spacific element on each record.

```javascript
buildfire.datastore.searchAndUpdate(
  { name: { $eq: "John Doe" } },
  { $set: { name: "John Doe Smith" } },
  "contactInfo",
  (err, result) => {
    if (err) return console.error(err);

    console.log(result.nModified + " records updated");
  }
);
```

#### `search`

JSON object that containing the filter (search query). See [search operators](/docs/search-operators)

| Name     | Type   | Required | Description                    | Default |
| -------- | ------ | -------- | ------------------------------ | ------- |
| `search` | object | yes      | Object containing data filters |

#### `obj`

Can be one of two options:

1. The JSON object you'd like saved.

| Name  | Type   | Required | Description                                                                             | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------- | ------- |
| `obj` | object | yes      | Object to be updated in datastore. Object must contain the original `id` of the object. |

2. A command object meant to pass [data modifying operators](/docs/data-modifying-operators) to the datastore to update certain properties only

| Name  | Type   | Required | Description            | Default |
| ----- | ------ | -------- | ---------------------- | ------- |
| `obj` | object | yes      | Data modifying object. |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, status)`

Callback function after data is inserted

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `status` | object | Status object                                     |

##### `result`

| Name   | Type   | Description                        |
| ------ | ------ | ---------------------------------- |
| `data` | object | Object array inserted in datastore |
| `tag`  | string | Object datastore tag               |
| `id`   | string | Object unique id                   |

#### More Examples

How to update and set values inside array of the data objects

```javascript
buildfire.datastore.bulkInsert(
  [
    {
      name: "John Doe",
      tel: "555-111-1111",
      addresses: [{ city: "San Diego" }],
    },
    { name: "Mike Rotch", tel: "555-222-2222" },
  ],
  "contactInfo",
  (err, data) => {
    if (err) return console.error(err);

    console.log("Data inserted successfully");

    buildfire.datastore.searchAndUpdate(
      { name: "John Doe", "addresses.city": "San Diego" },
      { $set: { "addresses.$.state": "CA" } },
      "contactInfo",
      (err, result) => {
        if (err) return console.error(err);

        console.log(result.nModified + " records updated");
      }
    );
  }
);
```

---

### `delete()` <div class="label control"></div>

`buildfire.datastore.delete(id, tag, callback)`

Calls the datastore to delete the data object that matches that tag and object id. If an object doesn't exists this operation will fail.

```javascript
buildfire.datastore.delete("YOUR_ID_HERE", "contactInfo", (err, result) => {
  if (err) return console.error(err);

  console.log("Record deleted");
});
```

#### `id`

| Name | Type   | Required | Description                                                                                     | Default |
| ---- | ------ | -------- | ----------------------------------------------------------------------------------------------- | ------- |
| `id` | string | yes      | Object id issued when inserting the data. Can be retrieved initially using [`get()`](#) method. |

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | `{"status": "deleted"}`                           |

#### More examples

```javascript
buildfire.datastore.insert(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  false,
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Insert successful", result);

    buildfire.datastore.delete(result.id, "contactInfo", (err, result) => {
      if (err) return console.error("Error while deleting your data", err);

      console.log("Record deleted");
    });
  }
);
```

---

### `search()` <div class="label control"></div><div class="label widget"></div>

`buildfire.datastore.search(options, tag, callback)`

Calls the datastore to search through objects that matches that tag and options criteria. Use this method to search through many records to pull a matching subset. This method allows complex filtering as well as sorting and pagination

```javascript
buildfire.datastore.search(
  {
    filter: {
      $or: [
        { "$json.rank": { $gt: "600", $lt: "900" } },
        { "$json.name": "Jane Doe" },
      ],
    },
    sort: { rank: 1, lastName: -1 },
    fields: ["rank", "lastName"],
    skip: 20,
    limit: 10,
  },
  "contactInfo",
  (err, result) => {
    if (err) return console.error("there was a problem retrieving your data");

    console.log("Records found: ", result);
  }
);
```

#### `options`

JSON object that contains the filter, sort column, pagination parameters and get total records count.

| Name          | Type     | Required | Description                                                                                                                                                                                                     | Default |
| ------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `filter`      | object   | no       | The format is inspired by MongoDB. While many features overlap they are not a direct match. You must add $json. as a prefix for any property you want to filter. [See search operators](/docs/search-operators) |
| `sort`        | object   | no       | Object with properties you'd like to sort on with 1 for ascending and -1 for descending                                                                                                                         |
| `fields`      | [string] | no       | Array of fields that you'd like to get. If this option is not provided all fields will be returned                                                                                                              |
| `recordCount` | boolean  | no       | If true the result will return the object with `totalRecord` number and a `result` array                                                                                                                        | `false` |
| `page`        | number   | no       | Page you want to retrieve. Should be used in combination with `pageSize`                                                                                                                                        | `0`     |
| `pageSize`    | number   | no       | Number of records per `page`, the max value is **50**.                                                                                                                                                          | `50`    |
| `skip`        | number   | no       | Number of record that you need to skip. Should be used with `limit`                                                                                                                                             | `0`     |
| `limit`       | number   | no       | Number of records for this call, the max value is **50**.                                                                                                                                                       | `50`    |

:::note
For pagination you can either use `page` and `pageSize` or `skip` and `limit`, but not both at the same time
:::

#### `tag`

| Name  | Type   | Required | Description                                                                                   | Default |
| ----- | ------ | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in datastore. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type               | Description                                                                                                                               |
| -------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `err`    | string             | error string, `null` when operation is successful                                                                                         |
| `result` | [object] or object | If `recordCount` flag is true, the result is object with `totalRecord` number and `result` array, otherwise it's array of fetched objects |

#### More examples

```javascript
buildfire.datastore.search(
  {
    filter: {
      $or: [
        { "$json.rank": { $gt: "600", $lt: "900" } },
        { "$json.name": "Jane Doe" },
      ],
    },
    sort: { rank: 1, lastName: -1 },
    fields: ["rank", "lastName"],
    page: "0",
    pageSize: "10",
  },
  "contactInfo",
  (err, result) => {
    if (err) return console.error("there was a problem retrieving your data");

    console.log("Found " + result.length + " record(s)");
    console.log(("Records": result));
  }
);
```

```javascript
buildfire.datastore.search(
  {
    filter: {
      $or: [
        { "$json.rank": { $gt: "600", $lt: "900" } },
        { "$json.name": "Jane Doe" },
      ],
    },
    sort: { rank: 1, lastName: -1 },
    fields: ["rank", "lastName"],
    skip: 20,
    limit: 10,
    recordCount: true,
  },
  "contactInfo",
  (err, data) => {
    if (err) return console.error("there was a problem retrieving your data");

    console.log("Total records " + data.totalRecord + " record(s)");
    console.log("Current records " + data.result.length + " record(s)");
  }
);
```

---

### `onUpdate()` <div class="label wdiget"></div>

`buildfire.datastore.onUpdate(callback, allowMultipleHandlers)`

Allows you to pass a callback function that is called whenever the control updates data in the datastore. Use this method in the widget to be notified that the control made a change so you can reflect that change directly in the widget. Returns a cleanup function to clear the listener.

```javascript
let onUpdate = buildfire.datastore.onUpdate((event) => {
  console.log("Data has been updated ", event);
});

// when you want to stop listening
// onUpdate.clear();
```

#### `callback(event)`

Function you pass that gets called on each datastore update

| Name    | Type   | Description               |
| ------- | ------ | ------------------------- |
| `event` | object | Updated datastore records |

#### `allowMultipleHandlers`

| Name                    | Type    | Required | Description                                                                                            | Default |
| ----------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ | ------- |
| `allowMultipleHandlers` | boolean | no       | Tells the method to override all other handlers, or allow multiple handlers to exist at the same time. | `false` |
