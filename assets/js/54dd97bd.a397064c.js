"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[6465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),f=r,p=h["".concat(s,".").concat(f)]||h[f]||d[f]||o;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"handle_crosstalk_ack",sidebar_position:3},i="handle_crosstalk_ack Function",l={unversionedId:"understanding-crosstalk/near_guides/handleCrossTalkAck",id:"understanding-crosstalk/near_guides/handleCrossTalkAck",title:"handle_crosstalk_ack",description:"Once the handle_request_from_source function is executed, an acknowledgment is generated from Router's destination chain Gateway contract, which will specify whether the calls were successful. We need to implement a handle_crosstalk_ack function in our contract with the following schema.",source:"@site/docs/crosstalk/understanding-crosstalk/near_guides/handleCrossTalkAck.md",sourceDirName:"understanding-crosstalk/near_guides",slug:"/understanding-crosstalk/near_guides/handleCrossTalkAck",permalink:"/crosstalk/understanding-crosstalk/near_guides/handleCrossTalkAck",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/crosstalk/understanding-crosstalk/near_guides/handleCrossTalkAck.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"handle_crosstalk_ack",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"handle_request_from_source",permalink:"/crosstalk/understanding-crosstalk/near_guides/handleRequestFromSource"},next:{title:"setDappMetadata",permalink:"/crosstalk/understanding-crosstalk/setDappMetadata"}},s={},c=[{value:"1. event_identifier",id:"1-event_identifier",level:3},{value:"2. exec_flags",id:"2-exec_flags",level:3},{value:"How to check the final execution status on the destination chain?",id:"how-to-check-the-final-execution-status-on-the-destination-chain",level:4},{value:"3. execData",id:"3-execdata",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handle_crosstalk_ack-function"},(0,r.kt)("inlineCode",{parentName:"h1"},"handle_crosstalk_ack")," Function"),(0,r.kt)("p",null,"Once the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"handle_request_from_source"))," function is executed, an acknowledgment is generated from Router's destination chain Gateway contract, which will specify whether the calls were successful. We need to implement a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"handle_crosstalk_ack"))," function in our contract with the following schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"pub fn handle_crosstalk_ack(\n    &self,\n    event_identifier: u64,\n    exec_flags: Vec<bool>,\n    exec_data: Vec<Vec<u8>>,\n)\n")),(0,r.kt)("p",null,"If you have opted not to receive the acknowledgement, you can implement an empty function in its place in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"pub fn handle_crosstalk_ack(\n    &self,\n    event_identifier: u64,\n    exec_flags: Vec<bool>,\n    exec_data: Vec<Vec<u8>>,\n) {}\n")),(0,r.kt)("p",null,"If you've opted to receive the acknowledgment, you need to handle the acknowledgment inside this function. This function receives the following params:"),(0,r.kt)("h3",{id:"1-event_identifier"},"1. event_identifier"),(0,r.kt)("p",null,"This is the nonce you received when while calling the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"request_to_dest"))," function on the source chain Gateway contract. Using this nonce, you can verify whether a particular request was executed on the destination chain."),(0,r.kt)("h3",{id:"2-exec_flags"},"2. exec_flags"),(0,r.kt)("p",null,"Since you can send multiple payloads to multiple contract addresses on the destination chain, the exec_flags is an array of boolean values that tells you the status of the individual requests."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"a) If the calls were atomic:")),(0,r.kt)("p",null,"If you sent 3 payloads while initiating the request on the source chain and let\u2019s say the second one failed, you will receive: ","[true, false, false]","."),(0,r.kt)("p",null,"Since the calls were atomic, none of the calls will actually get executed. However, we send you true in the array for the first request so that you know exactly which call failed and help you debug the issue. In the array you received, the place where you received the first false is the index of the call that failed."),(0,r.kt)("h4",{id:"how-to-check-the-final-execution-status-on-the-destination-chain"},"How to check the final execution status on the destination chain?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// function to get if the calls were executed on destination chain\npub fn get_tx_status_for_atomic_call(\n  exec_flags: Vec<bool>\n) -> bool {\n  if exec_flags.len() > 0 {\n    return exec_flags[exec_flags.len() - 1] == true;\n  } else {\n    return false;\n  }\n}\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"b) If the calls were non-atomic:")),"If you sent 3 payloads while initiating the request on the source chain and let\u2019s say the second one failed, you will receive: [true, false, true]. This means that the first and the third call executed successfully while the second one failed."),(0,r.kt)("h3",{id:"3-execdata"},"3. execData"),(0,r.kt)("p",null,"Since you can send multiple payloads to multiple contract addresses on the destination chain, the exec_data is an array of bytes that provides you the return values of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"handle_request_from_source"))," (on the destination chain) from each of these calls. You can decode this data and process it on the source chain. The decoding for this data is shown with example in the ",(0,r.kt)("a",{parentName:"p",href:"../guides/ping-pong-contract/using-gateway-contract#handling-the-acknowledgement-received-from-destination-chain"},"Ping-Pong contract"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"a) If the calls were atomic:")),"If you sent 3 payloads while initiating the request on the source chain and let\u2019s say the second one failed, you will receive: [return_data, error_data, empty_data]."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"b) If the calls were non-atomic:")),"If you sent 3 payloads while initiating the request on the source chain and let\u2019s say the second one failed, you will receive: [return_data, error_data, return_data]."))}d.isMDXComponent=!0}}]);