---
id: plugin-development-guidelines
title: Plugin Development Guidelines
sidebar_label: Plugin Development Guidelines
description:
keywords:
  - buildfire
  - plugin
  - development
  - guidelines
slug: /plugin-development-guidelines
---

While we try to keep the BuildFire.js framework as agnostic and web friendly as possible it is important to understand your codes environment to be fine tune your plugins for performance.

Mobile app users are extremely demanding and do not tolerate lag very well. So what you can get away with on web you may not be able to on mobile. The following are a list of tips recommended by the BuildFire dev team.

## Perception is King
There will be times when the app will need to call a function that will take long and there is no way around it. When you encounter this is important to change the perception of the user to better tolerate the wait. A simple example of this is lazy loading. Technically if i were to load 100 images all at once, the total wait time for the list to load is much less than loading 10 at a time then waiting for a scroll event to load the next 10. However, for the user it felt almost instant.

## Cache me when you can
BuildFire [Datastore](/docs/datastore) helps cache your data when loaded on the device. However, you shouldn't rely on this in your design. When possible cache results and images for subsequent loads then in the back end check if there has been an update and gracefully update the content. If possible don't re-render the entire DOM just update what needs to be updated.

## Pick your JS framework wisely
With javascript being used on top of many popular frameworks like Angular and React. It is important to pick the right tool for the problem. Frameworks usually help speed up development but sometimes at the cost of performance. Especially when not used properly. This performance hit is magnified on mobile. Sometimes it make sense to develop the `Control` using a framework like Angular to help navigate through views. This is fine since the `Control` only lives on the Control Panel (web). However, The `Widget` lives on the device and is under much more scrutiny than the `Control`. Thus paying the toll of the Angular life cycle may in some instances be a detriment. While this shouldn't be taken as a blanket statement... Well written plain JS will always out perform frameworks. 

## Bundle API calls
As much as possible reduce the API traffic needed to load your plugin (at least on the widget side). Every environment has a limited amount of ports open to serve traffic. This means if you can combine to objects into one, you should. if you can bundle your js files into an `all.min.js` you should if you can place a small CSS file in the html block, you should. There are many tools out there that help bundle files together while keeping your original source code modular

## Don't Thrash the DOM (aka Layout Thrashing)
This is where many frameworks may help. However, assuming you are rendering objects on the DOM yourself (creating a `Table`, a repeating `DIV`, reading/writing values from elements ...etc). You want to make sure you have the document render as few times as possible. This will reduce CPU time, flickering and the over performance of your page. 
* Here are some good references:
http://wilsonpage.co.uk/preventing-layout-thrashing/
https://blog.idrsolutions.com/2014/08/beware-javascript-layout-thrashing/

## Keep elements to a minimum
Every element needs to be computed in one form or another. There is a performance tax paid with each element that accrues quickly. A good rule of thumb is, if you can compose the same layout with fewer elements, then you should. 
* Here are some good references:
https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing

## Use 3D transform CSS for animations vs translate or javascript

* Here are some good references:
https://blog.tumult.com/2013/02/28/transform-translate-vs-top-left/
http://www.w3schools.com/css/css3_3dtransforms.asp

## Avoid timeouts and intervals
While there will always be a use for delayed code you want to avoid using this technique when possible when influencing the UI. Especially, for animations. This also may inadvertently cause race conditions that are difficult to debug. 

* Here are some good references:
https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution

## Nothing substitutes testing on a real device
* Here are some good references:
https://developers.google.com/web/fundamentals/performance/poor-connectivity/

## Make sure your plugin respects [device safe spaces](/docs/device-safe-areas)
 

# Ref
https://developers.google.com/web/fundamentals/performance/rendering/

https://www.udacity.com/course/browser-rendering-optimization--ud860

