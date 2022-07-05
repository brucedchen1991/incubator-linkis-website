"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66170],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35972:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"API Specification",sidebar_position:4},s=void 0,c={unversionedId:"development_specification/api",id:"development_specification/api",title:"API Specification",description:"When Contributor contributes new RESTful interfaces to Linkis, it is required to follow the following interface specifications for interface development.",source:"@site/community/development_specification/api.md",sourceDirName:"development_specification",slug:"/development_specification/api",permalink:"/community/development_specification/api",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/community/development_specification/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"API Specification",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Exception Catch Specification",permalink:"/community/development_specification/exception_catch"},next:{title:"Concurrent Specification",permalink:"/community/development_specification/concurrent"}},p=[{value:"1. HTTP or WebSocket ?",id:"1-http-or-websocket-",children:[],level:2},{value:"2. URL specification",id:"2-url-specification",children:[],level:2},{value:"3. Interface request format",id:"3-interface-request-format",children:[],level:2},{value:"4. Interface response format",id:"4-interface-response-format",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When Contributor contributes new RESTful interfaces to Linkis, it is required to follow the following interface specifications for interface development.")),(0,i.kt)("h2",{id:"1-http-or-websocket-"},"1. HTTP or WebSocket ?"),(0,i.kt)("p",null,"Linkis currently provides two interfaces: HTTP and WebSocket."),(0,i.kt)("p",null,"WebSocket advantages over HTTP:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Less stress on the server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"More timely information push")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interactivity is more friendly"))),(0,i.kt)("p",null,"Correspondingly, WebSocket has the following disadvantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The WebSocket may be disconnected while using")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Higher technical requirements on the front end")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is generally required to have a front-end degradation handling mechanism"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We generally strongly recommend that Contributor provide the interface using WebSocket as little as possible if not necessary;")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If you think it is necessary to use WebSocket and are willing to contribute the developed functions to Linkis, we suggest you communicate with us before the development, thank you!")),(0,i.kt)("h2",{id:"2-url-specification"},"2. URL specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n/api/rest_j/v1/{applicationName}/.+\n\n/api/rest_s/v1/{applicationName}/.+\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Convention")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"rest_j indicates that the interface complies with the Jersey specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"REST_S indicates that the interface complies with the SpringMVC REST specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"v1 is the version number of the service. ",(0,i.kt)("strong",{parentName:"p"}," version number will be updated with the Linkis version "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"{applicationName} is the name of the micro-service"))),(0,i.kt)("h2",{id:"3-interface-request-format"},"3. Interface request format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n\n"method":"/api/rest_j/v1/entrance/execute",\n\n"data":{},\n\n"WebsocketTag" : "37 fcbd8b762d465a0c870684a0261c6e" / / WebSocket requests require this parameter, HTTP requests can ignore\n\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Convention")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"method: The requested RESTful API URL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"data: The specific data requested.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WebSocketTag: The unique identity of a WebSocket request. This parameter is also returned by the back end for the front end to identify."))),(0,i.kt)("h2",{id:"4-interface-response-format"},"4. Interface response format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n{" method ":"/API/rest_j/v1 / project/create ", "status" : 0, "message" : "creating success!" ,"data":{}}\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Convention")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"method: Returns the requested RESTful API URL, mainly for the WebSocket mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"status: Returns status information, where: -1 means not login, 0 means success, 1 means error, 2 means failed validation, and 3 means no access to the interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"data: Returns the specific data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"message: Returns a prompt message for the request. If status is not 0, message will return an error message, where data may have a stack trace field, and return the specific stack information."))),(0,i.kt)("p",null,"In addition: Different status cause different HTTP status code, under normal circumstances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When status is 0, the HTTP status code is 200")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the status is -1, the HTTP status code is 401")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When status is 1, the HTTP status code is 400")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When status is 2, the HTTP status code is 412")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When status is 3, the HTTP status code is 403"))))}m.isMDXComponent=!0}}]);