---
id: gamify
title: Gamify
sidebar_label: Gamify
description:
keywords:
  - buildfire
  - gamify
  - service
  - gamification
  - scoreboard
slug: /gamify
---

# `buildfire.gamify`

This is a service that provides some reusable features that help gamify your app.

This service ties in with push notifications. It triggers notifications to users as the scoreboard changes. It creates an engaging competition among your users.

## Requirements

### Widget

Include `scoreboard.js` and `pushNotifications.js` file in widget header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../scripts/buildfire.min.js"></script>

  <script src="../../../scripts/buildfire/services/gamify/scoreboard.min.js""></script>
  <script src="../../../scripts/buildfire/services/notifications/pushNotifications.js"></script>
</head>
```

### Control

Include `scoreboard.js` and `pushNotifications.js` file in control header right after the `buildfire.min.js`

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/buildfire/services/gamify/scoreboard.min.js""></script>
  <script src="../../../../scripts/buildfire/services/notifications/pushNotifications.js"></script>
</head>
```

## Methods

### `constructor()` <div class="label control"></div><div class="label widget"></div>

`buildfire.gamify.Scoreboard(tagName, size, autoSubscribeToPushNotification)`

This method will create a new scoreboard. Returns a scoreboard instance.

```javascript
let scoreboard = new buildfire.gamify.Scoreboard("myScoreBoard", 20, true);
```

### arguments

| Name                              | Type    | Required | Description                                                                                                            | Default |
| --------------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ------- |
| `tagName`                         | string  | yes      | Name of your scoreboard. Will be used to create [publicData](/docs/public-data) object to save the scoreboard in       |         |
| `size`                            | number  | yes      | An integer that limits the size of the scoreboard example top 10, top 25, top 100                                      |         |
| `autoSubscribeToPushNotification` | boolean | yes      | Dictates whether or not you want logged in users to automatically subscribe to the push notifications custom groupfor. |         |

---

### `subscribe()` <div class="label control"></div><div class="label widget"></div>

`scoreboard.subscribe(callback)`

This method will subscribe the current logged in user to the push notifications group

```javascript
let scoreboard = new buildfire.gamify.Scoreboard("myScoreBoard", 20, true);

scoreboard.subscribe((err) => {
  if (err) return console.log(err);

  console.log("Subscribed to scoreboard.");
});
```

#### `callback(err)`

Callback function that is called upon the completion of the subscription.

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `unscubsribe()` <div class="label control"></div><div class="label widget"></div>

`scoreboard.unscubsribe(callback)`

This method will unsubscribe the current logged in user to the push notifications group

```javascript
let scoreboard = new buildfire.gamify.Scoreboard("myScoreBoard", 20, true);

scoreboard.unsubscribe((err) => {
  if (err) return console.log(err);

  console.log("Unsubscribed from scoreboard.");
});
```

#### `callback(err)`

Callback function that is called upon the completion of the unsubscription

| Name  | Type   | Description                                       |
| ----- | ------ | ------------------------------------------------- |
| `err` | string | error string, `null` when operation is successful |

---

### `logScore()` <div class="label control"></div><div class="label widget"></div>

`scoreboard.logScore(user, score, callback)`

This method logs the user's score and will check to see if it qualifies to make it to the top of the list. If the user makes it to the top 3 on the scoreboard it will trigger corresponding push notifications. Also if you get knocked off the scoreboard you will get a push notification. It also increases the play count number.

```javascript
let scoreboard = new buildfire.gamify.Scoreboard("myScoreBoard", 20, true);

buildfire.auth.getCurrentUser((err, user) => {
  scoreboard.logScore(user, 50, (err, result) => {
    if (err) return console.error(err);

    console.log("Score logged", result);
  });
});
```

#### `user`

Object representing the user you want to log the current score for.

| Name   | Type   | Required | Description                                                         | Default |
| ------ | ------ | -------- | ------------------------------------------------------------------- | ------- |
| `user` | object | yes      | Object representing the user you want to log the current score for. |         |

#### `score`

Representing the user's score

| Name    | Type   | Required | Description                   | Default |
| ------- | ------ | -------- | ----------------------------- | ------- |
| `score` | number | yes      | Representing the user's score |         |

#### `callback(err, result)`

Callback function called after loging users score

| Name     | Type   | Description                                       |
| -------- | ------ | ------------------------------------------------- |
| `err`    | string | error string, `null` when operation is successful |
| `result` | object | Object with the scoreboard data                   |

#### `result`

| Name        | Type   | Description                                                                                                         |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `bumpedOff` | object | If user makes it to the scoreboard and bumps off someone from the list, that user record is returned as `bumpedOff` |
| `rankedAt`  | number | If user makes it to the scoreboard, returns users ranking                                                           |

---

### `reset()` <div class="label control"></div><div class="label widget"></div>

`scoreboard.reset()`

This method is used to reset the scoreboard

```javascript
let scoreboard = new buildfire.gamify.Scoreboard("myScoreBoard", 20, true);

scoreboard.reset();
```

---

### `getScoreboard()` <div class="label control"></div><div class="label widget"></div>

`scoreboard.getScoreboard(callback)`

This returns an object with the scoreboard data and number plays made

```javascript
let scoreboard = new buildfire.gamify.Scoreboard("myScoreBoard", 20, true);

scoreboard.getScoreboard((err, scoreboard) => {
  if (err) return console.error(err);

  console.log("Scoreboard", scoreboard);
});
```

#### `callback(err, scoreboard)`

Callback function after getting the scoreboard

| Name         | Type   | Description                                       |
| ------------ | ------ | ------------------------------------------------- |
| `err`        | string | error string, `null` when operation is successful |
| `scoreboard` | object | Object representing scoreboard                    |

#### `scoreboard`

| Name          | Type     | Description                                                             |
| ------------- | -------- | ----------------------------------------------------------------------- |
| `gamesPlayed` | number   | Number of scores logged over time                                       |
| `topScores`   | [object] | Array of score record objects. records are sorted in the array by score |

#### `scoreboard.topScores`

| Name        | Type   | Description                              |
| ----------- | ------ | ---------------------------------------- |
| `user`      | object | User object                              |
| `score`     | number | Users score                              |
| `createdOn` | Date   | Timestamp of when the record was created |
