---
id: formatting
title: Formatting
sidebar_label: Formatting
description: How to convert a plain text to a rich HTML
keywords:
  - buildfire
  - format
  - formatting
  - text
  - html
  - text to html
  - plugins
slug: /formatting
---

# `buildfire.format`

This service give the ability to convert a plain text to a rich HTML, where it detects urls, emails, hashatgs and phone numbers and convert them to a clickable links (action items).

## Requirements

### Widget

Include `format.js` file in widget header after the `buildfire.min.js`

```javascript
<head>
    <script src="../../../scripts/buildfire.min.js"></script>
    <script src="../../../scripts/buildfire/services/format/format.js"></script>
</head>
```

### Control

Include `format.js` file in control header after the `buildfire.min.js`

```javascript
<head>
    <script src="../../../../scripts/buildfire.min.js"></script>
    <script src="../../../../scripts/buildfire/services/format/format.js"></script>
</head>
```

## Methods

### `textToHTML()` <div class="label control"></div><div class="label widget"></div>

`buildfire.format.textToHTML(options, callback)`

This function is responsible for converting a plain text to a rich HTML, where it detects urls, emails, hashatgs and phone numbers and convert them to a clickable links (action items) and it also retruns the detected hashtags in the text as an array.

```javascript
let options = {
text: 'Convert (https://www.google.com) to a clickable link'
}; 
buildfire.format.textToHTML(options, (err, result) => {
    if(err) return console.error(`ERROR: ${err}`);
    console.log("RESULT: " + result);
});
```

#### `options`

| Name                   | Type    | Required | Description                                                                         | Default |
| ---------------------- | ------- | -------- | ----------------------------------------------------------------------------------- | ------- |
| `text`                 | string  | yes      | The text that will be converted to html                                             |
| `ignoreAnchors`        | boolean | no       | to decide whether to convert urls to action items or to keep them as texts          | `false` |
| `ignoreEmails`         | boolean | no       | to decide whether to convert emails to action items or to keep them as texts        | `false` |
| `ignorePhoneNumbers`   | boolean | no       | to decide whether to convert phone numbers to action items or to keep them as texts | `false` |
| `supportedHashtagType` | string  | no       | the type of hashtag to be supported (`youtube`, `facebook`, `twitter`, `custom`)    |         |


#### `callback(err, data)`

| Name   | Type   | Description                                                                                    |
| ------ | ------ | ---------------------------------------------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful                                              |
| `data` | object | contains the converted text to html and the hashtags that was detected in the text as an array |

:::caution Warning
This service checks if the text is already converted to an html; so if it is already converted, this service will retrun an error.
:::

#### More Examples

```javascript
let options = {
  text: 'Convert (https://www.google.com) to a clickable link and #youtubeHashtag to a clickable hashtag',
  ignoreAnchors: false,
  ignoreEmails: true,
  ignorePhoneNumbers: false,
  supportedHashtagType: 'youtube'
}; 
buildfire.format.textToHTML(options, (err, result) => {
  if(err) return console.error(`ERROR: ${err}`);
  console.log(result);
});
```

---

### `onHashtagClick()`<div class="label control"></div><div class="label widget"></div>


`buildfire.format.onHashtagClick(hashtag)`

This function is used with the (`supportedHashtagType = 'custom'`), where this function will be invoked when the user clicks on the custom hashtag. Initially, this function logs the clicked hashtag in the console, but the developer can override this function to handle the clicked hashtag in different ways.

```javascript
let options = {
  text: 'Convert #customHashtag to a clickable hashtag',
  supportedHashtagType: 'custom'
}; 
buildfire.format.textToHTML(options, (err, result) => {
  if(err) return console.error(`ERROR: ${err}`);
  console.log(result);
});
buildfire.format.onHashtagClick = function(hashtag) { // override the original function
  console.log(`The overridden function was invoked with hashtag: ${hashtag}`);
}
```