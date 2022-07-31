"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),f=o,m=c["".concat(u,".").concat(f)]||c[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const i={id:"how-to-update-the-sdk",title:"How to Update the SDK",sidebar_label:"How to Update the SDK",keywords:["buildfire","sdk","cli","update","upgrade"],slug:"/how-to-update-the-sdk"},a="Updating the SDK",l={unversionedId:"how-to-update-the-sdk",id:"how-to-update-the-sdk",title:"How to Update the SDK",description:"From time to time the BuildFire SDK is updated with new versions. If you are using the SDK to test your plugins, it's best to use latest version.",source:"@site/docs/How-To-Update-the-SDK.md",sourceDirName:".",slug:"/how-to-update-the-sdk",permalink:"/docs/how-to-update-the-sdk",draft:!1,tags:[],version:"current",frontMatter:{id:"how-to-update-the-sdk",title:"How to Update the SDK",sidebar_label:"How to Update the SDK",keywords:["buildfire","sdk","cli","update","upgrade"],slug:"/how-to-update-the-sdk"},sidebar:"docs",previous:{title:"buildfire.js",permalink:"/docs/buildfire.js"},next:{title:"Plugin Development Guidelines",permalink:"/docs/plugin-development-guidelines"}},u={},d=[{value:"BuildFire CLI",id:"buildfire-cli",level:2}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-the-sdk"},"Updating the SDK"),(0,o.kt)("p",null,"From time to time the BuildFire SDK is updated with new versions. If you are using the SDK to test your plugins, it's best to use latest version."),(0,o.kt)("h2",{id:"buildfire-cli"},"BuildFire CLI"),(0,o.kt)("p",null,"The recommended approach is to utilize ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/buildfire-cli"},"buildfire-cli"),". If you don't already have the SDK installed you can simply run the command: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install buildfire-cli -g")," "),(0,o.kt)("p",null,"Once installed installed, simply run the following command from your SDK folder:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"buildfire update")))}s.isMDXComponent=!0}}]);