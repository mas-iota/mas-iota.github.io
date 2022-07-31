"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=d(n),k=i,u=m["".concat(c,".").concat(k)]||m[k]||p[k]||l;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={id:"action-items",title:"Action Items",sidebar_label:"Action Items",description:"How to create and execute an Action Item using Buildfire SDK.",keywords:["buildfire","action","items"],slug:"/action-items"},o="buildfire.actionItems",r={unversionedId:"action-items",id:"action-items",title:"Action Items",description:"How to create and execute an Action Item using Buildfire SDK.",source:"@site/docs/Action-Items.md",sourceDirName:".",slug:"/action-items",permalink:"/docs/action-items",draft:!1,tags:[],version:"current",frontMatter:{id:"action-items",title:"Action Items",sidebar_label:"Action Items",description:"How to create and execute an Action Item using Buildfire SDK.",keywords:["buildfire","action","items"],slug:"/action-items"},sidebar:"api",previous:{title:"Share Links and Deep Linking",permalink:"/docs/share-links-and-deep-linking"},next:{title:"Messaging",permalink:"/docs/messaging-to-sync-your-control-to-widget"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:'<code>showDialog()</code> <div class="label control"></div>',id:"showdialog-",level:3},{value:"<code>actionItem</code>",id:"actionitem",level:4},{value:"<code>linkToWeb</code>",id:"linktoweb",level:5},{value:"<code>linkToApp</code>",id:"linktoapp",level:5},{value:"<code>sendEmail</code>",id:"sendemail",level:5},{value:"<code>callNumber</code>",id:"callnumber",level:5},{value:"<code>sendSMS</code>",id:"sendsms",level:5},{value:"<code>navigateToAddress</code>",id:"navigatetoaddress",level:5},{value:"<code>navigateToAddress</code>",id:"navigatetoaddress-1",level:5},{value:"<code>linkToSocialGoogle</code>",id:"linktosocialgoogle",level:5},{value:"<code>linkToSocialInstagram</code>",id:"linktosocialinstagram",level:5},{value:"<code>linkToSocialLinkedIn</code>",id:"linktosociallinkedin",level:5},{value:"<code>linkToSocialFaceBook</code>",id:"linktosocialfacebook",level:5},{value:"<code>linkToSocialTwitter</code>",id:"linktosocialtwitter",level:5},{value:"<code>noAction</code>",id:"noaction",level:5},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, actionItem)</code>",id:"callbackerr-actionitem",level:4},{value:"More Examples",id:"more-examples",level:4},{value:'<code>execute()</code> <div class="label widget"></div>',id:"execute-",level:3},{value:"<code>actionItem</code>",id:"actionitem-1",level:4},{value:"<code>callback(err)</code>",id:"callbackerr",level:4},{value:'<code>list()</code><div class="label widget"></div>',id:"list",level:3},{value:"<code>actionItems</code>",id:"actionitems",level:4},{value:"<code>options</code>",id:"options-1",level:4},{value:"<code>callback(err, actionItem)</code>",id:"callbackerr-actionitem-1",level:4}],s={toc:d};function p(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buildfireactionitems"},(0,i.kt)("inlineCode",{parentName:"h1"},"buildfire.actionItems")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Action Items")," is an object that represent an ",(0,i.kt)("strong",{parentName:"p"},"action to take"),". This could be a link to open in a browser, could be a telephone number to call or sms, and/or could be an address to navigate to. The details of these objects shouldn't concern you. All you need to do is save it in your datastore and when it's time to execute an item just call ",(0,i.kt)("inlineCode",{parentName:"p"},"buildfire.actionItems.execute")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"showdialog-"},(0,i.kt)("inlineCode",{parentName:"h3"},"showDialog()")," ",(0,i.kt)("div",{class:"label control"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"buildfire.actionItems.showDialog(actionItem, options, callback)")),(0,i.kt)("p",null,"Shows a dialog for the App Owner to create an Action Item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.showDialog(null, null, (err, actionItem) => {\n  if (err) return console.error(err);\n  console.log("Action item created", actionItem);\n});\n')),(0,i.kt)("h4",{id:"actionitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"actionItem")),(0,i.kt)("p",null,"Allows you to pass a previously saved ",(0,i.kt)("inlineCode",{parentName:"p"},"actionItem")," that the user would like to edit"),(0,i.kt)("p",null,"Possible action items are:"),(0,i.kt)("h5",{id:"linktoweb"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToWeb")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "build fire",\nurl: "https://www.facebook.com/buildfireapps",\naction: "linkToWeb",\nopenIn: "_blank" or "_system",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"linktoapp"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToApp")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'instanceId: "03dd5856-99ed-4950-ad40-6d95a29ef7f2-1449796387765";\naction: "linkToApp",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"sendemail"},(0,i.kt)("inlineCode",{parentName:"h5"},"sendEmail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Send Email",\nsubject : "action Item Test"\nbody : "We are testing action Item send Email"\nemail: "support@buildfire.com",\naction: "sendEmail",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"callnumber"},(0,i.kt)("inlineCode",{parentName:"h5"},"callNumber")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'phoneNumber: "+1-541-754-3010",\naction: "callNumber",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"sendsms"},(0,i.kt)("inlineCode",{parentName:"h5"},"sendSMS")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Send SMS",\nsubject : "action Item SMS Example"\nphoneNumber: "+1-541-754-3010",\naction: "sendSMS",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"navigatetoaddress"},(0,i.kt)("inlineCode",{parentName:"h5"},"navigateToAddress")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Navigate to address title",\nlat: "37.7944988",\nlng: "-122.3947446",\naddress :"1 Market Street, San Francisco, CA, United States"\naction: "navigateToAddress",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"navigatetoaddress-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"navigateToAddress")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Navigate to address title",\nlat: "37.7944988",\nlng: "-122.3947446",\naddress :"1 Market Street, San Francisco, CA, United States"\naction: "navigateToAddress",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"linktosocialgoogle"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToSocialGoogle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to google",\nurl: "https://plus.google.com/+Buildfireapps"\naction: "linkToSocialGoogle",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"linktosocialinstagram"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToSocialInstagram")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to instagram",\nurl:"https://instagram.com/google/?hl=en",\naction: "linkToSocialInstagram",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"linktosociallinkedin"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToSocialLinkedIn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to LinkedIn",\nurl:"https://www.linkedin.com/company/buildfire",\naction: "linkToSocialLinkedIn",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"linktosocialfacebook"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToSocialFaceBook")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to Facebook",\nurl:"https://www.facebook.com/buildfireapps",\naction: "linkToSocialFacebook",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"linktosocialtwitter"},(0,i.kt)("inlineCode",{parentName:"h5"},"linkToSocialTwitter")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "Link to Twitter",\nurl:"https://twitter.com/buildfire",\naction: "linkToSocialTwitter",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h5",{id:"noaction"},(0,i.kt)("inlineCode",{parentName:"h5"},"noAction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'title: "No Action",\naction: "noAction",\niconUrl: "", // Link to icon image used to represent this action item\n')),(0,i.kt)("h4",{id:"options"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showIcon")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},'Specifies if you want to show the "icon"'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allowNoAction")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Allows the ",(0,i.kt)("a",{parentName:"td",href:"/docs/action-items#noaction"},(0,i.kt)("inlineCode",{parentName:"a"},"noAction"))," action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"actionTextLabel")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom label to show next to the action item display text field"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"Action Button Text"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hideActionText")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Does not ask the user to provide a display text value to the action item"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h4",{id:"callbackerr-actionitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback(err, actionItem)")),(0,i.kt)("p",null,"Callback function after action item dialog is completed."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"error string, ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"actionItem")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/action-items#actionitem"},(0,i.kt)("inlineCode",{parentName:"a"},"actionItem"))," that was created")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep Link",src:n(3025).Z,width:"892",height:"888"})),(0,i.kt)("h4",{id:"more-examples"},"More Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.showDialog(\n  { title: "Change the title", action: "noAction" },\n  { showIcon: true, allowNoAction: true },\n  (err, actionItem) => {\n    if (err) return console.error(err);\n    console.log("Action item created", actionItem);\n  }\n);\n')),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute-"},(0,i.kt)("inlineCode",{parentName:"h3"},"execute()")," ",(0,i.kt)("div",{class:"label widget"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"buildfire.actionItems.execute(actionItem, callback)")),(0,i.kt)("p",null,"It will take a previously saved ",(0,i.kt)("inlineCode",{parentName:"p"},"actionItem")," and execute it. If its a link it will open in a browser, if its a telephone number it will call that phone number, etc.."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.execute(\n  {\n    title: "build fire",\n    url: "https://www.facebook.com/buildfireapps",\n    action: "linkToWeb",\n    openIn: "_blank",\n  },\n  (err) => {\n    if (err) return console.error(err);\n  }\n);\n')),(0,i.kt)("h4",{id:"actionitem-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"actionItem")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/action-items#actionitem"},(0,i.kt)("inlineCode",{parentName:"a"},"actionItem"))),(0,i.kt)("h4",{id:"callbackerr"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback(err)")),(0,i.kt)("p",null,"Callback function after action item is executed"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"error string, ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"list"},(0,i.kt)("inlineCode",{parentName:"h3"},"list()"),(0,i.kt)("div",{class:"label widget"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"buildfire.actionItems.list(actionItems, options, callback)")),(0,i.kt)("p",null,"Takes an array of previously saved ",(0,i.kt)("inlineCode",{parentName:"p"},"actionItem"),"s and lists them in a standard popup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.actionItems.list(\n  [\n    {\n      title: "Open Facebook",\n      url: "https://www.facebook.com/buildfireapps",\n      action: "linkToSocialFacebook",\n    },\n    {\n      title: "Open Linkedin",\n      url: "https://www.linkedin.com/company/buildfire",\n      action: "linkToSocialLinkedIn",\n    },\n  ],\n  {\n    executeItem: true,\n  },\n  (err, actionItem) => {\n    if (err) return console.error(err);\n\n    console.log("Executed", actionItem);\n  }\n);\n')),(0,i.kt)("h4",{id:"actionitems"},(0,i.kt)("inlineCode",{parentName:"h4"},"actionItems")),(0,i.kt)("p",null,"Array of ",(0,i.kt)("a",{parentName:"p",href:"/docs/action-items#actionitem"},(0,i.kt)("inlineCode",{parentName:"a"},"actionItems"))),(0,i.kt)("h4",{id:"options-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"executeItem")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Automatically execute after user selects an item"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"callbackerr-actionitem-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback(err, actionItem)")),(0,i.kt)("p",null,"Callback function after action item is executed"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"err")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"error string, ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"actionItem")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Selected ",(0,i.kt)("a",{parentName:"td",href:"/docs/action-items#actionitem"},(0,i.kt)("inlineCode",{parentName:"a"},"actionItem"))," from the list")))))}p.isMDXComponent=!0},3025:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/actionItemDialog-withDeeplink-a1baf363ff91d6a9279c9a4d2a9f1246.png"}}]);