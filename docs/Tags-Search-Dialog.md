---
id: tags-search-dialog
title: Tags Search Dialog
sidebar_label: Tags Search Dialog
description: How to show tags search dilaog on BuildFire
keywords:
  - buildfire
  - tags
  - tagging
  - search
  - dialog
slug: /tags-search-dialog
---

# `buildfire.auth`

Tags search dialog accessible via the plugin SDK from the control side of the plugin. It allows plugin developers to show tags search dialog, find and select tags and get their data in callback.

## Methods

### `showTagsSearchDialog()` <div class="label control"></div>

`buildfire.auth.showTagsSearchDialog(options, callback)`

This builtin dialog helps you to show a dialog in order to select tags.

```javascript
buildfire.auth.showTagsSearchDialog(null, (err, result) => {
  if (err) return console.error(err);
  console.log(result);
});
```

#### `options`

Reserved for future usage. can be passed as `null`.

#### `callback(err, tags)`

Callback function after something is done

| Name   | Type     | Description                                                      |
| ------ | -------- | ---------------------------------------------------------------- |
| `err`  | string   | error string, `undefined` or `null` when operation is successful |
| `tags` | [object] | Array of tags                                                    |

###### `tags[]`

| Name      | Type   | Description           |
| --------- | ------ | --------------------- |
| `id`      | string | unique id for the tag |
| `tagName` | string | tag's name            |
