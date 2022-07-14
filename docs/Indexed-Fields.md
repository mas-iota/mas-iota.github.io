---
id: indexed-fields
title: Indexed Fields
sidebar_label: Indexed Fields
description:
keywords:
  - buildfire
  - index
  - indexes
  - database
slug: /indexed-fields
---

We provide customized fields inside of `_buildfire` object to be used as indexed fields and to support high-performance search and sort query for plugin developers.

Basically, you will use all methods in [`publicData`](/docs/public-data), [`userData`](/docs/user-data) or [`appData`](/docs/app-data) service, but you will need to pay attention to pass the values in a specific structure so we can make sure that these values will be indexed and to provide high-performance search query.

## Primitive & Array Data Index

Developers can store the needed values in the following fields inside of `_buildfire.index` object :

- `string1` (string)
- `number1` (number)
- `date1` (date)
- [`array1`](#array) (array)
- `text` (string)

:::warning Important
These are keywords and not meant to be replaced. Meaning `string1` isn't meant to be replaced with `firstName`
:::

This is the most important part, because the rest will follow like any other type of data. So when you insert the indexed values you need to put it like the JSON structure below:

```javascript
"_buildfire": {
  "index": {
    "string1": <string>,
    "number1": <number>,
    "date1": <date>,
    "array1": <array>,
    "text": <string>"
  }
}
```

:::warning important
Please note that you can use any combination of the above fields, we can make an index for you depends on the provided data in the `_buildfire.index` object ( you can provide `string1` and `date1` for example) it depends on your requirement.
:::

---

#### Example

Let's say that You have a use case to filter the data depending on a `username` (string value) and `createdOn` (date value). First you need to store a data in a way to make sure that the desired fields for the filters are in the indexed fields like the following:

```javascript
function addNewData(data) {
  buildfire.publicData.insert(data, "primary", false, function (err, data) {
    if (err) console.log("there was a problem saving your data");
    else console.log("saved successfully");
  });
}

var data = {
  username: "userId",
  createdOn: new Date(),
  data: "Some data",
  _buildfire: {
    index: {
      date1: new Date(),
      string1: "userId",
    },
  },
};

addNewData(data);

var searchUsingIndexedFields = {
  filter: {
    "_buildfire.index.date1": { $gt: new Date("2019-03-25T00:00:00.000") },
    "_buildfire.index.string1": "userId",
  },
};

buildfire.publicData.search(
  searchUsingIndexedFields,
  "primary",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.stringify(records.length));
    }
  }
);

/*
This will return

{
  username: "userId",
  createdOn: "2019-03-25T00:00:00.000",
  data: "Some data",
  _buildfire: {
    index: {
      date1: "2019-03-25T00:00:00.000",
      string1: "userId",
    },
  },
};

*/
```

## Array

To use an array in the index object, you should follow the below structure,
each object in the array should have an attribute **string1**; **string1** is the key for the index

```
array1 : [ {'string1' : key1 , _any_other_attributes_ } , {'string1' : key2 ,_any_other_attributes_}]
```

#### Example

Let's say that You have a use case to filter the data depending on user badges (array of objects), you need to store data in a way where you have to make sure that the desired fields for the filters are provided in the indexed fields like the following:

```javascript
function addNewData(data) {
  buildfire.publicData.insert(data, "primary", false, function (err, data) {
    if (err) console.log("there was a problem saving your data");
    else console.log("saved successfully");
  });
}

var data = {
  username: "userId",
  createdOn: new Date(),
  data: "Some data",
  _buildfire: {
    index: {
      date1: new Date(),
      string1: "userId",
      array1: [
        { string1: "VIP", badge: "VIP" },
        { string1: "Elite", badge: "Elite" },
      ],
    },
  },
};

addNewData(data);

var data = {
  username: "userId2",
  createdOn: new Date(),
  data: "Some data",
  _buildfire: {
    index: {
      date1: new Date(),
      string1: "userId2",
      array1: [
        { string1: "VIP", badge: "VIP" },
        { string1: "Important", badge: "Important" },
        { string1: "Elite", badge: "Elite" },
      ],
    },
  },
};

addNewData(data);

var searchThroughArrayOfObjects = {
  filter: {
    "_buildfire.index.array1.string1": "Important",
  },
};

buildfire.publicData.search(
  searchThroughArrayOfObjects,
  "primary",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.stringify(records.length));
    }
  }
);

/*
This will return

let x = {
  username: "userId2",
  createdOn: new Date(),
  data: "Some data",
  _buildfire: {
    index: {
      date1: new Date(),
      string1: "userId2",
      array1: [
        { string1: "VIP" },
        { string1: "Important" },
        { string1: "Elite" },
      ],
    },
  },
};
*/
```

## Text Data Index (Text Search)

Developers can store the string content in the text field inside of `_buildfire.index` object to support text search queries on text content, this will help to speed up the retrieving process for the data.

:::warning Important
The text index is used to speed up search through text but it's not useful to apply fuzziness or using regex matching which means if you have "BuildFire" as a phrase stored in your text data and you are trying to search for "Bu" this will not return that document because search using text index will do the exact match on phrases.
:::

This is the most important part, because the rest will follow like any other type of data. So when you insert the data, you need to put the text like the below JSON structure to perform text search on the saved data:

```javascript
"_buildfire": {
  "index": {
    "text": "<text>"
  }
}
```

When you need to perform text search, the filter object must be like the following:

```javascript
{
  "filter": {
    "$text": { "$search": "Your text search" }
  }
}
```

:::warning important
Please note that in case you use the text index and use the primitive index adjacently in your search query, the query will make use of the text index and will not use the primitive index which will affect the search query performance.
:::

```javascript
"_buildfire": {
  "index": {
    "string1": "<string>",
    "number1": "<number>",
    "date1": "<date>",
    "text": "<long text>"
  }
}
```

:::warning important
The search query will use the text index **only** and it will ignore the primitive index.
:::

---

#### Example

Let's say that You have a use case to filter the data depends on description (text), First you need to store a data in a way which you have to make sure that the desired fields for the filters are provided in the text field like the following:

```javascript
function addNewData(data) {
  buildfire.publicData.insert(data, "primary", false, function (err, data) {
    if (err) console.log("there was a problem saving your data");
    else console.log("saved successfully");
  });
}

var data = {
  username: "userId",
  createdOn: new Date(),
  data: "Some data",
  _buildfire: {
    index: {
      text:
        "The BuildFire platform is designed to be dynamic and open source, which means any existing features can be customized to the exact way you need them to be. Our in-house custom app development team can build any features specifically for your app from scratch.",
    },
  },
};

addNewData(data);

var searchUsingTextIndex = {
  filter: {
    $text: { $search: "BuildFire" },
  },
};

buildfire.publicData.search(
  searchUsingTextIndex,
  "primary",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.stringify(records.length));
    }
  }
);

/*
This will return

{
  username: "userId",
  createdOn: new Date(),
  data: "Some data",
  _buildfire: {
    index: {
      text:
        "The BuildFire platform is designed to be dynamic and open source, which means any existing features can be customized to the exact way you need them to be. Our in-house custom app development team can build any features specifically for your app from scratch.",
    },
  },
};
*/
```

:::warning Important Restrictions

- You cannot combine the `$text` expression, which requires a special text index, with a query operator that requires a different type of special index. For example you cannot combine `$text` expression with the `$near` operator.
- To use a `$text` query in an `$or` expression, all clauses in the `$or` array must be indexed.

:::

## Advanced Options

The `$text` operator accepts a text query document with the following fields:

```json
{
  "$text": {
    "$search": "<string>",
    "$language": "<string>",
    "$caseSensitive": "<boolean>"
  }
}
```

### `$search`

A string of terms that we use to allow the developers to use the text index. The text index performs a logical OR search of the terms unless specified as a phrase.

In the `$search` field, specify a string of words that the text operator parses and uses to query the text index.

The text operator treats most punctuation in the string as delimiters, except a hyphen-minus (-) that negates term or an escaped double quotes `\"` that specifies a phrase.

- Phrases

  To match on a phrase, as opposed to individual terms, enclose the phrase in escaped double quotes `\"`, as in:

  `"\"ssl certificate\""`

  If the `$search` string includes a phrase and individual terms, text search will only match the documents that include the
  phrase.

  For example, passed a `$search` string:
  `"\"ssl certificate\" authority key"`
  The `$text` operator searches for the phrase `"ssl certificate"`.

- Negations

  Prefixing a word with a hyphen-minus `-` negates a word:

  The negated word excludes documents that contain the negated word from the result set. When passed a search string that only contains negated words, text search will not match any documents. A hyphenated word, such as pre-market, is not a negation. If used in a hyphenated word, $text operator treats the hyphen-minus `-` as a delimiter. To negate the word market in this instance, include a space between pre and `-market`,
  i.e., `pre -market`.

The `$text` operator adds all negations to the query with the logical `AND` operator.

```json
{ "$text": { "$search": "coffee -shop" } }
```

### $language

The language that determines the list of stop words for the search and the rules for the tokenizer. If not specified, the search uses the default language of the index. If you specify a language value of "none", then the text search uses simple tokenization with no list of stop words.

Stop word example: ("to", "is", "are")

| Language Name | ISO 639-1 (Two letter codes) |
| ------------- | ---------------------------- |
| dutch         | nl                           |
| english       | en                           |
| finnish       | fi                           |
| french        | fr                           |
| german        | de                           |
| hungarian     | hu                           |
| italian       | it                           |
| norwegian     | nb                           |
| portuguese    | pt                           |
| romanian      | ro                           |
| russian       | ru                           |
| spanish       | es                           |
| swedish       | sv                           |
| turkish       | tr                           |

### $caseSensitive

A boolean flag to enable or disable case sensitive search. Defaults to `false`; i.e. the search defers to the case insensitivity of the text index.

#### Examples

```javascript
function addNewData(data) {
  buildfire.publicData.insert(data, "primary", false, function (err, data) {
    if (err) console.log("there was a problem saving your data");
    else console.log("saved successfully");
  });
}

var data = {
  username: "userId",
  _buildfire: {
    index: {
      text: "Buildfire mobile platform",
    },
  },
};

var data1 = {
  username: "userId1",
  _buildfire: {
    index: {
      text: "buildfire mobile platform",
    },
  },
};

var data2 = {
  username: "userId2",
  _buildfire: {
    index: {
      text: "mobile engine",
    },
  },
};

addNewData(data);
addNewData(data1);
addNewData(data2);

/* The following query performs a case sensitive search for the term buildfire */

var sensitiveSearch = {
  filter: {
    $text: { $search: "buildfire", $caseSensitive: true },
  },
};
buildfire.publicData.search(
  sensitiveSearch,
  "primary",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.stringify(records.length));
    }
  }
);

/* The search matches data1
   {
     "username" : "userId1" ,
    _buildfire :{
      index : {
          text : "buildfire mobile platform"
       }
      }
  };
*/

/* The following query searches for the phrase mobile engine*/

var phraseSearch = {
  filter: {
    $text: { $search: '"mobile engine"' },
  },
};

buildfire.publicData.search(phraseSearch, "primary", function (err, records) {
  if (err) alert("there was a problem retrieving your data");
  else {
    alert("found " + records.length + " record(s)");
    alert(JSON.stringify(records.length));
  }
});

/* This query returns documents that contain the phrase mobile engine which is data2

{
    "username": "userId2",
    _buildfire: {
        index: {
            text: "mobile engine"
        }
    }
};

*/

/* The following query specifies a string of two terms delimited by space, "mobile buildfire" */

var twoTermsSearch = {
  filter: {
    $text: { $search: "mobile buildfire" },
  },
};

buildfire.publicData.search(twoTermsSearch, "primary", function (err, records) {
  if (err) alert("there was a problem retrieving your data");
  else {
    alert("found " + records.length + " record(s)");
    alert(JSON.stringify(records.length));
  }
});

/* This query returns documents that contain either mobile or buildfire

{
    "username": "userId",
    _buildfire: {
        index: {
            text: "Buildfire mobile platform"
        }
    }
};


{
    "username": "userId1",
    "createdOn": new Date(),
    _buildfire: {
        index: {
            text: "buildfire mobile platform"
        }
    }
};


{
    "username": "userId2",
    _buildfire: {
        index: {
            text: "mobile engine"
        }
    }
};
*/

/*
A negated term is a term that is prefixed by a minus sign -.

If you negate a term, the $text operator will exclude the documents that contain those terms from the results.
The following example searches for documents that contain the words mobile but do not contain the term platform

*/

var negatedTermSearch = {
  filter: {
    $text: { $search: "mobile -platform" },
  },
};
buildfire.publicData.search(
  negatedTermSearch,
  "primary",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.stringify(records.length));
    }
  }
);

/* This query returns documents that contain mobile but doesn't contain platform
{
    "username": "userId2",
    _buildfire: {
        index: {
            text: "mobile engine"
        }
    }
}
*/
```
