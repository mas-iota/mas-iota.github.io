"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,k=d["".concat(s,".").concat(y)]||d[y]||c[y]||o;return r?i.createElement(k,a(a({ref:t},u),{},{components:r})):i.createElement(k,a({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const o={id:"api-keys",title:"API Keys",sidebar_label:"API Keys",description:"How to set API keys used in buildfire app",keywords:["buildfire","api key"],slug:"/api-keys"},a="Overview",l={unversionedId:"api-keys",id:"api-keys",title:"API Keys",description:"How to set API keys used in buildfire app",source:"@site/docs/API-Keys.md",sourceDirName:".",slug:"/api-keys",permalink:"/docs/api-keys",draft:!1,tags:[],version:"current",frontMatter:{id:"api-keys",title:"API Keys",sidebar_label:"API Keys",description:"How to set API keys used in buildfire app",keywords:["buildfire","api key"],slug:"/api-keys"},sidebar:"integrations",previous:{title:"Analytics",permalink:"/docs/analytics"},next:{title:"Firebase Integration",permalink:"/docs/firebase-integration"}},s={},p=[{value:"API keys:",id:"api-keys",level:2},{value:"<code>Buildfire API Public Key</code>",id:"buildfire-api-public-key",level:3},{value:"<code>Google Api Key</code>",id:"google-api-key",level:3},{value:"<code>Google Map Key</code>",id:"google-map-key",level:3},{value:"<code>Stripe Publishable key</code>",id:"stripe-publishable-key",level:3},{value:"<code>Credit System Public Key</code>",id:"credit-system-public-key",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"API Keys that will be used in the App and other features in buildfire."),(0,n.kt)("p",null,"You can set these keys in ",(0,n.kt)("strong",{parentName:"p"},"buildfire control panel under ",(0,n.kt)("inlineCode",{parentName:"strong"},"Advanced > Api Keys")),"."),(0,n.kt)("p",null,"If you are developer and your plugin is using services that require one of the following keys, you can set test keys in buildfire sdk plugin tester, under ",(0,n.kt)("strong",{parentName:"p"},"API Keys")," page."),(0,n.kt)("h2",{id:"api-keys"},"API keys:"),(0,n.kt)("h3",{id:"buildfire-api-public-key"},(0,n.kt)("inlineCode",{parentName:"h3"},"Buildfire API Public Key")),(0,n.kt)("p",null,"This key is used for buildfire public APIs and it will be needed in some of the SDK services,\nfor more information check ",(0,n.kt)("a",{parentName:"p",href:"https://buildfire.github.io/AWSGatewayPublicAPI/"},"Buildfire API Swagger")),(0,n.kt)("h3",{id:"google-api-key"},(0,n.kt)("inlineCode",{parentName:"h3"},"Google Api Key")),(0,n.kt)("p",null,"Goolge API Key used for google services. Read more on ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/api-key-best-practices?hl=en"},"google documentation")),(0,n.kt)("h3",{id:"google-map-key"},(0,n.kt)("inlineCode",{parentName:"h3"},"Google Map Key")),(0,n.kt)("p",null,"Goolge API Key user Maps JavaScript API. Read more on ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/get-api-key"},"google documentation")),(0,n.kt)("h3",{id:"stripe-publishable-key"},(0,n.kt)("inlineCode",{parentName:"h3"},"Stripe Publishable key")),(0,n.kt)("p",null,"Stripe publishable key."),(0,n.kt)("p",null,"You can get this from your stripe dashboard, check ",(0,n.kt)("a",{parentName:"p",href:"https://stripe.com/docs/keys#api-keys"},"stripe documentation")," for more information."),(0,n.kt)("h3",{id:"credit-system-public-key"},(0,n.kt)("inlineCode",{parentName:"h3"},"Credit System Public Key")),(0,n.kt)("p",null,"Read more on ",(0,n.kt)("a",{parentName:"p",href:"https://learn.buildfire.com/en/articles/3273365-what-is-the-credit-system-and-how-can-you-use-it-in-your-app"},"BuildFire knowledgebase")))}c.isMDXComponent=!0}}]);