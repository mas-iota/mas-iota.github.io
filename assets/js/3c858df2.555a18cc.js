"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"e-signature",title:"E-Signature",sidebar_label:"E-Signature",description:"BuildFire E-Signature component",keywords:["BuildFire","signature","esignature","pdf","component"],slug:"/e-signature"},l="buildfire.components.signatureBox",o={unversionedId:"e-signature",id:"e-signature",title:"E-Signature",description:"BuildFire E-Signature component",source:"@site/docs/E-Signature.md",sourceDirName:".",slug:"/e-signature",permalink:"/docs/e-signature",draft:!1,tags:[],version:"current",frontMatter:{id:"e-signature",title:"E-Signature",sidebar_label:"E-Signature",description:"BuildFire E-Signature component",keywords:["BuildFire","signature","esignature","pdf","component"],slug:"/e-signature"},sidebar:"components",previous:{title:"Input Dialog",permalink:"/docs/input-dialog"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Widget",id:"widget",level:3},{value:"Methods",id:"methods",level:2},{value:'<code>openDialog()</code> <div class="label widget"></div>',id:"opendialog-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, data)</code>",id:"callbackerr-data",level:4},{value:"More Examples",id:"more-examples",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buildfirecomponentssignaturebox"},(0,a.kt)("inlineCode",{parentName:"h1"},"buildfire.components.signatureBox")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eSignature")," -or signatureBox- is a component that allows a plugin to make use of electronic form handwritten signatures, it handles showing the signature box view for signing, getting the user written signature and transforming back the data in different representation. The component does not rely on any UI framework with consideration to the configured branding (app theme)."),(0,a.kt)("img",{src:"/img/e-signature.png",alt:"eSignature Demo",width:"600"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"widget"},"Widget"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- JS --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/components/signatureBox/signatureBox.js"><\/script>\n</head>\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Document's ",(0,a.kt)("inlineCode",{parentName:"p"},"head")," element is necessary for the component to inject needed dependencies.")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"opendialog-"},(0,a.kt)("inlineCode",{parentName:"h3"},"openDialog()")," ",(0,a.kt)("div",{class:"label widget"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"buildfire.components.signatureBox.openDialog(options, callback)")),(0,a.kt)("p",null,"This method is used to show the signature view with its associated controls."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"buildfire.components.signatureBox.openDialog({ width: '500', height: '100' });\n")),(0,a.kt)("h4",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h4"},"options")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to set the Canvas width"),(0,a.kt)("td",{parentName:"tr",align:null},"'200'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"height")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to set the Canvas height."),(0,a.kt)("td",{parentName:"tr",align:null},"'400'")))),(0,a.kt)("h4",{id:"callbackerr-data"},(0,a.kt)("inlineCode",{parentName:"h4"},"callback(err, data)")),(0,a.kt)("p",null,"When the Save button is clicked, the result data is returned within the callback."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,a.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"data")),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"An object with ",(0,a.kt)("inlineCode",{parentName:"td"},"dataUrl")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"base64")," properties which are representations of the submitted signature.")))),(0,a.kt)("h4",{id:"more-examples"},"More Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"buildfire.components.signatureBox.openDialog(\n  { width: '150', height: '400' },\n  (err, data) => {\n    if (err) return console.error(err);\n\n    console.log(data);\n})\n")))}u.isMDXComponent=!0}}]);