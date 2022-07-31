---
id: wysiwyg-editor
title: WYSIWYG Editor
sidebar_label: WYSIWYG Editor
keywords:
  - buildfire
  - wysiwyg
  - editor
  - tinymce
slug: /wysiwyg-editor
---

The **WYSIWYG** ("What You See Is What You Get") editor allows users to **add rich formatted text and images** in the app widget the same way it appears on the plugin content.

BuildFire provides **direct access** to the [TinyMCE](https://www.tiny.cloud/docs-4x/) WYSIWYG editor library.

:::tip
You can use the BuildFire [datastore](/docs/Datastore) to persist the content and load it in the widget.
:::

## Requirements

### Content

```html
<head>
  <!-- JS -->
  <script src="../../../../scripts/tinymce/tinymce.min.js"></script>
</head>
```

## Usage

### Content

1. Add a textarea.

```html
<body>
  <textarea id="wysiwygContent" name="content"></textarea>
</body>
```

2. Add the following javascript after having the textarea declared or updated with initial content:

```javascript
tinymce.init({
  selector: "#wysiwygContent",
});
```

3. Use `tinymce.activeEditor.getContent()` to get the content to save at the BuildFire datastore or your own remote location when editing is complete.

### Widget

1. Add a container div.

```html
<div id="my_container_div"></div>
```

2. Retrieve the content and assign it to the inner html of the div.

```javascript
document.getElementById("my_container_div").innerHTML =
  data.content.your_model_property;
```

For more advanced usage please refer to [TinyMCE](https://www.tiny.cloud/docs-4x/).

### Using Angular

#### Content

1. Add the following script tags to the head tag.

```html
<head>
  <!-- ... -->
  <script src="../../../../scripts/tinymce/tinymce.min.js"></script>
  <script src="../../../../scripts/tinymce/ui-tinymce.js"></script>
</head>
```

2. Add a textarea to body with attribute `ui-tinymce`

```html
<textarea
  id="text"
  ui-tinymce
  ng-model="data.content.your_model_property"
></textarea>
```

3. Make sure that `ui.tinymce` is included in your module definition.

```javascript
angular.module("textPlugin", ["ui.tinymce"]);
```

4. Save your model to the BuildFire datastore or your own remote location when editing is complete.

#### Widget

1. Add the angular strict contextual escaping service (`$sce`) in your controller

```javascript
var textPluginApp = angular.module("textPlugin", []);
textPluginApp.controller("textPluginCtrl", [
  "$scope",
  "$sce",
  function ($scope, $sce) {},
]);
```

2- Add a container div with the `ng-bind-html` attribute set to your model property

```html
<div ng-bind-html="data.content.your_model_property"></div>
```

3- Retrieve the model and assign your model property with the angular
`trustAsHtml` function

```javascript
$scope.data.content.your_model_property = $sce.trustAsHtml(
  $scope.data.content.your_model_property
);
```

For more advanced usage please refer to the angular directive [ui-tinymce](https://github.com/angular-ui/ui-tinymce) and [TinyMCE](https://www.tiny.cloud/docs-4x/).

---

## Gotcha In widgets

`widget\index.html` make sure you call `buildfire.navigation.makeSafeLinks` after assigning the data to your inner html for forcing the external links in your data to open up using the `InAppBrowser` , **otherwise it will open a link in the app itself and the user can't find a way to go back to the app** For more advanced details please refer to [Navigation
(buildfire.navigation.makeSafeLinks)](/docs/Navigation#makesafelinks).
