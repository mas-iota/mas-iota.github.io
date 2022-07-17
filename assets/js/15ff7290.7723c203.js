(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{176:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(m,u(u({ref:n},c),{},{components:t})):o.a.createElement(m,u({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(8),a=(t(0),t(176)),i={id:"customize-your-app-css",title:"Customize your app with CSS",sidebar_label:"Customize your app with CSS",description:null,keywords:["buildfire","plugin","development","guidelines"],slug:"/customize-your-app-css"},u={unversionedId:"customize-your-app-css",id:"customize-your-app-css",isDocsHomePage:!1,title:"Customize your app with CSS",description:"If you have CSS coding knowledge, our editor for Custom CSS can help you achieve the specific style you are looking for beyond the adjustments you can do on the Branding page, Side Menu, Navbar, and more.",source:"@site/docs/Customize-your-app-css.md",slug:"/customize-your-app-css",permalink:"/docs/customize-your-app-css",version:"current",sidebar_label:"Customize your app with CSS",sidebar:"api",previous:{title:"MetaTags",permalink:"/docs/meta-tags"},next:{title:"Deep Links",permalink:"/docs/deep-links"}},s=[],c={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you have CSS coding knowledge, our editor for Custom CSS can help you achieve the specific style you are looking for beyond the adjustments you can do on the Branding page, Side Menu, Navbar, and more."),Object(a.b)("p",null,"You will see a grey banner on the right side of the app emulator indicating when Custom CSS is enabled and affecting your app. "),Object(a.b)("p",null,"The following code includes a list of selectors of some app elements that you can use as a reference to start modifying their style."),Object(a.b)("br",null),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-css"},"/* These are the selectors of some sections of the app */\n\n/* Title Bar Selectors ------------------------ */\n#pluginNav {\n\n}\n\n/* Title Bar - Title Text */\n#pluginNav h4 {\n\n}\n\n/* Bottom Navbar or Footer ------------------ */\n#footerMenuParent {\n\n}\n\n/* Side Menu Selectors ------------------------ */\n#menuNav {\n\n}\n/* Side Menu Gradient */\n#menuNav .gradient-screen {\n\n}\n\n/* Side Menu Background */\n#menuNav .background-screen {\n\n}\n\n/* Side Menu List Items */\n#menuNav .app-content a {\n\n}\n\n/* Profile Screen Selectors ------------------- */\n.profile-overlay {\n\n}\n\n.profile-overlay .profile-header {\n\n}\n\n.profile-overlay .profile-content {\n\n}\n")),Object(a.b)("br",null),Object(a.b)("p",null,"If you are experiencing issues with your app design or some other unwanted problems, try disabling your Custom CSS and test if the issue persists. Issues caused by adding custom CSS code falls out of our support team's scope."))}p.isMDXComponent=!0}}]);