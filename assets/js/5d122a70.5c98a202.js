"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[7193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,g=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Ping Pong Application",sidebar_position:1,description:"A simple ping pong contract using Router Gatway contracts"},o=void 0,s={unversionedId:"guides/near_guides/ping-pong-contract/ping-pong-application",id:"guides/near_guides/ping-pong-contract/ping-pong-application",title:"Ping Pong Application",description:"A simple ping pong contract using Router Gatway contracts",source:"@site/docs/crosstalk/guides/near_guides/ping-pong-contract/ping-pong-application.md",sourceDirName:"guides/near_guides/ping-pong-contract",slug:"/guides/near_guides/ping-pong-contract/ping-pong-application",permalink:"/crosstalk/guides/near_guides/ping-pong-contract/ping-pong-application",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/crosstalk/guides/near_guides/ping-pong-contract/ping-pong-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Ping Pong Application",sidebar_position:1,description:"A simple ping pong contract using Router Gatway contracts"},sidebar:"tutorialSidebar",previous:{title:"Cross-chain Ping Pong",permalink:"/crosstalk/guides/near_guides/ping-pong-contract/"}},c={},l=[{value:"Cloning the NEAR Boilerplate code in Rust",id:"cloning-the-near-boilerplate-code-in-rust",level:3},{value:"Installing the dependencies using Cargo",id:"installing-the-dependencies-using-cargo",level:3},{value:"Starting with the contract",id:"starting-with-the-contract",level:3},{value:"Implementing Default trait for the state variables:",id:"implementing-default-trait-for-the-state-variables",level:3},{value:"Creating the Implementation of the contract and adding an initializer function:",id:"creating-the-implementation-of-the-contract-and-adding-an-initializer-function",level:3},{value:"Creating the helper functions to <code>set</code> and <code>get</code> data:",id:"creating-the-helper-functions-to-set-and-get-data",level:3},{value:"Creating the structs file which contains the required data types:",id:"creating-the-structs-file-which-contains-the-required-data-types",level:3},{value:"Creating the external function interface to call the gateway contract:",id:"creating-the-external-function-interface-to-call-the-gateway-contract",level:3},{value:"Creating a file for defining events:",id:"creating-a-file-for-defining-events",level:3},{value:"Creating the <code>set_dapp_metdata</code> function for setting fee payer address:",id:"creating-the-set_dapp_metdata-function-for-setting-fee-payer-address",level:3},{value:"Creating the function to send a ping to another chain",id:"creating-the-function-to-send-a-ping-to-another-chain",level:3},{value:"Function to receive ping from another chain",id:"function-to-receive-ping-from-another-chain",level:3},{value:"Function to handle the acknowledgement back on the source chain",id:"function-to-handle-the-acknowledgement-back-on-the-source-chain",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we will go through how a simple cross-chain ping-pong dApp can be created by integrating the Router Gateway contracts."),(0,i.kt)("h3",{id:"cloning-the-near-boilerplate-code-in-rust"},"Cloning the NEAR Boilerplate code in Rust"),(0,i.kt)("p",null,"Go to the terminal and clone the boilerplate repository using\n",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/near/boilerplate-template-rs-dev")),(0,i.kt)("p",null,"Get into the folder using ",(0,i.kt)("inlineCode",{parentName:"p"},"cd ./boilerplate-template-rs-dev/contract")),(0,i.kt)("h3",{id:"installing-the-dependencies-using-cargo"},"Installing the dependencies using Cargo"),(0,i.kt)("p",null,"Open the Cargo.toml file and paste the folowing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'[package]\nname = "cross-chain-ping-pong-application"\nversion = "1.0.0"\nauthors = ["Router Protocol"]\nedition = "2021"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[dependencies]\nnear-sdk = "4.0.0"\nschemars = "0.8.12"\nuint = { version = "0.9.3", default-features = false }\nhex = { version = "0.4.3", default-features = false }\nrouter-wasm-bindings = { version = "0.1.17", default-features = false, features = ["ethabi"] }\n\n[profile.release]\ncodegen-units = 1\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n\n[workspace]\nmembers = []\n\n')),(0,i.kt)("h3",{id:"starting-with-the-contract"},"Starting with the contract"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder using ",(0,i.kt)("inlineCode",{parentName:"p"},"cd ./src"),". Now we will start with adding the state variables. Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs")," in your code editor and add the following code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'use near_sdk::{\n    borsh::{self, BorshDeserialize, BorshSerialize},\n    collections::UnorderedMap,\n    env, near_bindgen, AccountId, Gas, Promise,\n};\n\npub const CONTRACT_VERSION: &str = "1.0.0";\npub const CONTRACT_NAME: &str = "PingPong";\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct PingPong {\n    owner: AccountId,\n    gateway: AccountId,\n    current_request_id: u64,\n    // srcChainType, srcChainId, requestId -> pingFromSource\n    ping_from_source: UnorderedMap<(u64, String, u64), String>,\n    // requestId => ackMessage\n    ack_from_destination: UnorderedMap<u64, String>,\n}\n\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"owner"),": AccountId of the owner of the contract. This is just for adding some access control mechanisms."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"gateway"),": This is the AccountId of the Router's Gateway contract."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"current_request_id"),": Request ID is a counter to count the requests. This is also used to index the messages sent and received across chains."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ping_from_source"),": This is a mapping which takes the source chain type, the source chain ID and the request ID and gives the message received from that chain as the output."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ack_from_destination"),": This is a mapping which takes the request ID and gives the message received as acknowledgement back from the destination chain.")),(0,i.kt)("h3",{id:"implementing-default-trait-for-the-state-variables"},"Implementing Default trait for the state variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"impl Default for PingPong {\n    fn default() -> Self {\n        Self {\n            owner: env::predecessor_account_id(),\n            gateway: env::predecessor_account_id(),\n            current_request_id: 0,\n            ping_from_source: UnorderedMap::new(b'p'),\n            ack_from_destination: UnorderedMap::new(b'a'),\n        }\n    }\n}\n")),(0,i.kt)("p",null,"In the NEAR protocol, implementing the Default trait is neccessary. Just set default values for the states in this function."),(0,i.kt)("h3",{id:"creating-the-implementation-of-the-contract-and-adding-an-initializer-function"},"Creating the Implementation of the contract and adding an initializer function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"#[near_bindgen]\nimpl PingPong {\n  #[init]\n  pub fn new(gateway: AccountId) -> Self {\n      Self {\n          owner: env::predecessor_account_id(),\n          gateway,\n          current_request_id: 0,\n          ping_from_source: UnorderedMap::new(b'p'),\n          ack_from_destination: UnorderedMap::new(b'a'),\n      }\n  }\n}\n")),(0,i.kt)("p",null,"We will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," function with the decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," which specifies that this is an initializer function. We pass the AccountId of the Gateway contract here and initialize the contracts."),(0,i.kt)("h3",{id:"creating-the-helper-functions-to-set-and-get-data"},"Creating the helper functions to ",(0,i.kt)("inlineCode",{parentName:"h3"},"set")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"get")," data:"),(0,i.kt)("p",null,"Add the following functions below the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," function. These functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Function to set the gateway account ID.\n// Only the owner account can call this function.\npub fn set_gateway(&mut self, gateway: AccountId) {\n    if env::predecessor_account_id() != self.owner.clone() {\n        env::panic_str("only owner");\n    }\n\n    self.gateway = gateway;\n}\n\n// Function to get the current request ID.\npub fn get_current_request_id(&self) -> u64 {\n    return self.current_request_id.clone();\n}\n\n// Function to get the ping received from another chain.\npub fn get_ping_from_source(\n    &self,\n    src_chain_type: u64,\n    src_chain_id: String,\n    request_id: u64,\n) -> String {\n    self.ping_from_source\n        .get(&(src_chain_type, src_chain_id, request_id))\n        .unwrap_or("".to_string())\n}\n\n// Function to get the pong received back from the destination chain.\npub fn get_ack_from_destination(&self, request_id: u64) -> String {\n    self.ack_from_destination\n        .get(&request_id)\n        .unwrap_or("".to_string())\n}\n\n// Function to get the Gateway Account ID.\npub fn get_gateway(&self) -> AccountId {\n    self.gateway.clone()\n}\n\n// Function to get the Owner AccountId.\npub fn get_owner(&self) -> AccountId {\n    self.owner.clone()\n}\n')),(0,i.kt)("h3",{id:"creating-the-structs-file-which-contains-the-required-data-types"},"Creating the structs file which contains the required data types:"),(0,i.kt)("p",null,"Create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"structs.rs")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder. Also add ",(0,i.kt)("inlineCode",{parentName:"p"},"mod structs;")," at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs")," file.\nIn the file ",(0,i.kt)("inlineCode",{parentName:"p"},"structs.rs"),", add the following structs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'use near_sdk::serde::{Deserialize, Serialize};\nuse schemars::JsonSchema;\n\n#[derive(Debug, JsonSchema, PartialEq, Eq, Serialize, Deserialize)]\n#[serde(rename_all = "snake_case")]\n#[serde(crate = "near_sdk::serde")]\npub struct RequestArgs {\n    pub exp_timestamp: u64,\n    pub is_atomic_calls: bool,\n}\n\n#[derive(Debug, JsonSchema, PartialEq, Eq, Serialize, Deserialize)]\n#[serde(rename_all = "snake_case")]\n#[serde(crate = "near_sdk::serde")]\npub struct DestinationChainParams {\n    pub gas_limit: u64,\n    pub gas_price: u64,\n    pub dest_chain_type: u64,\n    pub dest_chain_id: String,\n    pub asm_address: Vec<u8>,\n}\n\n#[derive(Debug, JsonSchema, PartialEq, Eq, Serialize, Deserialize)]\n#[serde(rename_all = "snake_case")]\n#[serde(crate = "near_sdk::serde")]\npub struct AckGasParams {\n    pub gas_limit: u64,\n    pub gas_price: u64,\n}\n\n#[derive(Debug, JsonSchema, PartialEq, Eq, Serialize, Deserialize)]\n#[serde(rename_all = "snake_case")]\n#[serde(crate = "near_sdk::serde")]\npub struct ContractCalls {\n    pub payloads: Vec<Vec<u8>>,\n    pub dest_contract_addresses: Vec<Vec<u8>>,\n}\n')),(0,i.kt)("p",null,"These are the structs we have already discussed in the ",(0,i.kt)("a",{parentName:"p",href:"../../../../../understanding-crosstalk/near_guides/requestToDest"},"Understanding CrossTalk Section")),(0,i.kt)("h3",{id:"creating-the-external-function-interface-to-call-the-gateway-contract"},"Creating the external function interface to call the gateway contract:"),(0,i.kt)("p",null,"Create another file ",(0,i.kt)("inlineCode",{parentName:"p"},"external.rs")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," folder. Also add ",(0,i.kt)("inlineCode",{parentName:"p"},"mod external;")," at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs")," file.\nIn the file ",(0,i.kt)("inlineCode",{parentName:"p"},"external.rs"),", add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"use crate::structs::*;\nuse near_sdk::ext_contract;\n\npub const TGAS: u64 = 1_000_000_000_000;\n\n// Validator interface, for cross-contract calls\n#[ext_contract(gateway_contract)]\ntrait GatewayContract {\n    fn request_to_dest(\n        &self,\n        request_args: RequestArgs,\n        ack_type: u8,\n        ack_gas_params: AckGasParams,\n        dest_chain_params: DestinationChainParams,\n        contract_calls: ContractCalls,\n    ) -> bool;\n\n    fn set_dapp_metadata(&self, fee_payer_address: String);\n}\n")),(0,i.kt)("p",null,"We have already learnt about the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_to_dest")," function in the ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/near_guides/requestToDest"},"Understanding CrossTalk Section"),".\nAlso we have learnt about the ",(0,i.kt)("inlineCode",{parentName:"p"},"set_dapp_metadata")," function in the ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/setDappMetadata"},"Set Dapp Metadata Section"),"."),(0,i.kt)("h3",{id:"creating-a-file-for-defining-events"},"Creating a file for defining events:"),(0,i.kt)("p",null,"Also create another file for recording the events. Let us name it ",(0,i.kt)("inlineCode",{parentName:"p"},"events.rs"),". Also add ",(0,i.kt)("inlineCode",{parentName:"p"},"mod events;")," at the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs")," file. Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"events.rs"),", add the following events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'use near_sdk::{\n    serde::{Deserialize, Serialize},\n    serde_json,\n};\nuse std::fmt;\n\nuse crate::{CONTRACT_NAME, CONTRACT_VERSION};\n\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(tag = "event", content = "data")]\n#[serde(rename_all = "snake_case")]\n#[serde(crate = "near_sdk::serde")]\n#[non_exhaustive]\npub enum EventLogVariant {\n    PingFromSource(Vec<PingFromSourceEvent>),\n    NewPing(Vec<NewPingEvent>),\n    ExecutionStatus(Vec<ExecutionStatusEvent>),\n    AckFromDestination(Vec<AckFromDestinationEvent>),\n}\n\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct EventLog {\n    pub standard: String,\n    pub version: String,\n\n    // `flatten` to not have "event": {<EventLogVariant>} in the JSON, just have the contents of {<EventLogVariant>}.\n    #[serde(flatten)]\n    pub event: EventLogVariant,\n}\n\nimpl EventLog {\n    pub fn new(event: EventLogVariant) -> Self {\n        Self {\n            standard: CONTRACT_NAME.to_string(),\n            version: CONTRACT_VERSION.to_string(),\n            event,\n        }\n    }\n}\n\nimpl fmt::Display for EventLog {\n    fn fmt(&self, f: &mut fmt::Formatter<\'_>) -> fmt::Result {\n        f.write_fmt(format_args!(\n            "EVENT_JSON:{}",\n            &serde_json::to_string(self).map_err(|_| fmt::Error)?\n        ))\n    }\n}\n\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct PingFromSourceEvent {\n    pub src_chain_type: u64,\n    pub src_chain_id: String,\n    pub request_id: u64,\n    pub message: String,\n}\n\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct NewPingEvent {\n    pub request_id: u64,\n}\n\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct ExecutionStatusEvent {\n    pub event_identifier: u64,\n    pub is_success: bool,\n}\n\n#[derive(Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct AckFromDestinationEvent {\n    pub request_id: u64,\n    pub ack_message: String,\n}\n')),(0,i.kt)("p",null,"We will emit these events as and when required from our contract. Now go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs")," file and add these imports along with other imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"use events::{\n    AckFromDestinationEvent, EventLog,\n    EventLogVariant::{AckFromDestination, ExecutionStatus, NewPing, PingFromSource},\n    ExecutionStatusEvent, NewPingEvent, PingFromSourceEvent,\n};\nuse external::*;\nuse structs::*;\n")),(0,i.kt)("h3",{id:"creating-the-set_dapp_metdata-function-for-setting-fee-payer-address"},"Creating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"set_dapp_metdata")," function for setting fee payer address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"#[payable]\npub fn set_dapp_metadata(&mut self, fee_payer_address: String) -> Promise {\n    gateway_contract::ext(self.gateway.clone())\n        .with_attached_deposit(env::attached_deposit())\n        .with_static_gas(Gas(5 * TGAS))\n        .set_dapp_metadata(fee_payer_address)\n}\n")),(0,i.kt)("p",null,"Create a function ",(0,i.kt)("inlineCode",{parentName:"p"},"set_dapp_metadata")," which takes the address of fee payer as a parameter and call the gateway contract's ",(0,i.kt)("inlineCode",{parentName:"p"},"set_dapp_metadata")," function. Make this function payable by adding the decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"payable")," to it. This is because Router Gateway contract charges some minimal static fees to prevent Sybil attacks."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This fee payer address should be an address on the Router Chain. Check ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/setDappMetadata"},"here")," more details about this function.")),(0,i.kt)("h3",{id:"creating-the-function-to-send-a-ping-to-another-chain"},"Creating the function to send a ping to another chain"),(0,i.kt)("p",null,"Add these imports along with other imports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"use router_wasm_bindings::ethabi::{decode, encode,ethereum_types::U256, ParamType, Token};\n")),(0,i.kt)("p",null,"Add this as a function below ",(0,i.kt)("inlineCode",{parentName:"p"},"set_dapp_metadata")," function in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lib.rs")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"#[payable]\npub fn ping_destination(\n    &mut self,\n    chain_type: u64,\n    chain_id: String,\n    dest_gas_limit: u64,\n    dest_gas_price: u64,\n    ack_gas_limit: u64,\n    ack_gas_price: u64,\n    destination_contract_address: Vec<u8>,\n    message: String,\n    expiry_duration_in_seconds: u64,\n) -> Promise {\n    self.current_request_id += 1;\n\n    let exp_timestamp =\n        env::block_timestamp().checked_div(1000000000).unwrap() + expiry_duration_in_seconds;\n\n    let request_args: RequestArgs = RequestArgs {\n        exp_timestamp,\n        is_atomic_calls: false,\n    };\n\n    let ack_type = 1; // ack_type = 1 => ACK_ON_SUCCESS\n\n    let ack_gas_params: AckGasParams = AckGasParams {\n        gas_limit: ack_gas_limit,\n        gas_price: ack_gas_price,\n    };\n\n    let dest_chain_params: DestinationChainParams = DestinationChainParams {\n        gas_limit: dest_gas_limit,\n        gas_price: dest_gas_price,\n        dest_chain_type: chain_type,\n        dest_chain_id: chain_id,\n        asm_address: Vec::new(),\n    };\n\n    let request_id_token: Token = Token::Uint(U256::from(self.current_request_id.clone()));\n    let message_token: Token = Token::String(message);\n    let encoded: Vec<u8> = encode(&[request_id_token, message_token]);\n\n    let payloads: Vec<Vec<u8>> = vec![encoded];\n\n    let dest_contract_addresses: Vec<Vec<u8>> = vec![destination_contract_address];\n\n    let contract_calls: ContractCalls = ContractCalls {\n        payloads,\n        dest_contract_addresses,\n    };\n\n    let ping_event: EventLog = EventLog::new(NewPing(vec![NewPingEvent {\n        request_id: self.current_request_id.clone(),\n    }]));\n\n    env::log_str(&ping_event.to_string());\n\n    gateway_contract::ext(self.gateway.clone())\n        .with_attached_deposit(env::attached_deposit())\n        .request_to_dest(\n            request_args,\n            ack_type,\n            ack_gas_params,\n            dest_chain_params,\n            contract_calls,\n        )\n}\n")),(0,i.kt)("p",null,"Let's create the function to send a cross-chain request to another chain with a ping. You can name it anything you like. For simplicity, we will name it ",(0,i.kt)("inlineCode",{parentName:"p"},"ping_destination"),". Make this function payable by adding the decorator ",(0,i.kt)("inlineCode",{parentName:"p"},"payable")," to it. This is because Router Gateway contract charges some minimal static fees to prevent Sybil attacks.This function takes nine parameters:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"chain_type:")," Chain type of the destination chain. Chain types for various chains can be found ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/chainTypes"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"chain_id:")," Chain ID of the destination chain. Pass this as a string.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dest_gas_limit:")," The gas limit required for execution of request on the destination chain. Since you will create the function to handle the request on the destination chain, you will know the amount of gas required to execute it.\nIf you pass a lower gas limit than required, the request will not get executed on the destination chain. However, we provide a mechanism to increase the gas limit using the Web Relayer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"dest_gas_price:")," The gas price for the destination chain. If you don't know or don't want to check the gas price, you can just send ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," in its place and Router Chain will figure out the gas price for the destination chain and deduct the fees respectively.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ack_gas_limit:")," The gas limit required for execution of crosstalk acknowledgement received from the destination chain back on the source chain. Since you will create the function to handle the crosstalk acknowledgement request on the source chain, you will know the amount of gas required to execute it.\nIf you pass a lower gas limit than required, the crosstalk acknowledgement request will not get executed on the source chain. However, we provide a mechanism to increase the gas limit using the Web Relayer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ack_gas_price:")," The gas price for the source chain. If you don't know or don't want to check the gas price, you can just send ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," in its place and Router Chain will figure out the gas price for the destination chain and deduct the fees respectively.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"destination_contract_address:")," Address of the contract that will handle the payload on the destination chain. Basically the address on the destination chain which we are going to ping. This has to be passed as vector of type ",(0,i.kt)("inlineCode",{parentName:"p"},"u8"),"."),(0,i.kt)("p",{parentName:"li"},"Please make sure to use the following format:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For EVM chains as the destination chain:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"fn convert_evm_address_to_vec(evm_address: String) -> Vec<u8> {\n  let addr = evm_address.split_at(2).1;\n  let addr_as_vec = hex::decode(addr);\n\n  addr_as_vec.unwrap()\n}\n\n")),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"message:")," The message you want to pass as ping to the destination chain."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"expiry_duration_in_seconds:")," The expiry duration in seconds after which the request will expire and wouldn't be able to execute on the destination chain. If you don't worry about expiry duration, just pass a large number, say a trillion, as the expiry duration.")),(0,i.kt)("p",null,"Now we will increment the request ID and create the parameters for ",(0,i.kt)("inlineCode",{parentName:"p"},"request_to_dest")," function. We will then create the payload by abi encoding the request ID and the message string as payload. Then we will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_to_dest")," function of the Gateway contract. Detailed explanation for this function can be found ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/near_guides/requestToDest"},"here"),"."),(0,i.kt)("p",null,"This will create a cross-chain request to the destination chain along with the payload which is abi encoded argument containing request ID and the message string. Now we will create a function to receive a cross-chain request from another chain. We will also emit a ",(0,i.kt)("inlineCode",{parentName:"p"},"NewPing")," event with the request ID."),(0,i.kt)("h3",{id:"function-to-receive-ping-from-another-chain"},"Function to receive ping from another chain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'pub fn handle_request_from_source(\n    &mut self,\n    _source_contract_address: String,\n    payload: Vec<u8>,\n    source_chain_id: String,\n    source_chain_type: u64,\n) -> Vec<u8> {\n    if env::predecessor_account_id() != self.gateway.clone() {\n        env::panic_str("not gateway");\n    }\n\n    let param_vec: Vec<ParamType> = vec![ParamType::Uint(64), ParamType::String];\n\n    let token_vec: Vec<Token> = match decode(&param_vec, &payload) {\n        Ok(data) => data,\n        Err(_) => env::panic_str("not able to decode the payload"),\n    };\n\n    let request_id: u64 = token_vec[0].clone().into_uint().unwrap().as_u64();\n    let message: String = token_vec[1].clone().into_string().unwrap();\n\n    if message == "".to_string() {\n        env::panic_str("String should not be empty");\n    }\n\n    self.ping_from_source.insert(\n        &(\n            source_chain_type.clone(),\n            source_chain_id.clone(),\n            request_id.clone(),\n        ),\n        &message,\n    );\n\n    let ping_from_source: EventLog = EventLog::new(PingFromSource(vec![PingFromSourceEvent {\n        src_chain_id: source_chain_id.clone(),\n        src_chain_type: source_chain_type.clone(),\n        request_id: request_id.clone(),\n        message: message.clone(),\n    }]));\n\n    env::log_str(&ping_from_source.to_string());\n\n    payload\n}\n\n')),(0,i.kt)("p",null,"Create a function by the name ",(0,i.kt)("inlineCode",{parentName:"p"},"handle_request_from_source")," with the parameters shown in the snippet below. Make sure to keep the name of the function same because otherwise the contract will not be able to receive the requests from another chain. The details of this function is explained here in ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/near_guides/handleRequestFromSource"},"detail"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"source_contract_address:")," The address of the contract on source chain from where this request was created. You can use it to validate whether the request originated from your contract on the source chain."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"payload:")," The payload received from the source chain. Since we only created this payload, we know it is an abi encoded argument containing request ID and the message string. So we will decode it accordingly and set the ",(0,i.kt)("inlineCode",{parentName:"li"},"ping_from_source")," mapping with it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"source_chain_id:")," Chain ID of the source chain from which this request was created."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"source_chain_type:")," Chain type of the source chain from which this request was created.")),(0,i.kt)("p",null,"We will also emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"PingFromSource")," event with the source chain ID, the source chain type, the request ID and the message as the parameters. We will return the payload again so that it is sent as acknowledgement back to the source chain."),(0,i.kt)("p",null,"Now we will create a function to handle the acknowledgement back on the source chain."),(0,i.kt)("h3",{id:"function-to-handle-the-acknowledgement-back-on-the-source-chain"},"Function to handle the acknowledgement back on the source chain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'pub fn handle_crosstalk_ack(\n    &mut self,\n    event_identifier: u64,\n    exec_flags: Vec<bool>,\n    exec_data: Vec<Vec<u8>>,\n) {\n    if env::predecessor_account_id() != self.gateway.clone() {\n        env::panic_str("not gateway");\n    }\n\n    if !exec_flags[0].clone() {\n        env::panic_str("Not executed successfully on the destination chain");\n    }\n\n    let decoded = decode(&[ParamType::Uint(64), ParamType::String], &exec_data[0]);\n    if decoded.is_err() {\n        env::panic_str("Cannot decode the exec data");\n    }\n\n    let decoded: Vec<Token> = decoded.unwrap();\n    let request_id: u64 = decoded[0].clone().into_uint().unwrap().as_u64();\n    let ack_message: String = decoded[1].clone().into_string().unwrap();\n\n    self.ack_from_destination.insert(&request_id, &ack_message);\n\n    let exec_status_event: EventLog = EventLog::new(ExecutionStatus(vec![ExecutionStatusEvent{\n        event_identifier,\n        is_success: exec_flags[0]\n    }]));\n\n    env::log_str(&exec_status_event.to_string());\n\n    let ack_from_destination_event : EventLog= EventLog::new(AckFromDestination(vec![AckFromDestinationEvent{\n        request_id,\n        ack_message\n    }]));\n\n    env::log_str(&ack_from_destination_event.to_string());\n}\n')),(0,i.kt)("p",null,"Create a function by the name ",(0,i.kt)("inlineCode",{parentName:"p"},"handle_crosstalk_ack")," with the parameters shown in the snippet below. Make sure to keep the name of the function same because otherwise the contract will not be able to receive the acknowledgement requests back from the source chain. The details of this function is explained here in ",(0,i.kt)("a",{parentName:"p",href:"../../../understanding-crosstalk/near_guides/handleCrossTalkAck"},"detail"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"event_identifier:")," The event nonce emitted from Gateway contract when the request was created. You can use this to track the status of the requests.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"exec_flags:")," Since we sent only one call,"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"if the execution was successful on the destination chain:")),(0,i.kt)("p",{parentName:"li"},"We will get ",(0,i.kt)("code",null,"[true]")," in exec_flags and the ",(0,i.kt)("code",null,"[payload]")," in exec_data as we sent this as return value in handle_request_from_source function.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"If the execution failed on the destination chain:")),(0,i.kt)("p",{parentName:"li"},"We will get ",(0,i.kt)("code",null,"[false]")," in exec_flags and ",(0,i.kt)("code",null,"[errorBytes]")," in exec_data where error bytes correspond to the error that was thrown on the destination chain contract.\nSince we sent the payload back as return value from the destination chain\u2019s ",(0,i.kt)("strong",{parentName:"p"},"handle_request_from_source")," function, we can decode it here in the ",(0,i.kt)("strong",{parentName:"p"},"handle_crosstalk_ack")," function. First we decode the exec_data where the return value has come in. We decode it using the snippet shown above. In this way, you can get the data back from the source chain."),(0,i.kt)("p",{parentName:"li"},"Now we will set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ack_from_destination")," mapping with this data. We will also emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"exec_status_event")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"ack_from_destination_event")," in this function along with the required parameters."))))),(0,i.kt)("p",null,"In this way, we can create a simple ping pong smart contract using the Router CrossTalk Utils library."))}p.isMDXComponent=!0}}]);