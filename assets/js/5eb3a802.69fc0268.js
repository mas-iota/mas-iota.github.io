(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(8),r=(n(0),n(176)),b={id:"plugin-instances",title:"Plugin Instances",sidebar_label:"Plugin Instances",description:null,keywords:["buildfire","instances"],slug:"/plugin-instances"},i={unversionedId:"plugin-instances",id:"plugin-instances",isDocsHomePage:!1,title:"Plugin Instances",description:"buildfire.pluginInstance",source:"@site/docs/Plugin-Instances.md",slug:"/plugin-instances",permalink:"/docs/plugin-instances",version:"current",sidebar_label:"Plugin Instances",sidebar:"api",previous:{title:"Messaging",permalink:"/docs/messaging-to-sync-your-control-to-widget"},next:{title:"Formatting",permalink:"/docs/formatting"}},c=[{value:"What is a plugin instance?",id:"what-is-a-plugin-instance",children:[]},{value:"Methods",id:"methods",children:[{value:'<code>showDialog()</code> <div class="label control"></div>',id:"showdialog",children:[]},{value:'<code>get()</code> <div class="label control"></div> <div class="label widget"></div>',id:"get",children:[]},{value:'<code>search()</code> <div class="label control"></div> <div class="label widget"></div>',id:"search",children:[]},{value:'<code>showCreatePluginInstancesDialog()</code> <div class="label control"></div>',id:"showcreateplugininstancesdialog",children:[]},{value:'<code>create()</code> <div class="label control"></div>',id:"create",children:[]},{value:'<code>clone()</code> <div class="label control"></div>',id:"clone",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"buildfireplugininstance"},Object(r.b)("inlineCode",{parentName:"h1"},"buildfire.pluginInstance")),Object(r.b)("p",null,"This is an object within the ",Object(r.b)("inlineCode",{parentName:"p"},"buildfire")," singleton that is for retrieving other plugins instances that are added to the current app context."),Object(r.b)("h2",{id:"what-is-a-plugin-instance"},"What is a plugin instance?"),Object(r.b)("p",null,"a plugin instance is a new occurrence of a plugin type. For example you can have installed one Text Plugin but have two instances of it.  "),Object(r.b)("p",null,"Typically this is used in launcher or folder type plugins. These types of plugins help the user navigate to other plugins."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Gotchya: Be careful when saving the plugin instances data to your local datastore. The instance may be deleted or modified after your save. ",Object(r.b)("strong",{parentName:"li"},"Use Dynamic Data Injection to get latest data"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"showdialog"},Object(r.b)("inlineCode",{parentName:"h3"},"showDialog()")," ",Object(r.b)("div",{class:"label control"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.pluginInstance.showDialog(options, callback)")),Object(r.b)("p",null,"Used on the control side. This method will display a dialog that allows the user to search and select one or many plugins"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.pluginInstance.showDialog({\n    skipPluginInstances: true\n}, function(error, instances){\n    if (err) {\n        console.error(err);\n    } else if (instances.length > 0) {\n        console.log(instances[0].title);\n    }\n});\n")),Object(r.b)("h4",{id:"options"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"skipPluginInstances")),Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"no"),Object(r.b)("td",{parentName:"tr",align:null},"Shows the create plugin instance dialog directly, without showing the select plugin instances dialog"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("h4",{id:"callbackerror-instances"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(error, instances)")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instances")),Object(r.b)("td",{parentName:"tr",align:null},"array"),Object(r.b)("td",{parentName:"tr",align:null},"Array of selected plugin instances")))),Object(r.b)("h5",{id:"instances"},Object(r.b)("inlineCode",{parentName:"h5"},"instances[]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"folderName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Folder Name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"String url of plugin instance icon")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the plugin")))),Object(r.b)("h3",{id:"get"},Object(r.b)("inlineCode",{parentName:"h3"},"get()")," ",Object(r.b)("div",{class:"label control"})," ",Object(r.b)("div",{class:"label widget"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.pluginInstance.get(instanceId, callback)")),Object(r.b)("p",null,"Will fetch a plugin based on the provided ",Object(r.b)("inlineCode",{parentName:"p"},"instanceId"),"   "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.pluginInstance.get('123', function(error, instance){\n    if (err) {\n        console.error(err);\n    } else if (instance) {\n        console.log(instance.title);\n    }\n});\n")),Object(r.b)("h4",{id:"instanceid"},Object(r.b)("inlineCode",{parentName:"h4"},"instanceId")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier of the plugin to retrieve"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")))),Object(r.b)("h4",{id:"callbackerror-instance"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(error, instance)")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instance")),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Object representing the plugin instance")))),Object(r.b)("h5",{id:"instance"},Object(r.b)("inlineCode",{parentName:"h5"},"instance")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"String url of plugin instance icon")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the plugin")))),Object(r.b)("h3",{id:"search"},Object(r.b)("inlineCode",{parentName:"h3"},"search()")," ",Object(r.b)("div",{class:"label control"})," ",Object(r.b)("div",{class:"label widget"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.pluginInstance.search(options, callback)")),Object(r.b)("p",null,"Will search all the plugins and return results paginated"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.pluginInstance.search({ title: 'myPlugin' }, function(error, instances){\n    if (err) {\n        console.error(err);\n    } else if (instances.length > 0) {\n        console.log(instances[0].title);\n    }\n});\n")),Object(r.b)("h4",{id:"options-1"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"no"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the plugin to search for"),Object(r.b)("td",{parentName:"tr",align:null},"undefined")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pageIndex")),Object(r.b)("td",{parentName:"tr",align:null},"integer"),Object(r.b)("td",{parentName:"tr",align:null},"no"),Object(r.b)("td",{parentName:"tr",align:null},"Page number to return"),Object(r.b)("td",{parentName:"tr",align:null},"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pageSize")),Object(r.b)("td",{parentName:"tr",align:null},"integer"),Object(r.b)("td",{parentName:"tr",align:null},"no"),Object(r.b)("td",{parentName:"tr",align:null},"Entries per page, max 20"),Object(r.b)("td",{parentName:"tr",align:null},"20")))),Object(r.b)("h4",{id:"callbackerror-instances-1"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(error, instances)")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instances")),Object(r.b)("td",{parentName:"tr",align:null},"array"),Object(r.b)("td",{parentName:"tr",align:null},"Array of plugin instances")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"totalRecord")),Object(r.b)("td",{parentName:"tr",align:null},"integer"),Object(r.b)("td",{parentName:"tr",align:null},"Number of results found")))),Object(r.b)("h5",{id:"instances-1"},Object(r.b)("inlineCode",{parentName:"h5"},"instances[]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Object containing plugin instance data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier used by the database")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")))),Object(r.b)("h5",{id:"instancesdata"},Object(r.b)("inlineCode",{parentName:"h5"},"instances[].data")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"String url of plugin instance icon")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the plugin")))),Object(r.b)("h3",{id:"showcreateplugininstancesdialog"},Object(r.b)("inlineCode",{parentName:"h3"},"showCreatePluginInstancesDialog()")," ",Object(r.b)("div",{class:"label control"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.pluginInstance.showCreatePluginInstancesDialog(options, callback)")),Object(r.b)("p",null,"Used on the control side. This method will display a dialog that allows the user to add a new plugin instance of a specific type, and return that plugin instance to the caller"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"buildfire.pluginInstance.showCreatePluginInstancesDialog(function(error, instances){\n    if (error) {\n        console.error(error);\n    } else if (instances.length > 0) {\n        console.log(instances[0].title);\n    }\n});\n")),Object(r.b)("h4",{id:"callbackerror-instances-2"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(error, instances)")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instances")),Object(r.b)("td",{parentName:"tr",align:null},"array"),Object(r.b)("td",{parentName:"tr",align:null},"Array of selected plugin instances")))),Object(r.b)("h5",{id:"instances-2"},Object(r.b)("inlineCode",{parentName:"h5"},"instances[]")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"folderName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Folder Name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"String url of plugin instance icon")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the plugin")))),Object(r.b)("h3",{id:"create"},Object(r.b)("inlineCode",{parentName:"h3"},"create()")," ",Object(r.b)("div",{class:"label control"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.pluginInstance.create(options, callback)")),Object(r.b)("p",null,"This method allows the user to directly install a plugin from the marketplace without interaction with marketplace"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.pluginInstance.create({\n    pluginTypeName: "Folder",\n    newPluginTitle: "My Folder"\n}, function (error, instance){\n    if (error) { \n        console.error(error); \n    } else {\n        console.log(instance.title);\n    }\n});\n')),Object(r.b)("h4",{id:"options-2"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"marketplace plugin type name - ",Object(r.b)("em",{parentName:"td"},"must be the exact plugin type name, but not case sensitive")),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"newPluginTitle")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"New plugin instance name"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")))),Object(r.b)("h4",{id:"callbackerror-instance-1"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(error, instance)")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instance")),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Object containing new plugin instance data")))),Object(r.b)("h5",{id:"instance-1"},Object(r.b)("inlineCode",{parentName:"h5"},"instance")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the new plugin instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"token")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Token for the original plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"folderName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Folder name of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"refId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Reference id of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconClassName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Icon class name of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Icon URL of the new plugin")))),Object(r.b)("h3",{id:"clone"},Object(r.b)("inlineCode",{parentName:"h3"},"clone()")," ",Object(r.b)("div",{class:"label control"})),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"buildfire.pluginInstance.clone(options, callback)")),Object(r.b)("p",null,"This method allows the user to clone an existing plugin within the app, it searches the installed plugins on the app and clones the closest plugin it finds to the provided pluginTitle. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const options = ;\nbuildfire.pluginInstance.clone({\n    pluginTitle: "My Folders",\n    newPluginTitle: "Shared Folders"\n}, function (err, instance) {\n    if (err) { \n        console.error(err); \n    } else {\n        console.log(instance);\n    };\n});\n')),Object(r.b)("h4",{id:"options-3"},Object(r.b)("inlineCode",{parentName:"h4"},"options")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTitle")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"Existing plugin title installed on the app"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"newPluginTitle")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"yes"),Object(r.b)("td",{parentName:"tr",align:null},"New plugin instance name"),Object(r.b)("td",{parentName:"tr",align:null},"N/A")))),Object(r.b)("h4",{id:"callbackerror-instance-2"},Object(r.b)("inlineCode",{parentName:"h4"},"callback(error, instance)")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"error")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Error string, ",Object(r.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instance")),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Object containing new plugin instance data")))),Object(r.b)("h5",{id:"instance-2"},Object(r.b)("inlineCode",{parentName:"h5"},"instance")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"instanceId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the new plugin instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Unique identifier for the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"pluginTypeName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Name of the plugin type")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"title")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Title of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"token")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Token for the original plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"folderName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Folder name of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"refId")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Reference id of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconClassName")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Icon class name of the new plugin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"iconUrl")),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Icon URL of the new plugin")))))}d.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),d=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=d(n),m=a,j=o["".concat(b,".").concat(m)]||o[m]||u[m]||r;return n?l.a.createElement(j,i(i({ref:t},p),{},{components:n})):l.a.createElement(j,i({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,b=new Array(r);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<r;p++)b[p]=n[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);