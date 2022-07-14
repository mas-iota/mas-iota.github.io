---
id: authentication
title: Authentication
sidebar_label: Authentication
description: Authentication. Log in, log out, register new users, manage sesssions and more.
keywords:
  - buildfire
  - auth
  - authentication
  - users
  - login
  - logout
slug: /auth
---

# `buildfire.auth`

Some plugins require the user to be authenticated before continuing on to a particular feature. BuildFire provides easy to use out of the box authentication solution. Log in, register, log out, manage sessions and more.

## Methods

### `login()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.login(options, callback)`

This method will check if the current user is logged in or not. If not, buildfire.js will open the login UI for user to log in or register a new account.

```javascript
buildfire.auth.login({}, (err, user) => {
  console.log(err, user);
});
```

#### `options`

| Name          | Type    | Required | Description                                                | Default |
| ------------- | ------- | -------- | ---------------------------------------------------------- | ------- |
| `allowCancel` | boolean | no       | A flag to show or hide the cancel link on the login screen | `true`  |
| `showMenu`    | boolean | no       | A flag to show or hide the menu link on the login screen   | `true`  |

#### `callback(err, user)`

Called when the data is retrieved from the datastore. The callback function is called after login or registration is successful.

| Name   | Type   | Description                                                 |
| ------ | ------ | ----------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful           |
| `user` | object | Currently logged in user containing users public properties |

##### `user`

User object with users public properties

| Name           | Type   | Description                                                                                                   |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `_id`          | string | Unique id                                                                                                     |
| `createdOn`    | string | Date and time when user profile was created in ISOString format                                               |
| `lastUpdated`  | string | Date and time when user profile was last updated in ISOString format                                          |
| `email`        | string | User's email address                                                                                          |
| `firstName`    | string | User's first name                                                                                             |
| `lastName`     | string | User's last name                                                                                              |
| `displayName`  | string | User's display name                                                                                           |
| `username`     | string | User's username                                                                                               |
| `imageUrl`     | string | User's profile image url                                                                                      |
| `userProfile`  | object | Object containing custom user profile public fields                                                           |
| `tags`         | object | User's tag object, [see more here](#assignusertags)                                                           |
| `oauthProfile` | object | Custom object from an OAuth provider if used in login [see more here](/docs/using-oauth2-sign-in-integration) |

#### More Examples

```javascript
buildfire.auth.login(
  {
    allowCancel: false,
    showMenu: false,
  },
  (err, user) => {
    console.log(err, user);
  }
);
```

---

### `onLogin()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.onLogin(callback, allowMultipleHandlers)`

Allows you to pass a listener function that is called whenever the user logs in. Returns an object with `clear` function that can be used to clear the listener.

```javascript
buildfire.auth.onLogin((user) => {
  console.log(user, "logged in!");
}, true);
```

#### `callback(user)`

Function that gets called whenever the user logs in.

| Name   | Type   | Description                                                 |
| ------ | ------ | ----------------------------------------------------------- |
| `user` | object | Currently logged in user containing users public properties |

#### `allowMultipleHandlers`

| Name                    | Type    | Required | Description                                                                                            | Default |
| ----------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ | ------- |
| `allowMultipleHandlers` | boolean | no       | Tells the method to override all other handlers, or allow multiple handlers to exist at the same time. | `false` |

### More Examples

```javascript
let onLogin = buildfire.auth.onLogin((user) => {
  console.log(user, "logged in!");
}, true);

// Clears the listener
onLogin.clear();
```

---

### `logout()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.logout()`

Log user out from buildfire.

```javascript
buildfire.auth.logout();
```

:::note
This method does not accept any arguments
:::

---

### `onLogout()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.onLogout(callback, allowMultipleHandlers)`

Allows you to pass a listener function that is called whenever the user logs out. Returns an object with `clear` function that can be used to clear the listener.

```javascript
buildfire.auth.onLogout(() => {
  console.log("User logged out!");
}, false);
```

#### `callback()`

Function that gets called whenever the user logs out.

#### `allowMultipleHandlers`

| Name                    | Type    | Required | Description                                                                                            | Default |
| ----------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ | ------- |
| `allowMultipleHandlers` | boolean | no       | Tells the method to override all other handlers, or allow multiple handlers to exist at the same time. | `false` |

```javascript
let onLogout = buildfire.auth.onLogout(() => {
  console.log("User logged out!");
}, false);

// Clears the listener
onLogout.clear();
```

