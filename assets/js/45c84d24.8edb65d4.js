(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),l=(a(0),a(176)),i={id:"camera",title:"Camera Service",sidebar_label:"Camera Service",description:null,keywords:["buildfire","camera","service"],slug:"/camera"},b={unversionedId:"camera",id:"camera",isDocsHomePage:!1,title:"Camera Service",description:"buildfire.services.camera",source:"@site/docs/Camera.md",slug:"/camera",permalink:"/docs/camera",version:"current",sidebar_label:"Camera Service",sidebar:"services",previous:{title:"Low Energy Bluetooth (BLE)",permalink:"/docs/low-energy-bluetooth"},next:{title:"Barcode Scanning",permalink:"/docs/barcode-scanning"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Widget",id:"widget",children:[]}]},{value:"Methods",id:"methods",children:[{value:'<code>getPicture()</code> <div class="label widget"></div>',id:"getpicture",children:[]},{value:'<code>getVideo()</code> <div class="label widget"></div>',id:"getvideo",children:[]}]}],o={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"buildfireservicescamera"},Object(l.b)("inlineCode",{parentName:"h1"},"buildfire.services.camera")),Object(l.b)("p",null,"This service accesses the device's camera."),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This service works only on devices"))),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("h3",{id:"widget"},"Widget"),Object(l.b)("p",null,"Include ",Object(l.b)("inlineCode",{parentName:"p"},"camera.js")," file in widget header right after the ",Object(l.b)("inlineCode",{parentName:"p"},"buildfire.min.js")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/services/camera/camera.js"><\/script>\n</head>\n')),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"getpicture"},Object(l.b)("inlineCode",{parentName:"h3"},"getPicture()")," ",Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.services.camera.getPicture(options, callback)")),Object(l.b)("p",null,"This method will open the device's default camera application that allows users to snap pictures by default. It may also ask the user for permission to access the Camera if it hasn't previously."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.camera.getPicture({}, (err, imageData) => {\n  if (err) return console.error(err);\n\n  console.log("Image src is" + imageData);\n});\n')),Object(l.b)("h4",{id:"options"},Object(l.b)("inlineCode",{parentName:"h4"},"options")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"quality")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Quality of the saved image, expressed as a range of 0-100, where 100 is typically full resolution with no loss from file compression."),Object(l.b)("td",{parentName:"tr",align:null},"50")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"destinationType")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Choose the format of the return value. 0 for Data_URL, 1 for FILE_URI."),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"sourceType")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},'Set the source of the picture. "0 for PHOTOLIBRARY, 1 for CAMERA and 2 for SAVEDPHOTOALBUM".'),Object(l.b)("td",{parentName:"tr",align:null},"1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"upload")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Allows automatic upload of the captured image to ",Object(l.b)("a",{parentName:"td",href:"/docs/public-files"},"pubilcFiles"),". The callback will return a url to the uploaded image. Setting this option to true will ignore destinationType."),Object(l.b)("td",{parentName:"tr",align:null},"false")))),Object(l.b)("h4",{id:"callbackerr-imagedata"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err, imageData)")),Object(l.b)("p",null,"Callback function that provides the image data"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"imageData")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Image src or data uri, depending on ",Object(l.b)("inlineCode",{parentName:"td"},"destinationType"))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getvideo"},Object(l.b)("inlineCode",{parentName:"h3"},"getVideo()")," ",Object(l.b)("div",{class:"label widget"})),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"buildfire.services.camera.getVideo(options, callback)")),Object(l.b)("p",null,"This method will open the device's default camera application that allows users to record videos. It may also ask the user for permission to access the camera and microphone if it hasn't previously."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.camera.getVideo({}, (err, videoData) => {\n  if (err) return console.error(err);\n\n  console.log("Video src is" + videoData.localURI);\n});\n')),Object(l.b)("h4",{id:"options-1"},Object(l.b)("inlineCode",{parentName:"h4"},"options")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"quality")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0")," will record in low quality, ",Object(l.b)("inlineCode",{parentName:"td"},"1")," records high quality"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"duration")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum Recording duration, in seconds."),Object(l.b)("td",{parentName:"tr",align:null},"300")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"upload")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no"),Object(l.b)("td",{parentName:"tr",align:null},"Allows automatic upload of the captured video to ",Object(l.b)("a",{parentName:"td",href:"/docs/public-files"},"pubilcFiles"),". The callback will return a url to the uploaded video."),Object(l.b)("td",{parentName:"tr",align:null},"false")))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Some Android devices do not support ",Object(l.b)("inlineCode",{parentName:"p"},"duration"),". The video will be trimmed to match the max duration, and ",Object(l.b)("inlineCode",{parentName:"p"},"trimmed")," will return as ",Object(l.b)("inlineCode",{parentName:"p"},"true")))),Object(l.b)("h4",{id:"callbackerr-videodata"},Object(l.b)("inlineCode",{parentName:"h4"},"callback(err, videoData)")),Object(l.b)("p",null,"Callback function that provides the video data"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"err")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"error string, ",Object(l.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"imageData.localURI")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Local URI for the captured video")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"imageData.path")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Full path for the captured video")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"imageData.url")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"upload")," was passed, this URL points to the uploaded video")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"imageData.trimmed")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"If ",Object(l.b)("inlineCode",{parentName:"td"},"duration")," was passed, but the device does not support it, the video will be trimmed")))),Object(l.b)("hr",null))}d.isMDXComponent=!0},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,s=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(s,b(b({ref:t},o),{},{components:a})):r.a.createElement(s,b({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);