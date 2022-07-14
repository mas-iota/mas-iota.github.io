---
id: aggregation
title: Aggregation
sidebar_label: Aggregation
description:
keywords:
  - buildfire
  - operators
  - database
  - datastore
  - appdata
  - query
  - selectors
  - stages
  - pipeline
  - aggregation
  - aggregate
slug: /aggregation
---

Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result

## Aggregation Pipeline

MongoDB's aggregation framework is modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into an aggregated result. For example:

```javascript
  buildfire.publicData.aggregate({
    pipelineStages: [
      { $match: { status: "A" } },
      { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
    ],
    skip: 0,
    limit: 20
  }, 'articals', (err, result) => {

})
```

**First Stage**: The `$match` stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A".

**Second Stage**: The `$group` stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id.

The most basic pipeline stages provide filters that operate like queries and document transformations that modify the form of the output document.

Other pipeline operations provide tools for grouping and sorting documents by specific field or fields as well as tools for aggregating the contents of arrays, including arrays of documents. In addition, pipeline stages can use operators for tasks such as calculating the average or concatenating a string.



## Pipeline Stages

- Pipeline stages appear in an array.

- Documents pass through the stages in sequence.

- All except the `$out`, `$merge`, and `$geoNear` stages can appear multiple times in a pipeline.

- [Read more about pipeline stages](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/) and how to use them.

- In the following some of basic pipeline stages:

### [$match](https://docs.mongodb.com/manual/reference/operator/aggregation/match/#mongodb-pipeline-pipe.-match)
  Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
  - Should be **first stage** of pipeline .
  - Should have at least one of **buildfire indexes**.
  - The `$match` stage has the following prototype form:
  ```
    { $match: { <query> } }
  ```
  - You cannot use `$where` in `$match` queries as part of the aggregation pipeline.
  - You cannot use `$near` or `$nearSphere` in `$match` queries as part of the aggregation pipeline.
    As an alternative, you can either:
      - Use `$geoNear` stage instead of the $match stage.
      - Use `$geoWithin `query operator with `$center` or `$centerSphere` in the `$match` stage.
  - To use `$text` in the `$match` stage, the `$match` stage has to be the first stage of the pipeline.
 

### [$geoNear](https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/#mongodb-pipeline-pipe.-geoNear)
  Outputs documents in order of nearest to farthest from a specified point.
  - If it exist in the pipeline stages should be the first stage of it. 
  - The $geoNear stage has the following prototype form:
  ```
    { $geoNear: { <geoNear options> } }
  ```
  - The $geoNear operator accepts a document that contains the following $geoNear options. Specify all distances in the same units as those of the processed documents' coordinate system:
   `near`, `key`, `query`, `distanceField`, `distanceMultiplier`, `includeLocs`, `maxDistance`, `minDistance`, `spherical` and `uniqueDocs`.

  - Important `key` option is required and it should have the right buildfire geospatial indexed as value `_buildfire.geo` check [Geospatia Data](/docs/geodata) and check the [example](/docs/aggregation#examples) below.
    - key specify the geospatial indexed field to use when calculating the distance.


### [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#mongodb-pipeline-pipe.-group)
  Groups input documents by the specified _id expression and for each distinct grouping, outputs a document. The _id field of each output document contains the unique group by value. The output documents can also contain computed fields that hold the values of some [accumulator expression](https://docs.mongodb.com/manual/reference/operator/aggregation/group/#std-label-accumulators-group).

  - The $group stage has the following prototype form:
 ```
  {
    $group:
      {
        _id: <expression>, // Group By Expression
        <field1>: { <accumulator1> : <expression1> },
        ...
      }
  }
  ```
  - **_id**: Required. If you specify an _id value of null, or any other constant value, the $group stage calculates accumulated values for all the input documents as a whole.

  - **field**: Optional. Computed using the **accumulator operators**.

  - **Accumulator operators**: `$accumulator`, `$addToSet`, `$avg`, `$count`, `$first`, `$last`, `$max`, `$mergeObjects`, `$min`, `$stdDevPop`, `$stdDevSamp` and `$sum`.


### [$sort](https://docs.mongodb.com/manual/reference/operator/aggregation/sort/#mongodb-pipeline-pipe.-sort)
  Sorts all input documents and returns them to the pipeline in sorted order.

  - The `$sort` stage has the following prototype form:

    ```
      { $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }
    ```
  - `$sort` takes a document that specifies the field(s) to sort by and the respective sort order. `sort order` can have one of the following values:


### [$project](https://docs.mongodb.com/manual/reference/operator/aggregation/project/#mongodb-pipeline-pipe.-project)
  Passes along the documents with the requested fields to the next stage in the pipeline. The specified fields can be existing fields from the input documents or newly computed fields.

  - The $project stage has the following prototype form:

  ```
  { $project: { field1: 1 or 0,  field2: 1 or 0, ...} }
  ```

  - The $project takes a document that can specify the inclusion of fields, the suppression of the _id field, the addition of new fields, and the resetting of the values of existing fields. Alternatively, you may specify the exclusion of fields.

  - The $project specifications have the following forms:
    - `<field>: <1 or true>`: Specifies the inclusion of a field. Non-zero integers are also treated as true.
    - `_id: <0 or false>`: Specifies the suppression of the _id field.To exclude a field conditionally, use the REMOVE variable instead. For details, see Exclude Fields Conditionally.
    - `<field>: <expression>`: Adds a new field or resets the value of an existing field.
    - `<field>:<0 or false>`: Specifies the exclusion of a field.

## Example

A document in the places collection resembles the following:

```javascript
{
  "_id" : 1,
  "data": {
    "_buildfire": {
      "geo": {
        "type" : "Point",
        "coordinates" : [ -73.9375, 30.843 ]
      }
    }
  }
}
{
  "_id" : 2,
  "data": {
    "_buildfire": {
      "geo": {
        "type" : "Point",
        "coordinates" : [ -73.945, 40.8303 ]
      }
    }
  }
}
{
  "_id" : 3,
  "data": {
    "_buildfire": {
      "geo": {
        "type" : "Point",
      "coordinates" : [ -73.9375, 40.8303 ]
      }
    }
  }
}
```

```javascript
buildfire.appData.aggregate(
  {
    pipelineStages: [
      {
        $geoNear: {
            near: { type: "Point", coordinates: [ -73.98142 , 40.71782 ] },
            key: "_buildfire.geo",
            distanceField: "dist.calculated",
            query: { }
        }
       }
    ],
    skip: 0,
    limit: 10,
  },
  "places",
  (err, result) => {
    if (err) return console.error("there was a problem aggregating your data");

    console.log(" aggregation results: ", result);
  }
);
```

The aggregation returns the following:

```javascript
[
  {
    "_id" : 1,
    "data": {
      "_buildfire": {
        "geo": {
          "type" : "Point",
          "coordinates" : [ -73.9375, 30.843 ]
        }
      }
    }
  },
  {
    "_id" : 3,
    "data": {
      "_buildfire": {
        "geo": {
          "type" : "Point",
        "coordinates" : [ -73.9375, 40.8303 ]
        }
      }
    }
  },
  {
    "_id" : 2,
    "data": {
      "_buildfire": {
        "geo": {
          "type" : "Point",
          "coordinates" : [ -73.945, 40.8303 ]
        }
      }
    }
  }
]

```


:::tip
For Aggregation with  MongoDB you can [read more here](https://docs.mongodb.com/manual/aggregation/)
:::
