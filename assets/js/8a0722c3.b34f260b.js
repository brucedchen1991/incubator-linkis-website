"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[27693],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Overview",sidebar_position:0},c=void 0,l={unversionedId:"architecture/overview",id:"version-0.11.0/architecture/overview",isDocsHomePage:!1,title:"Overview",description:"1 The original intention of Linkis",source:"@site/versioned_docs/version-0.11.0/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/0.11.0/architecture/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/overview.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"WebSocket",permalink:"/docs/0.11.0/api/web_socket"},next:{title:"RM design",permalink:"/docs/0.11.0/architecture/rm"}},u=[{value:"1 The original intention of Linkis",id:"1-the-original-intention-of-linkis",children:[]},{value:"2 Linkis Technical Architecture",id:"2-linkis-technical-architecture",children:[]},{value:"3 Linkis Business Architecture",id:"3-linkis-business-architecture",children:[]},{value:"4 Linkis processing flow",id:"4-linkis-processing-flow",children:[]}],p={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-the-original-intention-of-linkis"},"1 The original intention of Linkis"),(0,i.kt)("p",null," Almost every component of the big data open source ecosystem has its own set of user rights management, resource management, metadata management, independent API access and usage methods."),(0,i.kt)("p",null," And various new components continue to appear."),(0,i.kt)("p",null," However, the user's business needs usually require the collaborative processing of multiple open source components to achieve."),(0,i.kt)("p",null," For a business requirement, users need to learn the manuals of multiple products, and need to do repeated customized development on multiple products, in order to truly introduce open source components into the actual production environment."),(0,i.kt)("p",null," This has brought extremely high learning costs and extra workload to users, and a large amount of repeated maintenance and management work is also required for operation and maintenance."),(0,i.kt)("p",null," At the same time, the coupling between the upper-level functional tool products and the underlying computing storage system is too high, and the hierarchical structure and calling relationship are not clear and decoupled. As a result, any changes in the underlying environment will directly affect the normal use of business products."),(0,i.kt)("p",null," How to provide a set of unified data middleware, docking with upper-level application tools, shielding various calls and usage details at the bottom, and truly enabling business users to only pay attention to the details of business implementation, even if the underlying big data platform's computer room expansion and overall relocation are both Not affected, is the original intention of Linkis!"),(0,i.kt)("h2",{id:"2-linkis-technical-architecture"},"2 Linkis Technical Architecture"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Technical Architecture",src:n(27939).Z})),(0,i.kt)("p",null,"As shown in the figure above, we have built multiple microservice clusters based on the current popular SpringCloud microservice technology to provide high availability capabilities."),(0,i.kt)("p",null,"Each microservice cluster bears part of the system's functional responsibilities, and we have made the following clear divisions. like:"),(0,i.kt)("p",null,"-",(0,i.kt)("strong",{parentName:"p"},"Unified Job Execution Service"),": A distributed REST/WebSocket service for receiving various script requests submitted by users."),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"Currently supported computing engines are"),": Spark, Python, TiSpark, Hive, Shell, etc."),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"Supported scripting languages \u200b\u200bare"),": SparkSQL, Spark Scala, Pyspark, R, Python, HQL and Shell, etc.;"),(0,i.kt)("p",null,"  For more information about unified job execution services, please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/architecture/ujes/ujes_design"},"UJES Architecture Design Document")),(0,i.kt)("p",null,"-",(0,i.kt)("strong",{parentName:"p"},"Resource Management Service"),": Support real-time management and control of the resource usage of each system and user, limit the resource usage and concurrency of the system and users, and provide real-time resource dynamic charts to facilitate viewing and managing the system and users resource;"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"Currently supported resource types"),": Yarn queue resources, servers (CPU and memory), number of concurrent users, etc."),(0,i.kt)("p",null,"  For more information about resource management services, please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/architecture/rm"},"RM Architecture Design Document")),(0,i.kt)("p",null,"-~~",(0,i.kt)("strong",{parentName:"p"},"Application management service (not available in open source version)"),": Manage all user applications of all systems, including offline batch applications, interactive query applications, and real-time streaming applications, providing powerful replication for offline and interactive applications It also provides application lifecycle management, and automatically releases users\u2019 redundant idle applications; ~~"),(0,i.kt)("p",null,"-",(0,i.kt)("strong",{parentName:"p"},"Unified storage service"),": Universal IO architecture, which can quickly connect to various storage systems, provide a unified call entry, support all commonly used format data, high integration, and easy to use;"),(0,i.kt)("p",null," For more information on unified storage services, please check ","[Storage Architecture Design Document]"),(0,i.kt)("p",null,"-",(0,i.kt)("strong",{parentName:"p"},"Unified Context Service"),": Unified user and system resource files (JAR, ZIP, Properties, etc.), unified management of parameters and variables of users, systems, and calculation engines, one setting and automatic reference everywhere;"),(0,i.kt)("p",null,"-",(0,i.kt)("strong",{parentName:"p"},"Material Library"),": System and user-level material management, which can be shared and transferred, and supports automatic management of the entire life cycle;"),(0,i.kt)("p",null,"-",(0,i.kt)("strong",{parentName:"p"},"Metadata Service"),": Real-time display of database table structure and partition status."),(0,i.kt)("p",null,"Rely on the mutual cooperation of these microservices to build a centralized and unified big data platform service externally."),(0,i.kt)("p",null,"Through the construction of these services, we have improved the external service methods and processes of the entire big data platform."),(0,i.kt)("h2",{id:"3-linkis-business-architecture"},"3 Linkis Business Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Business Architecture",src:n(90772).Z})),(0,i.kt)("p",null,"Glossary:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1) Gateway:")),(0,i.kt)("p",null," Based on Spring Cloud Gateway, the plug-in function is enhanced, and a gateway service with WebSocket one-to-many capability is added, which is mainly used to parse and route user requests to designated microservices."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2) Unified entrance:")),(0,i.kt)("p",null," The unified portal is the job lifecycle manager of a certain type of engine operation of the user."),(0,i.kt)("p",null," From job generation to submission to the execution engine, to job information feedback to users and job closure, Entrance manages the entire life cycle of a job."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3) Engine Manager:")),(0,i.kt)("p",null," The engine manager is responsible for managing the entire life cycle of the engine."),(0,i.kt)("p",null," Responsible for applying for and locking resources from the resource management service, instantiating a new engine, and monitoring the life state of the engine."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4) Execution engine:")),(0,i.kt)("p",null," The execution engine is a microservice that actually executes user jobs, and it is started by the engine manager."),(0,i.kt)("p",null," In order to improve the interaction performance, the engine service directly interacts with the unified portal of the job submitted to it, executes the job correctly, and feeds back various information required by the user, such as log, progress, status, and result set."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5) Resource Management Service")),(0,i.kt)("p",null," Real-time control of the resource usage of each system and each user, manage the resource usage and actual load of the microservice cluster, and limit the resource usage and concurrency of the system and users."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"6) Eureka")),(0,i.kt)("p",null," Eureka is a service discovery framework developed by Netflix. Spring Cloud integrates it into its sub-project spring-cloud-netflix to realize the service discovery function of Spring Cloud."),(0,i.kt)("p",null," Each microservice has a built-in Eureka Client, which can access Eureka Server and obtain the ability of service discovery in real time."),(0,i.kt)("h2",{id:"4-linkis-processing-flow"},"4 Linkis processing flow"),(0,i.kt)("p",null,"Now let's introduce how the user submits a SQL in the upper system, and how Linkis executes and returns the result."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Process sequence diagram",src:n(97598).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user of the upper system submits a SQL, which passes through the Gateway first, and the Gateway is responsible for parsing the user request and routing it to the appropriate unified entrance Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Entrance will first find out whether there is any Spark engine service available for the user of the system, and if so, it will directly submit the request to the Spark engine service")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There is no available Spark engine service, start to discover the function through Eureka's service registration, get a list of all engine managers, and obtain the actual load of the engine manager in real time by requesting RM")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Entrance got the engine manager with the lowest load and started asking the engine manager to start a Spark engine service")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the engine manager receives the request, it starts to ask the user under the RM system whether they can start the new engine")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If it can be started, start requesting resources and lock; otherwise, an exception of startup failure is returned to Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The resource is successfully locked, and the new spark engine service is started; after the startup is successful, the new spark engine is returned to Entrance")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After Entrance got the new engine, it began to request SQL execution from the new engine")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Spark's new engine receives SQL requests, starts submitting SQL to Yarn for execution, and pushes logs, progress and status to Entrance in real time")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Entrance pushes the obtained logs, progress and status to Gateway in real time")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gateway pushes back logs, progress and status to the front end")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the SQL execution is successful, Engine actively pushes the result set to Entrance, and Entrance informs the front end to get the result."))),(0,i.kt)("p",null,"For the design plan under abnormal Entrance/EngineManager/Engine, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11.0/architecture/ujes/ujes_design"},"UJES Architecture Design Document")))}d.isMDXComponent=!0},90772:function(e,t,n){t.Z=n.p+"assets/images/business_architecture_diagram-a5f5a91e4aec0ecfc0e85350c233d4bb.png"},97598:function(e,t,n){t.Z=n.p+"assets/images/process_sequence_diagram-1d6905a4e4e8b936d5d98c5f8ba8aaee.png"},27939:function(e,t,n){t.Z=n.p+"assets/images/technical_architecture_diagram-30c66a1c785438ea4f384db06af653b8.png"}}]);