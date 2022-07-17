(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(176)),l={id:"image-preview",title:"Image Preview",sidebar_label:"Image Preview",description:null,keywords:["buildfire","image","preview","component"],slug:"/image-preview"},c={unversionedId:"image-preview",id:"image-preview",isDocsHomePage:!1,title:"Image Preview",description:"buildfire.imagePreviewer",source:"@site/docs/Image-Preview.md",slug:"/image-preview",permalink:"/docs/image-preview",version:"current",sidebar_label:"Image Preview",sidebar:"components",previous:{title:"Drawer",permalink:"/docs/drawer"},next:{title:"ListView",permalink:"/docs/listview"}},o=[{value:"Methods",id:"methods",children:[{value:'<code>show()</code> <div class="label widget"></div>',id:"show",children:[]}]}],b={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"buildfireimagepreviewer"},Object(i.b)("inlineCode",{parentName:"h1"},"buildfire.imagePreviewer")),Object(i.b)("p",null,"The fullscreen image preview allows a developer to instantiate a fullscreen image carousel in app. This is to give a better viewing experience to the end user."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"show"},Object(i.b)("inlineCode",{parentName:"h3"},"show()")," ",Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.imagePreviewer.show(options, callback)")),Object(i.b)("p",null,"Displayes a full screen image previewer"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.imagePreviewer.show(\n  {\n    images: ["https://placekitten.com/"],\n  },\n  () => {\n    console.log("Image previewer closed");\n  }\n);\n')),Object(i.b)("h4",{id:"options"},Object(i.b)("inlineCode",{parentName:"h4"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"images")),Object(i.b)("td",{parentName:"tr",align:null},"[string]"),Object(i.b)("td",{parentName:"tr",align:null},"tes"),Object(i.b)("td",{parentName:"tr",align:null},"Array of image urls to display in full screen image carousel"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"index")),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"Index of image to start carousel from"),Object(i.b)("td",{parentName:"tr",align:null},"0")))),Object(i.b)("h4",{id:"callback"},Object(i.b)("inlineCode",{parentName:"h4"},"callback()")),Object(i.b)("p",null,"Callback function that gets called when carousel is closed"))}p.isMDXComponent=!0}}]);