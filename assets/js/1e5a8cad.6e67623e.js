"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[8843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Using Router CrossTalk Utils Library",sidebar_position:2,description:"A simple ping pong contract using Router CrossTalkUtils Library"},s=void 0,o={unversionedId:"guides/evm_guides/ping-pong-contract/using-contract-utils-library",id:"guides/evm_guides/ping-pong-contract/using-contract-utils-library",title:"Using Router CrossTalk Utils Library",description:"A simple ping pong contract using Router CrossTalkUtils Library",source:"@site/docs/crosstalk/guides/evm_guides/ping-pong-contract/using-contract-utils-library.md",sourceDirName:"guides/evm_guides/ping-pong-contract",slug:"/guides/evm_guides/ping-pong-contract/using-contract-utils-library",permalink:"/crosstalk/guides/evm_guides/ping-pong-contract/using-contract-utils-library",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/crosstalk/guides/evm_guides/ping-pong-contract/using-contract-utils-library.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using Router CrossTalk Utils Library",sidebar_position:2,description:"A simple ping pong contract using Router CrossTalkUtils Library"},sidebar:"tutorialSidebar",previous:{title:"Using Gateway Contract Directly",permalink:"/crosstalk/guides/evm_guides/ping-pong-contract/using-gateway-contract"},next:{title:"Cross-chain NFT (ERC-1155)",permalink:"/crosstalk/guides/evm_guides/cross-chain-nft/"}},c={},l=[{value:"Installing the dependencies:",id:"installing-the-dependencies",level:3},{value:"Instantiating the contract:",id:"instantiating-the-contract",level:3},{value:"Creating state variables and the constructor",id:"creating-state-variables-and-the-constructor",level:3},{value:"Setting the fee payer address through setDappMetadata function",id:"setting-the-fee-payer-address-through-setdappmetadata-function",level:3},{value:"Sending a ping to the destination chain",id:"sending-a-ping-to-the-destination-chain",level:3},{value:"Handling a cross-chain request",id:"handling-a-cross-chain-request",level:3},{value:"Handling the acknowledgement received from destination chain",id:"handling-the-acknowledgement-received-from-destination-chain",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we will go through how a simple cross-chain ping-pong dApp can be created by integrating the Router GatewayUtils library."),(0,i.kt)("h3",{id:"installing-the-dependencies"},"Installing the dependencies:"),(0,i.kt)("p",null,"Install the evm-gateway contracts with the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @routerprotocol/evm-gateway-contracts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @routerprotocol/evm-gateway-contracts")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you're using version ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0.5"),".")),(0,i.kt)("p",null,"and"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @routerprotocol/router-crosstalk-utils")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @routerprotocol/router-crosstalk-utils")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you're using version ",(0,i.kt)("inlineCode",{parentName:"li"},"1.0.5"),".")),(0,i.kt)("h3",{id:"instantiating-the-contract"},"Instantiating the contract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'pragma solidity >=0.8.0 <0.9.0;\n\nimport "@routerprotocol/evm-gateway-contracts/contracts/ICrossTalkApplication.sol";\nimport "@routerprotocol/router-crosstalk-utils/contracts/CrossTalkUtils.sol";\n\ncontract PingPong is ICrossTalkApplication, IAdditionalSecurityModule {\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import the ICrossTalkApplication.sol from ",(0,i.kt)("inlineCode",{parentName:"li"},"@routerprotocol/evm-gateway-contracts/contracts"),"."),(0,i.kt)("li",{parentName:"ol"},"Import CrossTalkUtils.sol from ",(0,i.kt)("inlineCode",{parentName:"li"},"@routerprotocol/router-crosstalk-utils/contracts")),(0,i.kt)("li",{parentName:"ol"},"Inherit the ICrossTalkApplication contract into your main contract ",(0,i.kt)("code",null,"PingPong"),".")),(0,i.kt)("h3",{id:"creating-state-variables-and-the-constructor"},"Creating state variables and the constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"IGateway public gatewayContract;\nuint64 public destGasLimit;\nuint64 public ackGasLimit;\nuint64 public currentRequestId;\n// srcChainType + srcChainId + requestId => pingFromSource\nmapping(uint64 => mapping(string => mapping(uint64 => string)))\n  public pingFromSource;\n// requestId => ackMessage\nmapping(uint64 => string) public ackFromDestination;\n\nerror CustomError(string message);\nevent PingFromSource(\n  uint64 indexed srcChainType,\n  string indexed srcChainId,\n  uint64 indexed requestId,\n  string message\n);\nevent NewPing(uint64 indexed requestId);\nevent ExecutionStatus(uint64 eventIdentifier, bool isSuccess);\nevent ReceivedSrcChainIdAndType(uint64 chainType, string chainID);\n\nconstructor(\n    address payable gatewayAddress,\n    uint64 _destGasLimit,\n    uint64 _ackGasLimit\n) {\n  gatewayContract = IGateway(gatewayAddress);\n    destGasLimit = _destGasLimit;\n    ackGasLimit = _ackGasLimit;\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an instance to the ",(0,i.kt)("strong",{parentName:"li"},"gateway")," contract of type address. This will be the contract which will route your message to the Router Chain."),(0,i.kt)("li",{parentName:"ol"},"Create a variable ",(0,i.kt)("strong",{parentName:"li"},"destGasLimit")," of type uint64 which indicates the amount of gas required to execute the function that will handle our cross-chain request on the destination chain. This can be easily calculated using any gas estimator. You can use ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/hardhat-gas-reporter"},(0,i.kt)("em",{parentName:"a"},"hardhat-gas-reporter"))," plugin to calculate this."),(0,i.kt)("li",{parentName:"ol"},"Create a variable ",(0,i.kt)("strong",{parentName:"li"},"ackGasLimit")," of type uint64 which indicates the amount of gas required to execute the callback function that will handle the acknowledgement coming back from to the source chain. This can be easily calculated using any gas estimator. You can use ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/hardhat-gas-reporter"},"hardhat-gas-reporter"))," plugin to calculate this."),(0,i.kt)("li",{parentName:"ol"},"Create a variable ",(0,i.kt)("strong",{parentName:"li"},"currentRequestId")," of type uint64 which indicates the number of last request that has been made from source chain."),(0,i.kt)("li",{parentName:"ol"},"Create a mapping ",(0,i.kt)("strong",{parentName:"li"},"pingFromSource")," to fetch the ping that we received on destination chain corresponding to source chain type, source chain id and request id."),(0,i.kt)("li",{parentName:"ol"},"Create a mapping ",(0,i.kt)("strong",{parentName:"li"},"ackFromDestination")," to fetch the acknowledgement that is received by source chain from destination chain after the cross-chain request has been successfully executed on the destination chain."),(0,i.kt)("li",{parentName:"ol"},"Create a custom error variable which can be used to throw custom errors."),(0,i.kt)("li",{parentName:"ol"},"Create an event ",(0,i.kt)("strong",{parentName:"li"},"PingFromSource")," with parameters source chain type, source chain id, request id and the string. We will use it to emit event while handling the request from source chain on the destination chain."),(0,i.kt)("li",{parentName:"ol"},"Create an event ",(0,i.kt)("strong",{parentName:"li"},"NewPing")," with request id as a parameter. This will be emitted after initiating the cross-chain request from source chain."),(0,i.kt)("li",{parentName:"ol"},"Create an event ",(0,i.kt)("strong",{parentName:"li"},"ExecutionStatus")," with parameters uint64 eventIdentifier and a bool isSuccess. We will use it to emit event when we handle the acknowledgement coming back to the source chain from the destination chain."),(0,i.kt)("li",{parentName:"ol"},"Create an event ",(0,i.kt)("strong",{parentName:"li"},"ReceivedSrcChainIdAndType")," with parameters uint64 chainType and string chainID. We will use it to emit event when we handle the acknowledgement coming back to the source chain from the destination chain."),(0,i.kt)("li",{parentName:"ol"},"Create the constructor with the address of gateway contract, the destination gas limit and the ack gas limit and set these variables inside the constructor.")),(0,i.kt)("h3",{id:"setting-the-fee-payer-address-through-setdappmetadata-function"},"Setting the fee payer address through setDappMetadata function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function setDappMetadata(\n    string memory FeePayer\n    ) public {\n    require(msg.sender == owner, "Only owner can set the metadata");\n    gatewayContract.setDappMetadata(FeePayer);\n  }\n')),(0,i.kt)("p",null,"We have a function ",(0,i.kt)("inlineCode",{parentName:"p"},"setDappMetadata")," in our gateway contract that takes the address of the fee payer on router chain from which the cross-chain fee will be deducted. User has to call the function as shown in the code snippet above. After the fee payer address is set, the fee payer has to provide approval on the router chain that this address is willing to pay fees for this Dapp thus enabling the Dapp to actually perform the cross-chain transaction. Note that all the fee refunds will be credited to this fee payer address."),(0,i.kt)("h3",{id:"sending-a-ping-to-the-destination-chain"},"Sending a ping to the destination chain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function pingDestination(\n    uint64 chainType,\n    string memory chainId,\n    uint64 destGasPrice,\n    uint64 ackGasPrice,\n    address destinationContractAddress,\n    string memory str,\n    uint64 expiryDurationInSeconds\n  ) public payable {\n    currentRequestId++;\n    // creating the payload to be sent to the destination chain\n    bytes memory payload = abi.encode(currentRequestId, str);\n\n    Utils.DestinationChainParams memory destChainParams = Utils\n      .DestinationChainParams(\n        destGasLimit,\n        destGasPrice,\n        chainType,\n        chainId,\n        ""\n      );\n\n    Utils.AckGasParams memory ackGasParams = Utils.AckGasParams(\n      ackGasLimit,\n      ackGasPrice\n    );\n\n    Utils.RequestArgs memory requestArgs = Utils.RequestArgs(\n      uint64(block.timestamp) + expiryDurationInSeconds,\n      false\n    );\n\n    CrossTalkUtils.singleRequestWithAcknowledgement(\n      address(gatewayContract),\n      requestArgs,\n      Utils.AckType.ACK_ON_SUCCESS,\n      ackGasParams,\n      destChainParams,\n      CrossTalkUtils.toBytes(destinationContractAddress),\n      payload\n    );\n\n    emit NewPing(currentRequestId);\n  }\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a function with whatever name you want to call it. Here, we will call it the pingDestination function which accepts seven parameters:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"chainType:")," Type of the destination chain. The values for chain types can be found ",(0,i.kt)("a",{parentName:"li",href:"../../understanding-crosstalk/chainTypes"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"chainId:")," Chain ID of the destination chain in string format."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"destGasPrice:")," Gas price of the destination chain."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ackGasPrice:")," Gas price of the source chain.")),(0,i.kt)("p",{parentName:"li"},"To get the gas price for a chain, you can use the following function:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// using ethers.js\nconst gasPrice = await provider.getGasPrice();\n\n// using web3.js\nconst gasPrice = web3.eth.getGasPrice().then((result) => {\n  console.log(web3.utils.fromWei(result, 'ether'));\n});\n")),(0,i.kt)("ol",{parentName:"li",start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"destinationContractAddress:")," Address of the contract that will handle the payload on the destination chain. Basically the address on the destination chain which we are going to ping. This should be in bytes format. To convert contract address to bytes in solidity, check this ",(0,i.kt)("a",{parentName:"li",href:"../../understanding-crosstalk/requestToDest#6-contractcalls"},"function"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"str:")," This is just the string that we want to send as payload to the destination contract. You can send any kind of data as per your requirements."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"expiryDurationInSeconds:")," The duration in seconds for which the cross-chain request created after calling this function remains valid. If the expiry duration elapses before the request is executed on the destination chain contract, the request will fail. If you don\u2019t want to keep any expiry timestamp, just send a very large number (a trillion will do) and your request will never expire."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Create the payload:")," Here, we only want to send a ping with a message. That is why we will just abi encode the string we want to send and set it as the payload. However, you are not limited to just sending a string, you can send any kind of data you want. Just abi encode those data and set it as payload.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Calling the CrossTalk Utils library\u2019s function to generate a cross-chain communication request:")," Now the time has come for us to generate a cross-chain communication request to the destination chain. Since we want to create only a single request to the destination chain, we will call the ",(0,i.kt)("strong",{parentName:"p"},"singleRequestWithAcknowledgement")," function of the CrossTalk Utils library with the required parameters which in turn will call the ",(0,i.kt)("strong",{parentName:"p"},"requestToDest")," function of the Gateway contract. The documentation for this function can be found ",(0,i.kt)("a",{parentName:"p",href:"../../understanding-crosstalk/requestToDest"},"here"),"."),(0,i.kt)("p",{parentName:"li"},"This function returns the nonce of the cross-chain requests generated by the Gateway contract. We will store this nonce into the lastEventIdentifier variable. Now, we have successfully generated a cross-chain request to ping the destination chain contract."))),(0,i.kt)("h3",{id:"handling-a-cross-chain-request"},"Handling a cross-chain request"),(0,i.kt)("p",null,"Now since we know how we can create a cross-chain communication request from the source chain, we will now handle that request on the destination chain. We will be deploying the same contract on both the source and the destination chains, so we need to create the functionality to handle the cross-chain communication request here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function handleRequestFromSource(\n    bytes memory, //srcContractAddress,\n    bytes memory payload,\n    string memory srcChainId,\n    uint64 srcChainType\n  ) external override returns (bytes memory) {\n    require(msg.sender == address(gatewayContract));\n\n    (uint64 requestId, string memory sampleStr) = abi.decode(\n      payload,\n      (uint64, string)\n    );\n\n    if (\n      keccak256(abi.encodePacked(sampleStr)) == keccak256(abi.encodePacked(""))\n    ) {\n      revert CustomError("String should not be empty");\n    }\n\n    pingFromSource[srcChainType][srcChainId][requestId] = sampleStr;\n\n    emit PingFromSource(srcChainType, srcChainId, requestId, sampleStr);\n\n    return abi.encode(requestId, sampleStr);\n  }\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a function named ",(0,i.kt)("strong",{parentName:"li"},"handleRequestFromSource")," and here, the name matters. The function signature, i.e. the name and the parameters it receive has to be the same since this function is called by the Gateway contract on the destination chain and if the name or the parameters to this function changes, the call will fail. The details about the parameters to this function is explained ",(0,i.kt)("a",{parentName:"li",href:"../../understanding-crosstalk/handleRequestFromSource"},"here")," in detail."),(0,i.kt)("li",{parentName:"ol"},"First, we will check that the request can only be sent by the Gateway contract. No other contract or wallet should be able to call this function. We should also check that the request is received from our contract only from the source chain but for simplicity I have not added that condition. You can add it simply by mapping the contract addresses by their chain type and chain ID and checking that the ",(0,i.kt)("code",null,"srcContractAddress")," is equal to the address stored in the map for source chain type and chain ID. We are leaving this as an exercise for you."),(0,i.kt)("li",{parentName:"ol"},"Since the request was generated by us, we know exactly what is received inside the payload. Since we sent a uint64 and a string, we will decode it and store it in a ",(0,i.kt)("code",null,"pingFromSource")," mapping."),(0,i.kt)("li",{parentName:"ol"},"If the string sent from the source chain is empty, we throw a custom error and this will trigger an error acknowledgement to the Router Chain."),(0,i.kt)("li",{parentName:"ol"},"We will now set the greeting if the sampleStr string is non-empty and return the abi encoded request id and string received with the function. This will trigger a success acknowledgement to the Router Chain.")),(0,i.kt)("p",null,"We can return any data from this function which we might use while handling acknowledgement on the source chain Let us return abi encoded request ID and the message string from this function."),(0,i.kt)("p",null,"Now we have handled the request on the destination chain. Now we would like to handle the acknowledgement too on the source chain so that we are able to do some operations based on the acknowledgement we receive."),(0,i.kt)("h3",{id:"handling-the-acknowledgement-received-from-destination-chain"},"Handling the acknowledgement received from destination chain"),(0,i.kt)("p",null,"When the cross-chain request is executed on the destination chain, the destination chain contract triggers an acknowledgement to the source chain. Since we opted to handle the acknowledgement on success when we triggered a cross-chain request, we will have to create a function to handle the acknowledgement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"function handleCrossTalkAck(\n    uint64 eventIdentifier,\n    bool[] memory execFlags,\n    bytes[] memory execData\n  ) external override {\n    bytes memory _execData = abi.decode(execData[0], (bytes));\n\n    (uint64 requestId, string memory ackMessage) = abi.decode(\n      _execData,\n      (uint64, string)\n    );\n\n    ackFromDestination[requestId] = ackMessage;\n\n    emit ExecutionStatus(eventIdentifier, execFlags[0]);\n    emit AckFromDestination(requestId, ackMessage);\n  }\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a function named ",(0,i.kt)("strong",{parentName:"p"},"handleCrossTalkAck")," and here, the name matters. The function signature, i.e. the name and the parameters it receive has to be the same since this function is called by the Gateway contract on the destination chain and if the name or the parameters to this function changes, the call will fail. The details about the parameters to this function is explained ",(0,i.kt)("a",{parentName:"p",href:"../../understanding-crosstalk/handleCrossTalkAck"},"here")," in detail.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"eventIdentifier,")," we receive the nonce which was returned from the ",(0,i.kt)("strong",{parentName:"p"},"requestToDest")," function of the Gateway contract when the request originated from source chain.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Since we sent only one call,"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"if the execution was successful on the destination chain:")),(0,i.kt)("p",{parentName:"li"},"We will get ",(0,i.kt)("code",null,"[true]")," in execFlags and ",(0,i.kt)("code",null,"[abi.encode(abi.encode(sourceChainType, sourceChainId))]")," in execData as we sent this as return value in handleRequestFromSource function.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"If the execution failed on the destination chain:")),(0,i.kt)("p",{parentName:"li"},"We will get ",(0,i.kt)("code",null,"[false]")," in execFlags and ",(0,i.kt)("code",null,"[abi.encode(errorBytes)]")," in execData where error bytes correspond to the error that was thrown on the destination chain contract.\nSince we sent abi.encode(requestId, sampleStr) as return values from the destination chain\u2019s ",(0,i.kt)("strong",{parentName:"p"},"handleRequestFromSource")," function, we can decode it here in the ",(0,i.kt)("strong",{parentName:"p"},"handleCrossTalkAck")," function. First we decode the execData","[0]"," where the return value has come in. We decode it as bytes first. And then decode it into the requestId and sampleStr of the respective types. In this way, you can get the data back from the source chain."))))),(0,i.kt)("p",null,"In this way, we can create a simple ping pong smart contract using the Router CrossTalk Utils library."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Full Contract Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'//SPDX-License-Identifier: UNLICENSED\npragma solidity >=0.8.0 <0.9.0;\n\nimport "@routerprotocol/evm-gateway-contracts/contracts/ICrossTalkApplication.sol";\nimport "@routerprotocol/router-crosstalk-utils/contracts/CrossTalkUtils.sol";\n\ncontract PingPong is ICrossTalkApplication {\n  address public owner;\n  uint64 public currentRequestId;\n  IGateway public gatewayContract;\n  uint64 public destGasLimit;\n  uint64 public ackGasLimit;\n  mapping(uint64 => mapping(string => mapping(uint64 => string)))\n    public pingFromSource;\n  mapping(uint64 => string) public ackFromDestination;\n\n  error CustomError(string message);\n\n  event PingFromSource(\n    uint64 indexed srcChainType,\n    string indexed srcChainId,\n    uint64 indexed requestId,\n    string message\n  );\n  event NewPing(uint64 indexed requestId);\n  event ExecutionStatus(uint64 indexed eventIdentifier, bool isSuccess);\n  event AckFromDestination(uint64 indexed requestId, string ackMessage);\n\n  constructor(\n    address payable gatewayAddress,\n    uint64 _destGasLimit,\n    uint64 _ackGasLimit\n  ) {\n    owner = msg.sender;\n    gatewayContract = IGateway(gatewayAddress);\n    destGasLimit = _destGasLimit;\n    ackGasLimit = _ackGasLimit;\n  }\n\n  function pingDestination(\n    uint64 chainType,\n    string memory chainId,\n    uint64 destGasPrice,\n    uint64 ackGasPrice,\n    address destinationContractAddress,\n    string memory str,\n    uint64 expiryDurationInSeconds\n  ) public payable {\n    currentRequestId++;\n    // creating the payload to be sent to the destination chain\n    bytes memory payload = abi.encode(currentRequestId, str);\n\n    Utils.DestinationChainParams memory destChainParams = Utils\n      .DestinationChainParams(\n        destGasLimit,\n        destGasPrice,\n        chainType,\n        chainId,\n        ""\n      );\n\n    Utils.AckGasParams memory ackGasParams = Utils.AckGasParams(\n      ackGasLimit,\n      ackGasPrice\n    );\n\n    Utils.RequestArgs memory requestArgs = Utils.RequestArgs(\n      uint64(block.timestamp) + expiryDurationInSeconds,\n      false\n    );\n\n    CrossTalkUtils.singleRequestWithAcknowledgement(\n      address(gatewayContract),\n      requestArgs,\n      Utils.AckType.ACK_ON_SUCCESS,\n      ackGasParams,\n      destChainParams,\n      CrossTalkUtils.toBytes(destinationContractAddress),\n      payload\n    );\n\n    emit NewPing(currentRequestId);\n  }\n\n  function setDappMetadata(string memory FeePayer) public {\n    require(msg.sender == owner, "Only owner can set dapp metadata");\n    gatewayContract.setDappMetadata(FeePayer);\n  }\n\n  function handleRequestFromSource(\n    bytes memory, //srcContractAddress,\n    bytes memory payload,\n    string memory srcChainId,\n    uint64 srcChainType\n  ) external override returns (bytes memory) {\n    require(msg.sender == address(gatewayContract));\n\n    (uint64 requestId, string memory sampleStr) = abi.decode(\n      payload,\n      (uint64, string)\n    );\n\n    if (\n      keccak256(abi.encodePacked(sampleStr)) == keccak256(abi.encodePacked(""))\n    ) {\n      revert CustomError("String should not be empty");\n    }\n\n    pingFromSource[srcChainType][srcChainId][requestId] = sampleStr;\n\n    emit PingFromSource(srcChainType, srcChainId, requestId, sampleStr);\n\n    return abi.encode(requestId, sampleStr);\n  }\n\n  function handleCrossTalkAck(\n    uint64 eventIdentifier,\n    bool[] memory execFlags,\n    bytes[] memory execData\n  ) external override {\n    bytes memory _execData = abi.decode(execData[0], (bytes));\n\n    (uint64 requestId, string memory ackMessage) = abi.decode(\n      _execData,\n      (uint64, string)\n    );\n\n    ackFromDestination[requestId] = ackMessage;\n\n    emit ExecutionStatus(eventIdentifier, execFlags[0]);\n    emit AckFromDestination(requestId, ackMessage);\n  }\n}\n\n'))))}u.isMDXComponent=!0}}]);