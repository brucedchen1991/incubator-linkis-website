"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1012],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Overview",sidebar_position:1},p=void 0,u={unversionedId:"engine_usage/overview",id:"version-1.0.2/engine_usage/overview",isDocsHomePage:!1,title:"Overview",description:"1 Overview",source:"@site/versioned_docs/version-1.0.2/engine_usage/overview.md",sourceDirName:"engine_usage",slug:"/engine_usage/overview",permalink:"/docs/1.0.2/engine_usage/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/engine_usage/overview.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Console User Manual",permalink:"/docs/1.0.2/user_guide/console_manual"},next:{title:"Hive Engine Usage",permalink:"/docs/1.0.2/engine_usage/hive"}},s=[{value:"1 Overview",id:"1-overview",children:[]},{value:"2. Document structure",id:"2-document-structure",children:[]}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-overview"},"1 Overview"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis, as a powerful computing middleware, can easily interface with different computing engines. By shielding the usage details of different computing engines, it provides a The unified use interface greatly reduces the operation and maintenance cost of deploying and applying Linkis's big data platform. At present, Linkis has docked several mainstream computing engines, which basically cover the data requirements in production, in order to provide more With good scalability, Linkis also provides related interfaces for accessing new engines, which can be used to access new computing engines.",(0,i.kt)("br",null),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","The engine is a component that provides users with data processing and analysis capabilities. Currently, it has been connected to Linkis's engine, including mainstream big data computing engines Spark, Hive, Presto, etc. , There are also engines with the ability to process data in scripts such as python and Shell. DataSphereStudio is a one-stop data operation platform docked with Linkis. Users can conveniently use the engine supported by Linkis in DataSphereStudio to complete interactive data analysis tasks and workflow tasks."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Engine"),(0,i.kt)("th",{parentName:"tr",align:null},"Whether to support Scriptis"),(0,i.kt)("th",{parentName:"tr",align:null},"Whether to support workflow"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spark"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hive"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Presto"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"python"),(0,i.kt)("td",{parentName:"tr",align:null},"support"),(0,i.kt)("td",{parentName:"tr",align:null},"support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Shell"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JDBC"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},"Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Support")))),(0,i.kt)("h2",{id:"2-document-structure"},"2. Document structure"),(0,i.kt)("p",null,"You can refer to the following documents for the related documents of the engines that have been accessed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.0.2/engine_usage/spark"},"Spark Engine Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.0.2/engine_usage/hive"},"Hive Engine Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.0.2/engine_usage/python"},"Python Engine Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.0.2/engine_usage/shell"},"Shell Engine Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.0.2/engine_usage/jdbc"},"JDBC Engine Usage"))))}d.isMDXComponent=!0}}]);