"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={id:"reserved-collections",title:"Reserved Collections",sidebar_label:"Reserved Collections",keywords:["buildfire","reserved","collections","database","datastore","appdata"],slug:"/reserved-collections"},o=void 0,i={unversionedId:"reserved-collections",id:"reserved-collections",title:"Reserved Collections",description:"Some features provided by BuildFire leverage reserved collections in our App Data and Search Engine services.",source:"@site/docs/Reserved-Collections.md",sourceDirName:".",slug:"/reserved-collections",permalink:"/docs/reserved-collections",draft:!1,tags:[],version:"current",frontMatter:{id:"reserved-collections",title:"Reserved Collections",sidebar_label:"Reserved Collections",keywords:["buildfire","reserved","collections","database","datastore","appdata"],slug:"/reserved-collections"},sidebar:"api",previous:{title:"Aggregation",permalink:"/docs/aggregation"},next:{title:"Local Storage",permalink:"/docs/local-storage"}},s={},d=[{value:"List of Reserved Collections",id:"list-of-reserved-collections",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Some features provided by BuildFire leverage reserved collections in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/app-data"},"App Data")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/Search-Engine"},"Search Engine")," services."),(0,a.kt)("p",null,"These collections expand on existing systems to provide additional features. Using the tags reserved for these collections can cause issues within the app; therefore, using these tags is not recommended."),(0,a.kt)("h2",{id:"list-of-reserved-collections"},"List of Reserved Collections"),(0,a.kt)("p",null,"The following list contains collections and their reserved tags:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Collection Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Location"),(0,a.kt)("th",{parentName:"tr",align:null},"Tag"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"User Directory"),(0,a.kt)("td",{parentName:"tr",align:null},"App Data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$userDirectory"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lookup"),(0,a.kt)("td",{parentName:"tr",align:null},"Search Engine"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$userDirectory"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Badges"),(0,a.kt)("td",{parentName:"tr",align:null},"App Data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$badges"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Favorites"),(0,a.kt)("td",{parentName:"tr",align:null},"App Data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$favorites"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reports"),(0,a.kt)("td",{parentName:"tr",align:null},"App Data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$reports"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deeplinks"),(0,a.kt)("td",{parentName:"tr",align:null},"App Data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$deeplinks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Notification Badges"),(0,a.kt)("td",{parentName:"tr",align:null},"App Data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"$$notificationBadges"))))))}c.isMDXComponent=!0}}]);