"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[278],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"formatting",title:"Formatting",sidebar_label:"Formatting",description:"How to convert a plain text to a rich HTML",keywords:["buildfire","format","formatting","text","html","text to html","plugins"],slug:"/formatting"},i="buildfire.format",o={unversionedId:"formatting",id:"formatting",title:"Formatting",description:"How to convert a plain text to a rich HTML",source:"@site/docs/Format.md",sourceDirName:".",slug:"/formatting",permalink:"/docs/formatting",draft:!1,tags:[],version:"current",frontMatter:{id:"formatting",title:"Formatting",sidebar_label:"Formatting",description:"How to convert a plain text to a rich HTML",keywords:["buildfire","format","formatting","text","html","text to html","plugins"],slug:"/formatting"},sidebar:"api",previous:{title:"Plugin Instances",permalink:"/docs/plugin-instances"},next:{title:"Datastore",permalink:"/docs/datastore"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Widget",id:"widget",level:3},{value:"Control",id:"control",level:3},{value:"Methods",id:"methods",level:2},{value:'<code>textToHTML()</code> <div class="label control"></div><div class="label widget"></div>',id:"texttohtml-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, data)</code>",id:"callbackerr-data",level:4},{value:"More Examples",id:"more-examples",level:4},{value:'<code>onHashtagClick()</code><div class="label control"></div><div class="label widget"></div>',id:"onhashtagclick",level:3}],c={toc:d};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buildfireformat"},(0,r.kt)("inlineCode",{parentName:"h1"},"buildfire.format")),(0,r.kt)("p",null,"This service give the ability to convert a plain text to a rich HTML, where it detects urls, emails, hashatgs and phone numbers and convert them to a clickable links (action items)."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"widget"},"Widget"),(0,r.kt)("p",null,"Include ",(0,r.kt)("inlineCode",{parentName:"p"},"format.js")," file in widget header after the ",(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.min.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<head>\n    <script src="../../../scripts/buildfire.min.js"><\/script>\n    <script src="../../../scripts/buildfire/services/format/format.js"><\/script>\n</head>\n')),(0,r.kt)("h3",{id:"control"},"Control"),(0,r.kt)("p",null,"Include ",(0,r.kt)("inlineCode",{parentName:"p"},"format.js")," file in control header after the ",(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.min.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'<head>\n    <script src="../../../../scripts/buildfire.min.js"><\/script>\n    <script src="../../../../scripts/buildfire/services/format/format.js"><\/script>\n</head>\n')),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"texttohtml-"},(0,r.kt)("inlineCode",{parentName:"h3"},"textToHTML()")," ",(0,r.kt)("div",{class:"label control"}),(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.format.textToHTML(options, callback)")),(0,r.kt)("p",null,"This function is responsible for converting a plain text to a rich HTML, where it detects urls, emails, hashatgs and phone numbers and convert them to a clickable links (action items) and it also retruns the detected hashtags in the text as an array."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let options = {\ntext: 'Convert (https://www.google.com) to a clickable link'\n}; \nbuildfire.format.textToHTML(options, (err, result) => {\n    if(err) return console.error(`ERROR: ${err}`);\n    console.log(\"RESULT: \" + result);\n});\n")),(0,r.kt)("h4",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The text that will be converted to html"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignoreAnchors")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"to decide whether to convert urls to action items or to keep them as texts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignoreEmails")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"to decide whether to convert emails to action items or to keep them as texts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignorePhoneNumbers")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"to decide whether to convert phone numbers to action items or to keep them as texts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"supportedHashtagType")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the type of hashtag to be supported (",(0,r.kt)("inlineCode",{parentName:"td"},"youtube"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"facebook"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"twitter"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"custom"),")"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"callbackerr-data"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err, data)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"contains the converted text to html and the hashtags that was detected in the text as an array")))),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This service checks if the text is already converted to an html; so if it is already converted, this service will retrun an error.")),(0,r.kt)("h4",{id:"more-examples"},"More Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let options = {\n  text: 'Convert (https://www.google.com) to a clickable link and #youtubeHashtag to a clickable hashtag',\n  ignoreAnchors: false,\n  ignoreEmails: true,\n  ignorePhoneNumbers: false,\n  supportedHashtagType: 'youtube'\n}; \nbuildfire.format.textToHTML(options, (err, result) => {\n  if(err) return console.error(`ERROR: ${err}`);\n  console.log(result);\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onhashtagclick"},(0,r.kt)("inlineCode",{parentName:"h3"},"onHashtagClick()"),(0,r.kt)("div",{class:"label control"}),(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.format.onHashtagClick(hashtag)")),(0,r.kt)("p",null,"This function is used with the (",(0,r.kt)("inlineCode",{parentName:"p"},"supportedHashtagType = 'custom'"),"), where this function will be invoked when the user clicks on the custom hashtag. Initially, this function logs the clicked hashtag in the console, but the developer can override this function to handle the clicked hashtag in different ways."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let options = {\n  text: 'Convert #customHashtag to a clickable hashtag',\n  supportedHashtagType: 'custom'\n}; \nbuildfire.format.textToHTML(options, (err, result) => {\n  if(err) return console.error(`ERROR: ${err}`);\n  console.log(result);\n});\nbuildfire.format.onHashtagClick = function(hashtag) { // override the original function\n  console.log(`The overridden function was invoked with hashtag: ${hashtag}`);\n}\n")))}p.isMDXComponent=!0}}]);