"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[4739],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),h=p(n),f=a,d=h["".concat(c,".").concat(f)]||h[f]||u[f]||o;return n?r.createElement(d,s(s({ref:e},l),{},{components:n})):r.createElement(d,s({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78037:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Check the Status",sidebar_position:4},s=void 0,i={unversionedId:"tools/voyager-pathFinder-api/performing-cross-chain-transaction/check-status",id:"tools/voyager-pathFinder-api/performing-cross-chain-transaction/check-status",title:"Check the Status",description:"After executing a cross-chain transaction, you can also check its status by querying the following API:",source:"@site/docs/voyager/tools/voyager-pathFinder-api/performing-cross-chain-transaction/check-status.md",sourceDirName:"tools/voyager-pathFinder-api/performing-cross-chain-transaction",slug:"/tools/voyager-pathFinder-api/performing-cross-chain-transaction/check-status",permalink:"/voyager/tools/voyager-pathFinder-api/performing-cross-chain-transaction/check-status",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/voyager/tools/voyager-pathFinder-api/performing-cross-chain-transaction/check-status.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Check the Status",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Execute the Transaction",permalink:"/voyager/tools/voyager-pathFinder-api/performing-cross-chain-transaction/execute-transaction"},next:{title:"Voyager JS SDK",permalink:"/voyager/tools/voyager-js-sdk/"}},c={},p=[],l={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After executing a cross-chain transaction, you can also check its status by querying the following API:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can find the API information ",(0,a.kt)("a",{parentName:"p",href:"../../../../api/?v=PATHFINDER"},(0,a.kt)("strong",{parentName:"a"},"here")),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import axios from "axios"\n\nconst STATS_API_URL = "https://api.stats.routerprotocol.com/api"\n\n// calling the status api using axios\nconst fetchStatus = async (params) => {\n    const endpoint = "status"\n    const pathUrl = `${STATS_API_URL}/${endpoint}`\n    console.log(pathUrl)\n    try {\n        const res = await axios.get(pathUrl, { params })\n        return res.data\n    } catch (e) {\n        console.error(`Fetching data from API: ${e}`)\n    }\n}\n\nconst main = async () => {\n    // sending the transaction using the data prepared by us in step 3\n    const tx = await wallet.sendTransaction(pathfinder_response.txn.execution)\n    try {\n        await tx.wait();\n        console.log(`Transaction mined successfully: ${tx.hash}`)\n    }\n    catch (error) {\n        console.log(`Transaction failed with error: ${error}`)\n        return\n    }\n    \n    let params = {\n        txHash: tx.hash,\n        networkId: args.fromTokenChainId // args were defined in step 1 to fetch data from the pathfinder\n    }\n    \n   setTimeout(async function() {\n        let status = await fetchStatus(params) \n        console.log(status)\n        if (status.tx_status_code === 1) {\n            console.log("Transaction completed")\n          // handle the case where the transaction is complete \n        }\n        else if (status.tx_status_code === 0) {\n            console.log("Transaction still pending")\n        // handle the case where the transaction is still pending\n        }\n      }, 180000); // waiting for sometime before fetching the status of the transaction\n}\n\nmain()\n')))}u.isMDXComponent=!0}}]);