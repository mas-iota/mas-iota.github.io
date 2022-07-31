"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={id:"search-operators",title:"Search Operators",sidebar_label:"Search Operators",keywords:["buildfire","search","operators","database","datastore","appdata","query","selectors"],slug:"/search-operators"},i=void 0,o={unversionedId:"search-operators",id:"search-operators",title:"Search Operators",description:"Query Selectors",source:"@site/docs/Search-Operators.md",sourceDirName:".",slug:"/search-operators",permalink:"/docs/search-operators",draft:!1,tags:[],version:"current",frontMatter:{id:"search-operators",title:"Search Operators",sidebar_label:"Search Operators",keywords:["buildfire","search","operators","database","datastore","appdata","query","selectors"],slug:"/search-operators"},sidebar:"api",previous:{title:"Data Modifying Operators",permalink:"/docs/data-modifying-operators"},next:{title:"Aggregation",permalink:"/docs/aggregation"}},s={},c=[{value:"Query Selectors",id:"query-selectors",level:2},{value:"Logical",id:"logical",level:2},{value:"Element",id:"element",level:2},{value:"Evaluation",id:"evaluation",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"query-selectors"},"Query Selectors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$eq")," Matches values that are equal to a specified value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$gt")," Matches values that are greater than a specified value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$gte")," Matches values that are greater than or equal to a specified value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$lt")," Matches values that are less than a specified value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$lte")," Matches values that are less than or equal to a specified value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$ne")," Matches all values that are not equal to a specified value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$in")," Matches any of the values specified in an array."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$nin")," Matches none of the values specified in an array.")),(0,n.kt)("h2",{id:"logical"},"Logical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$or")," Joins query clauses with a logical OR returns all documents that match the conditions of either clause."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$and")," Joins query clauses with a logical AND returns all documents that match the conditions of both clauses."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$not")," Inverts the effect of a query expression and returns documents that do not match the query expression."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$nor")," Joins query clauses with a logical NOR returns all documents that fail to match both clauses.")),(0,n.kt)("h2",{id:"element"},"Element"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$exists")," Matches documents that have the specified field."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$type")," Selects documents if a field is of the specified type.")),(0,n.kt)("h2",{id:"evaluation"},"Evaluation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$mod")," Performs a modulo operation on the value of a field and selects documents with a specified result."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$regex")," Selects documents where values match a specified regular expression.")),(0,n.kt)("p",null,"##Array"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$all")," Matches arrays that contain all elements specified in the query."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$elemMatch")," Selects documents if element in the array field matches all the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"$elemMatch")," conditions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"$size")," Selects documents if the array field is a specified size.")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "qty": { "$gt": 0 }, // for quantities greater than zero\n  "discontinued": 0, // and not discontinued\n  "$or": [\n    { "description": { "$regex": "new" } }, // that has the word "new" in it\n    { "description": { "$regex": "hot" } } // that has the word "hot" in it\n  ]\n}\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For matching operators with MongoDB you can ",(0,n.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/reference/operator/query/"},"read more here"))))}u.isMDXComponent=!0}}]);