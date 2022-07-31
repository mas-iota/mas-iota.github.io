---
id: notes
title: Notes
sidebar_label: Notes
keywords:
  - buildfire
  - notes
  - api
slug: /notes
---

# `buildfire.notes`

The NotesAPI allows users to create and manage notes for app content. Saved notes appear under the "notes" section of the side munu.

## Methods

### `openDialog()` <div class="label widget"></div>

`buildfire.notes.openDialog(options, callback)`

Used for opening up notes dialog. Once opened, user can add new note or edit / remove previous notes.

```javascript
buildfire.notes.openDialog(
  {
    itemId: "MY_VIDEO_ID",
    title: "Crazy cat jumping over the fence!",
    imageUrl: "https://example.com/image.jpg",
    timeIndex: 22,
  },
  (err, data) => {
    if (err) return console.error(err);

    const { hasNotes, noteCount, itemId } = data;

    if (hasNotes) {
      console.log(`Video with id ${itemId} has ${noteCount} notes!`);
    } else {
      console.log(`No notes yet!`);
    }
  }
);
```

#### `options`

| Name        | Type             | Required | Description                                                                                                              | Default |
| ----------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ | ------- |
| `itemId`    | string or number | yes      | Unique id                                                                                                                |         |
| `title`     | string           | yes      | Title of the item the note will belong to, will be displayed on the notes page                                           |         |
| `imageUrl`  | string           | yes      | Icon for the item the note will belong to, will be displayed on the notes page                                           |         |
| `timeIndex` | number           | no       | If adding notes to a video this allows the video to skip to the time when the user added the note. Expressed in seconds. |         |

#### `callback(err, data)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `data` | object | Notes dialog response                             |

##### `data`

| Name        | Type             | Description                                                                |
| ----------- | ---------------- | -------------------------------------------------------------------------- |
| `itemId`    | string or number | Unique identifier                                                          |
| `notes`     | [object]         | All notes for this item. Returns as an empty array if there isn't any note |
| `hasNotes`  | boolean          | Indicates whether there is at least 1 note associated with itemId          |
| `noteCount` | number           | Total number of notes associated with itemId                               |

##### `notes`

| Name        | Type   | Description                                                                                                                                                   |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | number | Unique identifier                                                                                                                                             |
| `text`      | string | The note's text                                                                                                                                               |
| `timeIndex` | number | If adding notes to a video this allows the video to skip to the time when the user added the note. Expressed in seconds. Returns as false if wasn't provided. |

---

### `getByItemId()` <div class="label widget"></div>

`buildfire.notes.getByItemId(options, callback)`

Useful if you want to get total number of notes or simply check if any note exists on given itemId without pulling up the notes dialog.

```javascript
buildfire.notes.getByItemId(
  {
    itemId: "MY_VIDEO_ID",
  },
  (err, data) => {
    if (err) return console.error(err);

    const { hasNotes, noteCount, itemId } = data;

    if (hasNotes) {
      console.log(`Video with id ${itemId} has ${noteCount} notes!`);
    } else {
      console.log(`Video with id ${itemId} does not have a single note yet!`);
    }
  }
);
```

#### `options`

| Name     | Type             | Required | Description       | Default |
| -------- | ---------------- | -------- | ----------------- | ------- |
| `itemId` | string or number | yes      | Unique identifier | N/A     |

#### `callback(err, data)`

| Name   | Type   | Description                                         |
| ------ | ------ | --------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful   |
| `data` | object | Notes dialog response, see [data](/docs/notes#data) |

##### `data`

| Name        | Type             | Description                                                                |
| ----------- | ---------------- | -------------------------------------------------------------------------- |
| `itemId`    | string or number | Unique identifier                                                          |
| `notes`     | [object]         | All notes for this item. Returns as an empty array if there isn't any note |
| `hasNotes`  | boolean          | Indicates whether there is at least 1 note associated with itemId          |
| `noteCount` | number           | Total number of notes associated with itemId                               |

##### `notes`

| Name        | Type   | Description                                                                                                                                                   |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`        | number | Unique identifier                                                                                                                                             |
| `text`      | string | The note's text                                                                                                                                               |
| `timeIndex` | number | If adding notes to a video this allows the video to skip to the time when the user added the note. Expressed in seconds. Returns as false if wasn't provided. |

---

### `onSeekTo()` <div class="label widget"></div>

`buildfire.notes.onSeekTo(callback)`

If you have a video associated with an item, pass its current time to openDialog as timeIndex. If the item is later on opened through the notes dialog, BuildFire will trigger an event used to seek to the specified time.

```javascript
buildfire.notes.onSeekTo((data) => {
  console.log("Seek to time:", data.time);
});
```

#### `callback(data)`

Function called when there is `timeIndex`

| Name   | Type   | Description              |
| ------ | ------ | ------------------------ |
| `data` | object | Object containing `time` |

### Handling note opens

The app will navigate to the plugin to which the note belongs, and will pass note data through [deep links](/docs/deep-links).

This can be useful in cases where the plugin has internal navigation, which must be triggered when the note is opened. The following example shows how a plugin may use the payload to navigate to a specific YouTube video.

```javascript
buildfire.deeplink.getData((data) => {
  if (data && data.link) {
    // use link to navigate to item
  }
});
```

### Editing and Deleting notes

The user manages their notes for an item through the notes dialog that is accessed through menu or opened programatically using openDialog. Once there, they can add, edit or remove notes.
