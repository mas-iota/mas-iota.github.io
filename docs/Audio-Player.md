---
id: audio-player
title: Audio Player
sidebar_label: Audio Player
description: How to use BuildFire Audio Player Service
keywords:
  - buildfire
  - audio
  - player
  - service
slug: /audio-player
---

# `buildfire.services.media.audioPlayer`

This is a service that lives on the app level. It is meant to allow plugins to play audio on the app without interruption from user navigation. It facilitates common audio controls listed below. Also maintains a playlist for the user to access not depending on a single plugin.

## Requirements

### Widget

Include `audioPlayer.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>
  <script src="../../../scripts/buildfire/services/media/audioPlayer.js"></script>
</head>
```

### Control

Include `audioPlayer.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire.min.js"></script>
  <script src="../../../../scripts/buildfire/services/media/audioPlayer.js"></script>
</head>
```

## Full Example

You can check out example implementation for `audioPlayer` at https://github.com/BuildFire/simpleBuildFireJSExamples/tree/master/exampleAudioPlayer

## Methods

### `play()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.play(track)`

Begins playing a track

```javascript
buildfire.services.media.audioPlayer.play(
  "http://free-loops.com/data/mp3/68/dd/35cc9e920eae0ddf7e110d7ce0af.mp3"
);
```

#### `track`

Track can be multiple one of the types described in a table below

| Name    | Type                  | Required | Description                                     | Default |
| ------- | --------------------- | -------- | ----------------------------------------------- | ------- |
| `track` | `null` or `undefined` | no       | Tries to resume the paused track if any         |
| `track` | string                | no       | Url of an audio file you want to play           |
| `track` | number                | no       | Tries to find the track index from the playlist |
| `track` | object                | no       | `Track` object                                  |

#### `Track`

| Name           | Type   | Required | Description                                                                                                      | Default |
| -------------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| `title`        | string | no       | Track title                                                                                                      |
| `url`          | string | no       | Track url                                                                                                        |
| `image`        | string | no       | Track cover image                                                                                                |
| `album`        | string | no       | Album name                                                                                                       |
| `artist`       | string | no       | Artist name                                                                                                      |
| `startAt`      | number | no       | Start playing from certain second                                                                                |
| `lastPosition` | number | no       | Second where user was last at on current track. Can be used in combination with `autoJumpToLastPosition` setting |

---

### `pause()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.pause()`

Pauses a current track

```javascript
buildfire.services.media.audioPlayer.pause();
```

---

### `isPaused()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.isPaused(callback)`

Checks if audio is playing or not

```javascript
buildfire.services.media.audioPlayer.isPaused((err, isPaused) => {
  if (err) return console.err(err);

  if (isPaused) {
    console.log("Audio is paused");
  } else {
    console.log("Audio is playing");
  }
});
```

#### `callback(err, data)`

Callback function after something is done

| Name       | Type    | Description                                       |
| ---------- | ------- | ------------------------------------------------- |
| `err`      | string  | error string, `null` when operation is successful |
| `isPaused` | boolean | Indicates if audio is paused                      |

---

### `skip()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.skip(seconds)`

Skips forward provided numbers of seconds

```javascript
buildfire.services.media.audioPlayer.skip(5);
```

#### `seconds`

| Name      | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| `seconds` | number | Number of seconds to skip forward |

---

### `next()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.next()`

Plays a next item on playlist

```javascript
buildfire.services.media.audioPlayer.next();
```

---

### `previous()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.previous()`

Plays a previous item on playlist

```javascript
buildfire.services.media.audioPlayer.previous();
```

---

### `loopTrack()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.loopTrack()`

Keeps playing a current track in loop

```javascript
buildfire.services.media.audioPlayer.loopTrack();
```

---

### `getPlaylist()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.getPlaylist(callback)`

Gets the current playlist

```javascript
buildfire.services.media.audioPlayer.getPlaylist((err, playlist) => {
  if (err) return console.error(err);

  console.log("Current playlist", playlist);
});
```

#### `callback(err, playlist)`

Callback function after fetching the playlist

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `err`      | string | error string, `null` when operation is successful |
| `playlist` | object | Current playlist object                           |

#### `playlist`

