"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[74095],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"CS Cache Architecture",sidebar_position:3},s=void 0,l={unversionedId:"architecture/public_enhancement_services/context_service/context_service_cache",id:"version-1.0.3/architecture/public_enhancement_services/context_service/context_service_cache",isDocsHomePage:!1,title:"CS Cache Architecture",description:"CSCache Architecture",source:"@site/versioned_docs/version-1.0.3/architecture/public_enhancement_services/context_service/context_service_cache.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_cache",permalink:"/docs/1.0.3/architecture/public_enhancement_services/context_service/context_service_cache",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/architecture/public_enhancement_services/context_service/context_service_cache.md",tags:[],version:"1.0.3",sidebarPosition:3,frontMatter:{title:"CS Cache Architecture",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CS Architecture",permalink:"/docs/1.0.3/architecture/public_enhancement_services/context_service/context_service"},next:{title:"CS Client Design",permalink:"/docs/1.0.3/architecture/public_enhancement_services/context_service/context_service_client"}},p=[{value:"<strong>CSCache Architecture</strong>",id:"cscache-architecture",children:[{value:"<strong>issues that need resolving</strong>",id:"issues-that-need-resolving",children:[]},{value:"1.1. Memory structure needs to be solved:",id:"11-memory-structure-needs-to-be-solved",children:[]},{value:"1.2 Loading and parsing problems to be solved:",id:"12-loading-and-parsing-problems-to-be-solved",children:[]},{value:"1.3 Metric and cleaning mechanism need to solve the problem:",id:"13-metric-and-cleaning-mechanism-need-to-solve-the-problem",children:[]}]},{value:"<strong>ContextCache Architecture</strong>",id:"contextcache-architecture",children:[]},{value:"<strong>ContextCache storage structure design</strong>",id:"contextcache-storage-structure-design",children:[]},{value:"<strong>ContextCache UML Class Diagram Design</strong>",id:"contextcache-uml-class-diagram-design",children:[]},{value:"<strong>ContextCache Timing Diagram</strong>",id:"contextcache-timing-diagram",children:[]},{value:"<strong>KeyWord parsing logic</strong>",id:"keyword-parsing-logic",children:[]}],d={toc:p};function h(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cscache-architecture"},(0,a.kt)("strong",{parentName:"h2"},"CSCache Architecture")),(0,a.kt)("h3",{id:"issues-that-need-resolving"},(0,a.kt)("strong",{parentName:"h3"},"issues that need resolving")),(0,a.kt)("h3",{id:"11-memory-structure-needs-to-be-solved"},"1.1. Memory structure needs to be solved:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support splitting by ContextType: speed up storage and query performance")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support splitting according to different ContextID: Need to complete ContextID, see metadata isolation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support LRU: Recycle according to specific algorithm")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support searching by keywords: Support indexing by keywords")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support indexing: support indexing directly through ContextKey")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support traversal: need to support traversal according to ContextID and ContextType"))),(0,a.kt)("h3",{id:"12-loading-and-parsing-problems-to-be-solved"},"1.2 Loading and parsing problems to be solved:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support parsing ContextValue into memory data structure: It is necessary to complete the parsing of ContextKey and value to find the corresponding keywords.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Need to interface with the Persistence module to complete the loading and analysis of the ContextID content"))),(0,a.kt)("h3",{id:"13-metric-and-cleaning-mechanism-need-to-solve-the-problem"},"1.3 Metric and cleaning mechanism need to solve the problem:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When JVM memory is not enough, it can be cleaned based on memory usage and frequency of use")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support statistics on the memory usage of each ContextID")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support statistics on the frequency of use of each ContextID"))),(0,a.kt)("h2",{id:"contextcache-architecture"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache Architecture")),(0,a.kt)("p",null,"The architecture of ContextCache is shown in the following figure:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3137).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ContextService: complete the provision of external interfaces, including additions, deletions, and changes;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cache: complete the storage of context information, map storage through ContextKey and ContextValue")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Index: The established keyword index, which stores the mapping between the keywords of the context information and the ContextKey;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Parser: complete the keyword analysis of the context information;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"LoadModule completes the loading of information from the persistence layer when the ContextCache does not have the corresponding ContextID information;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"AutoClear: When the Jvm memory is insufficient, complete the on-demand cleaning of ContextCache;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Listener: Metric information for the mobile phone ContextCache, such as memory usage and access times."))),(0,a.kt)("h2",{id:"contextcache-storage-structure-design"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache storage structure design")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83669).Z})),(0,a.kt)("p",null,"The storage structure of ContextCache is divided into three layers:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ContextCache:")," stores the mapping relationship between ContextID and ContextIDValue, and can complete the recovery of ContextID according to the LRU algorithm;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ContextIDValue:")," CSKeyValueContext that has stored all context information and indexes of ContextID. And count the memory and usage records of ContestID."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CSKeyValueContext:")," Contains the CSInvertedIndexSet index set that stores and supports keywords according to type, and also contains the storage set CSKeyValueMapSet that stores ContextKey and ContextValue."),(0,a.kt)("p",null,"CSInvertedIndexSet: categorize and store keyword indexes through CSType"),(0,a.kt)("p",null,"CSKeyValueMapSet: categorize and store context information through CSType"),(0,a.kt)("h2",{id:"contextcache-uml-class-diagram-design"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache UML Class Diagram Design")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99016).Z})),(0,a.kt)("h2",{id:"contextcache-timing-diagram"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache Timing Diagram")),(0,a.kt)("p",null,"The following figure draws the overall process of using ContextID, KeyWord, and ContextType to check the corresponding ContextKeyValue in ContextCache.\n",(0,a.kt)("img",{src:n(53992).Z})),(0,a.kt)("p",null,"Note: The ContextIDValueGenerator will go to the persistence layer to pull the Array","[ContextKeyValue]"," of the ContextID, and parse the ContextKeyValue key storage index and content through ContextKeyValueParser."),(0,a.kt)("p",null,"The other interface processes provided by ContextCacheService are similar, so I won't repeat them here."),(0,a.kt)("h2",{id:"keyword-parsing-logic"},(0,a.kt)("strong",{parentName:"h2"},"KeyWord parsing logic")),(0,a.kt)("p",null,"The specific entity bean of ContextValue needs to use the annotation \\@keywordMethod on the corresponding get method that can be used as the keyword. For example, the getTableName method of Table must be annotated with \\@keywordMethod."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(44404).Z})),(0,a.kt)("p",null,"When ContextKeyValueParser parses ContextKeyValue, it scans all the annotations modified by KeywordMethod of the specific object passed in and calls the get method to obtain the returned object toString, which will be parsed through user-selectable rules and stored in the keyword collection. Rules have separators, and regular expressions"),(0,a.kt)("p",null,"Precautions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The annotation will be defined to the core module of cs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The modified Get method cannot take parameters")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The toSting method of the return object of the Get method must return the keyword"))))}h.isMDXComponent=!0},3137:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-01-e166f3e7912dea348d6825e45c8da7f7.png"},83669:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-02-630a93e3c47b3c0a6cf4950081b1d663.png"},99016:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-03-7e1666c9bf98da7bf9476b7071586f30.png"},53992:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-04-f8bf482dfa0d4379004a2174a1c3e185.png"},44404:function(e,t){t.Z="data:image/png;base64,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"}}]);