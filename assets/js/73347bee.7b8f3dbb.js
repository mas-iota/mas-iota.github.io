(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(176)),b={id:"popup",title:"Popup Component",sidebar_label:"Popup Component",description:null,keywords:["buildfire","popup","component"],slug:"/popup"},i={unversionedId:"popup",id:"popup",isDocsHomePage:!1,title:"Popup Component",description:"buildfire.components.popup",source:"@site/docs/Popup.md",slug:"/popup",permalink:"/docs/popup",version:"current",sidebar_label:"Popup Component",sidebar:"components",previous:{title:"Notifications",permalink:"/docs/notifications"},next:{title:"Input Dialog",permalink:"/docs/input-dialog"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Widget",id:"widget",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>display()</code>",id:"display",children:[]}]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"buildfirecomponentspopup"},Object(l.b)("inlineCode",{parentName:"h1"},"buildfire.components.popup")),Object(l.b)("p",null,"This component provides a rich modal for plugins."),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("h3",{id:"widget"},"Widget"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../../scripts/buildfire.js"><\/script>\n  <script src="../../../scripts/buildfire/components/popup/popup.js"><\/script>\n</head>\n')),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"display"},Object(l.b)("inlineCode",{parentName:"h3"},"display()")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.components.popup.display(options, callback)")),Object(l.b)("p",null,"Displays a popup"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.components.popup.display(\n  {\n    title: "Popup title",\n    richContent: "Hello I am rich content!",\n  },\n  (err, result) => {\n    if (err) return console.error(err);\n\n    console.log(result);\n  }\n);\n')),Object(l.b)("h4",{id:"options"},Object(l.b)("inlineCode",{parentName:"h4"},"options")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"title")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Dialog title."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"subtitle")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Dialog subtitle. If empty, no subtitle will be displayed"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"showDismissButton")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"If true, shows a dismiss button in dialog footer"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"action")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Action Item. Will show as additional button."),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"richContent")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Message or html to be displayed inside of the dialog"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"design")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Dialog design configuration"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h5",{id:"optionsdesign"},Object(l.b)("inlineCode",{parentName:"h5"},"options.design")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"title")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Dialog title css as object. ex. (",Object(l.b)("inlineCode",{parentName:"td"},"{ align: 'center' }"),")"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"fullScreen")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Controls if dialog takes up full screen"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"textColor")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Dialog text color"),Object(l.b)("td",{parentName:"tr",align:null},"inherits from theme")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Dialog background color"),Object(l.b)("td",{parentName:"tr",align:null},"inherits from theme")))),Object(l.b)("h4",{id:"callbackerr-result"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err, result)")),Object(l.b)("p",null,"Callback function after the end user clicked on button."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"result")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"This value is always null since there is only one button that can be clicked")))),Object(l.b)("h5",{id:"result"},Object(l.b)("inlineCode",{parentName:"h5"},"result")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"buttonType")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"dismiss"')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"action"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"value")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Value of the action")))))}o.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,O=d["".concat(b,".").concat(m)]||d[m]||u[m]||l;return n?r.a.createElement(O,i(i({ref:t},p),{},{components:n})):r.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);