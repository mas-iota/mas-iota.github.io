---
id: widget
title: Background Services
sidebar_label: Background Services
keywords:
  - buildfire
  - widget
  - background
  - services
slug: /background-services
---

Services are pieces of code that run in the background of the app without having to load the widget of the plugin. A Services is a sub component of a Widget. I.e. that it lives in the widget side of the plugin (only in the app).

While the service structure is very similar to a Widget. One main distinction other than it runs on startup is that it has _no UI_. Any HTML written is only to create the environment needed for the service no UI will be presented in the app

## Use cases

- Geo Fencing. If you wanted to keep track of the location of the device in order to present the user with a coupon when they are close to your business. A service will allow you to do this even if the app doesnt have your plugin open. The service can trigger a navigation to the widget to force it visible

- Ads: If you wanted every 60 seconds to show an ad your service can run in the background and popup an ad every 60 seconds

- Passive bluetooth integration. Stay in the background until a bluetooth connection occurs then navigate to widget

- Really any process you want to stay alive as long as the app is.

## How to setup a Service

An example is setup [here](https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/examplePluginWithService/widget/service.html) but its pretty simple.

1. Add `service.html` to your widget folder. You can call it anything else as long as you reference the correct file in the next step
2. Add `service` property to the `widget` object in the `plugin.json`

```json
"widget": {
  "service": "service.html"
}
```

### service.html

While this file can mimic your traditional widget `index.html` it is best to cut out any UI elements that auto load. To do so add this meta tag to the header before referencing `buildfire.js`

```html
<meta name="buildfire" content="disableTheme,disableFastClick" />
```

So your file may look something like this

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="buildfire" content="disableTheme,disableFastClick" />
    <script src="../../../scripts/buildfire.js"></script>
  </head>
</html>
```

:::note
Remember the HTML is just to setup structure and importing frameworks. No UI will be rendered on the app
:::

## Widget and Service Communication

For more info read [messaging docs](/docs/messaging-to-sync-your-control-to-widget/#sendmessagetoservice)

- To send a message form Widget to Service, in widget html use:

```javascript
buildfire.messaging.sendMessageToService(data);
```

- To receive a message in service, in service html use:

```javascript
buildfire.messaging.onReceivedMessage = (data) => {
  console.log(data);
};
```

- To send a message form Service to Widget, in service.html use:

```javascript
buildfire.messaging.sendMessageToWidget(data);
```

- To receive a message in Widget, in widget html use:

```javascript
buildfire.messaging.onReceivedMessage = (data) => {
  console.log(data);
};
```
