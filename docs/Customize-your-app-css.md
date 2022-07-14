---
id: customize-your-app-css
title: Customize your app with CSS
sidebar_label: Customize your app with CSS
description:
keywords:
  - buildfire
  - plugin
  - development
  - guidelines
slug: /customize-your-app-css
---

If you have CSS coding knowledge, our editor for Custom CSS can help you achieve the specific style you are looking for beyond the adjustments you can do on the Branding page, Side Menu, Navbar, and more.

You will see a grey banner on the right side of the app emulator indicating when Custom CSS is enabled and affecting your app. 

The following code includes a list of selectors of some app elements that you can use as a reference to start modifying their style.

<br />

```css
/* These are the selectors of some sections of the app */

/* Title Bar Selectors ------------------------ */
#pluginNav {

}

/* Title Bar - Title Text */
#pluginNav h4 {

}

/* Bottom Navbar or Footer ------------------ */
#footerMenuParent {

}

/* Side Menu Selectors ------------------------ */
#menuNav {

}
/* Side Menu Gradient */
#menuNav .gradient-screen {

}

/* Side Menu Background */
#menuNav .background-screen {

}

/* Side Menu List Items */
#menuNav .app-content a {

}

/* Profile Screen Selectors ------------------- */
.profile-overlay {

}

.profile-overlay .profile-header {

}

.profile-overlay .profile-content {

}
```

<br />

If you are experiencing issues with your app design or some other unwanted problems, try disabling your Custom CSS and test if the issue persists. Issues caused by adding custom CSS code falls out of our support team's scope.