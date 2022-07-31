"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),d=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(k.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,c=s["".concat(k,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"bookmarks",title:"Bookmarks",sidebar_label:"Bookmarks",description:"How to add Bookmarks using BuildFire SDK.",keywords:["buildfire","bookmarks","favorites"],slug:"/bookmarks"},o="buildfire.bookmarks",i={unversionedId:"bookmarks",id:"bookmarks",title:"Bookmarks",description:"How to add Bookmarks using BuildFire SDK.",source:"@site/docs/Bookmarks.md",sourceDirName:".",slug:"/bookmarks",permalink:"/docs/bookmarks",draft:!1,tags:[],version:"current",frontMatter:{id:"bookmarks",title:"Bookmarks",sidebar_label:"Bookmarks",description:"How to add Bookmarks using BuildFire SDK.",keywords:["buildfire","bookmarks","favorites"],slug:"/bookmarks"},sidebar:"api",previous:{title:"Context",permalink:"/docs/context"},next:{title:"Notes",permalink:"/docs/notes"}},k={},d=[{value:"Methods",id:"methods",level:2},{value:'<code>add()</code> <div class="label widget"></div>',id:"add-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, bookmark)</code>",id:"callbackerr-bookmark",level:4},{value:"<code>bookmark</code>",id:"bookmark",level:5},{value:"Consuming payload",id:"consuming-payload",level:4},{value:'<code>delete()</code> <div class="label widget"></div>',id:"delete-",level:3},{value:"<code>bookmarkId</code>",id:"bookmarkid",level:4},{value:"<code>callback()</code>",id:"callback",level:4},{value:'<code>getAll()</code> <div class="label widget"></div>',id:"getall-",level:3},{value:"<code>callback(err, bookmarks)</code>",id:"callbackerr-bookmarks",level:4}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buildfirebookmarks"},(0,r.kt)("inlineCode",{parentName:"h1"},"buildfire.bookmarks")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.bookmarks"),' provides a simple way to allow users to save their favorite content for easy access. Saved bookmarks appear under the "bookmarks" section of the side menu.'),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"add-"},(0,r.kt)("inlineCode",{parentName:"h3"},"add()")," ",(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.bookmarks.add(options, callback)")),(0,r.kt)("p",null,"Adds a new bookmark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.bookmarks.add(\n  {\n    id: "BOOKMARK_ID",\n    title: "My Bookmark",\n    icon: "https://placekitten.com/32/32",\n    payload: {\n      data: { myData: "Hello World" },\n    },\n  },\n  (err, bookmark) => {\n    if (err) return console.error(err);\n\n    console.log("Bookmark ", bookmark);\n  }\n);\n')),(0,r.kt)("h4",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h4"},"options")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of the item being bookmarked, will be displayed on the bookmarks page"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Icon for the bookmarked item, will be displayed on the bookmarks page"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom payload object that will be passed to plugin once its reached through bookmark"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"callbackerr-bookmark"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err, bookmark)")),(0,r.kt)("p",null,"Callback after bookmark is created"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bookmark")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Created bookmark")))),(0,r.kt)("h5",{id:"bookmark"},(0,r.kt)("inlineCode",{parentName:"h5"},"bookmark")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bookmark title text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Bookmark icon url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom payload object that will be passed to plugin once its reached through bookmark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pluginInstanceId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Instance id of the plugin bookmark was created from. This is the plugin that will be navigated to once the bookmark is clicked on bookmarks page")))),(0,r.kt)("h4",{id:"consuming-payload"},"Consuming payload"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," is a serializable object that can be used to pass data back to the plugin. The app will navigate to the plugin to which the bookmark belongs, and this data is passed along through ",(0,r.kt)("a",{parentName:"p",href:"/docs/deep-links"},"deeplinking"),"."),(0,r.kt)("p",null,"To access the payload from the bookmark simply use ",(0,r.kt)("a",{parentName:"p",href:"/docs/deep-links#getdata"},(0,r.kt)("inlineCode",{parentName:"a"},"buildfire.deeplink.getData()"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.deeplink.getData((deeplinkData) => {\n  if (deeplinkData) console.log("Deep link data: ", deeplinkData);\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete-"},(0,r.kt)("inlineCode",{parentName:"h3"},"delete()")," ",(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.bookmarks.delete(bookmarkId, callback)")),(0,r.kt)("p",null,"Deletes a bookmark"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.bookmarks.delete("BOOKMARK_ID", () => {\n  console.log("Bookmark deleted successfully");\n});\n')),(0,r.kt)("h4",{id:"bookmarkid"},(0,r.kt)("inlineCode",{parentName:"h4"},"bookmarkId")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bookmarkId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of bookmark to be deleted"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"callback"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback()")),(0,r.kt)("p",null,"Callback function after bookmark has been deleted"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getall-"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAll()")," ",(0,r.kt)("div",{class:"label widget"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildfire.bookmarks.getAll(callback)")),(0,r.kt)("p",null,"Gets all bookmarks for current plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"buildfire.bookmarks.getAll((err, bookmarks) => {\n  if (err) return console.error(err);\n\n  console.log(bookmarks);\n});\n")),(0,r.kt)("h4",{id:"callbackerr-bookmarks"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback(err, bookmarks)")),(0,r.kt)("p",null,"Callback function after bookmarks are fetched"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"err")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"error string, ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," when operation is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bookmarks")),(0,r.kt)("td",{parentName:"tr",align:null},"[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"/docs/bookmarks#bookmark"},"bookmark")," objects")))))}m.isMDXComponent=!0}}]);