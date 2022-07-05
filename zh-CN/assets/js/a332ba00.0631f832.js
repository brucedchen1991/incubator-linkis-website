"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[62888],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",sidebar_position:4},p=void 0,c={unversionedId:"development/web_build",id:"version-1.0.3/development/web_build",isDocsHomePage:!1,title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",description:"1. \u5b89\u88c5Node.js",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/development/web_build.md",sourceDirName:"development",slug:"/development/web_build",permalink:"/zh-CN/docs/1.0.3/development/web_build",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/development/web_build.md",tags:[],version:"1.0.3",sidebarPosition:4,frontMatter:{title:"\u524d\u7aef\u7ba1\u7406\u53f0\u7f16\u8bd1",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u65b0\u5f15\u64ce",permalink:"/zh-CN/docs/1.0.3/development/new_engine_conn"},next:{title:"SpringMVC \u66ff\u6362 Jersey \u5206\u4eab",permalink:"/zh-CN/docs/1.0.3/development/springmvc-replaces-jersey"}},u=[{value:"1. \u5b89\u88c5Node.js",id:"1-\u5b89\u88c5nodejs",children:[]},{value:"2. \u5b89\u88c5\u9879\u76ee",id:"2-\u5b89\u88c5\u9879\u76ee",children:[]},{value:"3. \u914d\u7f6e",id:"3-\u914d\u7f6e",children:[]},{value:"4. \u6253\u5305\u9879\u76ee",id:"4-\u6253\u5305\u9879\u76ee",children:[]},{value:"5. \u8fd0\u884c\u9879\u76ee",id:"5-\u8fd0\u884c\u9879\u76ee",children:[{value:"6.1 npm install\u65e0\u6cd5\u6210\u529f",id:"61-npm-install\u65e0\u6cd5\u6210\u529f",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-\u5b89\u88c5nodejs"},"1. \u5b89\u88c5Node.js"),(0,o.kt)("p",null,"\u5c06Node.js\u4e0b\u8f7d\u5230\u7535\u8111\u672c\u5730\uff0c\u5b89\u88c5\u5373\u53ef\u3002\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://nodejs.cn/download/"},"http://nodejs.cn/download/")," \uff08\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\uff09\n",(0,o.kt)("strong",{parentName:"p"},"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\u3002")),(0,o.kt)("h2",{id:"2-\u5b89\u88c5\u9879\u76ee"},"2. \u5b89\u88c5\u9879\u76ee"),(0,o.kt)("p",null,"\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone git@github.com:apache/incubator-linkis.git\ncd incubator-linkis/web\nnpm install\n")),(0,o.kt)("p",null,"\u6307\u4ee4\u7b80\u4ecb\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u9879\u76ee\u5305\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u5230\u7535\u8111\u672c\u5730"),(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u9879\u76eeWEB\u6839\u76ee\u5f55\uff1acd incubator-linkis/web"),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u9879\u76ee\u6240\u9700\u4f9d\u8d56\uff1anpm install")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8be5\u6b65\u9aa4\u4ec5\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u6267\u884c\u3002")),(0,o.kt)("h2",{id:"3-\u914d\u7f6e"},"3. \u914d\u7f6e"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u672c\u5730\u8fd0\u884c\u65f6\u6b64\u6b65\u9aa4\u53ef\u8df3\u8fc7"))),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u5982\u540e\u7aef\u63a5\u53e3\u5730\u5740\u7b49\uff0c\u5982\u6839\u76ee\u5f55\u4e0b\u7684.env.development\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u540e\u7aef\u63a5\u53e3\u5730\u5740\nVUE_APP_MN_CONFIG_PREFIX=http://yourIp:yourPort/yourPath\n")),(0,o.kt)("p",null,"\u914d\u7f6e\u7684\u5177\u4f53\u89e3\u91ca\u53ef\u53c2\u8003vue-cli\u5b98\u65b9\u6587\u6863\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E5%92%8C%E6%A8%A1%E5%BC%8F"},"\u73af\u5883\u53d8\u91cf\u548c\u6a21\u5f0f")),(0,o.kt)("h2",{id:"4-\u6253\u5305\u9879\u76ee"},"4. \u6253\u5305\u9879\u76ee"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u5bf9\u9879\u76ee\u8fdb\u884c\u6253\u5305\uff0c\u751f\u6210\u538b\u7f29\u540e\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run build\n")),(0,o.kt)("p",null,"\u8be5\u6307\u4ee4\u6210\u529f\u6267\u884c\u540e\uff0c\u9879\u76eeweb\u76ee\u5f55\u4e0b\u4f1a\u51fa\u73b0\u4e00\u4e2a \u201cdist\u201d \u7684\u6587\u4ef6\u5939\u53ca\u201c*-${getVersion()}-dist.zip\u201d\u538b\u7f29\u6587\u4ef6\uff0c\u76ee\u5f55dist/dist\u5373\u4e3a\u6253\u5305\u597d\u7684\u4ee3\u7801\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5c06\u8be5\u6587\u4ef6\u5939\u653e\u8fdb\u60a8\u7684\u9759\u6001\u670d\u52a1\u5668\u4e2d\uff0c\u6216\u8005\u53c2\u8003\u5b89\u88c5\u6587\u6863\uff0c\u4f7f\u7528\u811a\u672c\u8fdb\u884c\u90e8\u7f72\u5b89\u88c5\u3002"),(0,o.kt)("h2",{id:"5-\u8fd0\u884c\u9879\u76ee"},"5. \u8fd0\u884c\u9879\u76ee"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u672c\u5730\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\u8be5\u9879\u76ee\u5e76\u4e14\u6539\u52a8\u4ee3\u7801\u67e5\u770b\u6548\u679c\uff0c\u9700\u8981\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u4e2d\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run serve\n")),(0,o.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\uff08\u5efa\u8baeChrome\u6d4f\u89c8\u5668\uff09\u901a\u8fc7\u94fe\u63a5\u8bbf\u95ee\u5e94\u7528\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")," .\n\u5f53\u60a8\u4f7f\u7528\u8be5\u65b9\u5f0f\u8fd0\u884c\u9879\u76ee\u65f6\uff0c\u60a8\u5bf9\u4ee3\u7801\u7684\u6539\u52a8\u4ea7\u751f\u7684\u6548\u679c\uff0c\u4f1a\u52a8\u6001\u4f53\u73b0\u5728\u6d4f\u89c8\u5668\u4e0a\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u56e0\u4e3a\u9879\u76ee\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u5f00\u53d1\uff0c\u6240\u4ee5\u5728\u672c\u5730\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\u65f6\uff0c\u9700\u8981\u5bf9\u6d4f\u89c8\u5668\u8fdb\u884c\u8bbe\u7f6e\u8de8\u57df\u624d\u80fd\u8bbf\u95ee\u540e\u7aef\u63a5\u53e3\uff0c\u5177\u4f53\u8bbe\u7f6e\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"strong",href:"https://www.jianshu.com/p/56b1e01e6b6a"},"\u89e3\u51b3Chrome\u8de8\u57df\u95ee\u9898"))),(0,o.kt)("p",null,"##6 \u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"61-npm-install\u65e0\u6cd5\u6210\u529f"},"6.1 npm install\u65e0\u6cd5\u6210\u529f"),(0,o.kt)("p",null,"\u5982\u679c\u9047\u5230\u8be5\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528\u56fd\u5185\u7684\u6dd8\u5b9dnpm\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g cnpm --registry=https://registry.npm.taobao.org\n")),(0,o.kt)("p",null,"\u63a5\u7740\uff0c\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u6307\u4ee4\u4ee3\u66ffnpm install\u6307\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cnpm install\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u9879\u76ee\u542f\u52a8\u548c\u6253\u5305\u65f6\uff0c\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528npm run build\u548cnpm run serve\u6307\u4ee4"))}d.isMDXComponent=!0}}]);