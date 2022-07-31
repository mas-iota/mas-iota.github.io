"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={id:"material-design-theme",title:"Material Design Theme",sidebar_label:"Material Design Theme",keywords:["buildfire","material","design","theme"],slug:"/material-design-theme"},l=void 0,i={unversionedId:"material-design-theme",id:"material-design-theme",title:"Material Design Theme",description:"How to use",source:"@site/docs/Material-Design-Theme.md",sourceDirName:".",slug:"/material-design-theme",permalink:"/docs/material-design-theme",draft:!1,tags:[],version:"current",frontMatter:{id:"material-design-theme",title:"Material Design Theme",sidebar_label:"Material Design Theme",keywords:["buildfire","material","design","theme"],slug:"/material-design-theme"},sidebar:"api",previous:{title:"Appearance",permalink:"/docs/appearance"},next:{title:"Style Helper",permalink:"/docs/style-helper"}},d={},m=[{value:"How to use",id:"how-to-use",level:3},{value:"Referencing Material Design",id:"referencing-material-design",level:3},{value:"Control",id:"control",level:4},{value:"Widget",id:"widget",level:4},{value:"Predefined classes",id:"predefined-classes",level:3},{value:"Javascript Implementation Tips",id:"javascript-implementation-tips",level:3},{value:"Example components",id:"example-components",level:4}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"A plugin that uses Material Design can inherit app colors and font into the plugin by injecting the ",(0,r.kt)("a",{parentName:"p",href:"/docs/meta-tags"},"meta tag")," ",(0,r.kt)("inlineCode",{parentName:"p"},"enableMDTheme")," as following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <meta name="buildfire" content="enableMDTheme" />\n  \x3c!-- ... --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n</head>\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Meta tags must be added to the head of the HTML document before ",(0,r.kt)("a",{parentName:"p",href:"/docs/buildfire.js"},"buildfire.min.js")," is referenced")),(0,r.kt)("p",null,"Injected styles use CSS custom properties as explained in ",(0,r.kt)("a",{parentName:"p",href:"https://material.io/develop/web/components/theme/"},"https://material.io/develop/web/components/theme/")),(0,r.kt)("h3",{id:"referencing-material-design"},"Referencing Material Design"),(0,r.kt)("p",null,"You can reference Material Design JS and CSS files instead of having to include them in your plugin resources as following:"),(0,r.kt)("h4",{id:"control"},"Control"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- Enable material theme using meta tag --\x3e\n  <meta name="buildfire" content="enableMDTheme" />\n\n  \x3c!-- Include buildfire.js --\x3e\n  <script src="../../../../scripts/buildfire.min.js"><\/script>\n\n  \x3c!-- Include material design css and js --\x3e\n  <link\n    href="../../../../styles/materialDesign/material-components-web@4.0.0.min.css"\n    rel="stylesheet"\n  />\n  <script\n    src="../../../../scripts/materialDesign/material-components-web@4.0.0.min.js"\n    type="text/javascript"\n  ><\/script>\n</head>\n')),(0,r.kt)("h4",{id:"widget"},"Widget"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- Enable material theme using meta tag --\x3e\n  <meta name="buildfire" content="enableMDTheme" />\n\n  \x3c!-- Include buildfire.js --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n\n  \x3c!-- Include material design css and js --\x3e\n  <link\n    href="../../../styles/materialDesign/material-components-web@4.0.0.min.css"\n    rel="stylesheet"\n  />\n  <script\n    src="../../../scripts/materialDesign/material-components-web@4.0.0.min.js"\n    type="text/javascript"\n  ><\/script>\n</head>\n')),(0,r.kt)("h3",{id:"predefined-classes"},"Predefined classes"),(0,r.kt)("p",null,"Predefined custom properties can apply app styles to most of the components. However, for components or elements that do not have colors defined it is recommended to use the following predefined classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Custom property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--primary")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the theme primary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--secondary")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the theme secondary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--background")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the background color to the theme background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--surface")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the background color to the surface background color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--error")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the theme error color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--on-primary")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the color configured for text on the primary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--on-secondary")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the color configured for text on the secondary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--on-surface")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the color configured for text on the surface color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--on-error")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the text color to the color configured for text on the error color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-primary-on-background")),(0,r.kt)("td",{parentName:"tr",align:null},"Primary text on top of the theme background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-secondary-on-background")),(0,r.kt)("td",{parentName:"tr",align:null},"Secondary text on top of the theme background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-hint-on-background")),(0,r.kt)("td",{parentName:"tr",align:null},"Hint text on top of the theme background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-disabled-on-background")),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled text on top of the theme background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-icon-on-background")),(0,r.kt)("td",{parentName:"tr",align:null},"Icon on top of the theme background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-primary-on-light")),(0,r.kt)("td",{parentName:"tr",align:null},"Primary text on top of a light-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-secondary-on-light")),(0,r.kt)("td",{parentName:"tr",align:null},"Secondary text on top of a light-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-hint-on-light")),(0,r.kt)("td",{parentName:"tr",align:null},"Hint text on top of a light-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-disabled-on-light")),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled text on top of a light-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-icon-on-light")),(0,r.kt)("td",{parentName:"tr",align:null},"Icons on top of a light-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-primary-on-dark")),(0,r.kt)("td",{parentName:"tr",align:null},"Primary text on top of a dark-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-secondary-on-dark")),(0,r.kt)("td",{parentName:"tr",align:null},"Secondary text on top of a dark-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-hint-on-dark")),(0,r.kt)("td",{parentName:"tr",align:null},"Hint text on top of a dark-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-disabled-on-dark")),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled text on top of a dark-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--text-icon-on-dark")),(0,r.kt)("td",{parentName:"tr",align:null},"Icons on top of a dark-colored background.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--primary-bg")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the background color to the theme primary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mdc-theme--secondary-bg")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the background color to the theme secondary color.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Test your plugin on an app using light BuildFire color theme and dark theme as well to make sure it displays properly on both.")),(0,r.kt)("p",null,"You can also access the app theme programmatically by using\n",(0,r.kt)("a",{parentName:"p",href:"/docs/Appearance#getapptheme"},(0,r.kt)("inlineCode",{parentName:"a"},"buildfire.appearance.getAppTheme()"))," function."),(0,r.kt)("h3",{id:"javascript-implementation-tips"},"Javascript Implementation Tips"),(0,r.kt)("p",null,"When implementing standard material components make sure to use CommonJS Approach ",(0,r.kt)("inlineCode",{parentName:"p"},"mdc.componentName.MDCComponent();"),". There is no need to install any additional npm packages."),(0,r.kt)("h4",{id:"example-components"},"Example components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Checkbox\nconst checkbox = new mdc.checkbox.MDCCheckbox(\n  document.querySelector(".mdc-checkbox")\n);\n\n// textfield\nconst textfield = new mdc.textField.MDCTextField(\n  document.querySelector(".mdc-text-field")\n);\n')))}c.isMDXComponent=!0}}]);