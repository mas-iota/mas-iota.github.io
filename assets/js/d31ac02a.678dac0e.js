(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),l=(n(0),n(176)),b={id:"color-lib",title:"Color Lib",sidebar_label:"Color Lib",description:null,keywords:["buildfire","color","lib","design"],slug:"/color-lib"},i={unversionedId:"color-lib",id:"color-lib",isDocsHomePage:!1,title:"Color Lib",description:"buildfire.colorLib",source:"@site/docs/Color-Lib.md",slug:"/color-lib",permalink:"/docs/color-lib",version:"current",sidebar_label:"Color Lib",sidebar:"api",previous:{title:"Safe Areas",permalink:"/docs/device-safe-areas"},next:{title:"MetaTags",permalink:"/docs/meta-tags"}},c=[{value:"Methods",id:"methods",children:[{value:'<code>showDialog()</code> <div class="label control"></div>',id:"showdialog",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"buildfirecolorlib"},Object(l.b)("inlineCode",{parentName:"h1"},"buildfire.colorLib")),Object(l.b)("p",null,"Color library is used to generate Gradient/Solid Colors."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"showdialog"},Object(l.b)("inlineCode",{parentName:"h3"},"showDialog()")," ",Object(l.b)("div",{class:"label control"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.colorLib.showDialog(data, options, onChange, callback)")),Object(l.b)("p",null,"Dialog with color pickers used to generate solid color or color gradient"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.colorLib.showDialog(null, null, null, (err, result) => {\n  if (result.colorType === "solid") {\n    console.log("Selected color is", result.solid.color);\n  } else {\n    console.log("Background gradient is", result.gradient.backgroundCSS);\n  }\n});\n')),Object(l.b)("h4",{id:"data"},Object(l.b)("inlineCode",{parentName:"h4"},"data")),Object(l.b)("p",null,"Object used to preload data into dialog."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"colorType")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Specifies color type. Can be ",Object(l.b)("inlineCode",{parentName:"td"},'"solid"')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"gradient"')),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"gradient"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"gradient")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Object specifying gradient"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"solid")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Object specifying solid color"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h5",{id:"datagradient"},Object(l.b)("inlineCode",{parentName:"h5"},"data.gradient")),Object(l.b)("p",null,"Object specifying gradient color"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"colors")),Object(l.b)("td",{parentName:"tr",align:null},"[object]"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Array of color objects explaining the gradient"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"gradientType")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Gradient direction ",Object(l.b)("inlineCode",{parentName:"td"},'"to bottom"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to right"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to top left"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to top right"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to top"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to left"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to bottom left"'),",",Object(l.b)("inlineCode",{parentName:"td"},'"to bottom right"')),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"to bottom"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"backgroundCSS")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"CSS to be used as ",Object(l.b)("inlineCode",{parentName:"td"},"backgroundColor")," css property"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h5",{id:"datagradientcolors"},Object(l.b)("inlineCode",{parentName:"h5"},"data.gradient.colors[]")),Object(l.b)("p",null,"Object specifying color in gradient"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Color css property"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"rgba(255,255,255,1)"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"percentage")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Percentage this color will take on gradient"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"opacity")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Opacity, ",Object(l.b)("inlineCode",{parentName:"td"},"0"),"-",Object(l.b)("inlineCode",{parentName:"td"},"100")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"100"))))),Object(l.b)("h5",{id:"datasolid"},Object(l.b)("inlineCode",{parentName:"h5"},"data.solid")),Object(l.b)("p",null,"Object specifying solid color"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"RGBA value of selected color"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"rgba(255,255,255,1)"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"colorHex")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"HEX value of selected color"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"opacity")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Opacity, ",Object(l.b)("inlineCode",{parentName:"td"},"0"),"-",Object(l.b)("inlineCode",{parentName:"td"},"100")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"100"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"backgroundCSS")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"CSS to be used as ",Object(l.b)("inlineCode",{parentName:"td"},"backgroundColor")," css property"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"background: rgba(255,255,255,1)"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"css property")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"CSS to be used as ",Object(l.b)("inlineCode",{parentName:"td"},"color")," css property"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"color: rgba(255,255,255,1)"))))),Object(l.b)("h4",{id:"options"},Object(l.b)("inlineCode",{parentName:"h4"},"options")),Object(l.b)("p",null,"Object used to preload data into dialog."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"backdrop")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Specifies if you want to show the backdrop for the dialog"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"true"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"position")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Specifies the dialog position. ",Object(l.b)("inlineCode",{parentName:"td"},'"left"')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"right"')," or ",Object(l.b)("inlineCode",{parentName:"td"},'"center"')),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"center"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"hideGradient")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Specifies if you want to hide the Gradient UI"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"hideSolid")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Specifies if you want to hide the Solid UI"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"false"))))),Object(l.b)("h4",{id:"onchangeerr-result"},Object(l.b)("inlineCode",{parentName:"h4"},"onChange(err, result)")),Object(l.b)("p",null,"Function called every time a color is changed inside the picker"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"result")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Color object, see ",Object(l.b)("a",{parentName:"td",href:"/docs/color-lib#data"},"data"))))),Object(l.b)("h4",{id:"callbackerr-result"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err, result)")),Object(l.b)("p",null,"Function called after closing the dialog. If a save is clicked the result will be the new value, but if the cancel is clicked the result will be the old value."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"result")),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Color object, see ",Object(l.b)("a",{parentName:"td",href:"/docs/color-lib#data"},"data"))))),Object(l.b)("h4",{id:"more-examples"},"More examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.colorLib.showDialog(\n  { colorType: "solid" },\n  { hideGradient: true },\n  console.log,\n  (err, result) => {\n    console.log("Selected color is", result.solid.color);\n  }\n);\n')),Object(l.b)("h4",{id:"example-data-object"},"Example data object"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "gradient": {\n    "colors": [\n      {\n        "color": "rgba(47,211,211,1)",\n        "percentage": 0,\n        "opacity": 100,\n        "colorHex": "#2fd3d3"\n      },\n      {\n        "color": "rgba(2,9,9,1)",\n        "percentage": 100,\n        "opacity": 100,\n        "colorHex": "#020909"\n      }\n    ],\n    "gradientType": "to bottom",\n    "backgroundCSS": "background: linear-gradient(to bottom, rgba(47,211,211,1) 0%, rgba(2,9,9,1) 100%)"\n  },\n  "solid": {\n    "color": "rgba(255,255,255,1)",\n    "opacity": 100,\n    "backgroundCSS": "background: rgba(255,255,255,1)",\n    "colorCSS": "color: rgba(255,255,255,1)"\n  },\n  "colorType": "gradient"\n}\n')))}d.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,m=p["".concat(b,".").concat(O)]||p[O]||j[O]||l;return n?r.a.createElement(m,i(i({ref:t},o),{},{components:n})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);