"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[109],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(l,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Task Submission and Execution Rest Api",sidebar_position:2},l="Linkis Task submission and execution Rest API document",p={unversionedId:"api/linkis_task_operator",id:"version-1.0.3/api/linkis_task_operator",isDocsHomePage:!1,title:"Task Submission and Execution Rest Api",description:"- The return of the Linkis Restful interface follows the following standard return format:",source:"@site/versioned_docs/version-1.0.3/api/linkis_task_operator.md",sourceDirName:"api",slug:"/api/linkis_task_operator",permalink:"/docs/1.0.3/api/linkis_task_operator",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/api/linkis_task_operator.md",tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{title:"Task Submission and Execution Rest Api",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Task Submission And Execution Of JDBC API",permalink:"/docs/1.0.3/api/jdbc_api"},next:{title:"Overview",permalink:"/docs/1.0.3/architecture/overview"}},u=[{value:"1. Submit for Execution",id:"1-submit-for-execution",children:[]},{value:"2. Get Status",id:"2-get-status",children:[]},{value:"3. Get Logs",id:"3-get-logs",children:[]},{value:"4. Get Progress",id:"4-get-progress",children:[]},{value:"5. Kill Task",id:"5-kill-task",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"linkis-task-submission-and-execution-rest-api-document"},"Linkis Task submission and execution Rest API document"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The return of the Linkis Restful interface follows the following standard return format:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Convention"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"method: Returns the requested Restful API URI, which is mainly used in WebSocket mode."),(0,i.kt)("li",{parentName:"ul"},"status: return status information, where: -1 means no login, 0 means success, 1 means error, 2 means verification failed, 3 means no access to the interface."),(0,i.kt)("li",{parentName:"ul"},"data: return specific data."),(0,i.kt)("li",{parentName:"ul"},"message: return the requested prompt message. If the status is not 0, the message returned is an error message, and the data may have a stack field, which returns specific stack information.")),(0,i.kt)("p",null,"For more information about the Linkis Restful interface specification, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"/community/development_specification/api"},"Linkis Restful Interface Specification")),(0,i.kt)("h3",{id:"1-submit-for-execution"},"1. Submit for Execution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/execute"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executeApplicationName": "hive", //Engine type\n    "requestApplicationName": "dss", //Client service type\n    "executionCode": "show tables",\n    "params": {"variable": {}, "configuration": {}},\n    "runType": "hql", //The type of script to run\n    "source": {"scriptPath":"file:///tmp/hadoop/1.hql"}\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/submit"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "executionContent": {"code": "show tables", "runType": "sql"},\n    "params": {"variable": {}, "configuration": {}},\n    "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.hql"},\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,i.kt)("p",null,"-Return to example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/execute",\n "status": 0,\n "message": "Request executed successfully",\n "data": {\n   "execID": "030418IDEhivebdpdwc010004:10087IDE_hadoop_21",\n   "taskID": "123"\n }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"execID is the unique identification execution ID generated for the task after the user task is submitted to Linkis. It is of type String. This ID is only useful when the task is running, similar to the concept of PID. The design of ExecID is ",(0,i.kt)("inlineCode",{parentName:"p"},"(requestApplicationName length)(executeAppName length)(Instance length)${requestApplicationName}${executeApplicationName}${entranceInstance information ip+port}${requestApplicationName}_${umUser}_${index}"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"taskID is the unique ID that represents the task submitted by the user. This ID is generated by the database self-increment and is of Long type"))),(0,i.kt)("h3",{id:"2-get-status"},"2. Get Status"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/status"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return to example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/status",\n "status": 0,\n "message": "Get status successful",\n "data": {\n   "execID": "${execID}",\n   "status": "Running"\n }\n}\n')),(0,i.kt)("h3",{id:"3-get-logs"},"3. Get Logs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/log?fromLine=${fromLine}&size=${size}"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The request parameter fromLine refers to the number of lines from which to get, and size refers to the number of lines of logs that this request gets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return example, where the returned fromLine needs to be used as a parameter for the next request of this interface"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/${execID}/log",\n  "status": 0,\n  "message": "Return log information",\n  "data": {\n    "execID": "${execID}",\n  "log": ["error log","warn log","info log", "all log"],\n  "fromLine": 56\n  }\n}\n')),(0,i.kt)("h3",{id:"4-get-progress"},"4. Get Progress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/progress"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Return to example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "/api/rest_j/v1/entrance/{execID}/progress",\n  "status": 0,\n  "message": "Return progress information",\n  "data": {\n    "execID": "${execID}",\n    "progress": 0.2,\n    "progressInfo": [\n        {\n        "id": "job-1",\n        "succeedTasks": 2,\n        "failedTasks": 0,\n        "runningTasks": 5,\n        "totalTasks": 10\n        },\n        {\n        "id": "job-2",\n        "succeedTasks": 5,\n        "failedTasks": 0,\n        "runningTasks": 5,\n        "totalTasks": 10\n        }\n    ]\n  }\n}\n')),(0,i.kt)("h3",{id:"5-kill-task"},"5. Kill Task"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/entrance/${execID}/kill"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Submission method ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "/api/rest_j/v1/entrance/{execID}/kill",\n "status": 0,\n "message": "OK",\n "data": {\n   "execID":"${execID}"\n  }\n}\n')))}m.isMDXComponent=!0}}]);