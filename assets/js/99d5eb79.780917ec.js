(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),r=(n(0),n(176)),o={id:"widget",title:"Background Services",sidebar_label:"Background Services",description:null,keywords:["buildfire","widget","background","services"],slug:"/background-services"},c={unversionedId:"widget",id:"widget",isDocsHomePage:!1,title:"Background Services",description:"Services are pieces of code that run in the background of the app without having to load the widget of the plugin. A Services is a sub component of a Widget. I.e. that it lives in the widget side of the plugin (only in the app).",source:"@site/docs/Background-Services.md",slug:"/background-services",permalink:"/docs/background-services",version:"current",sidebar_label:"Background Services",sidebar:"services",previous:{title:"Geo Location (GPS) Feature",permalink:"/docs/geo-location-gps-feature"},next:{title:"File System",permalink:"/docs/file-system"}},s=[{value:"Use cases",id:"use-cases",children:[]},{value:"How to setup a Service",id:"how-to-setup-a-service",children:[{value:"service.html",id:"servicehtml",children:[]}]},{value:"Widget and Service Communication",id:"widget-and-service-communication",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Services are pieces of code that run in the background of the app without having to load the widget of the plugin. A Services is a sub component of a Widget. I.e. that it lives in the widget side of the plugin (only in the app)."),Object(r.b)("p",null,"While the service structure is very similar to a Widget. One main distinction other than it runs on startup is that it has ",Object(r.b)("em",{parentName:"p"},"no UI"),". Any HTML written is only to create the environment needed for the service no UI will be presented in the app"),Object(r.b)("h2",{id:"use-cases"},"Use cases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Geo Fencing. If you wanted to keep track of the location of the device in order to present the user with a coupon when they are close to your business. A service will allow you to do this even if the app doesnt have your plugin open. The service can trigger a navigation to the widget to force it visible")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Ads: If you wanted every 60 seconds to show an ad your service can run in the background and popup an ad every 60 seconds")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Passive bluetooth integration. Stay in the background until a bluetooth connection occurs then navigate to widget")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Really any process you want to stay alive as long as the app is."))),Object(r.b)("h2",{id:"how-to-setup-a-service"},"How to setup a Service"),Object(r.b)("p",null,"An example is setup ",Object(r.b)("a",{parentName:"p",href:"https://github.com/BuildFire/simpleBuildFireJSExamples/blob/master/examplePluginWithService/widget/service.html"},"here")," but its pretty simple."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"service.html")," to your widget folder. You can call it anything else as long as you reference the correct file in the next step"),Object(r.b)("li",{parentName:"ol"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"service")," property to the ",Object(r.b)("inlineCode",{parentName:"li"},"widget")," object in the ",Object(r.b)("inlineCode",{parentName:"li"},"plugin.json"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'"widget": {\n  "service": "service.html"\n}\n')),Object(r.b)("h3",{id:"servicehtml"},"service.html"),Object(r.b)("p",null,"While this file can mimic your traditional widget ",Object(r.b)("inlineCode",{parentName:"p"},"index.html")," it is best to cut out any UI elements that auto load. To do so add this meta tag to the header before referencing ",Object(r.b)("inlineCode",{parentName:"p"},"buildfire.js")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<meta name="buildfire" content="disableTheme,disableFastClick" />\n')),Object(r.b)("p",null,"So your file may look something like this"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta name="buildfire" content="disableTheme,disableFastClick" />\n    <script src="../../../scripts/buildfire.js"><\/script>\n  </head>\n</html>\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Remember the HTML is just to setup structure and importing frameworks. No UI will be rendered on the app"))),Object(r.b)("h2",{id:"widget-and-service-communication"},"Widget and Service Communication"),Object(r.b)("p",null,"For more info read ",Object(r.b)("a",{parentName:"p",href:"/docs/messaging-to-sync-your-control-to-widget/#sendmessagetoservice"},"messaging docs")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To send a message form Widget to Service, in widget html use:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.messaging.sendMessageToService(data);\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To receive a message in service, in service html use:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.messaging.onReceivedMessage = (data) => {\n  console.log(data);\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To send a message form Service to Widget, in service.html use:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.messaging.sendMessageToWidget(data);\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To receive a message in Widget, in widget html use:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.messaging.onReceivedMessage = (data) => {\n  console.log(data);\n};\n")))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);