"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={id:"customize-your-app-css",title:"Customize your app with CSS",sidebar_label:"Customize your app with CSS",keywords:["buildfire","plugin","development","guidelines"],slug:"/customize-your-app-css"},i=void 0,s={unversionedId:"customize-your-app-css",id:"customize-your-app-css",title:"Customize your app with CSS",description:"If you have CSS coding knowledge, our editor for Custom CSS can help you achieve the specific style you are looking for beyond the adjustments you can do on the Branding page, Side Menu, Navbar, and more.",source:"@site/docs/Customize-your-app-css.md",sourceDirName:".",slug:"/customize-your-app-css",permalink:"/docs/customize-your-app-css",draft:!1,tags:[],version:"current",frontMatter:{id:"customize-your-app-css",title:"Customize your app with CSS",sidebar_label:"Customize your app with CSS",keywords:["buildfire","plugin","development","guidelines"],slug:"/customize-your-app-css"},sidebar:"api",previous:{title:"MetaTags",permalink:"/docs/meta-tags"},next:{title:"Deep Links",permalink:"/docs/deep-links"}},u={},c=[],l={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have CSS coding knowledge, our editor for Custom CSS can help you achieve the specific style you are looking for beyond the adjustments you can do on the Branding page, Side Menu, Navbar, and more."),(0,o.kt)("p",null,"You will see a grey banner on the right side of the app emulator indicating when Custom CSS is enabled and affecting your app. "),(0,o.kt)("p",null,"The following code includes a list of selectors of some app elements that you can use as a reference to start modifying their style."),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* These are the selectors of some sections of the app */\n\n/* Title Bar Selectors ------------------------ */\n#pluginNav {\n\n}\n\n/* Title Bar - Title Text */\n#pluginNav h4 {\n\n}\n\n/* Bottom Navbar or Footer ------------------ */\n#footerMenuParent {\n\n}\n\n/* Side Menu Selectors ------------------------ */\n#menuNav {\n\n}\n/* Side Menu Gradient */\n#menuNav .gradient-screen {\n\n}\n\n/* Side Menu Background */\n#menuNav .background-screen {\n\n}\n\n/* Side Menu List Items */\n#menuNav .app-content a {\n\n}\n\n/* Profile Screen Selectors ------------------- */\n.profile-overlay {\n\n}\n\n.profile-overlay .profile-header {\n\n}\n\n.profile-overlay .profile-content {\n\n}\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you are experiencing issues with your app design or some other unwanted problems, try disabling your Custom CSS and test if the issue persists. Issues caused by adding custom CSS code falls out of our support team's scope."))}p.isMDXComponent=!0}}]);