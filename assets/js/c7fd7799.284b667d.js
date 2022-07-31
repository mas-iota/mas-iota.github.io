"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=l,c=k["".concat(d,".").concat(u)]||k[u]||m[u]||r;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={id:"file-system",title:"File System",sidebar_label:"File System",keywords:["buildfire","file","system","services"],slug:"/file-system"},i="buildfire.services.fileSystem.fileManager",o={unversionedId:"file-system",id:"file-system",title:"File System",description:"The File System Service provides secure access to the file system.",source:"@site/docs/File-System.md",sourceDirName:".",slug:"/file-system",permalink:"/docs/file-system",draft:!1,tags:[],version:"current",frontMatter:{id:"file-system",title:"File System",sidebar_label:"File System",keywords:["buildfire","file","system","services"],slug:"/file-system"},sidebar:"services",previous:{title:"Background Services",permalink:"/docs/background-services"},next:{title:"Local Notifications",permalink:"/docs/local-notifications"}},d={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Widget",id:"widget",level:3},{value:"Methods",id:"methods",level:2},{value:'<code>download()</code> <div class="label widget"></div>',id:"download-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>onProgress</code>",id:"onprogress",level:4},{value:"<code>callback(err, filePath)</code>",id:"callbackerr-filepath",level:4},{value:'<code>readFileAsText()</code> <div class="label widget"></div>',id:"readfileastext-",level:3},{value:"<code>options</code>",id:"options-1",level:4},{value:"<code>callback(err, fileContent)</code>",id:"callbackerr-filecontent",level:4},{value:'<code>writeFileAsText()</code> <div class="label widget"></div>',id:"writefileastext-",level:3},{value:"<code>options</code>",id:"options-2",level:4},{value:"<code>callback(err, isWritten)</code>",id:"callbackerr-iswritten",level:4},{value:'<code>deleteFile()</code> <div class="label widget"></div>',id:"deletefile-",level:3},{value:"<code>options</code>",id:"options-3",level:4},{value:"<code>callback(err, isDeleted)</code>",id:"callbackerr-isdeleted",level:4}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"buildfireservicesfilesystemfilemanager"},(0,l.kt)("inlineCode",{parentName:"h1"},"buildfire.services.fileSystem.fileManager")),(0,l.kt)("p",null,"The File System Service provides secure access to the file system."),(0,l.kt)("admonition",{title:"Info",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This service works only on devices")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("h3",{id:"widget"},"Widget"),(0,l.kt)("p",null,"Include ",(0,l.kt)("inlineCode",{parentName:"p"},"fileManager.js")," file in widget header, after the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.min.js")," tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/services/fileSystem/fileManager.js"><\/script>\n</head>\n')),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"download-"},(0,l.kt)("inlineCode",{parentName:"h3"},"download()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.download(options, callback)")),(0,l.kt)("p",null,"This method allows you to download a file from a URI to the local persistent file system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.download(\n  {\n    uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",\n    path: "/data/images",\n    fileName: "image.jpg",\n  },\n  (err, filePath) => {\n    if (err) return console.error(err);\n\n    console.log("Downloaded File to ", filePath);\n  }\n);\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can add ",(0,l.kt)("inlineCode",{parentName:"p"},"onProgress")," parameter to track the file download progress.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.download(options, onProgress, callback)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.download(\n  {\n    uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",\n    path: "/data/images",\n    fileName: "image.jpg",\n  },\n  (onProgress) => {\n      console.log("onProgress" + JSON.stringify(onProgress));\n  },\n  (err, filePath) => {\n    if (err) return console.error(err);\n\n    console.log("Downloaded File to ", filePath);\n  }\n);\n')),(0,l.kt)("h4",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Url of the file to download to the local filesystem, ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"https://.../image.png")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Destination path for the file, ex. ",(0,l.kt)("inlineCode",{parentName:"td"},"/cache/images")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of downloaded file"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"onprogress"},(0,l.kt)("inlineCode",{parentName:"h4"},"onProgress")),(0,l.kt)("p",null,"Function that will be invoked repeatedly while the operation is in progress, returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"percentage")," property representing the current progress of the operation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onProgress")),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Function that will be invoked repeatedly while the operation is in progress, returns a ",(0,l.kt)("inlineCode",{parentName:"td"},"percentage")," property representing the current progress of the operation")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"callbackerr-filepath"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, filePath)")),(0,l.kt)("p",null,"Callback function that will be called when the download is complete"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filePath")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The local path to the downloaded file")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"readfileastext-"},(0,l.kt)("inlineCode",{parentName:"h3"},"readFileAsText()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.readFileAsText(options, callback)")),(0,l.kt)("p",null,"This method allows you to read a file in the local persistent file system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.readFileAsText(\n  { path: "/data/people/", fileName: "managers.json" },\n  (err, fileContent) => {\n    if (err) return console.error(err);\n\n    console.log("File content", fileContent);\n  }\n);\n')),(0,l.kt)("h4",{id:"options-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"File local path"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file to read"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackerr-filecontent"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, fileContent)")),(0,l.kt)("p",null,"Callback function after the file has been read"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileContent")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Contents of the file")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"writefileastext-"},(0,l.kt)("inlineCode",{parentName:"h3"},"writeFileAsText()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.writeFileAsText(options, callback)")),(0,l.kt)("p",null,"This method allows you to write to a file in the local persistent file system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.writeFileAsText(\n  {\n    path: "/data/people/",\n    fileName: "names.txt",\n    content: "Daniel, Isabelle, Christian",\n  },\n  (err, isWritten) => {\n    if (err) return console.error(err);\n\n    console.log("File is written");\n  }\n);\n')),(0,l.kt)("h4",{id:"options-2"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"File local path"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file to write to"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Content to write to the file"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"append")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"To append to existing file or overwrite it"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))))),(0,l.kt)("h4",{id:"callbackerr-iswritten"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, isWritten)")),(0,l.kt)("p",null,"Callback function after writing to file is complete"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isWritten")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether writing to file was successful")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"deletefile-"},(0,l.kt)("inlineCode",{parentName:"h3"},"deleteFile()")," ",(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.deleteFile(options, callback)")),(0,l.kt)("p",null,"This method allows you to delete a file in the local persistent file system"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.deleteFile(\n  { path: "/data/people/", fileName: "managers.json" },\n  (err, isDeleted) => {\n    if (err) return console.error(err);\n\n    if (isDeleted) console.log("File is deleted");\n  }\n);\n')),(0,l.kt)("h4",{id:"options-3"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"File local path"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file to delete"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackerr-isdeleted"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, isDeleted)")),(0,l.kt)("p",null,"Callback function after file is delete"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDeleted")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates if file was deleted successfully")))),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);