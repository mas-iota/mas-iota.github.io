---
id: search-operators
title: Search Operators
sidebar_label: Search Operators
description:
keywords:
  - buildfire
  - search
  - operators
  - database
  - datastore
  - appdata
  - query
  - selectors
slug: /search-operators
---

## Query Selectors

- `$eq` Matches values that are equal to a specified value.
- `$gt` Matches values that are greater than a specified value.
- `$gte` Matches values that are greater than or equal to a specified value.
- `$lt` Matches values that are less than a specified value.
- `$lte` Matches values that are less than or equal to a specified value.
- `$ne` Matches all values that are not equal to a specified value.
- `$in` Matches any of the values specified in an array.
- `$nin` Matches none of the values specified in an array.

## Logical

- `$or` Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
- `$and` Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
- `$not` Inverts the effect of a query expression and returns documents that do not match the query expression.
- `$nor` Joins query clauses with a logical NOR returns all documents that fail to match both clauses.

## Element

- `$exists` Matches documents that have the specified field.
- `$type` Selects documents if a field is of the specified type.

## Evaluation

- `$mod` Performs a modulo operation on the value of a field and selects documents with a specified result.
- `$regex` Selects documents where values match a specified regular expression.

##Array

- `$all` Matches arrays that contain all elements specified in the query.
- `$elemMatch` Selects documents if element in the array field matches all the specified `$elemMatch` conditions.
- `$size` Selects documents if the array field is a specified size.

## Example

```json
{
  "qty": { "$gt": 0 }, // for quantities greater than zero
  "discontinued": 0, // and not discontinued
  "$or": [
    { "description": { "$regex": "new" } }, // that has the word "new" in it
    { "description": { "$regex": "hot" } } // that has the word "hot" in it
  ]
}
```

:::tip
For matching operators with MongoDB you can [read more here](http://docs.mongodb.org/manual/reference/operator/query/)
:::
