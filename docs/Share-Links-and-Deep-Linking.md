---
id: share-links-and-deep-linking
title: Share Links and Deep Linking
sidebar_label: Share Links and Deep Linking
description:
keywords:
  - buildfire
  - share
  - links
  - deep
  - linking
slug: /share-links-and-deep-linking
---

# `buildfire.deeplink`

Provide a way to reference a plugin inside the application and navigate the user directly to that plugin with specific data that allow the plugin developers to change the plugin view or behavior depending on this data ( example: showing a video).

## Methods

### `generateUrl()` <div class="label control"></div><div class="label widget"></div>

`buildfire.deeplink.generateUrl(options, callback)`

This function helps the developers to generate a shortened URL which points to the original URL which has been provided with meta tags that control how URLs are displayed when shared on social media (Facebook, Whatsup, Slack...etc)

```javascript
buildfire.deeplink.generateUrl(
  {
    data: { videoId: "9Q-4sZF0_CE" },
  },
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result.url);
    }
  }
);
```

#### `options`

| Name            | Type     | Required | Description                                                                                                                                                                                                                    | Default                      |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `title`         | string   | no       | Share link title                                                                                                                                                                                                               | Name of the app              |
| `keywords`      | string   | no       | Keywords of the share link                                                                                                                                                                                                     | Name, description of the app |
| `imageUrl`      | string   | no       | The image of the share link                                                                                                                                                                                                    | App icon                     |
| `description`   | string   | no       | The description of share link                                                                                                                                                                                                  | App description              |
| `data`          | object   | no       | The deep link data that developers need to provide to the plugin once the user opened the share link. For more information on how to reed this data from plugin, see [`buildfrire.deeplink.getData`](/docs/deep-links#getdata) |
| `extraMetaTags` | [object] | no       | Extra graph meta tags, please check the following link for extra meta tags: https://ogp.me/#optional                                                                                                                           |

#### `callback(err, result)`

Function will be invoked after the link has been generated and return back the generated URL.

| Name     | Type   | Description                                                               |
| -------- | ------ | ------------------------------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful                         |
| `result` | object | Object containting generated deep link url ex. `{ url : "DEEP_LINK_URL"}` |

#### More Examples

```javascript
let link = {};
link.title = "share link title";
link.description = "This is an example of buildfire share link";
link.imageUrl = "HTTP://buildfire.com/exampleImage.png";
link.extraMetaTags = [
  { property: "og:site_name", content: "YouTube" },
  {
    property: "og:video:url",
    content: "https://www.youtube.com/embed/9Q-4sZF0_CE",
  },
];

link.data = {
  videoId: "9Q-4sZF0_CE",
};

buildfire.deeplink.generateUrl(link, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.url);
  }
});
```
