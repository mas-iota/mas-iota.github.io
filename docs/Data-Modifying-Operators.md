---
id: data-modifying-operators
title: Data Modifying Operators
sidebar_label: Data Modifying Operators
description:
keywords:
  - buildfire
  - database
  - data
  - update
  - modify
  - operators
  - queries
slug: /data-modifying-operators
---

The following modifiers are available for use in update operations; e.g. in `buildfire.datastore.update()` and `buildfire.datastore.save()`

## Update Operators
* `$inc`	Increments the value of the field by the specified amount.
* `$mul`	Multiplies the value of the field by the specified amount.
* `$rename`	Renames a field.
* `$setOnInsert`	Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.
* `$set`	Sets the value of a field in a document.
* `$unset`	Removes the specified field from a document.
* `$min`	Only updates the field if the specified value is less than the existing field value.
* `$max`	Only updates the field if the specified value is greater than the existing field value.

## Operators
* `$addToSet`	Adds elements to an array only if they do not already exist in the set.
* `$pop`	Removes the first or last item of an array.
* `$pullAll`	Removes all matching values from an array.
* `$pull`	Removes all array elements that match a specified query.
* `$pushAll`	Deprecated. Adds several items to an array.
* `$push`	Adds an item to an array.

## Modifiers
* `$each`	Modifies the `$push` and `$addToSet` operators to append multiple items for array updates.
* `$slice`	Modifies the `$push` operator to limit the size of updated arrays.
* `$sort`	Modifies the `$push` operator to reorder documents stored in an array.
* `$position`	Modifies the `$push` operator to specify the position in the array to add elements.