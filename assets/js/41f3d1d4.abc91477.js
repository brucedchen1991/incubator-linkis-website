"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[68626],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"Version upgrades above 1.0.3",sidebar_position:2},l=void 0,d={unversionedId:"upgrade/upgrade_guide",id:"upgrade/upgrade_guide",isDocsHomePage:!1,title:"Version upgrades above 1.0.3",description:"This article briefly introduces the general upgrade process for versions above 1.0.3",source:"@site/docs/upgrade/upgrade_guide.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade_guide",permalink:"/docs/1.1.3/upgrade/upgrade_guide",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/upgrade/upgrade_guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Version upgrades above 1.0.3",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Upgrade From 0.X To 1.0 Guide",permalink:"/docs/1.1.3/upgrade/upgrade_from_0.X_to_1.0_guide"},next:{title:"Overview",permalink:"/docs/1.1.3/tuning_and_troubleshooting/overview"}},c=[{value:"1 Upgrade Instructions",id:"1-upgrade-instructions",children:[]},{value:"2 Service upgrade installation",id:"2-service-upgrade-installation",children:[]},{value:"3. Database table upgrade",id:"3-database-table-upgrade",children:[]},{value:"4 Adjustment of data (optional)",id:"4-adjustment-of-data-optional",children:[{value:"4.1 TOKEN configuration",id:"41-token-configuration",children:[]},{value:"4.2 UDF Adjustment",id:"42-udf-adjustment",children:[]},{value:"4.3 Session field key configuration",id:"43-session-field-key-configuration",children:[]},{value:"4.4 Adjustment of default queue",id:"44-adjustment-of-default-queue",children:[]},{value:"4.5 Copies of other related packages",id:"45-copies-of-other-related-packages",children:[]}]},{value:"5 Updates to the console",id:"5-updates-to-the-console",children:[{value:"5.1 Download the front-end installation package and unzip it",id:"51-download-the-front-end-installation-package-and-unzip-it",children:[]},{value:"5.2 Upgrade",id:"52-upgrade",children:[]},{value:"5.3 Notes",id:"53-notes",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article briefly introduces the general upgrade process for versions above 1.0.3")),(0,o.kt)("h2",{id:"1-upgrade-instructions"},"1 Upgrade Instructions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are installing and using Linkis for the first time, or reinstalling Linkis, you don't need to pay attention to the Linkis upgrade guide."),(0,o.kt)("li",{parentName:"ul"},"If components of other platforms (DataSphereStudio/Qualitis/Visualis, etc.) are involved, please confirm the compatibility between versions before upgrading, and it is best to use the recommended version."),(0,o.kt)("li",{parentName:"ul"},"It is recommended to control the version through the soft chain. You can switch the version by modifying the target address of the soft chain. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"linkis -> /appcom/Install/LinkisInstall/linkis-1.1.3.20220615210213")),(0,o.kt)("li",{parentName:"ul"},"The upgrade process mainly requires attention to the adjustment of the database table structure and the adjustment of some configuration parameters"),(0,o.kt)("li",{parentName:"ul"},"In addition to the upgrade of the back-end services, the management console resources of linkis also need to be upgraded together"),(0,o.kt)("li",{parentName:"ul"},"The main changes of each version can be found in the overview information of the version ",(0,o.kt)("inlineCode",{parentName:"li"},"https://linkis.apache.org/zh-CN/docs/x.x.x/release")," and the version ","[release-note]","(",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache"},"https://linkis.apache")," .org/zh-CN/download/main): ",(0,o.kt)("a",{parentName:"li",href:"https://linkis.apache.org/zh-CN/download/main"},"https://linkis.apache.org/zh-CN/download/main")),(0,o.kt)("li",{parentName:"ul"},"The database changes/configuration parameter changes of each version are based on the previous version")),(0,o.kt)("h2",{id:"2-service-upgrade-installation"},"2 Service upgrade installation"),(0,o.kt)("p",null,"Press ",(0,o.kt)("a",{parentName:"p",href:"../deployment/quick_deploy"},"Deployment guide document")," (the installation of the management console in the document can be skipped) to install the new version."),(0,o.kt)("p",null,"When installing the service, if the historical data is retained, please retain the historical data, if you do not need to retain the data, just reinstall it directly"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Do you want to clear Linkis table information in the database?\n 1: Do not execute table-building statements\n 2: Dangerous! Clear all data and rebuild the tables\n other: exit\n\nPlease input the choice: ## choice 1\n")),(0,o.kt)("h2",{id:"3-database-table-upgrade"},"3. Database table upgrade"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After the service installation is completed, the database structure needs to be modified, including table structure changes and table data changes")),(0,o.kt)("p",null,"Find the corresponding version ",(0,o.kt)("inlineCode",{parentName:"p"},"db/upgrade/x.x.x-schema/")," sql change file"),(0,o.kt)("p",null,"If it is executed across multiple versions, please execute them in the order of versions,\nIf some versions do not have x.x.x_schema (after the linkis>=1.1.0 version, as long as the adjustment of the database table is involved, there will be a corresponding version of the schema file), it means that there is no change in the data table in this version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"\u251c\u2500\u2500 linkis_ddl.sql # The current version of the full ddl database definition language table building statement\n\u251c\u2500\u2500 linkis_dml.sql # The current version of the full dml data manipulation language data additions and changes\n\u2514\u2500\u2500 upgrade\n    \u251c\u2500\u2500 1.1.0_schema # The corresponding version of sql\n    \u2502 \u2514\u2500\u2500 mysql\n    \u2502 \u251c\u2500\u2500 linkis_ddl.sql\n    \u2502 \u2514\u2500\u2500 linkis_dml.sql\n    \u251c\u2500\u2500 1.1.1_schema\n    \u2502 \u2514\u2500\u2500 mysql\n    \u2502 \u251c\u2500\u2500 linkis_ddl.sql\n    \u2502 \u2514\u2500\u2500 linkis_dml.sql\n    \u2514\u2500\u2500 1.1.3_schema\n        \u2514\u2500\u2500 mysql\n            \u2514\u2500\u2500 linkis_ddl.sql\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"    #If it is executed across multiple versions, please execute in order of versions, execute ddl first and then execute ddl\n    #For example, currently upgrade from linkis-1.0.3 to linkis-1.1.2\n    source upgrade/1.1.0_schema/mysql/linkis_ddl.sql\n    source upgrade/1.1.0_schema/mysql/linkis_dml.sql\n\n    source upgrade/1.1.1_schema/mysql/linkis_ddl.sql\n    source upgrade/1.1.1_schema/mysql/linkis_dml.sql\n\n")),(0,o.kt)("h2",{id:"4-adjustment-of-data-optional"},"4 Adjustment of data (optional)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"According to the actual situation, decide whether to make the following adjustments")),(0,o.kt)("h3",{id:"41-token-configuration"},"4.1 TOKEN configuration"),(0,o.kt)("p",null,"Authentication for interface calls yes\n1.1.1 Version adjustment Migrate the original TOKEN configuration from ",(0,o.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/token.properties")," to the database table ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis_mg_gateway_auth_token"),",\nFor the TOKEN originally configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"token.properties"),", you need to manually migrate the table"),(0,o.kt)("h3",{id:"42-udf-adjustment"},"4.2 UDF Adjustment"),(0,o.kt)("p",null,"1.1.1 supports the functions of UDF multi-version control and UDF storage to BML, the table structure stored by UDF functions has been adjusted, and the historical data of UDF needs to be migrated separately"),(0,o.kt)("h3",{id:"43-session-field-key-configuration"},"4.3 Session field key configuration"),(0,o.kt)("p",null,"In version 1.1.1, the key of the session field was adjusted from ",(0,o.kt)("inlineCode",{parentName:"p"},"bdp-user-ticket-id"),"-> to ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis_user_session_ticket_id_v1"),",\nIf it is an upgrade to Linkis. At the same time, DSS or other projects are deployed, but in their service lib package, the linkis-module-x.x.x.jar package of Linkis that they depend on is <1.1.1, you need to modify the file located in ",(0,o.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME}/conf/linkis.properties")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo "wds.linkis.session.ticket.key=bdp-user-ticket-id" >> linkis.properties\n')),(0,o.kt)("h3",{id:"44-adjustment-of-default-queue"},"4.4 Adjustment of default queue"),(0,o.kt)("p",null,"1.1.1 Begin to adjust the default cluster name of yarn queue ",(0,o.kt)("inlineCode",{parentName:"p"},"wds.linkis.rm.cluster")," sit is adjusted to default, if you have been using sit, please modify the table data\nCluster name in ",(0,o.kt)("inlineCode",{parentName:"p"},"linkis_cg_rm_external_resource_provider")),(0,o.kt)("h3",{id:"45-copies-of-other-related-packages"},"4.5 Copies of other related packages"),(0,o.kt)("p",null,"If there is a third-party appconn plugin installed in ",(0,o.kt)("inlineCode",{parentName:"p"},"${LINKIS_HOME_OLD}/lib/linkis-engineconn-plugins")," in the previous version of Linkis, you need to copy it to the new version,\nIt is best to link to the appconn path through a soft chain\nlike:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#Check if the old version has a third-party appconn installed\ncd ${LINKIS_HOME_OLD}/lib/linkis-engineconn-plugins/\nll\n appconn -> /appcom/Install/LinkisInstall/appconn\n\n\n#The new version is consistent\ncd ${LINKIS_HOME}/lib/linkis-engineconn-plugins/\n#soft chain\nln -snf /appcom/Install/LinkisInstall/appconn appconn\n")),(0,o.kt)("p",null,"If dss is installed in the original version, you need to copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"dss-gateway-support-x.x.x.jar")," in the original package to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./lib/linkis-spring-cloud-services/linkis-mg-gateway/")," directory of linkis\nlike:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cp ${LINKIS_HOME_OLD}/lib/linkis-spring-cloud-services/linkis-mg-gateway/dss-gateway-support-1.1.3.jar ${LINKIS_HOME}/lib/linkis-spring-cloud-services/linkis- mg-gateway/dss-gateway-support-1.1.3.jar\n\n")),(0,o.kt)("h2",{id:"5-updates-to-the-console"},"5 Updates to the console"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To upgrade the backend, you also need to upgrade the corresponding management console resources. You don't need to install the management console, just replace the static resources directly.")),(0,o.kt)("h3",{id:"51-download-the-front-end-installation-package-and-unzip-it"},"5.1 Download the front-end installation package and unzip it"),(0,o.kt)("p",null,"Upload it to the server where the management console is located, and decompress it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"tar -xvf apache-linkis-x.x.x-incubating-web-bin.tar.gz\n")),(0,o.kt)("h3",{id:"52-upgrade"},"5.2 Upgrade"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There are many ways to upgrade the management console, because it is only the update of resources, which can be done through the installation script of the management console, or it can directly overwrite the original resources.\nIt is recommended to use the soft chain method, just modify the target address of the soft chain. The following takes the new version resource path method as an example")),(0,o.kt)("p",null,"The nginx configuration file is by default in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/*"),"\nnginx log files are in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/access.log")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/nginx/error.log")),(0,o.kt)("p",null,"Scenario 1: If it is integrated into the DSS project, modify the address of the linkis management console resource in the DSS project to point to\nThe nginx configuration file for dss is by default in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/dss.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"#Example\n        server {\n            ......\n            location dss/linkis {\n            alias /appcom/Install/linkis-web-newversion/dist; # static file directory\n            index index.html index.html;\n            }\n            .....\n        }\n")),(0,o.kt)("p",null,"Scenario 2: If linkis is deployed independently\nModify the configuration of Nginx, the static resource address points to the new version of the linkis console\nLinkis' nginx configuration file is by default in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/dss.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"#Example\n        server {\n            ......\n            location dss/linkis {\n            alias /appcom/Install/linkis-web-newversion/dist; # static file directory\n            index index.html index.html;\n            }\n            ......\n        }\n")),(0,o.kt)("p",null,"Reload nginx configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nginx -s reload\n")),(0,o.kt)("h3",{id:"53-notes"},"5.3 Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After the management console is upgraded, because the browser may have a cache, if you want to verify the effect, it is best to clear the browser cache")))}p.isMDXComponent=!0}}]);