(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(8),i=(n(0),n(176)),b={id:"navigation",title:"Navigation",sidebar_label:"Navigation",description:null,keywords:["buildfire","navigation"],slug:"/navigation"},r={unversionedId:"navigation",id:"navigation",isDocsHomePage:!1,title:"Navigation",description:"buildfire.navigation",source:"@site/docs/Navigation.md",slug:"/navigation",permalink:"/docs/navigation",version:"current",sidebar_label:"Navigation",sidebar:"api",previous:{title:"Breadcrumbs",permalink:"/docs/breadcrumbs"},next:{title:"Share Links and Deep Linking",permalink:"/docs/share-links-and-deep-linking"}},c=[{value:"Methods",id:"methods",children:[{value:'<code>navigateTo()</code> <div class="label control"></div><div class="label widget"></div>',id:"navigateto",children:[]},{value:'<code>navigateToSocialWall()</code> <div class="label control"></div><div class="label widget"></div>',id:"navigatetosocialwall",children:[]},{value:'<code>navigateHome()</code> <div class="label control"></div><div class="label widget"></div>',id:"navigatehome",children:[]},{value:'<code>openWindow()</code> <div class="label control"></div><div class="label widget"></div>',id:"openwindow",children:[]},{value:'<code>onBackButtonClick()</code> <div class="label control"></div><div class="label widget"></div>',id:"onbackbuttonclick",children:[]},{value:'<code>restoreBackButtonClick()</code> <div class="label control"></div><div class="label widget"></div>',id:"restorebackbuttonclick",children:[]},{value:'<code>goBack()</code> <div class="label control"></div><div class="label widget"></div>',id:"goback",children:[]},{value:'<code>makeSafeLinks()</code> <div class="label control"></div><div class="label widget"></div>',id:"makesafelinks",children:[]},{value:'<code>scrollTop()</code> <div class="label control"></div><div class="label widget"></div>',id:"scrolltop",children:[]},{value:'<code>navigateToTab()</code> <div class="label control"></div>',id:"navigatetotab",children:[]}]}],o={toc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"buildfirenavigation"},Object(i.b)("inlineCode",{parentName:"h1"},"buildfire.navigation")),Object(i.b)("p",null,"Navigate to other plugins, home, or even an external web page."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"navigateto"},Object(i.b)("inlineCode",{parentName:"h3"},"navigateTo()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.navigateTo(pluginData)")),Object(i.b)("p",null,"Use this method to navigate away to a different plugin. This is used commonly in Launcher or Folder type plugins."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.navigation.navigateTo({\n  instanceId: "YOUR_INSTNACE_ID_HERE",\n});\n')),Object(i.b)("h4",{id:"plugindata"},Object(i.b)("inlineCode",{parentName:"h4"},"pluginData")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pluginId")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"yes if there is no instanceId"),Object(i.b)("td",{parentName:"tr",align:null},"The id of the plugin type you'd like to navigate to."),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"instanceId")),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"Instance id of the plugin type you'd like to navigate to."),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"folderName")),Object(i.b)("td",{parentName:"tr",align:null},"number"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"The folder name of the plugin that you'd like to navigate to."),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"The title that should show up in the title bar once the plugin is loaded."),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"queryString")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"Query string that will be passed to the next plugin's ",Object(i.b)("inlineCode",{parentName:"td"},"window.location.search"),' ex` "name=Larry&age=36&showDetails=true"'),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"At minimum either the plugin id or the instance id must be provided. If a plugin id is passed without an instance id then the first instance of the specified plugin type will be navigated to."))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"navigatetosocialwall"},Object(i.b)("inlineCode",{parentName:"h3"},"navigateToSocialWall()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.navigateToSocialWall(options, callback)")),Object(i.b)("p",null,"This method is quick shortcut to navigate to community wall plugins without having to specify the community wall plugin type id. A common use for it is to navigate to any social wall instance without having to specify an instance id or a plugin type id.\nIf no community wall instance is found, it will try to look for a premium social wall instance. If not, lastly will check for a social wall instance."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.navigation.navigateToSocialWall(\n  {\n    title: "Wall title",\n  },\n  (err, result) => {\n    if (err) return console.error(err);\n\n    console.log("NAVIGATION FINISHED");\n  }\n);\n')),Object(i.b)("h4",{id:"options"},Object(i.b)("inlineCode",{parentName:"h4"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"The title that should show up in the title bar once the plugin is loaded."),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"queryString")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"Query string that will be passed to the next plugin's ",Object(i.b)("inlineCode",{parentName:"td"},"window.location.search")),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"wallUserIds")),Object(i.b)("td",{parentName:"tr",align:null},"[string]"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"Array of user ids you want to create a wall id for, where the generated wall id for social users will be appended to the ",Object(i.b)("inlineCode",{parentName:"td"},"options.querystring")),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"pluginTypeOrder")),Object(i.b)("td",{parentName:"tr",align:null},"[string]"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"The developer can use this option to change the default order we will be using to look for instances based on the type (",Object(i.b)("em",{parentName:"td"},"community wall")," => ",Object(i.b)("em",{parentName:"td"},"premium social wall")," => ",Object(i.b)("em",{parentName:"td"},"social wall"),"). Index 0 has the highest priority."),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"['community', 'premium_social', 'social']"))))),Object(i.b)("h4",{id:"callbackerr-result"},Object(i.b)("inlineCode",{parentName:"h4"},"callback(err, result)")),Object(i.b)("p",null,"Callback function after navigation is finished"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"err")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Error string, ",Object(i.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"result")),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},'{ status: "completed" }'))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"navigatehome"},Object(i.b)("inlineCode",{parentName:"h3"},"navigateHome()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.navigateHome()")),Object(i.b)("p",null,"Closes out the current plugin and navigates to the Home Plugin."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.navigation.navigateHome();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"openwindow"},Object(i.b)("inlineCode",{parentName:"h3"},"openWindow()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.openWindow(url, target, callback)")),Object(i.b)("p",null,"Opens a web page in the app browser or in the system browser"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.navigation.openWindow("https://google.com", "_system");\n')),Object(i.b)("h4",{id:"options-1"},Object(i.b)("inlineCode",{parentName:"h4"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"url")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"yes"),Object(i.b)("td",{parentName:"tr",align:null},"The url of the web page you'd like to open"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"target")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"_blank")," - opens in app browser, or ",Object(i.b)("inlineCode",{parentName:"td"},"_system")," opens in system browser"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"_blank"))))),Object(i.b)("h4",{id:"callbackerr"},Object(i.b)("inlineCode",{parentName:"h4"},"callback(err)")),Object(i.b)("p",null,"Callback function when the window closes on widget side. Will fire immediately on Control side"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"onbackbuttonclick"},Object(i.b)("inlineCode",{parentName:"h3"},"onBackButtonClick()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.onBackButtonClick()")),Object(i.b)("p",null,"This handler will be called when the user clicks on the back button on the title bar or hits the back button on their phone (if applicable). You can override this handler to modify they behavior within your own plugin."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.navigation.onBackButtonClick = () => {\n  console.log("BACK BUTTON CLICKED");\n};\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"restorebackbuttonclick"},Object(i.b)("inlineCode",{parentName:"h3"},"restoreBackButtonClick()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.restoreBackButtonClick()")),Object(i.b)("p",null,"This function will restore the original functionality of ",Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.onBackButtonClick")," if it was overridden."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.navigation.restoreBackButtonClick();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"goback"},Object(i.b)("inlineCode",{parentName:"h3"},"goBack()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.goBack()")),Object(i.b)("p",null,"This function will trigger the Back functionality."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.navigation.goBack();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"makesafelinks"},Object(i.b)("inlineCode",{parentName:"h3"},"makeSafeLinks()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.makeSafeLinks(element)")),Object(i.b)("p",null,"Parses the external links and makes them open up in In App Browser, otherwise a link will open in the app itself and the user can't find a way to go back to the app. This is used commonly after assigning the data from WYSIWYG control in your widget."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.navigation.makeSafeLinks("my_container_div");\n')),Object(i.b)("h4",{id:"element"},Object(i.b)("inlineCode",{parentName:"h4"},"element")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"element")),Object(i.b)("td",{parentName:"tr",align:null},"string or ",Object(i.b)("inlineCode",{parentName:"td"},"Element")),Object(i.b)("td",{parentName:"tr",align:null},"yes"),Object(i.b)("td",{parentName:"tr",align:null},"Id of the container element, or the element itself"),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h4",{id:"more-examples"},"More Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'let element = document.getElementById("my_container_div");\nbuildfire.navigation.makeSafeLinks(element);\n')),Object(i.b)("hr",null),Object(i.b)("h3",{id:"scrolltop"},Object(i.b)("inlineCode",{parentName:"h3"},"scrollTop()")," ",Object(i.b)("div",{class:"label control"}),Object(i.b)("div",{class:"label widget"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.scrollTop()")),Object(i.b)("p",null,"Use this method to have the containing Control Panel page to scroll up to the top. This is usually used when hiding and showing content in the plugin that may cause the page to scroll down further than the content."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.navigation.scrollTop();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"navigatetotab"},Object(i.b)("inlineCode",{parentName:"h3"},"navigateToTab()")," ",Object(i.b)("div",{class:"label control"})),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"buildfire.navigation.navigateToTab(options, callback)")),Object(i.b)("p",null,"This method provides the users a way to navigate the CP's tabs through the SDK, with the ability to pass deeplink data."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.navigation.navigateToTab(\n  {\n    tabTitle: "Content",\n    deeplinkData: { username: "John"}\n  },\n  (err) => {\n    if (err) return console.error(err); // `Content` tab was not found\n\n    console.log("NAVIGATION FINISHED");\n  }\n);\n')),Object(i.b)("h4",{id:"options-2"},Object(i.b)("inlineCode",{parentName:"h4"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"tabTitle")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"yes"),Object(i.b)("td",{parentName:"tr",align:null},"The title of the tab that the user wants to navigate to, this is case insensitive."),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"deeplinkData")),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"no"),Object(i.b)("td",{parentName:"tr",align:null},"An object which contains the deeplink data the user wants to pass to the opened tab."),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h4",{id:"callbackerr-1"},Object(i.b)("inlineCode",{parentName:"h4"},"callback(err)")),Object(i.b)("p",null,"Callback function after navigation is finished"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"err")),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"Error string, ",Object(i.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")))),Object(i.b)("hr",null))}d.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),d=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(b,".").concat(u)]||p[u]||s[u]||i;return n?l.a.createElement(m,r(r({ref:t},o),{},{components:n})):l.a.createElement(m,r({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,b[1]=r;for(var o=2;o<i;o++)b[o]=n[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);