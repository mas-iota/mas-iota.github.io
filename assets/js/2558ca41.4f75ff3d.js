(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||s[b]||i;return n?o.a.createElement(f,l(l({ref:t},u),{},{components:n})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(176)),a={id:"how-to-update-the-sdk",title:"How to Update the SDK",sidebar_label:"How to Update the SDK",description:null,keywords:["buildfire","sdk","cli","update","upgrade"],slug:"/how-to-update-the-sdk"},l={unversionedId:"how-to-update-the-sdk",id:"how-to-update-the-sdk",isDocsHomePage:!1,title:"How to Update the SDK",description:"Updating the SDK",source:"@site/docs/How-To-Update-the-SDK.md",slug:"/how-to-update-the-sdk",permalink:"/docs/how-to-update-the-sdk",version:"current",sidebar_label:"How to Update the SDK",sidebar:"docs",previous:{title:"buildfire.js",permalink:"/docs/buildfire.js"},next:{title:"Plugin Development Guidelines",permalink:"/docs/plugin-development-guidelines"}},c=[{value:"BuildFire CLI",id:"buildfire-cli",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"updating-the-sdk"},"Updating the SDK"),Object(i.b)("p",null,"From time to time the BuildFire SDK is updated with new versions. If you are using the SDK to test your plugins, it's best to use latest version."),Object(i.b)("h2",{id:"buildfire-cli"},"BuildFire CLI"),Object(i.b)("p",null,"The recommended approach is to utilize ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/buildfire-cli"},"buildfire-cli"),". If you don't already have the SDK installed you can simply run the command: "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm install buildfire-cli -g")," "),Object(i.b)("p",null,"Once installed installed, simply run the following command from your SDK folder:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire update")," "))}p.isMDXComponent=!0}}]);