"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8006],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"toast",title:"Toast",sidebar_label:"Toast",keywords:["buildfire","toast","component"],slug:"/toast"},o="buildfire.components.toast",i={unversionedId:"toast",id:"toast",title:"Toast",description:"Toast component is deprecated. Please use dialog.toast instead.",source:"@site/docs/Toast.md",sourceDirName:".",slug:"/toast",permalink:"/docs/toast",draft:!1,tags:[],version:"current",frontMatter:{id:"toast",title:"Toast",sidebar_label:"Toast",keywords:["buildfire","toast","component"],slug:"/toast"},sidebar:"components",previous:{title:"Thumbnail",permalink:"/docs/thumbnail"},next:{title:"WYSIWYG Editor",permalink:"/docs/wysiwyg-editor"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Widget",id:"widget",level:3},{value:"Methods",id:"methods",level:2},{value:'<code>showToastMessage()</code> <div class="label widget"></div>',id:"showtoastmessage-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, action)</code>",id:"callbackerr-action",level:4},{value:"More Examples",id:"more-examples",level:4},{value:'<code>closeToastMessage()</code> <div class="label widget"></div>',id:"closetoastmessage-",level:3},{value:"<code>options</code>",id:"options-1",level:4},{value:"<code>callback(err)</code>",id:"callbackerr",level:4},{value:"More examples",id:"more-examples-1",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buildfirecomponentstoast"},(0,r.kt)("inlineCode",{parentName:"h1"},"buildfire.components.toast")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Toast component is deprecated. Please use ",(0,r.kt)("a",{parentName:"p",href:"/docs/dialogs#toast"},"dialog.toast")," instead.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toast")," component provides brief, contextual messages about app processes at the bottom of the screen. Each toast message contains a message and an optional action."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"widget"},"Widget"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- JS --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/components/toast/toast.js"><\/script>\n</head>\n')),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"showtoastmessage-"},(0,r.kt)("inlineCode",{parentName:"h3"},"showToastMessage()")," ",(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.components.toast.showToastMessage(options, callback)")),(0,r.kt)("p",null,"This method is used to show a toast message. The toast will automatically close after a short period of time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.components.toast.showToastMessage({ text: "Hi. I am a toast!" });\n')),(0,r.kt)("h4",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Toast message to be displayed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom action object or an action item to be executed when action button is clicked. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/action-items"},"Action Items")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hideDismiss")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the dismiss button will be hidden from the toast."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"callbackerr-action"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err, action)")),(0,r.kt)("p",null,"When the action button is clicked, the action is returned in the callback."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"action")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Action passed to ",(0,r.kt)("inlineCode",{parentName:"td"},"options.action"))))),(0,r.kt)("h4",{id:"more-examples"},"More Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.components.toast.showToastMessage(\n  {\n    text: "Hi I am toast with action!",\n    action: {\n      customData: "Action Clicked",\n    },\n  },\n  (err, action) => {\n    if (err) return console.error(err);\n\n    console.log(action.customData);\n  }\n);\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"closetoastmessage-"},(0,r.kt)("inlineCode",{parentName:"h3"},"closeToastMessage()")," ",(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.components.toast.closeToastMessage(options, callback)")),(0,r.kt)("p",null,"This method is used to close toast message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"buildfire.components.toast.closeToastMessage();\n")),(0,r.kt)("h4",{id:"options-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"force")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the toast will close immediately."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h4",{id:"callbackerr"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err)")),(0,r.kt)("p",null,"Executed when the closing action is successfully registered."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")))),(0,r.kt)("h4",{id:"more-examples-1"},"More examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.components.toast.closeToastMessage(\n  {\n    force: true,\n  },\n  (err) => {\n    if (err) console.error(err);\n\n    console.log("Toast closed");\n  }\n);\n')))}c.isMDXComponent=!0}}]);