"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Fee Management",sidebar_position:5},o=void 0,s={unversionedId:"fee-management",id:"fee-management",title:"Fee Management",description:"Gas and Fee Payer Considerations",source:"@site/docs/crosstalk/fee-management.md",sourceDirName:".",slug:"/fee-management",permalink:"/crosstalk/fee-management",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/crosstalk/fee-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Fee Management",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Multiple Calls with Acknowledgment",permalink:"/crosstalk/different-types-of-requests/evm_guides/multiple-calls-with-ack"},next:{title:"Decentralized Cross-chain Read Requests",permalink:"/crosstalk/cross-chain-read-requests/"}},l={},c=[{value:"Gas and Fee Payer Considerations",id:"gas-and-fee-payer-considerations",level:2},{value:"CrossTalk Fee Model",id:"crosstalk-fee-model",level:2},{value:"Deducting Fee",id:"deducting-fee",level:3},{value:"Handling Refunds",id:"handling-refunds",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gas-and-fee-payer-considerations"},"Gas and Fee Payer Considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike the OmniChain framework, in the case of CrossTalk, users are required to specify both the ",(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"gasLimit")," in their request. This is because the gas parameters and the fee payer specified in a CrossTalk request are used for the execution of the request on the destination chain. In case the ",(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," is set to 0, it will be estimated by the gas price oracle module on the Router chain."),(0,r.kt)("li",{parentName:"ul"},"For a CrossTalk request, relayers might not need to estimate the gas price since the request itself will contain a ",(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," parameter. However, applications running their custom relayers might pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," as 0, in which case, the custom relayer will have to estimate the gas price.")),(0,r.kt)("h2",{id:"crosstalk-fee-model"},"CrossTalk Fee Model"),(0,r.kt)("p",null,"The application has to call a function ",(0,r.kt)("inlineCode",{parentName:"p"},"setDappMetadata")," on the Gateway address with the address of fee payer which should be an address on the Router Chain. This fee payer address will then have to approve the application on the Router Chain by doing a fee payer approval transaction. This is to stop anyone from using someone else's address as the fee payer. This address will be responsible for paying fees for the crosstalk requests originating from that Dapp. Also, all the fee refunds will be processed and credited to this account only. The application can change the fee payer address anytime by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"setDappMetadata")," function on the Gateway contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function setDappMetadata(\n    string memory feePayerAddress\n) external payable returns (uint64)\n")),(0,r.kt)("p",null,"Note that this function is named ",(0,r.kt)("inlineCode",{parentName:"p"},"set_dapp_metadata")," in the NEAR ecosystem."),(0,r.kt)("h3",{id:"deducting-fee"},"Deducting Fee"),(0,r.kt)("p",null,"CrossTalk works on a prepaid fee model. Upon receiving the CrossTalk Request, the Router chain will calculate the estimated fee for executing the transaction on the destination chain in terms of ROUTE tokens and deduct the fee plus incentive from the ",(0,r.kt)("inlineCode",{parentName:"p"},"feePayer")," address upfront."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"EstimatedFeeInRoute = EstimatedFeeInDestNativeToken * PriceRatio;\nEstimatedFeeInDestNativeToken = DestGasLimit * GasPriceInDestNativeToken;\nPriceRatio = DestNativeTokenPrice / RouteTokenPrice;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fee and relayer incentive for any cross-chain request on Router have to be paid in ROUTE tokens only."),(0,r.kt)("li",{parentName:"ol"},"To prevent Sybil attacks on the Router chain, Router's Gateway contract on the source chain charges a minimal fee from the application contract to cover the cost of orchestrator validation. This fee is paid in the source chain's native token.")),(0,r.kt)("h3",{id:"handling-refunds"},"Handling Refunds"),(0,r.kt)("p",null,"Once the Router chain receives the CrossTalkAck generated by the destination chain's Gateway contract, it (a) pays the relayer address the incentive + fee used from the already deducted fee, and (b) refunds the ",(0,r.kt)("inlineCode",{parentName:"p"},"feePayer")," address the extra fee deducted. This mechanism ensures the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The relayer receives its incentive automatically without any delay."),(0,r.kt)("li",{parentName:"ul"},"The applications can send extra gas limit as a buffer since they will get automatic refunds in case of a surplus fee.")))}p.isMDXComponent=!0}}]);