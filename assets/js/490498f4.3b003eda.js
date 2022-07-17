(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),l=n(8),b=(n(0),n(176)),r={id:"low-energy-bluetooth",title:"Low Energy Bluetooth (BLE)",sidebar_label:"Low Energy Bluetooth (BLE)",description:null,keywords:["buildfire","low","energy","bluetooth","ble","service"],slug:"/low-energy-bluetooth"},i={unversionedId:"low-energy-bluetooth",id:"low-energy-bluetooth",isDocsHomePage:!1,title:"Low Energy Bluetooth (BLE)",description:"buildfire.services.bluetooth.ble",source:"@site/docs/Low-Energy-Bluetooth.md",slug:"/low-energy-bluetooth",permalink:"/docs/low-energy-bluetooth",version:"current",sidebar_label:"Low Energy Bluetooth (BLE)",sidebar:"services",previous:{title:"iBeacon Bluetooth",permalink:"/docs/ibeacon-bluetooth"},next:{title:"Camera Service",permalink:"/docs/camera"}},c=[{value:"Requirements",id:"requirements",children:[{value:"Widget",id:"widget",children:[]},{value:"<code>plugin.json</code>",id:"pluginjson",children:[]}]},{value:"Methods",id:"methods",children:[{value:'<code>connect()</code> <div class="label widget"></div>',id:"connect",children:[]},{value:'<code>disconnect()</code> <div class="label widget"></div>',id:"disconnect",children:[]},{value:'<code>listPairedDevices()</code> <div class="label widget"></div>',id:"listpaireddevices",children:[]},{value:'<code>write()</code> <div class="label widget"></div>',id:"write",children:[]},{value:'<code>available()</code> <div class="label widget"></div>',id:"available",children:[]},{value:'<code>read()</code> <div class="label widget"></div>',id:"read",children:[]},{value:'<code>readUntil()</code> <div class="label widget"></div>',id:"readuntil",children:[]},{value:'<code>subscribe()</code> <div class="label widget"></div>',id:"subscribe",children:[]},{value:'<code>unsubscribe()</code> <div class="label widget"></div>',id:"unsubscribe",children:[]},{value:'<code>clear()</code> <div class="label widget"></div>',id:"clear",children:[]},{value:'<code>isConnected()</code> <div class="label widget"></div>',id:"isconnected",children:[]},{value:'<code>isEnabled()</code> <div class="label widget"></div>',id:"isenabled",children:[]}]},{value:"Events",id:"events",children:[{value:'<code>onConnect()</code> <div class="label widget"></div>',id:"onconnect",children:[]},{value:'<code>onDisconnect()</code> <div class="label widget"></div>',id:"ondisconnect",children:[]}]}],d={toc:c};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"buildfireservicesbluetoothble"},Object(b.b)("inlineCode",{parentName:"h1"},"buildfire.services.bluetooth.ble")),Object(b.b)("p",null,"This is a service that allows your widget to link to the devices bluetooth signal and paired devices. This is very useful when developing for IoT (Internet of Things)"),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Info")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This service works only on devices"))),Object(b.b)("h2",{id:"requirements"},"Requirements"),Object(b.b)("h3",{id:"widget"},"Widget"),Object(b.b)("p",null,"Include ",Object(b.b)("inlineCode",{parentName:"p"},"ble.js")," file in widget header right after the ",Object(b.b)("inlineCode",{parentName:"p"},"buildfire.min.js")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-html"},'<head>\n  \x3c!-- ... --\x3e\n  <script src="../../../scripts/buildfire.min.js"><\/script>\n  <script src="../../../scripts/buildfire/services/bluetooth/ble.js"><\/script>\n</head>\n')),Object(b.b)("h3",{id:"pluginjson"},Object(b.b)("inlineCode",{parentName:"h3"},"plugin.json")),Object(b.b)("p",null,"In ",Object(b.b)("a",{parentName:"p",href:"/docs/plugin-json-file"},"plugin.json")," add ",Object(b.b)("inlineCode",{parentName:"p"},"Bluetooth")," in your features array ",Object(b.b)("inlineCode",{parentName:"p"},'"features" : [{"name" : "Bluetooth"}]')),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"connect"},Object(b.b)("inlineCode",{parentName:"h3"},"connect()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.connect(deviceId, callback)")),Object(b.b)("p",null,"Use this method to connect to the device"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.connect(deviceId, (err, data) => {\n  if (err) return console.error(err);\n\n  console.log("Connected to device from device");\n});\n')),Object(b.b)("h4",{id:"deviceid"},Object(b.b)("inlineCode",{parentName:"h4"},"deviceId")),Object(b.b)("p",null,"The device Id you received from the paired device list"),Object(b.b)("h4",{id:"callbackerr-data"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, data)")),Object(b.b)("p",null,"Callback function after device is connected or failed to connect"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},"object"),Object(b.b)("td",{parentName:"tr",align:null},"Device connected")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"disconnect"},Object(b.b)("inlineCode",{parentName:"h3"},"disconnect()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.disconnect(callback)")),Object(b.b)("p",null,"Use this method to disconnect the device"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.disconnect((err, data) => {\n  if (err) return console.error(err);\n\n  console.log("Disconnected from device");\n});\n')),Object(b.b)("h4",{id:"callbackerr-data-1"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, data)")),Object(b.b)("p",null,"Callback function after device is disconnected or failed to disconnect"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},"object"),Object(b.b)("td",{parentName:"tr",align:null},"Device disconnected")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"listpaireddevices"},Object(b.b)("inlineCode",{parentName:"h3"},"listPairedDevices()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.listPairedDevices(callback)")),Object(b.b)("p",null,"Use this method to get a list of paired bluetooth devices"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.listPairedDevices((err, pairedDevices) => {\n  if (err) return console.error(err);\n\n  console.log("Paired devices", pairedDevices);\n});\n')),Object(b.b)("h4",{id:"callbackerr-paireddevices"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, pairedDevices)")),Object(b.b)("p",null,"Callback function after getting the list of paired devices"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"pairedDevices")),Object(b.b)("td",{parentName:"tr",align:null},"[object]"),Object(b.b)("td",{parentName:"tr",align:null},"Array of objects containing ",Object(b.b)("inlineCode",{parentName:"td"},"deviceId"))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"write"},Object(b.b)("inlineCode",{parentName:"h3"},"write()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.write(data, callback)")),Object(b.b)("p",null,"Use this method to send data to the device"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.write("Hi there", (err, data) => {\n  if (err) return console.error(err);\n\n  console.log("Written to device.");\n});\n')),Object(b.b)("h4",{id:"callbackerr-paireddevices-1"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, pairedDevices)")),Object(b.b)("p",null,"Callback function after writing data"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:null},"object"),Object(b.b)("td",{parentName:"tr",align:null})))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"available"},Object(b.b)("inlineCode",{parentName:"h3"},"available()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.available(callback)")),Object(b.b)("p",null,"Use this method to check if device is available"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.available((err, isAvailable) => {\n  if (err) return console.error(err);\n\n  console.log("Device", isAvailable ? "is" : "is not", "available");\n});\n')),Object(b.b)("h4",{id:"callbackerr-isavailable"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, isAvailable)")),Object(b.b)("p",null,"Callback function after checking device availability"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"isAvailable")),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"Indicating if device is available")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"read"},Object(b.b)("inlineCode",{parentName:"h3"},"read()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.read(callback)")),Object(b.b)("p",null,"Use this method to read the buffer from bluetooth"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.read((err, buffer) => {\n  if (err) return console.error(err);\n\n  console.log("Read data", buffer);\n});\n')),Object(b.b)("h4",{id:"callbackerr-buffer"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, buffer)")),Object(b.b)("p",null,"Callback function after reading data"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"buffer")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Read data")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"readuntil"},Object(b.b)("inlineCode",{parentName:"h3"},"readUntil()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.readUntil(terminator, callback)")),Object(b.b)("p",null,"Use this method to read from the buffer until the terminator is found. For example if the terminator equals ",Object(b.b)("inlineCode",{parentName:"p"},",")," it will continue to read until it finds the next comma."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.readUntil(",", (err, buffer) => {\n  console.log(err, buffer);\n});\n')),Object(b.b)("h4",{id:"callbackerr-buffer-1"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, buffer)")),Object(b.b)("p",null,"Callback function reading is done"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"buffer")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Read buffer")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"subscribe"},Object(b.b)("inlineCode",{parentName:"h3"},"subscribe()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.subscribe(terminator, callback)")),Object(b.b)("p",null,"Will automatically send you the buffer when the terminator if found."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.subscribe(",", (err, buffer) => {\n  console.log(err, buffer);\n});\n')),Object(b.b)("h4",{id:"callbackerr-buffer-2"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, buffer)")),Object(b.b)("p",null,"Callback function after reading data"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"buffer")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Read data")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unsubscribe"},Object(b.b)("inlineCode",{parentName:"h3"},"unsubscribe()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.unsubscribe(terminator, callback)")),Object(b.b)("p",null,"Will unsubscribe from device"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.unsubscribe((err) => {\n  if (err) return console.error(err);\n\n  console.log("Unsubscribed from device");\n});\n')),Object(b.b)("h4",{id:"callbackerr-buffer-3"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, buffer)")),Object(b.b)("p",null,"Callback function after device is unsubscribed"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"clear"},Object(b.b)("inlineCode",{parentName:"h3"},"clear()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.clear(callback)")),Object(b.b)("p",null,"Use this method to clear the buffer"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.clear((err) => {\n  if (err) return console.error(err);\n\n  console.log("Buffer is cleared");\n});\n')),Object(b.b)("h4",{id:"callbackerr-buffer-4"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, buffer)")),Object(b.b)("p",null,"Callback function after device is disconnected or failed to disconnect"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isconnected"},Object(b.b)("inlineCode",{parentName:"h3"},"isConnected()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.isConnected(callback)")),Object(b.b)("p",null,"Use this method to check if the connection is still alive"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.isConnected((err, isConnected) => {\n  if (err) return console.error(err);\n\n  console.log("Device", isConnected ? "is" : "is not", "connected");\n});\n')),Object(b.b)("h4",{id:"callbackerr-isconnected"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, isConnected)")),Object(b.b)("p",null,"Callback function after checking connection"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"isConnected")),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"Indicates if connection is still alive")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isenabled"},Object(b.b)("inlineCode",{parentName:"h3"},"isEnabled()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.isEnabled(callback)")),Object(b.b)("p",null,"Use this method to check if bluetooth is enabled"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'buildfire.services.bluetooth.ble.isEnabled((err, isEnabled) => {\n  if (err) return console.error(err);\n\n  console.log("Bluetooth", isEnabled ? "is" : "is not", "enabled");\n});\n')),Object(b.b)("h4",{id:"callbackerr-isenabled"},Object(b.b)("inlineCode",{parentName:"h4"},"callback(err, isEnabled)")),Object(b.b)("p",null,"Callback function after checking if bluetooth is enabled"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"err")),Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"error string, ",Object(b.b)("inlineCode",{parentName:"td"},"null")," when operation is successful")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"isEnabled")),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"Indicates if bluetooth is enabled")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"events"},"Events"),Object(b.b)("h3",{id:"onconnect"},Object(b.b)("inlineCode",{parentName:"h3"},"onConnect()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.onConnect()")),Object(b.b)("p",null,"Gets called when connection is established. Override this method with your handler"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'const handleOnConnect = () => {\n  console.log("Device is connected");\n};\n\nbuildfire.services.bluetooth.ble.onConnect = handleOnConnect;\n')),Object(b.b)("h3",{id:"ondisconnect"},Object(b.b)("inlineCode",{parentName:"h3"},"onDisconnect()")," ",Object(b.b)("div",{class:"label widget"})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"buildfire.services.bluetooth.ble.onDisconnect()")),Object(b.b)("p",null,"Gets called when connection is severed. Override this method with your handler"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-javascript"},'const handleOnDisconnect = () => {\n  console.log("Device is disconnected");\n};\n\nbuildfire.services.bluetooth.ble.onDisconnect = handleOnDisconnect;\n')))}o.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=l.a.createContext({}),o=function(e){var t=l.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return l.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=o(n),p=a,j=s["".concat(r,".").concat(p)]||s[p]||u[p]||b;return n?l.a.createElement(j,i(i({ref:t},d),{},{components:n})):l.a.createElement(j,i({ref:t},d))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var d=2;d<b;d++)r[d]=n[d];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);