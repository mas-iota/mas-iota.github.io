(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(176)),i={id:"messaging-to-sync-your-control-to-widget",title:"Messaging",sidebar_label:"Messaging",description:"How to use BuildFire Messaging to sync widget and control",keywords:["buildfire","messaging","sync","widget","control"],slug:"/messaging-to-sync-your-control-to-widget"},s={unversionedId:"messaging-to-sync-your-control-to-widget",id:"messaging-to-sync-your-control-to-widget",isDocsHomePage:!1,title:"Messaging",description:"How to use BuildFire Messaging to sync widget and control",source:"@site/docs/Messaging.md",slug:"/messaging-to-sync-your-control-to-widget",permalink:"/docs/messaging-to-sync-your-control-to-widget",version:"current",sidebar_label:"Messaging",sidebar:"api",previous:{title:"Action Items",permalink:"/docs/action-items"},next:{title:"Plugin Instances",permalink:"/docs/plugin-instances"}},b=[{value:"Methods",id:"methods",children:[{value:'<code>sendMessageToControl()</code> <div class="label widget"></div>',id:"sendmessagetocontrol",children:[]},{value:'<code>sendMessageToWidget()</code><div class="label control"></div>',id:"sendmessagetowidget",children:[]},{value:'<code>sendMessageToService()</code><div class="label widget"></div>',id:"sendmessagetoservice",children:[]},{value:'<code>onReceivedMessage()</code><div class="label control"></div><div class="label widget"></div>',id:"onreceivedmessage",children:[]}]}],c={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"buildfiremessaging"},Object(l.b)("inlineCode",{parentName:"h1"},"buildfire.messaging")),Object(l.b)("p",null,"Use messaging to communicate messages to and from the widget and control. This is usefull if you want to sync your cp with widget side emulator on Control Panel."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"sendmessagetocontrol"},Object(l.b)("inlineCode",{parentName:"h3"},"sendMessageToControl()")," ",Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.messaging.sendMessageToControl(message)")),Object(l.b)("p",null,"Send a message from the widget to the active control (content, design or settings)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.messaging.sendMessageToControl({\n  section: "details",\n  subItem: 123123123,\n});\n')),Object(l.b)("h4",{id:"message"},Object(l.b)("inlineCode",{parentName:"h4"},"message")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"message")),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"May be a simple data type or an object. Will be sent to the widget and will trigger the callback function ",Object(l.b)("inlineCode",{parentName:"td"},"buildfire.messaging.onReceivedMessage(message)")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"sendmessagetowidget"},Object(l.b)("inlineCode",{parentName:"h3"},"sendMessageToWidget()"),Object(l.b)("div",{class:"label control"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.messaging.sendMessageToWidget(message)")),Object(l.b)("p",null,"Sends a message from the control to the widget emulator."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.messaging.sendMessageToWidget({\n  section: "details",\n  subItem: 123123123,\n});\n')),Object(l.b)("h4",{id:"message-1"},Object(l.b)("inlineCode",{parentName:"h4"},"message")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"message")),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"May be a simple data type or an object. Will be sent to the control and will trigger the callback function ",Object(l.b)("inlineCode",{parentName:"td"},"buildfire.messaging.onReceivedMessage(message)")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"sendmessagetoservice"},Object(l.b)("inlineCode",{parentName:"h3"},"sendMessageToService()"),Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.messaging.sendMessageToService(message)")),Object(l.b)("p",null,"Sends a message from the widget to the ",Object(l.b)("a",{parentName:"p",href:"/docs/background-services"},"widget background service"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.messaging.sendMessageToService({\n  section: "details",\n  subItem: 123123123,\n});\n')),Object(l.b)("h4",{id:"message-2"},Object(l.b)("inlineCode",{parentName:"h4"},"message")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"message")),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"May be a simple data type or an object. Will be sent to the control and will trigger the callback function ",Object(l.b)("inlineCode",{parentName:"td"},"buildfire.messaging.onReceivedMessage(message)")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h3",{id:"onreceivedmessage"},Object(l.b)("inlineCode",{parentName:"h3"},"onReceivedMessage()"),Object(l.b)("div",{class:"label control"}),Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.messaging.onReceivedMessage(message)")),Object(l.b)("p",null,"Override this call back on widget, control or service to listen for any incoming messages"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.messaging.onReceivedMessage = (message) => {\n  console.log("Message received", message);\n};\n')),Object(l.b)("h4",{id:"message-3"},Object(l.b)("inlineCode",{parentName:"h4"},"message")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"message")),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"Message sent by widget, control or service depending where the lister is initiated"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("hr",null))}o.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,p=d["".concat(i,".").concat(m)]||d[m]||g[m]||l;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);