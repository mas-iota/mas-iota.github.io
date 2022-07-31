---
id: using-single-sign-on-sso
title: Using Single Sign On (SSO)
sidebar_label: Using Single Sign On (SSO)
keywords:
  - buildfire
  - input
  - inputAPI
  - API
slug: /using-single-sign-on-sso
---

The purpose of this feature is to allow app _users_ to login using Business Partner's (BP) authentication service.

At a high level, this functionality will allow the user to enter a Username and Password then POST it to their servers and get back a User Access Token. Once you have the access token you then send it to a BuildFire's validation api that the third party api returns a user profile. BuildFire will take that user profile and update records and use a BuildFire access token to use BuildFire resources.

## Authorization procedure

     +--------+                               +---------------+
     |        |--(A)- Authorization Request ->|      BP       |
     |        |                               |   Resource    |
     |        |<-(B)-- Authorization Grant ---|     Owner     |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(C)-- Authorization Grant -->|      BP       |
     | Client |                               | Authorization |
     |        |<-(D)----- Access Token -------|     Server    |
     |        |                               +---------------+
     |        |
     |        |                               +---------------+
     |        |--(E)----- Access Token ------>|       BP      |
     |        |                               |    Resource   |
     |        |<-(F)--- Protected Resource ---|     Server    |
     +--------+                               +---------------+

Following oAuth2 standards, BuildFires app uses the password grant type. In this grant type, we send a user's username and password to our business partner (BP). This is a HTTP POST with the body object as follows:

```json
{
  "grant_type": "password",
  "username": "<USERNAME>",
  "password": "<PASSWORD>",
  "client_id": "<CLIENT_ID>",
  "client_secret": "<CLIENT_SECRET>"
}
```

This is posted to the BP's authentication server. If the username/password is successful, The authentication server responds with a userToken object with the following format:

```json
{
  "issued_at": "<EPOCH TIMESTAMP>",
  "status": "approved",
  "expires_in": "1799",
  "token_type": "BearerToken", //only support Bearer Token
  "access_token": "I6daIgMSiUgYX1K2qgQWPi37ztS6",
  "client_id": "<client ID>" //keep client id in sync
}
```

If the username/password is unsuccessful, the BP's authentication server will send a HTTP 400 (bad request) (per RFC 6749 section 5.2). Here are the response parameters

| Name                | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error`             | yes      | `invalid_request`: The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. `invalid_client` : Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). `unauthorized_client`: The authenticated client is not authorized to use the password authorization grant type. |
| `error_description` | no       | Human-readable ASCII [USASCII] text providing additional information, used to assist the client developer in understanding the error that occurred. Values for the "error_description" parameter MUST NOT include characters outside the set `%x20-21` / `%x23-5B` / `%x5D-7E`.                                                                                                                                                                                                                                                                  |
| `error_uri`         | no       | A URI identifying a human-readable web page with information about the error, used to provide the client developer with additional information about the error. Values for the "error_uri" parameter MUST conform to the URI-reference syntax and thus MUST NOT include characters outside the set `%x21` / `%x23-5B` / `%x5D-7E`.                                                                                                                                                                                                               |

## After authorization

When the BuildFire app receives the authorization token. We will then HTTP GET with access token in header (authorization field) to the protected user profile resource and our BP will return the following user fields:

```json
{
  "first_name": String, //firstname is acceptable too
  "last_name": String, //lastname is acceptable too
  "email": String,
  "user_name": String,
  "display_name": String,
  "profile_pic": String(URL)
}
```

Here is an example of the HTTP header:

```
     GET /resource HTTP/1.1
     Host: server.example.com
     Authorization: Bearer mF_9.B5f-4.1JqM
```

We will store BP's authorization token with the user (in a SSO object) and issue our own access token to access BuildFire resources. This will allow for backward compatibility. The user will now be able to use the BuildFire app as a login user. In a plugin, you can call buildfire.auth.getCurrentUser() and it will return the SSO object. This will allow the app and any plugins to make API calls to BP's resources. The BP will send back an expires_in field and an issued_at field. Add these together and store these in the kAuth's users table. This field, expired_at, will signify when the token has expired.

Create a new service in kAuth that runs every 5 seconds. This service will query users whose expired_at field is in the past. For expired tokens, set the access token to null.

## Forgot/Reset Password

If the user forget's their password, then they can send a request through the BuildFire app. BuildFire will do a HTTP GET with the username in the querystring of the URL. From there, our BP can send an email to the user detailing how to change the password. An example of this would be :

    https://www.example.com?email=person@example.com

## WordPress Integrations

SSO is often used in conjunction with Word Press. The plugin WP OAuth Server is often used. The relevant documentation for this plugin is found here:

https://wp-oauth.com/documentation/grant-types/user-credentials/

For Wordpress, we recommend using the following route to verify the token:

https://<mydomain\>.com/wp-json/wp/v2/users/me

After getting a token from the BP auth, then the user can use the BuildFire webview plugin (https://github.com/BuildFire/webviewPlugin). In the route, we expect the URL to be in the following format:

https://<www.mydomain.com\>?access_token={{SSO}}

The plugin will then replace {{SSO}} with the token. The BP site owner should then add a cookie so as the user navigates from page to page, they will not need to re-login.

## Content Type

SSO supports the following content types for SSO:

1. `application/x-www-form-urlencoded` - For this content type, the body keys and values will be URI encoded and separated by an ampersand (&).
2. `mulipart/form-data` - For this content type, the body will be separated into fields and passed to token URL.

## Registration Form

If the app owner has page for registration, BuildFire app will open the registration form in iframe.
To integrate with BF platform, the registration page should execute javascript code after registration complete to make full integrate with BuildFire app by send a post message to BuildFire app.

#### response object:

| Name           | Type   | Description                                                                                                                                                                         |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`       | string | Has two values `"success"` or 'close', if the value `"success"` the BF app will close the page and take the username and `access_token` to login the user automatically to the app. |
| `username`     | string | Username created from the registration form.                                                                                                                                        |
| `access_token` | string | `access_token` returned from the registration form.                                                                                                                                 |

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>
      function afterRegister(username, access_token) {
        var result = {
          status: "success",
          user: { username: username, access_token: access_token },
        };
        window.parent.postMessage(JSON.stringify(result), "*");
      }

      function createUser() {
        //call your register api to create user
        //on callback call afterRegister with passing the username and access_token
        afterRegister(username, access_token);
      }
    </script>
  </head>
  <body>
    <div>
      <label>First Name</label>
      <input type="text" name="firstName" />
    </div>
    <div>
      <label>Last Name</label>
      <input type="text" name="lastName" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" name="username" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" name="password" />
    </div>
    <div>
      <button onclick="createUser();">Register</button>
    </div>
  </body>
</html>
```