---

### `getCurrentUser()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.getCurrentUser(callback)`

Retrieves currently logged in user

```javascript
buildfire.auth.getCurrentUser((err, user) => {
  if (err) return console.error(err);

  console.log(user);
});
```

#### `callback(err, user)`

Called with the current logged in user if exists.

| Name   | Type   | Description                                                 |
| ------ | ------ | ----------------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful           |
| `user` | object | Currently logged in user containing users public properties |

---

### `getUserProfile()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.getUserProfile(options, callback)`

Pulls a public profile for a user if you have the `userId`.

```javascript
buildfire.auth.getUserProfile({ userId: "USER_ID_HERE" }, (err, user) => {
  if (err) return console.error(err);

  console.log(user);
});
```

#### `options`

| Name     | Type   | Required | Description                             | Default |
| -------- | ------ | -------- | --------------------------------------- | ------- |
| `userId` | string | yes      | The user id for which to pull a profile |         |

#### `callback(err, user)`

| Name   | Type   | Description                                       |
| ------ | ------ | ------------------------------------------------- |
| `err`  | string | error string, `null` when operation is successful |
| `user` | object | The requested user's public properties            |

#### `user`

| Name              | Type   | Description                                                          |
| ----------------- | ------ | -------------------------------------------------------------------- |
| `userId`          | string | User's unique id                                                     |
| `displayName`     | string | User's display name                                                  |
| `firstName`       | string | User's first name                                                    |
| `lastName`        | string | User's last name                                                     |
| `username`        | string | User's username                                                      |
| `email`           | string | User's email                                                         |
| `imageUrl`        | string | User's profile image url                                             |
| `backgroundImage` | string | User's profile background-image url                                  |
| `userProfile`     | object | Object containing custom user's profile public fields                |
| `createdOn`       | string | Date and time when user profile was created in ISOString format      |
| `lastUpdated`     | string | Date and time when user profile was last updated in ISOString format |

#### `userProfile`
This object contains only public fields.

