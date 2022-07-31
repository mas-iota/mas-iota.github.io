"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2858],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=l,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||r;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9614:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={id:"geo-location-gps-feature",title:"Geo Location (GPS) Feature",sidebar_label:"Geo Location (GPS) Feature",keywords:["buildfire","geo","location","geolocation","service","gps","tracking"],slug:"/geo-location-gps-feature"},i="buildfire.geo",o={unversionedId:"geo-location-gps-feature",id:"geo-location-gps-feature",title:"Geo Location (GPS) Feature",description:"This service lets you access users location. It helps request and watch the location of the device.",source:"@site/docs/Geo-Location-GPS.md",sourceDirName:".",slug:"/geo-location-gps-feature",permalink:"/docs/geo-location-gps-feature",draft:!1,tags:[],version:"current",frontMatter:{id:"geo-location-gps-feature",title:"Geo Location (GPS) Feature",sidebar_label:"Geo Location (GPS) Feature",keywords:["buildfire","geo","location","geolocation","service","gps","tracking"],slug:"/geo-location-gps-feature"},sidebar:"services",previous:{title:"Barcode Scanning",permalink:"/docs/barcode-scanning"},next:{title:"Background Services",permalink:"/docs/background-services"}},d={},p=[{value:"Methods",id:"methods",level:2},{value:'<code>getCurrentPosition()</code> <div class="label control"></div><div class="label widget"></div>',id:"getcurrentposition-",level:3},{value:"<code>options</code>",id:"options",level:4},{value:"<code>callback(err, position)</code>",id:"callbackerr-position",level:4},{value:"<code>position</code>",id:"position",level:4},{value:"<code>position.coords</code>",id:"positioncoords",level:5},{value:'<code>watchPosition()</code> <div class="label control"></div><div class="label widget"></div>',id:"watchposition-",level:3},{value:"<code>options</code>",id:"options-1",level:4},{value:"<code>callback(position)</code>",id:"callbackposition",level:4},{value:"<code>position</code>",id:"position-1",level:4},{value:'<code>clearWatch()</code> <div class="label control"></div><div class="label widget"></div>',id:"clearwatch-",level:3},{value:"<code>watchId</code>",id:"watchid",level:4},{value:"<code>callback()</code>",id:"callback",level:4}],c={toc:p};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"buildfiregeo"},(0,l.kt)("inlineCode",{parentName:"h1"},"buildfire.geo")),(0,l.kt)("p",null,"This service lets you access users location. It helps request and watch the location of the device."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"getcurrentposition-"},(0,l.kt)("inlineCode",{parentName:"h3"},"getCurrentPosition()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.geo.getCurrentPosition(options, callback)")),(0,l.kt)("p",null,"Gets the device current location"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.geo.getCurrentPosition(null, (err, position) => {\n  if (err) return console.error(err);\n\n  console.log("Lat", position.coords.latitude);\n  console.log("Lng", position.coords.longitude);\n});\n')),(0,l.kt)("h4",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableHighAccuracy")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum length of time (milliseconds) that is allowed to pass from the call to ",(0,l.kt)("inlineCode",{parentName:"td"},"getCurrentPosition")," until the success callback executes. If the success callback is not invoked within this time, the error callback is passed a ",(0,l.kt)("inlineCode",{parentName:"td"},"PositionError.TIMEOUT")," error code."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumAge")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Accept a cached position whose age is no greater than the specified time in milliseconds."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackerr-position"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(err, position)")),(0,l.kt)("p",null,"Callback function after the geolocation has beed retrieved"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"err")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"error string, ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," when operation is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"position")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Retrieved geolocation position")))),(0,l.kt)("h4",{id:"position"},(0,l.kt)("inlineCode",{parentName:"h4"},"position")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"coords")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Object containing coordinates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Location timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isBackground")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether location was captured in background")))),(0,l.kt)("h5",{id:"positioncoords"},(0,l.kt)("inlineCode",{parentName:"h5"},"position.coords")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"accuracy")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Location estimated accuracy in meters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latitude")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Location latitude")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"longitude")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Location longitude")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"altitude")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Location altitude")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"altitudeAccuracy")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Altitude accuracy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"speed")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Movement speed if device is moving")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heading")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Movement direction as angle")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"watchposition-"},(0,l.kt)("inlineCode",{parentName:"h3"},"watchPosition()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.geo.watchPosition(options, callback)")),(0,l.kt)("p",null,"Allows you watch the devices location and will trigger every time a location change occurs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.geo.watchPosition({ timeout: 30000 }, (position) => {\n  console.log("Position changed");\n  console.log("New Lat", position.coords.latitude);\n  console.log("New Lng", position.coords.longitude);\n});\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"watchPosition")," in combination with ",(0,l.kt)("a",{parentName:"p",href:"/docs/background-services"},"background service")," to track users position in background. Note that additional item ",(0,l.kt)("inlineCode",{parentName:"p"},"BackgroundGeo")," is needed in ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin.json")," file.")),(0,l.kt)("h4",{id:"options-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"options")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enableHighAccuracy")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum length of time (milliseconds) that is allowed to pass from the call to ",(0,l.kt)("inlineCode",{parentName:"td"},"geolocation.watchPosition")," until the corresponding success callback executes. If the success callback is not invoked within this time, the error callback is passed a ",(0,l.kt)("inlineCode",{parentName:"td"},"PositionError.TIMEOUT")," error code. When used in conjunction with ",(0,l.kt)("inlineCode",{parentName:"td"},"geolocation.watchPosition"),", the error callback will be called on an interval every timeout milliseconds."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maximumAge")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Accept a cached position whose age is no greater than the specified time in milliseconds."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callbackposition"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback(position)")),(0,l.kt)("p",null,"Callback function triggered every time a location change occurs on device"),(0,l.kt)("h4",{id:"position-1"},(0,l.kt)("inlineCode",{parentName:"h4"},"position")),(0,l.kt)("p",null,"Object containing position and ",(0,l.kt)("inlineCode",{parentName:"p"},"watchId"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"watchId")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Remember the ",(0,l.kt)("inlineCode",{parentName:"td"},"watchId")," so that you can stop watching position later.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"coords")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"/docs/geo-location-gps-feature#positioncoords"},"position.coords"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Location timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isBackground")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether location was captured in background")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"clearwatch-"},(0,l.kt)("inlineCode",{parentName:"h3"},"clearWatch()")," ",(0,l.kt)("div",{class:"label control"}),(0,l.kt)("div",{class:"label widget"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"buildfire.geo.clearWatch(watchId, callback)")),(0,l.kt)("p",null,"Stops watching the location changes of the device"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.geo.clearWatch(1, () => {\n  console.log("Stopped watching position");\n});\n')),(0,l.kt)("h4",{id:"watchid"},(0,l.kt)("inlineCode",{parentName:"h4"},"watchId")),(0,l.kt)("p",null,"The id you were given in the callback of ",(0,l.kt)("inlineCode",{parentName:"p"},"watchPosition")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"watchId")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The id you were given in the callback of ",(0,l.kt)("inlineCode",{parentName:"td"},"watchPosition")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"callback"},(0,l.kt)("inlineCode",{parentName:"h4"},"callback()")),(0,l.kt)("p",null,"Optional callback function that is called when the watcher is cleared"))}s.isMDXComponent=!0}}]);