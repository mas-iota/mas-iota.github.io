"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,c=m["".concat(p,".").concat(g)]||m[g]||u[g]||i;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",keywords:["buildfire","operators","database","datastore","appdata","query","selectors","stages","pipeline","aggregation","aggregate"],slug:"/aggregation"},o=void 0,l={unversionedId:"aggregation",id:"aggregation",title:"Aggregation",description:"Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result",source:"@site/docs/Aggregation.md",sourceDirName:".",slug:"/aggregation",permalink:"/docs/aggregation",draft:!1,tags:[],version:"current",frontMatter:{id:"aggregation",title:"Aggregation",sidebar_label:"Aggregation",keywords:["buildfire","operators","database","datastore","appdata","query","selectors","stages","pipeline","aggregation","aggregate"],slug:"/aggregation"},sidebar:"api",previous:{title:"Search Operators",permalink:"/docs/search-operators"},next:{title:"Reserved Collections",permalink:"/docs/reserved-collections"}},p={},s=[{value:"Aggregation Pipeline",id:"aggregation-pipeline",level:2},{value:"Pipeline Stages",id:"pipeline-stages",level:2},{value:"$match",id:"match",level:3},{value:"$geoNear",id:"geonear",level:3},{value:"$group",id:"group",level:3},{value:"$sort",id:"sort",level:3},{value:"$project",id:"project",level:3},{value:"Example",id:"example",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result"),(0,r.kt)("h2",{id:"aggregation-pipeline"},"Aggregation Pipeline"),(0,r.kt)("p",null,"MongoDB's aggregation framework is modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into an aggregated result. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  buildfire.publicData.aggregate({\n    pipelineStages: [\n      { $match: { status: "A" } },\n      { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }\n    ],\n    skip: 0,\n    limit: 20\n  }, \'articals\', (err, result) => {\n\n})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"First Stage"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"$match"),' stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Second Stage"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"$group")," stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id."),(0,r.kt)("p",null,"The most basic pipeline stages provide filters that operate like queries and document transformations that modify the form of the output document."),(0,r.kt)("p",null,"Other pipeline operations provide tools for grouping and sorting documents by specific field or fields as well as tools for aggregating the contents of arrays, including arrays of documents. In addition, pipeline stages can use operators for tasks such as calculating the average or concatenating a string."),(0,r.kt)("h2",{id:"pipeline-stages"},"Pipeline Stages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pipeline stages appear in an array.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Documents pass through the stages in sequence.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All except the ",(0,r.kt)("inlineCode",{parentName:"p"},"$out"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$merge"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"$geoNear")," stages can appear multiple times in a pipeline.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/meta/aggregation-quick-reference/"},"Read more about pipeline stages")," and how to use them.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the following some of basic pipeline stages:"))),(0,r.kt)("h3",{id:"match"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/match/#mongodb-pipeline-pipe.-match"},"$match")),(0,r.kt)("p",null,"  Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Should be ",(0,r.kt)("strong",{parentName:"li"},"first stage")," of pipeline ."),(0,r.kt)("li",{parentName:"ul"},"Should have at least one of ",(0,r.kt)("strong",{parentName:"li"},"buildfire indexes"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"$match")," stage has the following prototype form:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  { $match: { <query> } }\n"))),(0,r.kt)("li",{parentName:"ul"},"You cannot use ",(0,r.kt)("inlineCode",{parentName:"li"},"$where")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$match")," queries as part of the aggregation pipeline."),(0,r.kt)("li",{parentName:"ul"},"You cannot use ",(0,r.kt)("inlineCode",{parentName:"li"},"$near")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"$nearSphere")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"$match")," queries as part of the aggregation pipeline.\nAs an alternative, you can either:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"$geoNear")," stage instead of the $match stage."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"$geoWithin "),"query operator with ",(0,r.kt)("inlineCode",{parentName:"li"},"$center")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"$centerSphere")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"$match")," stage."))),(0,r.kt)("li",{parentName:"ul"},"To use ",(0,r.kt)("inlineCode",{parentName:"li"},"$text")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"$match")," stage, the ",(0,r.kt)("inlineCode",{parentName:"li"},"$match")," stage has to be the first stage of the pipeline.")),(0,r.kt)("h3",{id:"geonear"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/#mongodb-pipeline-pipe.-geoNear"},"$geoNear")),(0,r.kt)("p",null,"  Outputs documents in order of nearest to farthest from a specified point."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it exist in the pipeline stages should be the first stage of it. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The $geoNear stage has the following prototype form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  { $geoNear: { <geoNear options> } }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The $geoNear operator accepts a document that contains the following $geoNear options. Specify all distances in the same units as those of the processed documents' coordinate system:\n",(0,r.kt)("inlineCode",{parentName:"p"},"near"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"distanceField"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"distanceMultiplier"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"includeLocs"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDistance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"minDistance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spherical")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uniqueDocs"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Important ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," option is required and it should have the right buildfire geospatial indexed as value ",(0,r.kt)("inlineCode",{parentName:"p"},"_buildfire.geo")," check ",(0,r.kt)("a",{parentName:"p",href:"/docs/geodata"},"Geospatia Data")," and check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/aggregation#examples"},"example")," below."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"key specify the geospatial indexed field to use when calculating the distance.")))),(0,r.kt)("h3",{id:"group"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/group/#mongodb-pipeline-pipe.-group"},"$group")),(0,r.kt)("p",null,"  Groups input documents by the specified _id expression and for each distinct grouping, outputs a document. The _id field of each output document contains the unique group by value. The output documents can also contain computed fields that hold the values of some ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/group/#std-label-accumulators-group"},"accumulator expression"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The $group stage has the following prototype form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," {\n   $group:\n     {\n       _id: <expression>, // Group By Expression\n       <field1>: { <accumulator1> : <expression1> },\n       ...\n     }\n }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"_id"),": Required. If you specify an _id value of null, or any other constant value, the $group stage calculates accumulated values for all the input documents as a whole.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"field"),": Optional. Computed using the ",(0,r.kt)("strong",{parentName:"p"},"accumulator operators"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accumulator operators"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"$accumulator"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$addToSet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$avg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$first"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$last"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$max"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$mergeObjects"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$min"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$stdDevPop"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$stdDevSamp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$sum"),"."))),(0,r.kt)("h3",{id:"sort"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/sort/#mongodb-pipeline-pipe.-sort"},"$sort")),(0,r.kt)("p",null,"  Sorts all input documents and returns them to the pipeline in sorted order."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"$sort")," stage has the following prototype form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  { $sort: { <field1>: <sort order>, <field2>: <sort order> ... } }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"$sort")," takes a document that specifies the field(s) to sort by and the respective sort order. ",(0,r.kt)("inlineCode",{parentName:"p"},"sort order")," can have one of the following values:"))),(0,r.kt)("h3",{id:"project"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.mongodb.com/manual/reference/operator/aggregation/project/#mongodb-pipeline-pipe.-project"},"$project")),(0,r.kt)("p",null,"  Passes along the documents with the requested fields to the next stage in the pipeline. The specified fields can be existing fields from the input documents or newly computed fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The $project stage has the following prototype form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"{ $project: { field1: 1 or 0,  field2: 1 or 0, ...} }\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The $project takes a document that can specify the inclusion of fields, the suppression of the _id field, the addition of new fields, and the resetting of the values of existing fields. Alternatively, you may specify the exclusion of fields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The $project specifications have the following forms:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<field>: <1 or true>"),": Specifies the inclusion of a field. Non-zero integers are also treated as true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_id: <0 or false>"),": Specifies the suppression of the _id field.To exclude a field conditionally, use the REMOVE variable instead. For details, see Exclude Fields Conditionally."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<field>: <expression>"),": Adds a new field or resets the value of an existing field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<field>:<0 or false>"),": Specifies the exclusion of a field.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"A document in the places collection resembles the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "_id" : 1,\n  "data": {\n    "_buildfire": {\n      "geo": {\n        "type" : "Point",\n        "coordinates" : [ -73.9375, 30.843 ]\n      }\n    }\n  }\n}\n{\n  "_id" : 2,\n  "data": {\n    "_buildfire": {\n      "geo": {\n        "type" : "Point",\n        "coordinates" : [ -73.945, 40.8303 ]\n      }\n    }\n  }\n}\n{\n  "_id" : 3,\n  "data": {\n    "_buildfire": {\n      "geo": {\n        "type" : "Point",\n      "coordinates" : [ -73.9375, 40.8303 ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'buildfire.appData.aggregate(\n  {\n    pipelineStages: [\n      {\n        $geoNear: {\n            near: { type: "Point", coordinates: [ -73.98142 , 40.71782 ] },\n            key: "_buildfire.geo",\n            distanceField: "dist.calculated",\n            query: { }\n        }\n       }\n    ],\n    skip: 0,\n    limit: 10,\n  },\n  "places",\n  (err, result) => {\n    if (err) return console.error("there was a problem aggregating your data");\n\n    console.log(" aggregation results: ", result);\n  }\n);\n')),(0,r.kt)("p",null,"The aggregation returns the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    "_id" : 1,\n    "data": {\n      "_buildfire": {\n        "geo": {\n          "type" : "Point",\n          "coordinates" : [ -73.9375, 30.843 ]\n        }\n      }\n    }\n  },\n  {\n    "_id" : 3,\n    "data": {\n      "_buildfire": {\n        "geo": {\n          "type" : "Point",\n        "coordinates" : [ -73.9375, 40.8303 ]\n        }\n      }\n    }\n  },\n  {\n    "_id" : 2,\n    "data": {\n      "_buildfire": {\n        "geo": {\n          "type" : "Point",\n          "coordinates" : [ -73.945, 40.8303 ]\n        }\n      }\n    }\n  }\n]\n\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For Aggregation with  MongoDB you can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/aggregation/"},"read more here"))))}u.isMDXComponent=!0}}]);