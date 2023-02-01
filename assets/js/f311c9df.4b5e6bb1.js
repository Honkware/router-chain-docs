"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[7751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Execute the Transaction",sidebar_position:3},s=void 0,c={unversionedId:"tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction",id:"tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction",title:"Execute the Transaction",description:"Example",source:"@site/docs/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction.md",sourceDirName:"tools/voyager-js-sdk/performing-cross-chain-transaction",slug:"/tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/execute-transaction.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Execute the Transaction",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Check and Set Allowances",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance"},next:{title:"Check the Status",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/check-status"}},i={},l=[{value:"Example",id:"example",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const tx = await routerprotocol.swap("QUOTE","SOURCE_SIGNER")\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import { RouterProtocol } from "@routerprotocol/router-js-sdk"\nimport { ethers } from "ethers";\n\nconst main = async() => {\n\n// initialize a RouterProtocol instance\n\n// get a quote for USDC transfer from Polygon to Fantom\nconst quote = await routerprotocol.getQuote("AMOUNT", "DESTINATION_CHAIN_ID", "SOURCE_TOKEN_ADDRESS", "DESTINATION_TOKEN_ADDRESS", "USER_ADDRESS", "FEE_TOKEN_ADDRESS", "SLIPPAGE_TOLERANCE")\n// amount has to be decimal adjusted (i.e. for 1 USDC, pass 1000000 since USDC has 6 decimal places)\n\n// get allowance and give the relevant approvals\n\n// execute the transaction\nconst wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider) // provider was set up while initializing an instance of RouterProtocol\n// use provider.getSigner() method to get a signer if you\'re using this for a UI\n\nlet tx;\ntry{\n    tx = await routerprotocol.swap(quote,wallet)\n    console.log(`Transaction successfully completed. Tx hash: ${tx.hash}`)\n}\ncatch(e){\n    console.log(`Transaction failed with error ${e}`)\n    return\n}\n}\n\nmain()\n')))}u.isMDXComponent=!0}}]);