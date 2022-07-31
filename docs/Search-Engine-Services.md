---
id: search-engine
title: Search Engine
sidebar_label: Search Engine
keywords:
  - buildfire
  - search
  - engine
  - services
slug: /search-engine
---

# `buildfire.searchEngine`

This is a built-in APIs that allows your control or widget to access highly scalable full-text search service. It allows you to store, search big volumes of data quickly and in near real-time.

## Requirements

### Widget

Include `searchEngine.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/searchEngine/searchEngine.js"></script>
</head>
```

### Control

Include `searchEngine.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/searchEngine/searchEngine.js"></script>
</head>
```

## Methods

### `insert()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.insert(options, callback)`

Inserts a new item into search engine

```javascript
buildfire.services.searchEngine.insert(
  {
    tag: "departments",
    title: "HR Department",
    description: "Performs human resource management",
    keywords: "hr, department, human resource, management",
  },
  (err, response) => {
    if (err) return console.error(err);

    console.log("Data Inserted", "document id: " + response.id);
  }
);
```

#### `options`

| Name          | Type    | Required | Description                                                                                | Default |
| ------------- | ------- | -------- | ------------------------------------------------------------------------------------------ | ------- |
| `linkedUser`  | boolean | no       | This will make the data linked to the current logged user, which means it will be private. |         |
| `tag`         | string  | yes      | A unique key for your data, this is important for categorizing your data.                  |         |
| `title`       | string  | yes      | Title for your data, this will be searchable by our search engine.                         |         |
| `description` | string  | no       | Description for your data, this will be searchable by our search engine.                   |         |
| `keywords`    | string  | no       | Any keywords related to your data, this will be searchable by our search engine.           |         |
| `imageUrl`    | string  | no       | Image url on search results                                                                |         |
| `data`        | object  | no       | You can add whatever you want here, this won't be searchable by our search engine.         |         |

#### `callback(err, result)`

| Name     | Type   | Description                                                             |
| -------- | ------ | ----------------------------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful                       |
| `result` | object | Object containing id property, which is the id of the newly saved data. |

---

### `save()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.save(options, callback)`

Saves a new item into search engine

```javascript
buildfire.services.searchEngine.save(
  {
    tag: "departments",
    title: "HR Department",
    description: "Performs human resource management",
    keywords: "hr, department, human resource, management",
  },
  (err, response) => {
    if (err) return console.error(err);

    console.log("Data saved", "document id: " + response.id);
  }
);
```

#### `options`

| Name          | Type    | Required | Description                                                                                | Default |
| ------------- | ------- | -------- | ------------------------------------------------------------------------------------------ | ------- |
| `linkedUser`  | boolean | no       | This will make the data linked to the current logged user, which means it will be private. |         |
| `tag`         | string  | yes      | A unique key for your data, this is important for categorizing your data.                  |         |
| `key`         | string  | yes      | A unique key for your document, this is the id for your document.                          |         |
| `title`       | string  | yes      | Title for your data, this will be searchable by our search engine.                         |         |
| `description` | string  | no       | Description for your data, this will be searchable by our search engine.                   |         |
| `keywords`    | string  | no       | Any keywords related to your data, this will be searchable by our search engine.           |         |
| `imageUrl`    | string  | no       | Image url on search results                                                                |         |
| `data`        | object  | no       | You can add whatever you want here, this won't be searchable by our search engine.         |         |

#### `callback(err, result)`

| Name     | Type   | Description                                                             |
| -------- | ------ | ----------------------------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful                       |
| `result` | object | Object containing id property, which is the id of the newly saved data. |

---

### `update()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.update(options, callback)`

Inserts a new item into search engine

```javascript
buildfire.services.searchEngine.update(
  {
    id: "data_id_goes_here",
    tag: "departments",
    title: "HR Department",
    description: "Performs human resource management",
    keywords: "hr, department, human resource, management",
  },
  (err, response) => {
    if (err) return console.error(err);

    console.log("Data updated", "document id: " + response.id);
  }
);
```