| Name               | Type     | Description                                                                                                                                         |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`          | object   | The address of the user, which would contain `fullAddress`, `geoLocation` and `customFields` which has `aptNo` and `zipCode` properties             |
| `bio`              | string   | The biography of the user                                                                                                                           |
| `birthDate`        | string   | The birthDate for the user                                                                                                                          |
| `tel`              | string   | The telephone of the user                                                                                                                           |
| `customTypeFields` | [object] | An array of the user's custom fields' data, where it would contain multiple types of fields (`multipleSelect`, `singleSelect`, `text` and `number`) |

#### `customTypeFields`

| Name           | Type          | Description                                                                                               |
| -------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| `id`           | string        | Exists in all custom fields                                                                               |
| `type`         | string        | Exists in all custom fields                                                                               |
| `value`        | string/number | Exists in (`singleSelect`, `text` and `number`) fields                                                    |
| `values`       | [object]      | Exists only in `multipleSelect` field, where it consists of objects as pairs of (`value`, `displayValue`) |
| `displayValue` | string        | Exists only in `singleSelect`                                                                             |

:::note
`customTypeFields` array can contain multiple fields of the same type; for example, multiple `text` fields.
:::

:::note
`displayValue` represents the display value for applicable fields at the user's creation, or last profile edit; if the display value of a field is changed later in the control panel, it won't be updated until users edit their profiles again.
:::

---

### `getUserProfiles()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.getUserProfiles(options, callback)`

Same as [getUserProfile](/docs/auth#getuserprofile), but it accepts a list of users.

```javascript
buildfire.auth.getUserProfiles({ userIds: ["USER_ID_HERE"] }, (err, users) => {
  if (err) return console.error(err);

  console.log(users);
});
```

#### `options`

| Name      | Type   | Required | Description                                          | Default |
| --------- | ------ | -------- | ---------------------------------------------------- | ------- |
| `userIds` | Array  | yes      | Array of user ids for which to retrieve the profiles |         |

#### `callback(err, users)`

| Name    | Type   | Description                                       |
| ------- | ------ | ------------------------------------------------- |
| `err`   | string | error string, `null` when operation is successful |
| `users` | object | Array of [user](/docs/auth#user-1) objects        |

:::caution
The maximum count of users can be retrieved is 50.
:::

---

### `getUserPictureUrl()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.getUserPictureUrl(options)`

Returns user picture url by `userId` or `email`.

```javascript
let userPictureUrl = buildfire.auth.getUserPictureUrl({
  userId: "USER_ID_HERE",
});
```

#### `options`

| Name     | Type   | Required                         | Description     | Default |
| -------- | ------ | -------------------------------- | --------------- | ------- |
| `userId` | string | required if there is no `email`  | Users unique id |         |
| `email`  | string | required if there is no `userId` | Users email     |         |

#### More Examples

```javascript
let userPictureUrl = buildfire.auth.getUserPictureUrl({
  email: "email@example.com",
});
```

---

### `openProfile()` <div class="label widget"></div>

`buildfire.auth.openProfile(userId)`

Redirects the app to view user profile page.

```javascript
let userPictureUrl = buildfire.auth.openProfile("USER_ID_HERE");
```

#### `userId`

| Name     | Type   | Required | Description     | Default |
| -------- | ------ | -------- | --------------- | ------- |
| `userId` | string | yes      | Users unique id |         |

#### More examplses

Opens profile of currently logged in user

```javascript
buildfire.auth.getCurrentUser((err, user) => {
  if (err) return console.err(err);
  if (!user) return console.log("No logged in user");
  buildfire.auth.openProfile(user._id);
});
```

---

### `assignUserTags()` <div class="label widget"></div>

`buildfire.auth.assignUserTags([tags], options, callback)`

Assigns a user tag to the currently logged-in user.

```javascript
buildfire.auth.assignUserTags(["$$vip"], null, (err, result) => {
  if (err) {
    console.log("Error while adding tags", err);
  } else {
    console.error("successfully added user tags");
  }
});
```

#### `[tags]`

An array of tag strings to be assigned to currently logged in user. Tags must match the following cirteria:

- Begin with `$$`
- At least 5 character in length including `$$`
- May not contain commas (`,`)
- Should not contain spaces, spaces will be converted to dashes (`-`)

#### `options`

Reserved for future usage. can be passed as `null`.

#### `callback(err, result)`

Called with the current logged in user if exists.

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successful |
| `result` | boolean | `true` when tags are added successfully           |

---

### `keepSessionAlive()` <div class="label widget"></div>

`buildfire.auth.keepSessionAlive(options, callback)`

Resets counting idle time for user sessions. To be used when Session Expiration is enabled on Control Panel and the plugin needs to keep the session alive even if there are no clicks applied to the plugin widget. A good example would be if the user is listening to an audio or watching a video.

```javascript
buildfire.auth.keepSessionAlive(null, (err, result) => {
  console.log(err, result);
});
```

#### `options`

Reserved for future usage. can be passed as `null`.

#### `callback(err, user)`

Called with the current logged in user if exists.

| Name     | Type    | Description                                        |
| -------- | ------- | -------------------------------------------------- |
| `err`    | string  | error string, `null` when operation is successfull |
| `result` | boolean | `true` when tags are added successfully            |

---
### `searchUsers()` <div class="label control"></div><div class="label widget"></div>

`buildfire.auth.searchUsers(params, callback)`

Searches for app users and returns the result.

```javascript
buildfire.auth.searchUsers(
  {
    searchText: 'john',
    sort: { createdOn: 1},
    limit: 10,
  },
  (err, result) => {
    console.log("Records found: ", result);
  }
);
```

#### `params`

JSON object that contains the searchText, sort column, and pagination parameters.

| Name          | Type     | Required | Description                                                                                                                                         | Default                    |
| ------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `searchText`  | string   | no       | The target search value (supports searches by `displayName`, `email`, `firstName`, `lastName`) with consideration for the privacy of each field     | N/A                        |
| `sort`        | object   | no       | Object with properties you'd like to sort by, 1 for ascending and -1 for descending (only supports `displayName` and `createdOn`)                   | `displayName`, `createdOn` |
| `limit`       | number   | no       | Number of records for this call, the max value is **20**.                                                                                           | `20`                       |
| `skip`        | number   | no       | Number of records to skip. Should be used with a limit.                                                                                             | `0`                        |


#### `callback(err, result)`

Callback function when search is complete

| Name     | Type               | Description                                                                                                                               |
| -------- | ------------------ | --------------------------------------------------- |
| `err`    | string             | error string, `null` when operation is successful   |
| `result` | [object]           | Array of fetched users                              |

---
