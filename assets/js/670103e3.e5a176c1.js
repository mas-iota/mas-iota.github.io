"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9396],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>g});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):d(d({},n),e)),i},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(i),g=r,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return i?t.createElement(f,d(d({ref:n},c),{},{components:i})):t.createElement(f,d({ref:n},c))}));function g(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,d=new Array(o);d[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,d[1]=a;for(var s=2;s<o;s++)d[s]=i[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},138:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var t=i(7462),r=(i(7294),i(3905));const o={id:"ios-and-android-guidelines",title:"iOS and Android Guidelines",sidebar_label:"iOS and Android Guidelines",keywords:["buildfire","ios","android","guidelines"],slug:"/ios-and-android-guidelines"},d=void 0,a={unversionedId:"ios-and-android-guidelines",id:"ios-and-android-guidelines",title:"iOS and Android Guidelines",description:"iOS",source:"@site/docs/iOS-&-Android-Guidelines.md",sourceDirName:".",slug:"/ios-and-android-guidelines",permalink:"/docs/ios-and-android-guidelines",draft:!1,tags:[],version:"current",frontMatter:{id:"ios-and-android-guidelines",title:"iOS and Android Guidelines",sidebar_label:"iOS and Android Guidelines",keywords:["buildfire","ios","android","guidelines"],slug:"/ios-and-android-guidelines"},sidebar:"docs",previous:{title:"Plugin Development Guidelines",permalink:"/docs/plugin-development-guidelines"}},l={},s=[{value:"iOS",id:"ios",level:2},{value:"LocalStorage",id:"localstorage",level:3},{value:"IndexedDB",id:"indexeddb",level:3},{value:"WebSQL",id:"websql",level:3},{value:"Android",id:"android",level:2},{value:"LocalStorage",id:"localstorage-1",level:3}],c={toc:s};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"As upgrading to iOS 13 and migrating to ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/webkit/wkwebview"},"WKWebView")," from UIWebViews  brings security and performance enhancements it has the limitations below that needs to be addressed in buildfire plugins:"),(0,r.kt)("h3",{id:"localstorage"},"LocalStorage"),(0,r.kt)("p",null,"See /docs/LocalStorage"),(0,r.kt)("h3",{id:"indexeddb"},"IndexedDB"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"indexedDB.open()")," will now cause an error ",(0,r.kt)("inlineCode",{parentName:"p"},"called in an invalid security context"),".\nWe recommend switching to ",(0,r.kt)("a",{parentName:"p",href:"/docs/File-System"},"File System Services")," for widget side on devices and keep using indexedDB on control or widget side on web side."),(0,r.kt)("p",null,"You can figure out the platform using the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var isDevice = window.buildfire.getContext().device.platform !== 'web'\n")),(0,r.kt)("p",null,"If the storage required by the plugin instance is small local storage can be used instead on both sides (web and devices) for the widget."),(0,r.kt)("h3",{id:"websql"},"WebSQL"),(0,r.kt)("p",null,"Web SQL is no longer supported in iOS and throws ",(0,r.kt)("inlineCode",{parentName:"p"},"Web SQL is deprecated")," error when used. We recommend using alternatives explained in indexedDB section."),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("h3",{id:"localstorage-1"},"LocalStorage"),(0,r.kt)("p",null,"See /docs/LocalStorage"))}u.isMDXComponent=!0}}]);