#### `options`

| Name          | Type    | Required | Description                                                                                | Default |
| ------------- | ------- | -------- | ------------------------------------------------------------------------------------------ | ------- |
| `id`          | string  | yes      | An id for your document to update it.                                                      |         |
| `linkedUser`  | boolean | no       | This will make the data linked to the current logged user, which means it will be private. |         |
| `tag`         | string  | yes      | A unique key for your data, this is important for categorizing your data.                  |         |
| `title`       | string  | yes      | Title for your data, this will be searchable by our search engine.                         |         |
| `description` | string  | no       | Description for your data, this will be searchable by our search engine.                   |         |
| `keywords`    | string  | no       | Any keywords related to your data, this will be searchable by our search engine.           |         |
| `imageUrl`    | string  | no       | Image url on search results                                                                |         |
| `data`        | object  | no       | You can add whatever you want here, this won't be searchable by our search engine.         |         |

#### `callback(err, result)`

| Name     | Type   | Description                                                             |
| -------- | ------ | ----------------------------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful                       |
| `result` | object | Object containing id property, which is the id of the newly saved data. |

---

### `delete()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.delete(options, callback)`

Inserts a new item into search engine

```javascript
buildfire.services.searchEngine.delete(
  {
    id: "data_id_goes_here",
    tag: "departments",
  },
  (err, response) => {
    if (err) return console.error(err);

    console.log("Data Deleted:", response);
  }
);
```

#### `options`

| Name  | Type   | Required | Description                                                               | Default |
| ----- | ------ | -------- | ------------------------------------------------------------------------- | ------- |
| `id`  | string | yes      | An id for your document to update it.                                     |         |
| `tag` | string | yes      | A unique key for your data, this is important for categorizing your data. |         |

#### `callback(err, result)`

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful |
| `result` | boolean | Indicates if data has been deleted                |

---

### `search()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.search(options, callback)`

Searches the search engine items.

Returns documents that contain terms similar to the search term, as measured by a Levenshtein edit distance.

An edit distance is the number of one-character changes needed to turn one term into another. These changes can include:

- Changing a character (box → fox)
- Removing a character (black → lack)
- Inserting a character (sic → sick)
- Transposing two adjacent characters (act → cat)

To find similar terms, the fuzzy query creates a set of all possible variations, or expansions, of the search term within a specified edit distance. The query then returns exact matches for each expansion.

The number of edits which allowed in our search APIs is (2).

```javascript
buildfire.services.searchEngine.search(
  {
    tag: "departments",
    searchText: "hr",
    pageSize: 30,
    pageIndex: 0,
    preHighlightTag: "<b>",
    postHighlightTag: "</b>",
  },
  (err, response) => {
    if (err) return console.error("Error in searching data", err);

    console.log("Search results", response.hits);
  }
);
```

#### `options`

| Name               | Type   | Required | Description                                                                                  | Default |
| ------------------ | ------ | -------- | -------------------------------------------------------------------------------------------- | ------- |
| `searchText`       | string | yes      | Your search text.                                                                            |         |
| `linkedUser`       | string | yes      | If true this will return all public data and the data added by the current logged user.      |         |
| `pageIndex`        | string | no       | Index of returned page.                                                                      | `0`     |
| `pageSize`         | string | no       | Number of results returned per page.                                                         | `50`    |
| `preHighlightTag`  | string | no       | Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. |
| `postHighlightTag` | string | no       | Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. |

#### `callback(err, result)`

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful |
| `result` | boolean | Search results                                    |

---

### `feeds.insert()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.feeds.insert(options, callback)`

Inserts a new rss feed into search engine

