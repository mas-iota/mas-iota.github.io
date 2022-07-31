"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),u=o(n),c=l,m=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(m,r(r({ref:t},k),{},{components:n})):a.createElement(m,r({ref:t},k))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const i={id:"deep-links",title:"Deep Links",sidebar_label:"Deep Links",description:"How to Deep Link into BuildFire plugin using SDK.",keywords:["buildfire","deep","links","linking","navigation"],slug:"/deep-links"},r="buildfire.deeplink",d={unversionedId:"deep-links",id:"deep-links",title:"Deep Links",description:"How to Deep Link into BuildFire plugin using SDK.",source:"@site/docs/Deep-Links.md",sourceDirName:".",slug:"/deep-links",permalink:"/docs/deep-links",draft:!1,tags:[],version:"current",frontMatter:{id:"deep-links",title:"Deep Links",sidebar_label:"Deep Links",description:"How to Deep Link into BuildFire plugin using SDK.",keywords:["buildfire","deep","links","linking","navigation"],slug:"/deep-links"},sidebar:"api",previous:{title:"Customize your app with CSS",permalink:"/docs/customize-your-app-css"},next:{title:"Breadcrumbs",permalink:"/docs/breadcrumbs"}},p={},o=[{value:"What is a deep link?",id:"what-is-a-deep-link",level:2},{value:"Methods",id:"methods",level:2},{value:'<code>registerDeeplink()</code> <div class="label control"></div><div class="label widget"></div>',id:"registerdeeplink-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, deepLink)</code>",id:"callbackerr-deeplink",level:4},{value:"<code>deepLink</code>",id:"deeplink",level:5},{value:'<code>getDeeplink()</code><div class="label widget"></div>',id:"getdeeplink",level:3},{value:"<code>deeplinkId</code>",id:"deeplinkid",level:5},{value:"<code>callback(err, result)</code>",id:"callbackerr-result",level:4},{value:'<code>getAllDeeplinks()</code> <div class="label control"></div><div class="label widget"></div>',id:"getalldeeplinks-",level:3},{value:"<code>options</code>",id:"options-1",level:4},{value:"<code>callback(err, results)</code>",id:"callbackerr-results",level:4},{value:'<code>unregisterDeeplink()</code> <div class="label control"></div><div class="label widget"></div>',id:"unregisterdeeplink-",level:3},{value:"<code>deeplinkId</code>",id:"deeplinkid-1",level:5},{value:"<code>callback(err, result)</code>",id:"callbackerr-result-1",level:4},{value:'<code>setData()</code> <div class="label control"></div>',id:"setdata-",level:3},{value:"<code>data</code>",id:"data",level:5},{value:"<code>options</code>",id:"options-2",level:5},{value:"<code>callback(err, link)</code>",id:"callbackerr-link",level:4},{value:'<code>getData()</code> <div class="label widget"></div>',id:"getdata-",level:3},{value:"<code>callback(deeplinkData)</code>",id:"callbackdeeplinkdata",level:4},{value:'<code>onUpdate()</code> <div class="label widget"></div>',id:"onupdate-",level:3},{value:"<code>callback(deeplinkData)</code>",id:"callbackdeeplinkdata-1",level:4},{value:'<code>createLink()</code> Deprecated <div class="label widget"></div>',id:"createlink-deprecated-",level:3},{value:"<code>callback(err, deeplink)</code>",id:"callbackerr-deeplink-1",level:4},{value:"Sharing a deep link outside of your app",id:"sharing-a-deep-link-outside-of-your-app",level:2}],k={toc:o};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"buildfiredeeplink"},(0,l.kt)("inlineCode",{parentName:"h1"},"buildfire.deeplink")),(0,l.kt)("p",null,"This is an object within the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildfire")," singleton that is responsible for receiving deep link data and compiling deep links for use."),(0,l.kt)("h2",{id:"what-is-a-deep-link"},"What is a deep link?"),(0,l.kt)("p",null,"a deep link is similar to a URL you use on the web. However, it has two major distinctions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the protocol is different the your standard ",(0,l.kt)("inlineCode",{parentName:"li"},"http://")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"https://")),(0,l.kt)("li",{parentName:"ul"},"and it doesn't trigger your browser to open up a page")),(0,l.kt)("p",null,"It relies on applications installed on your device that assumes the responsibility of handing that custom protocol/schema. In this case, it would be your app. With a deep link and the app installed you can not only open the app with the link, you can drill down to a particular plugin. That functionality is taken care of by the BuildFire framework."),(0,l.kt)("p",null,"There are some times where you would want to drill down even further into a plugin. This is where the custom development comes in."),(0,l.kt)("p",null,"A deeplink can also be registered to be used with action items allowing the user to navigate to your plugin passing the data you have already registered."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"registerdeeplink-"},(0,l.kt)("inlineCode",{parentName:"h3"},"registerDeeplink()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.registerDeeplink(options, callback)")),(0,l.kt)("p",null,"Registers a deeplink into the appData. Registered deeplinks can be selected in the Control Panel action item dialogs as highlighted below:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://s3-us-west-2.amazonaws.com/pluginserver.prod/docResources/actionItemDialog-withDeeplink-highlighted.png?",alt:"Deep Link"})),(0,l.kt)("p",null,'In this example the developer has registered a deeplink with the name "John Doe" so that when the action item is executed it would navigate to the plugin passing the data that identifies "John Doe" allowing the plugin to internally navigate to that person.'),(0,l.kt)("p",null,"For more info about action items dialog on control side please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/action-Items"},"action-Items"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.registerDeeplink(\n  {\n    id: "PERSON-431",\n    name: "John Doe",\n    deeplinkData: { personId: "PERSON-431" },\n  },\n  (err, result) => {\n    if (err) return console.log(err);\n    console.log("INSERTED/UPDATED DEEPLINK", result);\n  }\n);\n')),(0,l.kt)("h4",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the deeplink record"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the deeplink in action items dialog"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkData")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom object that will be sent when navigating to the plugin through the action item"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imageUrl")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"An image url to show next to the deeplink in action items dialog"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackerr-deeplink"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, deepLink)")),(0,l.kt)("p",null,"Callback function that will be executed when the insertion is finished"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, or ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deepLink")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Inserted or updated deeplink")))),(0,l.kt)("h5",{id:"deeplink"},(0,l.kt)("inlineCode",{parentName:"h5"},"deepLink")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkData")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom object that will be sent when navigating to the plugin through the action item")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the deeplink record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the deeplink in action items dialog")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pluginInstanceId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin instance id of the plugin where deep link can be used")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pluginTypeId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin type id of the plugin where deep link can be used")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdeeplink"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDeeplink()"),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.getDeeplink(deeplinkId, callback)")),(0,l.kt)("p",null,"Gets a deeplink by the ",(0,l.kt)("inlineCode",{parentName:"p"},"deeplinkId")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.getDeeplink("PERSON-431", (err, result) => {\n  if (err) return console.log(err);\n  if (result) {\n    console.log("Deep link found", result.data);\n  } else {\n    console.log("Deep link not found");\n  }\n});\n')),(0,l.kt)("h5",{id:"deeplinkid"},(0,l.kt)("inlineCode",{parentName:"h5"},"deeplinkId")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the deeplink record")))),(0,l.kt)("h4",{id:"callbackerr-result"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, result)")),(0,l.kt)("p",null,"Callback function after operation is complete"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"result")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Result object containing deep link in ",(0,l.kt)("inlineCode",{parentName:"td"},"data")," property. ",(0,l.kt)("inlineCode",{parentName:"td"},"result.data")," is in ",(0,l.kt)("a",{parentName:"td",href:"/docs/deep-links#deeplink"},"deepLink")," format")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getalldeeplinks-"},(0,l.kt)("inlineCode",{parentName:"h3"},"getAllDeeplinks()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.getAllDeeplinks(options, callback)")),(0,l.kt)("p",null,"Gets all the deeplinks from the appData according to the plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"instanceId")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.getAllDeeplinks(null, (err, results) => {\n  if (err) return console.log(err);\n  if (results) {\n    console.log(\n      "ALL DEEPLINKS",\n      results.map((result) => result.data)\n    );\n  }\n});\n')),(0,l.kt)("h4",{id:"options-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("p",null,"Reserved for future usage. can be passed as ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("h4",{id:"callbackerr-results"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, results)")),(0,l.kt)("p",null,"Callback function after something is done"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"results")),(0,l.kt)("td",{parentName:"tr",align:null},"[object]"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of objects containing deep link in ",(0,l.kt)("inlineCode",{parentName:"td"},"data")," property. ",(0,l.kt)("inlineCode",{parentName:"td"},"result[].data")," is in ",(0,l.kt)("a",{parentName:"td",href:"/docs/deep-links#deeplink"},"deepLink")," format")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"unregisterdeeplink-"},(0,l.kt)("inlineCode",{parentName:"h3"},"unregisterDeeplink()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.unregisterDeeplink(deeplinkId, callback)")),(0,l.kt)("p",null,"Deletes / unregisters a deep link."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.unregisterDeeplink("PERSON-431", (err, result) => {\n  if (err) return console.log(err);\n  console.log("DELETED DEEPLINK", result);\n});\n')),(0,l.kt)("h5",{id:"deeplinkid-1"},(0,l.kt)("inlineCode",{parentName:"h5"},"deeplinkId")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Id of the deeplink record")))),(0,l.kt)("h4",{id:"callbackerr-result-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, result)")),(0,l.kt)("p",null,"Callback function after something is done"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"result")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"success": true}')," when operation is successful, ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")," otherwise")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"setdata-"},(0,l.kt)("inlineCode",{parentName:"h3"},"setData()")," ",(0,l.kt)("div",{class:"label control"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.setData(data, options, callback)")),(0,l.kt)("p",null,"Takes in an object and compiles a deep link with object data. User may use the link to send to others directly into the widget and pass object data to your widget so you can use ",(0,l.kt)("a",{parentName:"p",href:"/docs/deep-links#getdata"},(0,l.kt)("inlineCode",{parentName:"a"},"buildfire.deeplink.getData()"))," to retrieve the data and do whatever you need with it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.setData({ myData: "data" }, null, (err, link) => {\n  if (err) return console.error(err);\n  console.log("Deep link", link);\n});\n')),(0,l.kt)("h5",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h5"},"data")),(0,l.kt)("p",null,"Any data object you may want to set as the ",(0,l.kt)("inlineCode",{parentName:"p"},"deeplinkData"),"."),(0,l.kt)("h5",{id:"options-2"},(0,l.kt)("inlineCode",{parentName:"h5"},"options")),(0,l.kt)("p",null,"Reserved for future usage. can be passed as ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,l.kt)("h4",{id:"callbackerr-link"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, link)")),(0,l.kt)("p",null,"Callback function after link has been created."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"link")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Deep link (ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"appdc3app://plugin/ba4139dd-09c6-4121-aa4a-c72570af07fc-9997799406344?dld=%7B%22myWidgetData%22%3A%22data%22%7D"),")")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdata-"},(0,l.kt)("inlineCode",{parentName:"h3"},"getData()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.getData(callback)")),(0,l.kt)("p",null,"Used to fetch the deep link data if any was passed down to plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.getData((deeplinkData) => {\n  if (deeplinkData) console.log("Deep link data: ", deeplinkData);\n});\n')),(0,l.kt)("h4",{id:"callbackdeeplinkdata"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(deeplinkData)")),(0,l.kt)("p",null,"Callback function with link data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkData")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object with custom deep link data")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"onupdate-"},(0,l.kt)("inlineCode",{parentName:"h3"},"onUpdate()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.onUpdate(callback)")),(0,l.kt)("p",null,"Listens for any deeplink updates. Executed whenever a new deeplink is passed to the plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.onUpdate((deeplinkData) => {\n  if (deeplinkData) console.log("Deep link data: ", deeplinkData);\n});\n')),(0,l.kt)("h4",{id:"callbackdeeplinkdata-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(deeplinkData)")),(0,l.kt)("p",null,"Callback function with link data"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"deeplinkData")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object with custom deep link data")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"createlink-deprecated-"},(0,l.kt)("inlineCode",{parentName:"h3"},"createLink()")," Deprecated ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.createLink(obj)")),(0,l.kt)("p",null,"Returns the deep link URL for your plugin with the attached Deep Link Data that has already been set with ",(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.deeplink.setData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'let link = buildfire.deeplink.createLink({data: "Mydata"});\n')),(0,l.kt)("h4",{id:"callbackerr-deeplink-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, deeplink)")),(0,l.kt)("p",null,"Takes in an object or string and compiles a deep link so that the user may use the link to send others directly into the widget subsection (obsolete)"),(0,l.kt)("h2",{id:"sharing-a-deep-link-outside-of-your-app"},"Sharing a deep link outside of your app"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/share-links-and-deep-linking"},"Share Links and Deep Linking")))}s.isMDXComponent=!0}}]);