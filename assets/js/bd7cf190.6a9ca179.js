"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8353],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=l,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(k,r(r({ref:e},d),{},{components:n})):a.createElement(k,r({ref:e},d))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8276:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const i={id:"push-notifications",title:"Push Notifications",sidebar_label:"Push Notifications",keywords:["buildfire","push","notifications","api"],slug:"/push-notifications"},r="buildfire.notifications.pushNotification",o={unversionedId:"push-notifications",id:"push-notifications",title:"Push Notifications",description:"This is a built-in API that allows your control or widget to schedule push notifications to be sent out to devices. If you wish to schedule a Notification to be sent to the device you are currently on use Local Notifications.",source:"@site/docs/Push-Notifications.md",sourceDirName:".",slug:"/push-notifications",permalink:"/docs/push-notifications",draft:!1,tags:[],version:"current",frontMatter:{id:"push-notifications",title:"Push Notifications",sidebar_label:"Push Notifications",keywords:["buildfire","push","notifications","api"],slug:"/push-notifications"},sidebar:"services",previous:{title:"Local Notifications",permalink:"/docs/local-notifications"},next:{title:"In App Purchases",permalink:"/docs/in-app-purchases-commerce"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Widget",id:"widget",level:3},{value:"Control",id:"control",level:3},{value:"Methods",id:"methods",level:2},{value:'<code>schedule()</code> <div class="label control"></div><div class="label widget"></div>',id:"schedule-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, result)</code>",id:"callbackerr-result",level:4},{value:'<code>cancel()</code> <div class="label control"></div><div class="label widget"></div>',id:"cancel-",level:3},{value:"<code>notificationId</code>",id:"notificationid",level:4},{value:"<code>callback(err, result)</code>",id:"callbackerr-result-1",level:4},{value:'<code>subscribe()</code> <div class="label widget"></div>',id:"subscribe-",level:3},{value:"<code>options</code>",id:"options-1",level:4},{value:"<code>callback(err, subscribed)</code>",id:"callbackerr-subscribed",level:4},{value:'<code>unsubscribe()</code> <div class="label control"></div><div class="label widget"></div>',id:"unsubscribe-",level:3},{value:"<code>options</code>",id:"options-2",level:4},{value:"<code>callback(err, unsubscribed)</code>",id:"callbackerr-unsubscribed",level:4}],d={toc:u};function p(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"buildfirenotificationspushnotification"},(0,l.kt)("inlineCode",{parentName:"h1"},"buildfire.notifications.pushNotification")),(0,l.kt)("p",null,"This is a built-in API that allows your control or widget to schedule push notifications to be sent out to devices. If you wish to schedule a Notification to be sent to the device you are currently on use ",(0,l.kt)("a",{parentName:"p",href:"/docs/local-notifications"},"Local Notifications"),"."),(0,l.kt)("p",null,"Running Example: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/examplePushNotifications/widget/index.html"},"https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/examplePushNotifications/widget/index.html")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("h3",{id:"widget"},"Widget"),(0,l.kt)("p",null,"Include ",(0,l.kt)("inlineCode",{parentName:"p"},"pushNotifications.js")," file in widget header right after the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.min.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/services/notifications/pushNotifications.js"><\/script>\n</head>\n')),(0,l.kt)("h3",{id:"control"},"Control"),(0,l.kt)("p",null,"Include ",(0,l.kt)("inlineCode",{parentName:"p"},"pushNotifications.js")," file in control header right after the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.min.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../../scripts/buildfire/services/notifications/pushNotifications.js"><\/script>\n</head>\n')),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"schedule-"},(0,l.kt)("inlineCode",{parentName:"h3"},"schedule()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.notifications.pushNotification.schedule(options, callback)")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You must ",(0,l.kt)("inlineCode",{parentName:"p"},"subscribe()")," on the device to receive notifications.")),(0,l.kt)("p",null,"Used to schedule push notification"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.notifications.pushNotification.schedule(\n  {\n    title: "Push notification",\n    text: "Hello there!",\n  },\n  (err, result) => {\n    if (err) return console.error(err);\n\n    console.log("Push notification scheduled", result);\n  }\n);\n')),(0,l.kt)("h4",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"A short string describing the purpose of the notification"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Push notification text"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inAppMessage")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"The HTML text of the message displayed if the push notification is received in app"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"at")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Time to send the push notification at"),(0,l.kt)("td",{parentName:"tr",align:null},"now")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"users")),(0,l.kt)("td",{parentName:"tr",align:null},"[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of ",(0,l.kt)("inlineCode",{parentName:"td"},"userIds")," to send the push notification to specific users"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"userTags")),(0,l.kt)("td",{parentName:"tr",align:null},"[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of user tags to send push notification to users with specific tags"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Send the push notification to specific group"),(0,l.kt)("td",{parentName:"tr",align:null},"default instance group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryString")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Will be added to the plugin when the push notification triggers the plugin to open"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sendToSelf")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"If false, the device scheduling the push notification will not receive it"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h4",{id:"callbackerr-result"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, result)")),(0,l.kt)("p",null,"Callback function after the push notification scheduling is completed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"result")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Result contains ",(0,l.kt)("inlineCode",{parentName:"td"},"notificationId"),", which is the id of the newly scheduled push notification.")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"cancel-"},(0,l.kt)("inlineCode",{parentName:"h3"},"cancel()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.notifications.pushNotification.cancel(notificationId, callback)")),(0,l.kt)("p",null,"Used to cancel a scheduled push notification"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.notifications.pushNotification.cancel(\n  "608adde30af35105452a3c96",\n  (err, isCancelled) => {\n    if (err) return console.error(err);\n\n    console.log("Notification cancelled", isCancelled);\n  }\n);\n')),(0,l.kt)("h4",{id:"notificationid"},(0,l.kt)("inlineCode",{parentName:"h4"},"notificationId")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"notificationId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the notification that you wish to cancel. Can be obtained from ",(0,l.kt)("inlineCode",{parentName:"td"},"schedule")," result object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackerr-result-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, result)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isCancelled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether notification was cancelled successfully")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"subscribe-"},(0,l.kt)("inlineCode",{parentName:"h3"},"subscribe()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.notifications.pushNotification.subscribe(options, callback)")),(0,l.kt)("p",null,"Use to subscribe current user to group. You can use this to create custom push notification groups within the app."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.notifications.pushNotification.subscribe(\n  { groupName: "testGroup" },\n  (err, subscribed) => {\n    if (err) return console.error(err);\n\n    console.log("User subscribed to group", subscribed);\n  }\n);\n')),(0,l.kt)("h4",{id:"options-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the group to subscribe user to"),(0,l.kt)("td",{parentName:"tr",align:null},"default instance group")))),(0,l.kt)("h4",{id:"callbackerr-subscribed"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, subscribed)")),(0,l.kt)("p",null,"Callback function when the subscribtion is completed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"subscribed")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicated whether user was successfully subscribed to group")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unsubscribe-"},(0,l.kt)("inlineCode",{parentName:"h3"},"unsubscribe()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.notifications.pushNotification.unsubscribe(options, callback)")),(0,l.kt)("p",null,"Use to unsubscribe current user from group."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.notifications.pushNotification.unsubscribe(\n  { groupName: "testGroup" },\n  (err, unsubscribed) => {\n    if (err) return console.error(err);\n\n    console.log("User unsubscribed from group", unsubscribed);\n  }\n);\n')),(0,l.kt)("h4",{id:"options-2"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the group to subscribe user to"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackerr-unsubscribed"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, unsubscribed)")),(0,l.kt)("p",null,"Callback function when the unsubscription is completed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unsubscribed")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicated whether user was successfully unsubscribed from group")))),(0,l.kt)("hr",null))}p.isMDXComponent=!0}}]);