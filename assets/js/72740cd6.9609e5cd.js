"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[4855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64240:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},o="Usage",i={unversionedId:"router-robot/usage/README",id:"router-robot/usage/README",title:"Usage",description:"How to use Router Robot?",source:"@site/docs/infra/router-robot/usage/README.md",sourceDirName:"router-robot/usage",slug:"/router-robot/usage/",permalink:"/infra/router-robot/usage/",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/infra/router-robot/usage/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/infra/router-robot/"},next:{title:"Relayer",permalink:"/infra/category/relayer"}},p={},s=[{value:"Installing the Latest Release",id:"installing-the-latest-release",level:3},{value:"Generating a Template",id:"generating-a-template",level:3},{value:"Sample Test App",id:"sample-test-app",level:2},{value:"Process Flow for the Sample Test App",id:"process-flow-for-the-sample-test-app",level:3},{value:"All test cases related to app are available in the following files:",id:"all-test-cases-related-to-app-are-available-in-the-following-files",level:4},{value:"All the business logic is available in the following files:",id:"all-the-business-logic-is-available-in-the-following-files",level:4}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("p",null,"How to use Router Robot?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To leverage the capabilities of the Router Robot framework, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"router-robot")," CLI."),(0,r.kt)("h3",{id:"installing-the-latest-release"},"Installing the Latest Release"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/router-protocol/router-robot@alpha15.0\n")),(0,r.kt)("h3",{id:"generating-a-template"},"Generating a Template"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1)")," Create a config. json file with your application name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"appName": "testapp"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2)")," Pass this config.json to the router-robot cli command to generate a template codebase wherein you can write your own test cases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"router-robot config --file=config.json\n")),(0,r.kt)("p",null,"We are using a dedicated config for initialization since more parameters might be required while initializing a template in the future."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-test-app"},"Sample Test App"),(0,r.kt)("p",null,"Enable the sample flag to generate a sample test application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"router-robot config --sample=true\n")),(0,r.kt)("h3",{id:"process-flow-for-the-sample-test-app"},"Process Flow for the Sample Test App"),(0,r.kt)("h4",{id:"all-test-cases-related-to-app-are-available-in-the-following-files"},"All test cases related to app are available in the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"testapp_suite_test.go")," - This file contains ",(0,r.kt)("inlineCode",{parentName:"p"},"BeforeSuite")," where network configuration related to the test suite is bootstrapped. After the network config is created ",(0,r.kt)("inlineCode",{parentName:"p"},"InitializeHelloWorldApp")," (available in ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld.go"),") is called.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"helloworld_test.go")," - Using this file, you can create ",(0,r.kt)("inlineCode",{parentName:"p"},"describe")," test suites depending upon your test strategy. In this example, we created an inbound request and then call ",(0,r.kt)("inlineCode",{parentName:"p"},"TrackInboundRequest")," function which is available in the router-robot library. Example usage:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"testApp.TrackInboundRequest(testApp.HelloWorldApp.HelloWorldAppConfig.SourceChainType, testApp.HelloWorldApp.HelloWorldAppConfig.SourceChainID, txHash)\n")),(0,r.kt)("p",null,"In the future, we will add integrate the tracking feature directly into the CLI which will allow users to track transaction status through different states on the Router chain using the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chainType")," - Source chain type (EVM, Polkadot, etc.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chainID")," - Source chain ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"txHash")," - Inbound txn hash on the Router chain"))),(0,r.kt)("h4",{id:"all-the-business-logic-is-available-in-the-following-files"},"All the business logic is available in the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"testapp.go")," - This file has a function ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTestApp(networkConfigPath string),")," which takes a path to the network configuration file as input and then initializes context JSON values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"helloworld.go")," - This file contains all the necessary business logic to run the following functions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DeployHelloWorldContract")," - Deploys a contract on a given source chain (other than the Router chain)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"DeployHelloWorldMiddlewareContract")," - Deploys a middleware contract on the Router chain, which acts as an application-specific bridge contract between two third-party chains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"SubmitHelloWorldInboundRequest")))))))}c.isMDXComponent=!0}}]);