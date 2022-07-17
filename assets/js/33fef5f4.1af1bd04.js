(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),l=(n(0),n(176)),r={id:"action-items",title:"Action Items",sidebar_label:"Action Items",description:"How to create and execute an Action Item using Buildfire SDK.",keywords:["buildfire","action","items"],slug:"/action-items"},c={unversionedId:"action-items",id:"action-items",isDocsHomePage:!1,title:"Action Items",description:"How to create and execute an Action Item using Buildfire SDK.",source:"@site/docs/Action-Items.md",slug:"/action-items",permalink:"/docs/action-items",version:"current",sidebar_label:"Action Items",sidebar:"api",previous:{title:"Share Links and Deep Linking",permalink:"/docs/share-links-and-deep-linking"},next:{title:"Messaging",permalink:"/docs/messaging-to-sync-your-control-to-widget"}},o=[{value:"Methods",id:"methods",children:[{value:'<code>showDialog()</code> <div class="label control"></div>',id:"showdialog",children:[]},{value:'<code>execute()</code> <div class="label widget"></div>',id:"execute",children:[]},{value:'<code>list()</code><div class="label widget"></div>',id:"list",children:[]}]}],b={toc:o};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"buildfireactionitems"},Object(l.b)("inlineCode",{parentName:"h1"},"buildfire.actionItems")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Action Items")," is an object that represent an ",Object(l.b)("strong",{parentName:"p"},"action to take"),". This could be a link to open in a browser, could be a telephone number to call or sms, and/or could be an address to navigate to. The details of these objects shouldn't concern you. All you need to do is save it in your datastore and when it's time to execute an item just call ",Object(l.b)("inlineCode",{parentName:"p"},"buildfire.actionItems.execute")),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"showdialog"},Object(l.b)("inlineCode",{parentName:"h3"},"showDialog()")," ",Object(l.b)("div",{class:"label control"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.actionItems.showDialog(actionItem, options, callback)")),Object(l.b)("p",null,"Shows a dialog for the App Owner to create an Action Item."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.showDialog(null, null, (err, actionItem) => {\n  if (err) return console.error(err);\n  console.log("Action item created", actionItem);\n});\n')),Object(l.b)("h4",{id:"actionitem"},Object(l.b)("inlineCode",{parentName:"h4"},"actionItem")),Object(l.b)("p",null,"Allows you to pass a previously saved ",Object(l.b)("inlineCode",{parentName:"p"},"actionItem")," that the user would like to edit"),Object(l.b)("p",null,"Possible action items are:"),Object(l.b)("h5",{id:"linktoweb"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToWeb")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "build fire",\nurl: "https://www.facebook.com/buildfireapps",\naction: "linkToWeb",\nopenIn: "_blank" or "_system",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"linktoapp"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToApp")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'instanceId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2-1449796387765";\naction: "linkToApp",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"sendemail"},Object(l.b)("inlineCode",{parentName:"h5"},"sendEmail")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Send Email",\nsubject : "action Item Test"\nbody : "We are testing action Item send Email"\nemail: "support@buildfire.com",\naction: "sendEmail",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"callnumber"},Object(l.b)("inlineCode",{parentName:"h5"},"callNumber")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'phoneNumber: "+1-541-754-3010",\naction: "callNumber",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"sendsms"},Object(l.b)("inlineCode",{parentName:"h5"},"sendSMS")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Send SMS",\nsubject : "action Item SMS Example"\nphoneNumber: "+1-541-754-3010",\naction: "sendSMS",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"navigatetoaddress"},Object(l.b)("inlineCode",{parentName:"h5"},"navigateToAddress")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Navigate to address title",\nlat: "37.7944988",\nlng: "-122.3947446",\naddress :"1 Market Street, San Francisco, CA, United States"\naction: "navigateToAddress",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"navigatetoaddress-1"},Object(l.b)("inlineCode",{parentName:"h5"},"navigateToAddress")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Navigate to address title",\nlat: "37.7944988",\nlng: "-122.3947446",\naddress :"1 Market Street, San Francisco, CA, United States"\naction: "navigateToAddress",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"linktosocialgoogle"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToSocialGoogle")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to google",\nurl: "https://plus.google.com/+Buildfireapps"\naction: "linkToSocialGoogle",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"linktosocialinstagram"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToSocialInstagram")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to instagram",\nurl:"https://instagram.com/google/?hl=en",\naction: "linkToSocialInstagram",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"linktosociallinkedin"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToSocialLinkedIn")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to LinkedIn",\nurl:"https://www.linkedin.com/company/buildfire",\naction: "linkToSocialLinkedIn",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"linktosocialfacebook"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToSocialFaceBook")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to Facebook",\nurl:"https://www.facebook.com/buildfireapps",\naction: "linkToSocialFacebook",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"linktosocialtwitter"},Object(l.b)("inlineCode",{parentName:"h5"},"linkToSocialTwitter")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to Twitter",\nurl:"https://twitter.com/buildfire",\naction: "linkToSocialTwitter",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h5",{id:"noaction"},Object(l.b)("inlineCode",{parentName:"h5"},"noAction")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'title: "No Action",\naction: "noAction",\niconUrl: "", // Link to icon image used to represent this action item\n')),Object(l.b)("h4",{id:"options"},Object(l.b)("inlineCode",{parentName:"h4"},"options")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"showIcon")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},'Specifies if you want to show the "icon"'),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"allowNoAction")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Allows the ",Object(l.b)("a",{parentName:"td",href:"/docs/action-items#noaction"},Object(l.b)("inlineCode",{parentName:"a"},"noAction"))," action"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"actionTextLabel")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Custom label to show next to the action item display text field"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"Action Button Text"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"hideActionText")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Does not ask the user to provide a display text value to the action item"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("h4",{id:"callbackerr-actionitem"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err, actionItem)")),Object(l.b)("p",null,"Callback function after action item dialog is completed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"actionItem")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/action-items#actionitem"},Object(l.b)("inlineCode",{parentName:"a"},"actionItem"))," that was created")))),Object(l.b)("p",null,Object(l.b)("img",{alt:"Deep Link",src:n(240).default})),Object(l.b)("h4",{id:"more-examples"},"More Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.showDialog(\n  { title: "Change the title", action: "noAction" },\n  { showIcon: true, allowNoAction: true },\n  (err, actionItem) => {\n    if (err) return console.error(err);\n    console.log("Action item created", actionItem);\n  }\n);\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"execute"},Object(l.b)("inlineCode",{parentName:"h3"},"execute()")," ",Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.actionItems.execute(actionItem, callback)")),Object(l.b)("p",null,"It will take a previously saved ",Object(l.b)("inlineCode",{parentName:"p"},"actionItem")," and execute it. If its a link it will open in a browser, if its a telephone number it will call that phone number, etc.."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.execute(\n  {\n    title: "build fire",\n    url: "https://www.facebook.com/buildfireapps",\n    action: "linkToWeb",\n    openIn: "_blank",\n  },\n  (err) => {\n    if (err) return console.error(err);\n  }\n);\n')),Object(l.b)("h4",{id:"actionitem-1"},Object(l.b)("inlineCode",{parentName:"h4"},"actionItem")),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"/docs/action-items#actionitem"},Object(l.b)("inlineCode",{parentName:"a"},"actionItem"))),Object(l.b)("h4",{id:"callbackerr"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err)")),Object(l.b)("p",null,"Callback function after action item is executed"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"list"},Object(l.b)("inlineCode",{parentName:"h3"},"list()"),Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.actionItems.list(actionItems, options, callback)")),Object(l.b)("p",null,"Takes an array of previously saved ",Object(l.b)("inlineCode",{parentName:"p"},"actionItem"),"s and lists them in a standard popup."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.list(\n  [\n    {\n      title: "Open Facebook",\n      url: "https://www.facebook.com/buildfireapps",\n      action: "linkToSocialFacebook",\n    },\n    {\n      title: "Open Linkedin",\n      url: "https://www.linkedin.com/company/buildfire",\n      action: "linkToSocialLinkedIn",\n    },\n  ],\n  {\n    executeItem: true,\n  },\n  (err, actionItem) => {\n    if (err) return console.error(err);\n\n    console.log("Executed", actionItem);\n  }\n);\n')),Object(l.b)("h4",{id:"actionitems"},Object(l.b)("inlineCode",{parentName:"h4"},"actionItems")),Object(l.b)("p",null,"Array of ",Object(l.b)("a",{parentName:"p",href:"/docs/action-items#actionitem"},Object(l.b)("inlineCode",{parentName:"a"},"actionItems"))),Object(l.b)("h4",{id:"options-1"},Object(l.b)("inlineCode",{parentName:"h4"},"options")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"executeItem")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Automatically execute after user selects an item"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"))))),Object(l.b)("h4",{id:"callbackerr-actionitem-1"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err, actionItem)")),Object(l.b)("p",null,"Callback function after action item is executed"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"actionItem")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Selected ",Object(l.b)("a",{parentName:"td",href:"/docs/action-items#actionitem"},Object(l.b)("inlineCode",{parentName:"a"},"actionItem"))," from the list")))))}p.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(r,".").concat(m)]||d[m]||s[m]||l;return n?i.a.createElement(u,c(c({ref:t},b),{},{components:n})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<l;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},240:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/actionItemDialog-withDeeplink-a1baf363ff91d6a9279c9a4d2a9f1246.png"}}]);