---
id: user-data
title: User Data
sidebar_label: User Data
description: "User Data: Save user data from the widget"
keywords:
  - buildfire
  - userdata
  - widget
slug: /user-data
---

# `buildfire.userData`

`userData` is a framework provided in `buildfire.js` that allows the app user and app owner to save and retrieve simple and complex data. The framework facilitates CRUD operations common to all data operations as well as searching, sorting and paging complex data.

This service also takes care of all server side infrastructure to unburden the developer and app owner for developing the server side components and the costs of running a server. This service is provided out of the box at no additional charge.

The `userData` service also handles caching of data and other performance enhancements.

The use of the `userData` is completely optional. The developer may choose to communicate with his own custom api.

:::important
`userData` has read/write permissions on widget side. `userData` is data that is saved from the widget side and only accessable to user that initiated the request and only on current plugin. If you want to save data from widget side and have it available to other users, check out [`publicData`](/docs/public-data) or if you want data to be accessable by other plugins, check out [`appData`](/docs/app-data)
:::

:::note
If you want to work with **Geospatial** data check [GeoData Wiki](/docs/geodata)
:::

:::tip
To support high performance search and sort query check [Indexed Fields](/docs/indexed-fields)
:::

:::tip
You can see an example of using User Data in https://github.com/BuildFire/simpleBuildFireJSExamples/tree/master/exampleWidgetUserDataPlugin
:::

## Methods

### `get()` <div class="label control"></div><div class="label widget"></div>

`buildfire.userData.get(tag, callback)`

Calls the userData to retrieve plugin data objects in JSON format.

:::note
If there are many objects with the same id, only one random record will be returned
:::

```javascript
buildfire.userData.get("main record", (err, result) => {
  if (err) return console.error("Error while retrieving your data", err);
  console.log("Main record", result.data);
});
```
http://maps.googleapis.com/maps/api/staticmap?size=70x61&markers=icon:http://foursquare.com/img/categories_v2/shops/financial_bg_64.png|37.446754,-77.572746&key=AIzaSyBS-cnC0cEI46YKuh6_rjMDIc1Pd9CGiT4
http://maps.googleapis.com/maps/api/staticmap?size=400x400&path=color:%235FB9EA|weight:3|43,22|43,21&markers=icon:https://bajking.s3.eu-central-1.amazonaws.com/start2.png|37.446754,-77.572746&markers=icon:https://bajking.s3.eu-central-1.amazonaws.com/end2.png|43,21&key=AIzaSyBS-cnC0cEI46YKuh6_rjMDIc1Pd9CGiT4


#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result object containing userData tag and data    |

##### result

| Name   | Type   | Description                                     |
| ------ | ------ | ----------------------------------------------- |
| `data` | object | Object saved in userData under the selected tag |
| `tag`  | string | Object tag                                      |

#### More Examples

If your userData has only one object and does not use tags, you can skip the tag argument

```javascript
buildfire.userData.get((err, result) => {
  if (err) return console.error(err);

  console.log("Data: ", result.data);
});
```

---

### `getById()` <div class="label control"></div><div class="label widget"></div>

`buildfire.userData.getById(id, tag, callback)`

Calls the userData to retrieve plugin data object by id in JSON format.

