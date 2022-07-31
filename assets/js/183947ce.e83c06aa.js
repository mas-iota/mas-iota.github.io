"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"image-preview",title:"Image Preview",sidebar_label:"Image Preview",keywords:["buildfire","image","preview","component"],slug:"/image-preview"},l="buildfire.imagePreviewer",o={unversionedId:"image-preview",id:"image-preview",title:"Image Preview",description:"The fullscreen image preview allows a developer to instantiate a fullscreen image carousel in app. This is to give a better viewing experience to the end user.",source:"@site/docs/Image-Preview.md",sourceDirName:".",slug:"/image-preview",permalink:"/docs/image-preview",draft:!1,tags:[],version:"current",frontMatter:{id:"image-preview",title:"Image Preview",sidebar_label:"Image Preview",keywords:["buildfire","image","preview","component"],slug:"/image-preview"},sidebar:"components",previous:{title:"Drawer",permalink:"/docs/drawer"},next:{title:"ListView",permalink:"/docs/listview"}},p={},c=[{value:"Methods",id:"methods",level:2},{value:'<code>show()</code> <div class="label widget"></div>',id:"show-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback()</code>",id:"callback",level:4}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buildfireimagepreviewer"},(0,a.kt)("inlineCode",{parentName:"h1"},"buildfire.imagePreviewer")),(0,a.kt)("p",null,"The fullscreen image preview allows a developer to instantiate a fullscreen image carousel in app. This is to give a better viewing experience to the end user."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"show-"},(0,a.kt)("inlineCode",{parentName:"h3"},"show()")," ",(0,a.kt)("div",{class:"label widget"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"buildfire.imagePreviewer.show(options, callback)")),(0,a.kt)("p",null,"Displayes a full screen image previewer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.imagePreviewer.show(\n  {\n    images: ["https://placekitten.com/"],\n  },\n  () => {\n    console.log("Image previewer closed");\n  }\n);\n')),(0,a.kt)("h4",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h4"},"options")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"images")),(0,a.kt)("td",{parentName:"tr",align:null},"[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"tes"),(0,a.kt)("td",{parentName:"tr",align:null},"Array of image urls to display in full screen image carousel"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Index of image to start carousel from"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("h4",{id:"callback"},(0,a.kt)("inlineCode",{parentName:"h4"},"callback()")),(0,a.kt)("p",null,"Callback function that gets called when carousel is closed"))}d.isMDXComponent=!0}}]);