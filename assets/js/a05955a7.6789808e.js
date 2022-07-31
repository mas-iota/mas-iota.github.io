"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"contacts",title:"Contacts",sidebar_label:"Contacts",description:"How to get devices' contacts in BuildFire's apps",keywords:["buildfire","contacts","feature","device","android","ios"],slug:"/contacts"},i="buildfire.device.contacts",o={unversionedId:"contacts",id:"contacts",title:"Contacts",description:"How to get devices' contacts in BuildFire's apps",source:"@site/docs/Contacts.md",sourceDirName:".",slug:"/contacts",permalink:"/docs/contacts",draft:!1,tags:[],version:"current",frontMatter:{id:"contacts",title:"Contacts",sidebar_label:"Contacts",description:"How to get devices' contacts in BuildFire's apps",keywords:["buildfire","contacts","feature","device","android","ios"],slug:"/contacts"},sidebar:"services",previous:{title:"In App Purchases",permalink:"/docs/in-app-purchases-commerce"},next:{title:"Set up IAP for iOS",permalink:"/docs/set-up-iap-for-ios"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"<code>plugin.json</code>",id:"pluginjson",level:3},{value:"Methods",id:"methods",level:2},{value:'<code>showDialog()</code> <div class="label widget"></div>',id:"showdialog-",level:3},{value:"<code>callback(err, data)</code>",id:"callbackerr-data",level:4},{value:"<code>data</code>",id:"data",level:5},{value:"Example of the received data",id:"example-of-the-received-data",level:3},{value:'<code>search()</code><div class="label widget"></div>',id:"search",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, data)</code>",id:"callbackerr-data-1",level:4},{value:"<code>data</code>",id:"data-1",level:5},{value:"Example of the received data",id:"example-of-the-received-data-1",level:3},{value:"More Examples",id:"more-examples",level:4}],c={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buildfiredevicecontacts"},(0,r.kt)("inlineCode",{parentName:"h1"},"buildfire.device.contacts")),(0,r.kt)("p",null,"This feature allows the app to access and to get devices contacts."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature works only on devices; so it will return an error if it was triggered outside devices")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"pluginjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"plugin.json")),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/plugin-json-file"},"plugin.json")," add ",(0,r.kt)("inlineCode",{parentName:"p"},"Contacts")," in your features array ",(0,r.kt)("inlineCode",{parentName:"p"},'"features" : [{"name" : "Contacts"}]')),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"showdialog-"},(0,r.kt)("inlineCode",{parentName:"h3"},"showDialog()")," ",(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.device.contacts.showDialog(options, callback)")),(0,r.kt)("p",null,"This function allows you to select one contact, where it shows the contacts in the device via native UI and you can select one of them. It may also ask the user for permission to access the device's contacts if it hasn't previously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.device.contacts.showDialog({}, (err, contact) => {\n  if(err) return console.error(err);\n  console.log("The Selected Contact", contact);\n});\n')),(0,r.kt)("h4",{id:"callbackerr-data"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err, data)")),(0,r.kt)("p",null,"Callback function after selecting a contact"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The selected contact")))),(0,r.kt)("h5",{id:"data"},(0,r.kt)("inlineCode",{parentName:"h5"},"data")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the contact")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emails")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the contact's emails, example  ",(0,r.kt)("inlineCode",{parentName:"td"},'"emails": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"photos")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the contact's photos, example  ",(0,r.kt)("inlineCode",{parentName:"td"},'"photos": [{"value":<string>,"pref":<bool>,"type":<string>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"phoneNumbers")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the contact's phone numbers, example  ",(0,r.kt)("inlineCode",{parentName:"td"},'"phoneNumbers": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}'))))),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"pref")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in (",(0,r.kt)("inlineCode",{parentName:"p"},"emails"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"photos")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phoneNumbers"),") are widely supported but make sure to check nullability (or being undefined) for both of them")),(0,r.kt)("h3",{id:"example-of-the-received-data"},"Example of the received data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "name":"John Appleseed",\n  "emails": [\n    {\n      "value":"John-Appleseed@mac.com","pref":false,"id":0,"type":"work"\n    }\n  ],\n  "photos": [\n    {\n      "value":"/Users/buildfire/Library/Developer/CoreSimulator/Devices/2384C1C9-2898-4633-AB6B-E8A76DDC0B1D/data/Containers/Data/Application/\n       099B01C2-290E-446B-A0A2-D760FB78AF14/tmp/contact_photo_3","type":"url","pref":"false"\n    }\n  ],\n  "phoneNumbers": [\n    {\n      "value":"888-555-5512","pref":false,"id":0,"type":"mobile"\n    },\n    {\n      "value":"888-555-1212","pref":false,"id":1,"type":"home"\n    }\n  ]\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"search"},(0,r.kt)("inlineCode",{parentName:"h3"},"search()"),(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.device.contacts.search(options, callback)")),(0,r.kt)("p",null,"This function allows you to select multiple contacts, where you will get all the contacts (in a drawer) from the device and you can select from them. It may also ask the user for permission to access the device's contacts if it hasn't previously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.device.contacts.search({}, (err, contacts) => {\n  if(err) return console.error(err);\n    console.log("The Selected Contacts", contacts);\n});\n')),(0,r.kt)("h4",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"header")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Text or HTML to be rendered as the drawer's header"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Text or HTML to be rendered in the drawer's body"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drawerButtonText")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Text of the button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Import'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drawerButtonType")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the button (primary, success, info, danger, warning, default)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'success'"))))),(0,r.kt)("h4",{id:"callbackerr-data-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err, data)")),(0,r.kt)("p",null,"Callback function after selecting contacts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the selected contacts")))),(0,r.kt)("h5",{id:"data-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"data")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the contact")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emails")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the contact's emails, example  ",(0,r.kt)("inlineCode",{parentName:"td"},'"emails": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"photos")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the contact's photos, example  ",(0,r.kt)("inlineCode",{parentName:"td"},'"photos": [{"value":<string>,"pref":<bool>,"type":<string>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"phoneNumbers")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of the contact's phone numbers, example  ",(0,r.kt)("inlineCode",{parentName:"td"},'"phoneNumbers": [{"value":<string>,"pref":<bool>,"id":<number>,"type":<string>}'))))),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"pref")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in (",(0,r.kt)("inlineCode",{parentName:"p"},"emails"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"photos")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"phoneNumbers"),") are widely supported but make sure to check nullability (or being undefined) for both of them")),(0,r.kt)("h3",{id:"example-of-the-received-data-1"},"Example of the received data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "name":"John Appleseed",\n  "emails": [\n    {\n      "value":"John-Appleseed@mac.com","pref":false,"id":0,"type":"work"\n    }\n  ],\n  "photos": [\n    {\n      "value":"/Users/buildfire/Library/Developer/CoreSimulator/Devices/2384C1C9-2898-4633-AB6B-E8A76DDC0B1D/data/Containers/Data/Application/\n       099B01C2-290E-446B-A0A2-D760FB78AF14/tmp/contact_photo_3","type":"url","pref":"false"\n    }\n  ],\n  "phoneNumbers": [\n    {\n      "value":"888-555-5512","pref":false,"id":0,"type":"mobile"\n    },\n    {\n      "value":"888-555-1212","pref":false,"id":1,"type":"home"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"more-examples"},"More Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.device.contacts.search(\n  {\n    header: "Contacts", \n    content: "Select Contacts", \n    drawerButtonText: "Import Contacts", \n    drawerButtonType: \'primary\'\n  }, \n  (err, contacts) => {\n  if(err) return console.error(err);\n  console.log("The Selected Contacts", contacts);\n});\n')))}s.isMDXComponent=!0}}]);