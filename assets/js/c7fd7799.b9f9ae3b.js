(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(8),r=(n(0),n(176)),i={id:"file-system",title:"File System",sidebar_label:"File System",description:null,keywords:["buildfire","file","system","services"],slug:"/file-system"},b={unversionedId:"file-system",id:"file-system",isDocsHomePage:!1,title:"File System",description:"buildfire.services.fileSystem.fileManager",source:"@site/docs/File-System.md",slug:"/file-system",permalink:"/docs/file-system",version:"current",sidebar_label:"File System",sidebar:"services",previous:{title:"Background Services",permalink:"/docs/background-services"},next:{title:"Local Notifications",permalink:"/docs/local-notifications"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Widget",id:"widget",children:[]}]},{value:"Methods",id:"methods",children:[{value:'<code>download()</code> <div class="label widget"></div>',id:"download",children:[]},{value:'<code>readFileAsText()</code> <div class="label widget"></div>',id:"readfileastext",children:[]},{value:'<code>writeFileAsText()</code> <div class="label widget"></div>',id:"writefileastext",children:[]},{value:'<code>deleteFile()</code> <div class="label widget"></div>',id:"deletefile",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"buildfireservicesfilesystemfilemanager"},Object(r.b)("inlineCode",{parentName:"h1"},"buildfire.services.fileSystem.fileManager")),Object(r.b)("p",null,"The File System Service provides secure access to the file system."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This service works only on devices"))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("h3",{id:"widget"},"Widget"),Object(r.b)("p",null,"Include ",Object(r.b)("inlineCode",{parentName:"p"},"fileManager.js")," file in widget header, after the ",Object(r.b)("inlineCode",{parentName:"p"},"buildfire.min.js")," tag."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/services/fileSystem/fileManager.js"><\/script>\n</head>\n')),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"download"},Object(r.b)("inlineCode",{parentName:"h3"},"download()")," ",Object(r.b)("div",{class:"label widget"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.download(options, callback)")),Object(r.b)("p",null,"This method allows you to download a file from a URI to the local persistent file system"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.download(\n  {\n    uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",\n    path: "/data/images",\n    fileName: "image.jpg",\n  },\n  (err, filePath) => {\n    if (err) return console.error(err);\n\n    console.log("Downloaded File to ", filePath);\n  }\n);\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can add ",Object(r.b)("inlineCode",{parentName:"p"},"onProgress")," parameter to track the file download progress."))),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.download(options, onProgress, callback)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.download(\n  {\n    uri: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",\n    path: "/data/images",\n    fileName: "image.jpg",\n  },\n  (onProgress) => {\n      console.log("onProgress" + JSON.stringify(onProgress));\n  },\n  (err, filePath) => {\n    if (err) return console.error(err);\n\n    console.log("Downloaded File to ", filePath);\n  }\n);\n')),Object(r.b)("h4",{id:"options"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"uri")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Url of the file to download to the local filesystem, ex. ",Object(r.b)("inlineCode",{parentName:"td"},"https://.../image.png")),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Destination path for the file, ex. ",Object(r.b)("inlineCode",{parentName:"td"},"/cache/images")),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fileName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"The name of downloaded file"),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("h4",{id:"onprogress"},Object(r.b)("inlineCode",{parentName:"h4"},"onProgress")),Object(r.b)("p",null,"Function that will be invoked repeatedly while the operation is in progress, returns a ",Object(r.b)("inlineCode",{parentName:"p"},"percentage")," property representing the current progress of the operation."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onProgress")),Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"Function that will be invoked repeatedly while the operation is in progress, returns a ",Object(r.b)("inlineCode",{parentName:"td"},"percentage")," property representing the current progress of the operation")))),Object(r.b)("hr",null),Object(r.b)("h4",{id:"callbackerr-filepath"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(err, filePath)")),Object(r.b)("p",null,"Callback function that will be called when the download is complete"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"err")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filePath")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"The local path to the downloaded file")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"readfileastext"},Object(r.b)("inlineCode",{parentName:"h3"},"readFileAsText()")," ",Object(r.b)("div",{class:"label widget"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.readFileAsText(options, callback)")),Object(r.b)("p",null,"This method allows you to read a file in the local persistent file system"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.readFileAsText(\n  { path: "/data/people/", fileName: "managers.json" },\n  (err, fileContent) => {\n    if (err) return console.error(err);\n\n    console.log("File content", fileContent);\n  }\n);\n')),Object(r.b)("h4",{id:"options-1"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"File local path"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fileName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the file to read"),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("h4",{id:"callbackerr-filecontent"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(err, fileContent)")),Object(r.b)("p",null,"Callback function after the file has been read"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"err")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fileContent")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Contents of the file")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"writefileastext"},Object(r.b)("inlineCode",{parentName:"h3"},"writeFileAsText()")," ",Object(r.b)("div",{class:"label widget"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.writeFileAsText(options, callback)")),Object(r.b)("p",null,"This method allows you to write to a file in the local persistent file system"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.writeFileAsText(\n  {\n    path: "/data/people/",\n    fileName: "names.txt",\n    content: "Daniel, Isabelle, Christian",\n  },\n  (err, isWritten) => {\n    if (err) return console.error(err);\n\n    console.log("File is written");\n  }\n);\n')),Object(r.b)("h4",{id:"options-2"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"File local path"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fileName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the file to write to"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"content")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Content to write to the file"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"append")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"no"),Object(r.b)("td",{parentName:"tr",align:null},"To append to existing file or overwrite it"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("h4",{id:"callbackerr-iswritten"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(err, isWritten)")),Object(r.b)("p",null,"Callback function after writing to file is complete"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"err")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"isWritten")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Indicates whether writing to file was successful")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"deletefile"},Object(r.b)("inlineCode",{parentName:"h3"},"deleteFile()")," ",Object(r.b)("div",{class:"label widget"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.services.fileSystem.fileManager.deleteFile(options, callback)")),Object(r.b)("p",null,"This method allows you to delete a file in the local persistent file system"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.fileSystem.fileManager.deleteFile(\n  { path: "/data/people/", fileName: "managers.json" },\n  (err, isDeleted) => {\n    if (err) return console.error(err);\n\n    if (isDeleted) console.log("File is deleted");\n  }\n);\n')),Object(r.b)("h4",{id:"options-3"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"path")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"File local path"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fileName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the file to delete"),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("h4",{id:"callbackerr-isdeleted"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(err, isDeleted)")),Object(r.b)("p",null,"Callback function after file is delete"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"err")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"isDeleted")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"Indicates if file was deleted successfully")))),Object(r.b)("hr",null))}d.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),d=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,j=p["".concat(i,".").concat(m)]||p[m]||s[m]||r;return n?l.a.createElement(j,b(b({ref:t},o),{},{components:n})):l.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<r;o++)i[o]=n[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);