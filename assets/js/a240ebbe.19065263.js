"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const l={id:"users-search-dialog",title:"Users Search Dialog",sidebar_label:"Users Search Dialog",description:"How to use Users Search Dialog in BuildFire to search for registered users on control side.",keywords:["buildfire","users","search","management"],slug:"/users-search-dialog"},i="buildfire.auth",s={unversionedId:"users-search-dialog",id:"users-search-dialog",title:"Users Search Dialog",description:"How to use Users Search Dialog in BuildFire to search for registered users on control side.",source:"@site/docs/Users-Search-Dialog.md",sourceDirName:".",slug:"/users-search-dialog",permalink:"/docs/users-search-dialog",draft:!1,tags:[],version:"current",frontMatter:{id:"users-search-dialog",title:"Users Search Dialog",sidebar_label:"Users Search Dialog",description:"How to use Users Search Dialog in BuildFire to search for registered users on control side.",keywords:["buildfire","users","search","management"],slug:"/users-search-dialog"},sidebar:"api",previous:{title:"Authentication",permalink:"/docs/auth"},next:{title:"Tags Search Dialog",permalink:"/docs/tags-search-dialog"}},o={},d=[{value:"Methods",id:"methods",level:2},{value:'<code>showUsersSearchDialog()</code> <div class="label control"></div>',id:"showuserssearchdialog-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, result)</code>",id:"callbackerr-result",level:4},{value:"<code>result</code>",id:"result",level:5},{value:"<code>result.users[]</code>",id:"resultusers",level:5},{value:"Example",id:"example",level:6}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"buildfireauth"},(0,n.kt)("inlineCode",{parentName:"h1"},"buildfire.auth")),(0,n.kt)("p",null,"Users search dialog is accessible via the plugin SDK from the control side of the plugin. It allows plugin developers to show user search dialog and allow the app owner to select users and get their data in callback."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"showuserssearchdialog-"},(0,n.kt)("inlineCode",{parentName:"h3"},"showUsersSearchDialog()")," ",(0,n.kt)("div",{class:"label control"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"buildfire.auth.showUsersSearchDialog(options,callback)")),(0,n.kt)("p",null,"This builtin dialog helps you to show a dialog in order to be used to select users."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.auth.showUsersSearchDialog(null, (err, result) => {\n  if (err) return console.log(err);\n\n  if (result) {\n    console.log("Selected users", result.users);\n    console.log("Selected user ids", result.userIds);\n  }\n});\n')),(0,n.kt)("h4",{id:"options"},(0,n.kt)("inlineCode",{parentName:"h4"},"options")),(0,n.kt)("p",null,"Reserved for future usage. can be passed as ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,n.kt)("h4",{id:"callbackerr-result"},(0,n.kt)("inlineCode",{parentName:"h4"},"callback(err, result)")),(0,n.kt)("p",null,"Callback function after something is done"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"err")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"error string, ",(0,n.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"result")),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"an object that has ",(0,n.kt)("inlineCode",{parentName:"td"},"users")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"userIds")," returned. ",(0,n.kt)("inlineCode",{parentName:"td"},"null")," whene no user is selected or if dialog is canceled")))),(0,n.kt)("h5",{id:"result"},(0,n.kt)("inlineCode",{parentName:"h5"},"result")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"users")),(0,n.kt)("td",{parentName:"tr",align:null},"[object]"),(0,n.kt)("td",{parentName:"tr",align:null},"an array of objects containing the selected users")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"userIds")),(0,n.kt)("td",{parentName:"tr",align:null},"[string]"),(0,n.kt)("td",{parentName:"tr",align:null},"an array containing the IDs for the selected users")))),(0,n.kt)("h5",{id:"resultusers"},(0,n.kt)("inlineCode",{parentName:"h5"},"result.users[]")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"firstName")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The user first name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"lastName")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The user last name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"displayName")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The user display name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"username")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"isActive")),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates whether the user is active or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"userProfile")),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"The user profile object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"imageUrl")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The url for the user profile image")))),(0,n.kt)("h6",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "users": [\n    {\n      "firstName": "Bob",\n      "lastName": "Steve",\n      "displayName": "Bob Steve",\n      "username": "example@buildfire.com",\n      "isActive": true,\n      "userProfile": {},\n      "imageUrl": "imageUrl"\n    },\n    {\n      "firstName": "Sara",\n      "lastName": "Conor",\n      "displayName": "Sarah Conor",\n      "username": "example1@buildfire.com",\n      "isActive": true,\n      "userProfile": {},\n      "imageUrl": "imageUrl"\n    }\n  ],\n  "userIds": ["5dc0832959fda11018ffb5e8", "5dc0836c59fda11018ffb5ea"]\n}\n')))}p.isMDXComponent=!0}}]);