```javascript
buildfire.services.searchEngine.feeds.insert(
  {
    tag: "news",
    title: "CNN Youtube feed",
    description: "CNN Youtube Channel",
    feedType: "rss",
    feedConfig: {
      url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCupvZG-5ko_eiXAupbDfxWw",
    },
    feedItemConfig: {
      uniqueKey: "id",
      titleKey: "title",
      urlKey: "link",
      descriptionKey: "media:group.media:description",
      publishDateKey: "published",
      imageUrlKey: "media:group.media:thumbnail.$.url",
    },
  },
  (err, response) => {
    if (err) return console.error("Error in inserting youtube feed data", err);

    console.log("Feed Inserted", "Feed id: " + response.id);
  }
);
```

#### `options`

| Name             | Type   | Required | Description                                                               | Default |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------- | ------- |
| `tag`            | string | yes      | A unique key for your data, this is important for categorizing your data. |         |
| `title`          | string | yes      | Title for your feed.                                                      |         |
| `description`    | string | yes      | Description for your feed.                                                |         |
| `feedType`       | string | yes      | Feed type. Available types: `"rss"`                                       |         |
| `feedConfig`     | object | yes      | Feed config.                                                              |         |
| `feedItemConfig` | object | yes      | Feed item config.                                                         |         |

##### `options.feedConfig`

| Name  | Type   | Required | Description | Default |
| ----- | ------ | -------- | ----------- | ------- |
| `url` | string | yes      | Feed url    |         |

##### `options.feedItemConfig`

| Name             | Type   | Required | Description                                                   | Default         |
| ---------------- | ------ | -------- | ------------------------------------------------------------- | --------------- |
| `uniqueKey`      | string | no       | Unique key for each item returned from rss service.           | `"guid"`        |
| `titleKey`       | string | no       | The title for each item returned from rss service.            | `"title"`       |
| `descriptionKey` | string | no       | The description key for each item returned from rss service.  | `"description"` |
| `urlKey`         | string | no       | The url key for each item returned from rss service.          | `"link"`        |
| `publishDateKey` | string | no       | The publish date key for each item returned from rss service. | `"pubDate"`     |
| `imageUrlKey`    | string | no       | The image url key for each item returned from rss service.    | `"thumbnail"`   |

#### `callback(err, result)`

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful |
| `result` | boolean | Indicates if rss feed has been attached           |

---

### `feeds.get()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.feeds.get(options, callback)`

Fetches rss feeds from search engine

```javascript
buildfire.services.searchEngine.feeds.get(
  {
    tag: "news",
    feedType: "rss",
  },
  (err, response) => {
    if (err) return console.error("Error fetching feed data", err);

    console.log("Feeds:", response);
  }
);
```

#### `options`

| Name       | Type   | Required | Description                                                               | Default |
| ---------- | ------ | -------- | ------------------------------------------------------------------------- | ------- |
| `tag`      | string | yes      | A unique key for your data, this is important for categorizing your data. |         |
| `feedType` | string | yes      | Feed type. Available types: `"rss"`                                       |         |

#### `callback(err, result)`

| Name     | Type    | Description                                                         |
| -------- | ------- | ------------------------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful                   |
| `result` | boolean | All the attached feeds related to the specified `tag` & `feedType`. |

---

### `feeds.delete()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.searchEngine.feeds.delete(options, callback)`

Deletes rss feed from search engine

```javascript
buildfire.services.searchEngine.feeds.delete(
  {
    tag: "news",
    feedId: "feed_id_goes_here",
    removeFeedData: true,
  },
  (err, response) => {
    if (err) return console.error("Error in deleting feed", err);

    console.log("Feed deleted", response);
  }
);
```

#### `options`

| Name             | Type    | Required | Description                                                                          | Default |
| ---------------- | ------- | -------- | ------------------------------------------------------------------------------------ | ------- |
| `tag`            | string  | yes      | A unique key for your data, this is important for categorizing your data.            |         |
| `feedId`         | string  | yes      | Feed id that will be returned from [feeds.get](/docs/search-engine#feedsget) method. |         |
| `removeFeedData` | boolean | no       | If true, this will remove all feed data inside the app that's related to this feed.  |         |

#### `callback(err, result)`

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful |
| `result` | boolean | Indicates if feed has been detached               |

---