| Name        | Type     | Description                                                            |
| ----------- | -------- | ---------------------------------------------------------------------- |
| `lastIndex` | number   | Index of last track played, `-1` if no items were played yet           |
| `track`     | [object] | Array of `tracks` in playlist. See [`track`](/docs/audio-player#Track) |

---

### `addToPlaylist()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.addToPlaylist(track)`

Adds a track to playlist

```javascript
buildfire.services.media.audioPlayer.addToPlaylist({
  url: "http://free-loops.com/data/mp3/68/dd/35cc9e920eae0ddf7e110d7ce0af.mp3",
});
```

#### `track`

See [`track`](/docs/audio-player#Track)

---

### `removeFromPlaylist()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.removeFromPlaylist(index)`

Removes a track from playlist

```javascript
buildfire.services.media.audioPlayer.removeFromPlaylist(0);
```

#### `index`

| Name    | Type   | Required | Description                                  | Default |
| ------- | ------ | -------- | -------------------------------------------- | ------- |
| `index` | number | yes      | Index of `track` to be removed from playlist |         |

---

### `getCurrentTrack()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.getCurrentTrack(callback)`

Gets a current track

```javascript
buildfire.services.media.audioPlayer.getCurrentTrack((track) => {
  console.log("Current track", track);
});
```

#### `callback(track)`

Callback function after fetching current track

| Name    | Type   | Description                             |
| ------- | ------ | --------------------------------------- |
| `track` | object | See [`track`](/docs/audio-player#Track) |

---

#### `playlist`

| Name        | Type     | Description                                                  |
| ----------- | -------- | ------------------------------------------------------------ |
| `lastIndex` | number   | Index of last track played, `-1` if no items were played yet |
| `track`     | [object] | Array of `tracks` in playlist                                |

---

### `setTime()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.setTime(seconds)`

Sets the time to specific value on current track

```javascript
buildfire.services.media.audioPlayer.setTime(30);
```

#### `seconds`

| Name      | Type   | Required | Description                                        | Default |
| --------- | ------ | -------- | -------------------------------------------------- | ------- |
| `seconds` | number | yes      | Number of seconds from beginning of track to go to |

---

### `settings.get()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.settings.get(callback)`

Gets the audio player settings

```javascript
buildfire.services.media.audioPlayer.settings.get((err, settings) => {
  if (err) return console.err(err);

  console.log(settings);
});
```

#### `callback(err, settings)`

Callback function after settings are fetched

| Name       | Type   | Description                                       |
| ---------- | ------ | ------------------------------------------------- |
| `err`      | string | error string, `null` when operation is successful |
| `settings` | object | Settings object                                   |

#### `settings`

| Name                     | Type    | Description                                                                       |
| ------------------------ | ------- | --------------------------------------------------------------------------------- |
| `autoJumpToLastPosition` | boolean | If a track has `lastPosition` use it to start playing the audio from there        |
| `autoPlayNext`           | boolean | Once a track is finished playing go to the next track in the playlist and play it |
| `isPlayingCurrentTrack`  | boolean | Indicates if any track is currently playing                                       |
| `loopPlaylist`           | boolean | Once the end of the playlist has been reached start over again                    |
| `shufflePlaylist`        | boolean | Shuffle the playlist                                                              |
| `volume`                 | number  | Current audio volume level `0` - `1` representing percentage                      |

---

### `settings.set()` <div class="label control"></div><div class="label widget"></div>

`buildfire.services.media.audioPlayer.settings.set(settings)`

Sets the audio player settings

```javascript
buildfire.services.media.audioPlayer.settings.set({
  autoJumpToLastPosition: false,
  autoPlayNext: true,
  loopPlaylist: true,
  shufflePlaylist: true,
});
```

#### `settings`

| Name                     | Type    | Required | Description                                                                       | Default |
| ------------------------ | ------- | -------- | --------------------------------------------------------------------------------- | ------- |
| `autoJumpToLastPosition` | boolean | no       | If a track has `lastPosition` use it to start playing the audio from there        | `false` |
| `autoPlayNext`           | boolean | no       | Once a track is finished playing go to the next track in the playlist and play it | `false` |
| `loopPlaylist`           | boolean | no       | Once the end of the playlist has been reached start over again                    | `false` |
| `shufflePlaylist`        | boolean | no       | Shuffle the playlist                                                              | `false` |

## Handlers

### `onEvent()`

`buildfire.services.media.audioPlayer.onEvent(callback)`

Calls the callback after event occurs on audio player

```javascript
buildfire.services.media.audioPlayer.onEvent((event) => {
  console.log("Audio event occured", event);
});
```

#### `callback`

Callback function to be called when event occurs

#### `event`

| Name    | Type   | Description                                                                                                                               |
| ------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `data`  | object | An object with data specific to current event. Some events don't have any so `data`will be `undefined`                                    |
| `event` | string | Describing the event that occured. Can be `play`, `pause`, `resume`, `next`, `previous`, `removeFromPlaylist`, `audioEnded`, `timeUpdate` |

##### `event.data`

| Event                | Description                                   | Data                                                                     |
| -------------------- | --------------------------------------------- | ------------------------------------------------------------------------ |
| `play`               | Triggered when a track plays.                 | Object containing current `track` and index                              |
| `pause`              | Triggered when a track is paused.             | `undefined`                                                              |
| `resume`             | Triggered when a track is un-paused           | `undefined`                                                              |
| `next`               | Triggered when a next track plays             | Object containing next `track`                                           |
| `previous`           | Triggered when a previous track plays         | Object containing previous `track`                                       |
| `removeFromPlaylist` | Triggered when track is removed from playlist | Object containing `newPlaylist` which is a playlist without removed item |
| `audioEnded`         | Triggered when a track ends                   | `undefined`                                                              |
| `timeUpdate`         | Triggered when a track time changes           | Object containing `currentTime`, `duration` and `buffer`                 |