```javascript
buildfire.userData.getById(
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

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result object containing userData tag and data    |

##### result

| Name   | Type   | Description                                    |
| ------ | ------ | ---------------------------------------------- |
| `data` | object | Object saved in userData under the selected id |
| `tag`  | string | Object userData tag                            |

---

### `save()` <div class="label widget"></div>

`buildfire.userData.save(obj, tag, callback)`

This method calls the userData to update **all** plugin data objects that have that tag. if no object is found it will create one, and does not check for duplicates

:::note
Data objects saved using `save()` method will not get assigned ids. Data will be saved in the same format as provided.
:::

```javascript
buildfire.userData.save(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  (err, result) => {
    if (err) return console.error("Error while saving your data", err);

    console.log("Data saved successfully", result);
  }
);
```

#### `obj`

| Name  | Type   | Required | Description                     | Default |
| ----- | ------ | -------- | ------------------------------- | ------- |
| `obj` | object | yes      | Object to be stored in userData |

#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Result object containing userData tag and data    |

##### result

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| `data` | object | Object saved in userData |
| `tag`  | string | Object userData tag      |

---

### `insert()` <div class="label widget"></div>

`buildfire.userData.insert(obj, tag, checkDuplicate, callback)`

Calls the userData to insert a data object. If an object already exists with this tag and `checkDuplicate` is false it will create another record otherwise it will return a duplicate entry error. Use this method to save multiple records under the same tag. Every inserted item will get unique id. You can use this id later in [`getById`](#)

```javascript
buildfire.userData.insert(
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

| Name  | Type   | Required | Description                     | Default |
| ----- | ------ | -------- | ------------------------------- | ------- |
| `obj` | object | yes      | Object to be stored in userData |

#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `checkDuplicate`

| Name             | Type    | Required | Description                                                                                   | Default |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------- | ------- |
| `checkDuplicate` | boolean | no       | If `true` it will prevent insertion of duplicate records, if `false` it will allow duplicates | `false` |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful  |
| `result` | object | Result object containing userData tag, data and id |

##### `result`

| Name   | Type   | Description                 |
| ------ | ------ | --------------------------- |
| `data` | object | Object inserted in userData |
| `tag`  | string | Object userData tag         |
| `id`   | string | Object unique id            |

---

### `bulkInsert()` <div class="label widget"></div>

`buildfire.userData.bulkInsert(obj, tag, callback)`

Calls the userData to insert multiple data objects at once. If objects already exist with this tag it will create new records. Use this method to save multiple records with single API call.

:::note
Data objects inserted using `bulkInsert()` method will not get assigned ids.
:::

```javascript
buildfire.userData.bulkInsert(
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

| Name  | Type     | Required | Description                                | Default |
| ----- | -------- | -------- | ------------------------------------------ | ------- |
| `obj` | [object] | yes      | Array of object to be inserted in userData |

#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful  |
| `result` | object | Result object containing userData tag, data and id |

##### `result`

| Name   | Type   | Description                       |
| ------ | ------ | --------------------------------- |
| `data` | object | Object array inserted in userData |
| `tag`  | string | Object userData tag               |

---

### `update()` <div class="label widget"></div>

`buildfire.userData.update(id, obj, tag, callback)`

Calls the userData to update the data object that matches that tag and id. If an object doesn't exist this operation will fail. Use this method to update a single record.

```javascript
buildfire.userData.update(
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

| Name  | Type   | Required | Description                                                                            | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------- | ------- |
| `obj` | object | yes      | Object to be updated in userData. Object must contain the original `id` of the object. |

2. A command object meant to pass [data modifying operators](/docs/data-modifying-operators) to the userData to update certain properties only

| Name  | Type   | Required | Description            | Default |
| ----- | ------ | -------- | ---------------------- | ------- |
| `obj` | object | yes      | Data modifying object. |

#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                        |
| -------- | ------ | -------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful  |
| `result` | object | Result object containing userData tag, data and id |

##### `result`

| Name   | Type   | Description                       |
| ------ | ------ | --------------------------------- |
| `data` | object | Object array inserted in userData |
| `tag`  | string | Object userData tag               |
| `id`   | string | Object unique id                  |

#### More Examples

```javascript
buildfire.userData.insert(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  false,
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Insert successful", result);
    let objectId = result.id;

    buildfire.userData.update(
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

### `searchAndUpdate()` <div class="label widget"></div>

`buildfire.userData.searchAndUpdate(search, obj, tag, callback)`

Calls the userData to search and update the data object that matches that tag and search query. Use this method to update a multiple records or to update spacific element on each record.

```javascript
buildfire.userData.searchAndUpdate(
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

| Name  | Type   | Required | Description                                                                            | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------- | ------- |
| `obj` | object | yes      | Object to be updated in userData. Object must contain the original `id` of the object. |

2. A command object meant to pass [data modifying operators](/docs/data-modifying-operators) to the userData to update certain properties only

| Name  | Type   | Required | Description            | Default |
| ----- | ------ | -------- | ---------------------- | ------- |
| `obj` | object | yes      | Data modifying object. |

#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, status)`

Callback function after data is inserted

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `status` | object | Status object                                     |

##### `result`

| Name   | Type   | Description                       |
| ------ | ------ | --------------------------------- |
| `data` | object | Object array inserted in userData |
| `tag`  | string | Object userData tag               |
| `id`   | string | Object unique id                  |

#### More Examples

How to update and set values inside array of the data objects

```javascript
buildfire.userData.bulkInsert(
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

    buildfire.userData.searchAndUpdate(
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

### `delete()` <div class="label widget"></div>

`buildfire.userData.delete(id, tag, callback)`

Calls the userData to delete the data object that matches that tag and object id. If an object doesn't exists this operation will fail.

```javascript
buildfire.userData.delete("YOUR_ID_HERE", "contactInfo", (err, result) => {
  if (err) return console.error(err);

  console.log("Record deleted");
});
```

#### `id`

| Name | Type   | Required | Description                                                                                     | Default |
| ---- | ------ | -------- | ----------------------------------------------------------------------------------------------- | ------- |
| `id` | string | yes      | Object id issued when inserting the data. Can be retrieved initially using [`get()`](#) method. |

#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | `{"status": "deleted"}`                           |

#### More examples

```javascript
buildfire.userData.insert(
  { name: "John Doe", tel: "555-111-1111" },
  "contactInfo",
  false,
  (err, result) => {
    if (err) return console.error("Error while inserting your data", err);

    console.log("Insert successful", result);

    buildfire.userData.delete(result.id, "contactInfo", (err, result) => {
      if (err) return console.error("Error while deleting your data", err);

      console.log("Record deleted");
    });
  }
);
```

---

### `search()` <div class="label control"></div><div class="label widget"></div>

`buildfire.userData.search(options, tag, callback)`

Calls the userData to search through objects that matches that tag and options criteria. Use this method to search through many records to pull a matching subset. This method allows complex filtering as well as sorting and pagination

```javascript
buildfire.userData.search(
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

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is inserted

| Name     | Type               | Description                                                                                                                               |
| -------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `err`    | string             | error string, `null` when operation is successful                                                                                         |
| `result` | [object] or object | If `recordCount` flag is true, the result is object with `totalRecord` number and `result` array, otherwise it's array of fetched objects |

#### More examples

```javascript
buildfire.userData.search(
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
buildfire.userData.search(
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

### `aggregate()` <div class="label control"></div><div class="label widget"></div>

`buildfire.userData.aggregate(params, tag, callback)`

Calls the userData to run aggregation pipeline that allow us to analyze documents data in real time and return computed results based on pipeline stages, which we can create an aggregation pipeline that consists of one or more stages. Each stage transforms the documents and passes the output to the next stage.

The aggregation pipeline provide results like the `total number` of documents, `sum`, `average`, `maximum` and `minimum` values for objects that matches that tag and pipeline stages.

```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match: { 
         "_buildfire.index.string1": 'fba5d2bc-f880-4bd9-ad7e-c6c48d846f9b'
         "status": "success",
        } 
      },
      { $group: { _id: null, avgScore: { $avg: "$score" } } }
    ],
    skip: 0,
    limit: 10,
  },
  "course_students",
  (err, result) => {
    if (err) return console.error("there was a problem aggregating your data");

    console.log(" aggregation results: ", result);
    /*
      result
      [
         {_id: null, avgScore: 75.4}
      ]
    */
  }
);
```

#### `params`

JSON object that contains the pipelineStages, pagination parameters.

| Name             | Type     | Required | Description                                                                                                                                                     | Default |
| ---------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `pipelineStages` | [object] | yes      | Array of objects represent the pipeline stages. The format is inspired by MongoDB Aggregation. Read more about [Aggregation Pipeline Stages](/docs/aggregation) |
| `page`           | number   | no       | Page you want to retrieve. Should be used in combination with `pageSize`                                                                                        | `0`     |
| `pageSize`       | number   | no       | Number of records per `page`, the max value is **50**.                                                                                                          | `50`    |
| `skip`           | number   | no       | Number of record that you need to skip. Should be used with `limit`                                                                                             | `0`     |
| `limit`          | number   | no       | Number of records for this call, the max value is **50**.                                                                                                       | `50`    |

:::note
For pagination you can either use `page` and `pageSize` or `skip` and `limit`, but not both at the same time.
:::


#### `tag`

| Name  | Type   | Required | Description                                                                                  | Default |
| ----- | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `tag` | string | no       | Key used to differentiate your content saved in userData. ex(`settings` or `questions`) etc. |

#### `callback(err, result)`

Callback function after data is retrieved

| Name     | Type     | Description                                       |
| -------- | -------- | ------------------------------------------------- |
| `err`    | string   | error string, `null` when operation is successful |
| `result` | [object] | Array of objects contain your aggregation results |

#### More examples

The examples use a collection named articles with the following documents:

``` javascript
{
  "_id": '',
  "data": { 
    "author" : "dave",
    "score" : 80,
    "views" : 100,
    "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
{
  "_id": '',
  "data": { 
    "author" : "dave",
    "score" : 85,
    "views" : 521,
     "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
{
  "_id": '',
  "data": { 
    "author" : "max",
    "score" : 60,
    "views" : 1000,
    "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
{
  "_id": '',
  "data": { 
    "author" : "moe",
    "score" : 55,
    "views" : 5000,
    "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
{
  "_id": '',
  "data": { 
    "author" : "chris",
    "score" : 60,
    "views" : 50,
    "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
{
  "_id": '',
  "data": { 
    "author" : "moe",
    "score" : 94,
    "views" : 999,
    "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
{
  "_id": '',
  "data": { 
    "author" : "julia",
    "score" : 95,
    "views" : 1000,
    "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
    "buildfire": {
      "index": {
        "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
      }
    }
  },
  "createdOn": '2021-10-10T22:49:19.623Z'
}
```

##### Equality Match
The following operation uses `$match` stage to perform a simple equality match:


```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match : { "author" : "dave", "_buildfire.index.string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510' } }
    ],
    skip: 0,
    limit: 20
  },
  "articles", (err, result) => {
    if (err) return console.error("there was a problem retrieving your data");
    // result
    /* 
    [ {
      _id: '',
      data: { 
        "author" : "dave",
        "score" : 80,
        "views" : 100,
        "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
        "_buildfire": {
          "index": {
            "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
          }
        }
      },
      createdOn: '2021-10-10T22:49:19.623Z'
    },
    {
      _id: '',
      data: { 
        "author" : "dave",
        "score" : 85,
        "views" : 521,
        "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
        "_buildfire": {
          "index": {
            "string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'
          }
        }
      },
      createdOn: '2021-10-10T22:49:19.623Z'
    }
    ]
    */
  }
);
```

The `$match` selects the documents where _buildfire.index.string1 equal "e1efdf3a-a8a5-4c5a-8404-005c4b84b510" and  the author field equals "dave", and the aggregation returns the following:
```javascript
 [
    { "author" : "dave", "score" : 80, "views" : 100,  "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510' }
    { "author" : "dave", "score" : 85, "views" : 521 ,  "userId": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510'}
 ]
```

##### Perform a Count
The following example selects documents to process using the `$match` pipeline operator and then pipes the results to the `$group` pipeline operator to compute a count of the documents:

```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match: { 
        "_buildfire.index.string1": 'e1efdf3a-a8a5-4c5a-8404-005c4b84b510',
        $or: [ { "score": { $gt: 70, $lt: 90 } }, { "views": { $gte: 1000 } } ] }
      },
      { $group: { _id: null, totalCount: { $sum: 1 } } }
    ],
    skip: 0,
    limit: 10
  },
  "articles",
  (err, result) => {

    // result
    /* 
    [
      { "_id" : null, "totalCount" : 5 }
    ]
    */
  }
);
```
In the aggregation pipeline, `$match` selects the documents where _buildfire.index.string1 equal "e1efdf3a-a8a5-4c5a-8404-005c4b84b510" and either the score is greater than 70 and less than 90 or the views is greater than or equal to 1000. These documents are then piped to the `$group` to perform a count. 
The aggregation returns the following:
```javascript
  [
    { "_id" : null, "totalCount" : 5 }
  ]
```

##### Perform Sum and Average
The following example selects documents to process using the `$match` pipeline operator and then pipes the results to the `$group` pipeline operator to compute the sum of views and average of score for "moe" author:

```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match: { 
        "author": "moe",
        "_buildfire.index.string1": "e1efdf3a-a8a5-4c5a-8404-005c4b84b510"
      },
      { 
        $group: { 
          _id: null,
           totalViews: { $sum: "$views" },
           avgScore: { $avg: "$score" },
        }
      }
    ],
    skip: 0,
    limit: 10
  },
  "articles",
  (err, result) => {

    // result
    /* 
    [
      { 
        "_id" : null, 
        "totalViews" : 5999,
        "avgScore": 74.5
      }
    ]
    */
  }
);
```

In the aggregation pipeline, `$match` selects the documents where _buildfire.index.string1 equal "e1efdf3a-a8a5-4c5a-8404-005c4b84b510" and author field equals "moe". These documents are then piped to the `$group` to compute the  `totalViews` and `avgScore`. 
The aggregation returns the following:
```javascript
  [
    { 
      "_id" : null, 
      "totalViews" : 5999,
      "avgScore": 74.5
    }
  ]
```

##### Perform Min and Max with Grouping
The following example selects documents to process using the `$match` pipeline operator and then pipes the results to the `$group` pipeline operator to compute the `Min` and `Max` of views, and `Min` and `Max` of score grouped by author:

```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match: { 
        "_buildfire.index.string1": "e1efdf3a-a8a5-4c5a-8404-005c4b84b510"
      },
      { 
        $group: { 
          _id: "$author",
           minViews: { $min: "$views" },
           maxViews: { $max: "$views" },
           minScore: { $min: "$score" },
           maxScore: { $max: "$score" },
        }
      }
    ],
    skip: 0,
    limit: 10
  },
  "articles",
  (err, result) => {

    // result
    /* 
    [
      { 
        "_id" : 'dave', 
        "minViews" : 100,
        "maxViews": 521,
        "minScore": 80,
        "maxScore": 85,
      },
      { 
        "_id" : 'max', 
        "minViews" : 1000,
        "maxViews": 1000,
        "minScore": 60,
        "maxScore": 60,
      },
      { 
        "_id" : 'moe', 
        "minViews" : 1000,
        "maxViews": 1000,
        "minScore": 60,
        "maxScore": 60,
      },
      { 
        "_id" : 'chris', 
        "minViews" : 999,
        "maxViews": 5000,
        "minScore": 55,
        "maxScore": 94,
      },
       { 
        "_id" : 'julia', 
        "minViews" : 1000,
        "maxViews": 1000,
        "minScore": 95,
        "maxScore": 95,
      },
    ]
    */
  }
);
```

In the aggregation pipeline, `$match` selects the documents where _buildfire.index.string1 equal "e1efdf3a-a8a5-4c5a-8404-005c4b84b510". These documents are then piped to the `$group` to compute the  `minViews`, `maxViews`, `minScore` and `maxScore` grouped by author field . 
The aggregation returns the following:
```javascript
   [
      { 
        "_id" : 'dave', 
        "minViews" : 100,
        "maxViews": 521,
        "minScore": 80,
        "maxScore": 85,
      },
      { 
        "_id" : 'max', 
        "minViews" : 1000,
        "maxViews": 1000,
        "minScore": 60,
        "maxScore": 60,
      },
      { 
        "_id" : 'moe', 
        "minViews" : 1000,
        "maxViews": 1000,
        "minScore": 60,
        "maxScore": 60,
      },
      { 
        "_id" : 'chris', 
        "minViews" : 999,
        "maxViews": 5000,
        "minScore": 55,
        "maxScore": 94,
      },
       { 
        "_id" : 'julia', 
        "minViews" : 1000,
        "maxViews": 1000,
        "minScore": 95,
        "maxScore": 95,
      },
    ]
```


##### Exclude Fields
The following example selects documents to process using the `$match` pipeline operator and then pipes the results to the `$project` pipeline operator to includes only the author, and score fields in its output documents:

```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match: { 
        "_buildfire.index.string1": "e1efdf3a-a8a5-4c5a-8404-005c4b84b510"
      },
      {  
        "$project": {"author": 1, "score": 1}
      }
    ],
    skip: 0,
    limit: 5
  },
  "articles",
  (err, result) => {

    // result
    /* 
    */
  }
);
```

The aggregation result
```javascript
[
  {
  "data": { 
    "author" : "dave",
    "score" : 80,
    }
  },
  {
    "data": { 
      "author" : "dave",
      "score" : 85,
    }
  },
  {
    "data": { 
      "author" : "max",
      "score" : 60,
    }
  },
  {
    "data": { 
      "author" : "moe",
      "score" : 55,
    }
  },
  {
    "data": { 
      "author" : "chris",
      "score" : 60,
    }
  }
 
]
```

#### Full Aggregation Example 
The following example selects documents to process using the `$match` pipeline operator and then pipes the results to the `$group` pipeline operator to compute the total of views, and average of score grouped by author then pipes the grouping stage results to `$sort` pipeline that sort the result descending based on `totalViews`:

```javascript
buildfire.userData.aggregate(
  {
    pipelineStages: [
      { $match: { 
        "_buildfire.index.string1": "e1efdf3a-a8a5-4c5a-8404-005c4b84b510",
        "author": "moe"
      },
      { 
        $group: { 
          _id: "$author",
           totalViews: { $sum: "$views" },
           avgScore: { $avg: "$score" },
        }
      },
      {  
        $sort: {"$avgScore": -1}
      }
    ],
    skip: 0,
    limit: 5
  },
  "articles",
  (err, result) => {

    // result
    /* 
    */
  }
);

```

The aggregation result
```javascript
[
  { 
    "_id" : 'julia', 
    "totalViews" : 1000,
    "avgScore": 95,
  },
  { 
    "_id" : 'dave', 
    "totalViews" : 621,
    "avgScore": 82.5,
  },
  { 
    "_id" : 'moe', 
    "totalViews" : 5999,
    "avgScore": 74.5,
  },
  { 
    "_id" : 'max', 
    "totalViews" : 1000,
    "avgScore": 60,
  },
  
  { 
    "_id" : 'chris', 
    "totalViews" : 50,
    "avgScore": 60,
  }
  
]
```


---

### `onUpdate()` <div class="label wdiget"></div>

`buildfire.userData.onUpdate(callback, allowMultipleHandlers)`

Allows you to pass a callback function that is called whenever the control updates data in the userData. Use this method in the widget to be notified that the control made a change so you can reflect that change directly in the widget. Returns a cleanup function to clear the listener.

```javascript
let onUpdate = buildfire.userData.onUpdate((event) => {
  console.log("Data has been updated ", event);
});

// when you want to stop listening
// onUpdate.clear();
```

#### `callback(event)`

Function you pass that gets called on each userData update

| Name    | Type   | Description              |
| ------- | ------ | ------------------------ |
| `event` | object | Updated userData records |

#### `allowMultipleHandlers`

| Name                    | Type    | Required | Description                                                                                            | Default |
| ----------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ | ------- |
| `allowMultipleHandlers` | boolean | no       | Tells the method to override all other handlers, or allow multiple handlers to exist at the same time. | `false` |
