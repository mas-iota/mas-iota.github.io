---
id: rating-system
title: Rating System
sidebar_label: Rating System
description: BuildFire Five Star Rating Component
keywords:
  - buildfire
  - rating
  - system
  - component
  - fivestar
  - five
  - star
slug: /rating-system
---

# `buildfire.components.ratingSystem`

The rating system component provides easy way to integrate 5 star rating system into any plugin. It includes complete UI for adding ratings & reviews, displaying average ratings and moderating / reviewing ratings.
	
## Requirements
Widget
```
    <!-- Load css -->
	<link  rel="stylesheet"  href="../../../scripts/buildfire/components/ratingSystem/index.min.css">

    <!-- Load JS -->
    <script  src="../../../scripts/buildfire/components/ratingSystem/index.min.js"></script>
```
Control
```
    <!-- Load css -->
	<link  rel="stylesheet"  href="../../../../scripts/buildfire/components/ratingSystem/index.min.css">

    <!-- Load JS -->
    <script  src="../../../../scripts/buildfire/components/ratingSystem/index.min.js"></script>
```
## How to use
### `injectRatings(options)`
This method will find all html elements with attribute `data-rating-id` and inject rating component with that rating id inside of them. Container can be styled in any way that suites the use case.
- `options` - object, optional
	- `hideAverage` - Show / hide numerical part of average rating. (boolean, optional, defaults to true)
	- `pluginLevel` - Keep ratings bound to current plugin. If nothing is provided, ratings will be saved on app level (boolean, optional, defaults to false)
	- `showRatingsOnClick` - Will show ratings screen with users ratings and average score. (boolean, optional, defaults to true)

![Average rating](https://s3-us-west-2.amazonaws.com/imageserver.prod/1601891872410-007819754252557476/adb52420-0c87-11eb-8997-3b3cc1331f52.png)

### Example
#### widget/index.html

    <!DOCTYPE  html>
	<html>
		<head>
			<meta  name="viewport"  content="width=device-width, initial-scale=1.0">
			<!-- Make sure to include buildfire first -->
			<script  src="../../../scripts/buildfire.min.js"></script>
			<script  src="../../../scripts/buildfire/components/ratingSystem/index.min.js"></script>
			<link  rel="stylesheet"  href="../../../scripts/buildfire/components/ratingSystem/index.min.css">
		</head>
		<body>
			<div  data-rating-id="ratingComponentTest"></div>
			<script>
				buildfire.components.ratingSystem.injectRatings();
			</script>
		</body>
	</html>

### `onRating - event`
You can use onRating event to capture whenever rating has been added or edited. Event object consists of rating that was added/edite and updated summary for that rating id.

    buildfire.components.ratingSystem.onRating = (e) => {
        console.log("RATING", e.rating);
        console.log("SUMMARY", e.summary)
    }