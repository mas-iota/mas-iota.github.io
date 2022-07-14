---
id: users-search-dialog
title: Users Search Dialog
sidebar_label: Users Search Dialog
description: How to use Users Search Dialog in BuildFire to search for registered users on control side.
keywords:
  - buildfire
  - users
  - search
  - management
slug: /users-search-dialog
---

# `buildfire.auth`

Users search dialog is accessible via the plugin SDK from the control side of the plugin. It allows plugin developers to show user search dialog and allow the app owner to select users and get their data in callback.

## Methods

### `showUsersSearchDialog()` <div class="label control"></div>

`buildfire.auth.showUsersSearchDialog(options,callback)`

This builtin dialog helps you to show a dialog in order to be used to select users.

```javascript
buildfire.auth.showUsersSearchDialog(null, (err, result) => {
  if (err) return console.log(err);

  if (result) {
    console.log("Selected users", result.users);
    console.log("Selected user ids", result.userIds);
  }
});
```

#### `options`

Reserved for future usage. can be passed as `null`.

#### `callback(err, result)`

Callback function after something is done

| Name     | Type   | Description                                                                                                  |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| `err`    | string | error string, `null` when operation is successful                                                            |
| `result` | object | an object that has `users` and `userIds` returned. `null` whene no user is selected or if dialog is canceled |

##### `result`

| Name      | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| `users`   | [object] | an array of objects containing the selected users  |
| `userIds` | [string] | an array containing the IDs for the selected users |

##### `result.users[]`

| Name          | Type   | Description                                 |
| ------------- | ------ | ------------------------------------------- |
| `firstName`   | string | The user first name                         |
| `lastName`    | string | The user last name                          |
| `displayName` | string | The user display name                       |
| `username`    | string | The username                                |
| `isActive`    | bool   | Indicates whether the user is active or not |
| `userProfile` | object | The user profile object                     |
| `imageUrl`    | string | The url for the user profile image          |

###### Example

```json
{
  "users": [
    {
      "firstName": "Bob",
      "lastName": "Steve",
      "displayName": "Bob Steve",
      "username": "example@buildfire.com",
      "isActive": true,
      "userProfile": {},
      "imageUrl": "imageUrl"
    },
    {
      "firstName": "Sara",
      "lastName": "Conor",
      "displayName": "Sarah Conor",
      "username": "example1@buildfire.com",
      "isActive": true,
      "userProfile": {},
      "imageUrl": "imageUrl"
    }
  ],
  "userIds": ["5dc0832959fda11018ffb5e8", "5dc0836c59fda11018ffb5ea"]
}
```
