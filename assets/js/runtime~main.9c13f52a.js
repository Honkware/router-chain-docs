(()=>{"use strict";var e,d,f,a,c,b={},r={};function t(e){var d=r[e];if(void 0!==d)return d.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return b[e].call(f.exports,f,f.exports,t),f.loaded=!0,f.exports}t.m=b,e=[],t.O=(d,f,a,c)=>{if(!f){var b=1/0;for(i=0;i<e.length;i++){f=e[i][0],a=e[i][1],c=e[i][2];for(var r=!0,o=0;o<f.length;o++)(!1&c||b>=c)&&Object.keys(t.O).every((e=>t.O[e](f[o])))?f.splice(o--,1):(r=!1,c<b&&(b=c));if(r){e.splice(i--,1);var n=a();void 0!==n&&(d=n)}}return d}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,a,c]},t.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return t.d(d,{a:d}),d},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var c=Object.create(null);t.r(c);var b={};d=d||[null,f({}),f([]),f(f)];for(var r=2&a&&e;"object"==typeof r&&!~d.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((d=>b[d]=()=>e[d]));return b.default=()=>e,t.d(c,b),c},t.d=(e,d)=>{for(var f in d)t.o(d,f)&&!t.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:d[f]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((d,f)=>(t.f[f](e,d),d)),[])),t.u=e=>"assets/js/"+({10:"37fa3188",21:"0dab195d",48:"7ff9c376",53:"935f2afb",131:"2c97851c",266:"27e23464",273:"8e9ce46f",292:"417a162a",301:"767264ec",302:"cf0eb61f",378:"d171a6e4",383:"daebf187",397:"d2e42e8a",444:"5878a112",469:"0b682023",600:"4fd0f347",668:"cccdc9e2",719:"503f3bd1",800:"01283dfb",835:"f22e0172",922:"b4c5e8a3",954:"d76db2d7",1085:"0058571f",1306:"d8e66da9",1455:"3a859fe7",1473:"31e07f0d",1542:"e506b16a",1720:"d62b841c",1721:"85498de5",1793:"6d350509",1852:"3c9452d3",1872:"e301b729",1961:"c625547d",2048:"06ec1aeb",2050:"60e4ecef",2121:"e17ca24a",2352:"ff1c1913",2387:"0486bbd7",2466:"6929a3a3",2512:"526831cc",2539:"38267338",2550:"710a921f",2571:"35763e42",2581:"484108f8",2601:"92df3968",2665:"2abfabc7",2746:"89a441c0",2850:"c57e463c",2916:"9f635188",2921:"6639ac13",2988:"b56e4674",3044:"76158a4f",3053:"fb68e444",3059:"e81f2167",3105:"faea5278",3120:"038b2728",3195:"fc2c6f0c",3305:"63e3221d",3342:"222739e1",3398:"b3a534bb",3434:"47d47eec",3452:"6c20fa2a",3515:"cd1b81eb",3527:"ddaeaf7f",3597:"a1a8b7de",3642:"cb9b79c2",3699:"ef86afd2",3937:"766cfe82",3955:"5df89d43",4068:"9ac2f1cb",4106:"85cb6d52",4116:"07644d28",4233:"067c7673",4263:"49a4cbc7",4297:"8fe7344c",4308:"f8b717df",4353:"cc1b5280",4419:"86a14dbe",4443:"25103d8f",4510:"40188dc7",4513:"4c1065be",4590:"ca9949cc",4674:"6f1e06f9",4681:"0d762a34",4739:"91171320",4791:"8f7f91ff",4792:"6514d938",4826:"3e9f6c9e",4855:"72740cd6",4882:"14a4bd56",4892:"4ed1a2b5",4938:"1de15bd2",5015:"a093658e",5059:"a1778173",5128:"c39ae41f",5218:"94a8ba41",5278:"de1c5340",5406:"1d9c2ce9",5412:"b0fff5ca",5445:"d7bf1e7a",5515:"68f60854",5530:"e280aa96",5661:"0b235129",5695:"a30b104e",5719:"bb10d8b0",5893:"789931e3",5895:"4bfdc607",5929:"e16eacf2",5935:"dddc0e10",5945:"64ebe38b",5976:"e16df8d5",6040:"7d84513b",6041:"584892d4",6190:"7eacab0f",6274:"71ec636a",6283:"891be9ec",6484:"7b292d3f",6557:"8acf7d4b",6567:"43cd4754",6651:"553b3ca1",6653:"a849f76f",6795:"e56f6d9e",6817:"0371354d",6825:"3b3734b9",7054:"9dd8a0d2",7062:"f1bda67f",7161:"ea2d0398",7190:"e6fd504b",7289:"90bc4e21",7301:"44165527",7329:"4366b965",7336:"088d8890",7453:"e09ca7c9",7515:"3e23fa43",7604:"d32467f7",7614:"9d4cde13",7713:"01bf9dd6",7726:"440b9700",7751:"f311c9df",7792:"911589e6",7849:"d603182b",7918:"17896441",7943:"495df080",8087:"1735c347",8210:"01d735d3",8261:"61df9fc5",8349:"a35a067f",8471:"f1ed29a3",8503:"3740206d",8519:"50044987",8583:"6155b3f3",8593:"a640a60b",8685:"e26ba038",8722:"ea55417a",8746:"7fc73e48",8767:"17e09170",8785:"eab9dee6",8830:"8e4e9e1e",8841:"3934fa8f",8877:"49594748",8970:"a3d81365",9217:"668e9534",9327:"74f9925d",9461:"be3dddef",9514:"1be78505",9600:"762f6864",9602:"11413254",9697:"f031696d",9700:"7edecf38",9817:"14eb3368",9949:"fb5308ca",9974:"4a2adedf"}[e]||e)+"."+{10:"dbd95eba",21:"5173dee0",48:"2e6b01af",53:"bb34e21d",131:"ba04cc3e",266:"7f9574e3",273:"b876c303",292:"a5431f8e",301:"952b1e0f",302:"a045685a",378:"77c0a3b8",383:"08d66131",397:"dd694994",444:"5b379b21",469:"e5a13dbc",573:"5764a2c6",597:"d06ce7ce",600:"5c308599",605:"f58d57fb",668:"fe30c9cf",719:"54eb72ac",800:"b81c3fab",835:"02e89cde",922:"993d6935",954:"4a311f58",955:"05917606",1074:"2841cf4e",1085:"2cc8b1b1",1110:"2dc3ed8e",1196:"99308270",1306:"543b549b",1455:"ebcf1d5c",1461:"41034488",1473:"1889845b",1542:"563b7c8c",1544:"eae6649e",1608:"890f70ae",1684:"c5394c28",1717:"26151ca9",1720:"0bb1e57b",1721:"dc6c3031",1742:"6e94ed30",1752:"1325d71f",1793:"b76d273b",1852:"bb26843c",1872:"411981b4",1908:"30bb1dfa",1961:"302dc836",1976:"51fbedd1",2048:"35a14934",2050:"dfe42852",2056:"53f23297",2116:"d75365ae",2121:"c5830820",2154:"61a60677",2282:"7817e7e9",2352:"b298bafe",2387:"fc6c1c42",2466:"937644e1",2469:"3553d2b8",2512:"759619e8",2539:"5e99ca52",2550:"365a6b59",2571:"9d78da5a",2581:"66208751",2601:"85fc9b59",2665:"e5a17b3f",2738:"200400c7",2746:"387fb4db",2850:"94d3c8b9",2861:"da055e29",2871:"69dad5b7",2916:"197749fe",2921:"8561130e",2988:"4994de02",3044:"40d69ee9",3053:"6ad4b4d2",3059:"1f6ac6da",3105:"27962f2e",3120:"936389bb",3182:"246ed89d",3195:"a050378e",3305:"d411eff8",3342:"4cb00f9a",3394:"c9103ad2",3398:"818782fa",3434:"fc058fd3",3452:"47f88ce9",3505:"f84b0748",3515:"2acf0ca8",3527:"48045860",3533:"cc5fe0a5",3585:"93d552df",3597:"2564f6ac",3642:"3bfb01bc",3692:"fba3c86f",3699:"4bbfc3c1",3797:"33359bf0",3937:"fddcee7d",3955:"af5eec22",4068:"96df353a",4106:"b3d40355",4116:"845f9805",4233:"5d48da6e",4263:"a1cd2eed",4297:"743a6952",4308:"2b1be2b3",4327:"451d3c12",4353:"675120be",4419:"a997f279",4443:"bdef48d4",4483:"37c94e0c",4510:"67e19c42",4513:"8e25bcc4",4565:"24a6970f",4590:"3fc76aaf",4667:"96f52281",4674:"644c388e",4681:"e926a875",4737:"28b26abb",4739:"d6cd5d21",4791:"9aa1cb95",4792:"eea8d4a1",4826:"fe954a51",4855:"c54bbce0",4882:"6572f24b",4892:"2c870d9a",4938:"12286c57",4956:"fcc5282a",4972:"a7231b76",5015:"0130c101",5059:"341c4cb8",5103:"3b9c1ec8",5128:"83149faf",5203:"23bfd6cd",5213:"ebd98fa1",5218:"d161906b",5278:"73e7e18b",5281:"4d020923",5329:"edce2f37",5406:"51d514f5",5412:"c446bf32",5445:"c0720d0f",5472:"218b74b9",5479:"c1a142cc",5486:"b9c17e5c",5515:"6c5a7d59",5530:"fb4faa01",5661:"33952b37",5695:"ea3e3e3c",5719:"5ae7aa10",5792:"4ec98f40",5838:"9009c4f3",5893:"df5d7c31",5895:"c39f5be0",5928:"10250090",5929:"b56eab29",5935:"f7789963",5945:"3f467248",5976:"7234d7b0",6013:"9dd27b85",6040:"051b4bc6",6041:"46f635e7",6076:"4e9d79bd",6190:"40499400",6248:"b960ca93",6253:"d608f0aa",6264:"2036049c",6274:"97322a85",6283:"c92152ca",6348:"926dc421",6350:"66ad9829",6383:"284a88b0",6409:"2927e0fe",6484:"ac4bcd50",6545:"153fc9eb",6557:"501238b7",6567:"06d4fb03",6569:"91608a34",6651:"0c45b651",6653:"81d54e41",6676:"bfa267a2",6795:"8b35059f",6817:"a4c0b0a0",6825:"cd7da3f5",6870:"1e83925f",6897:"e29312b8",7054:"8cbe7175",7062:"b2cd9033",7086:"21290c11",7121:"b2008782",7161:"17e5b113",7190:"3e2c6fc0",7200:"3141f54d",7222:"3c9472e8",7279:"76cf3e4f",7289:"221996d5",7301:"3cb418fc",7329:"a61775d8",7331:"15093d59",7336:"9df37544",7379:"f9ccd59e",7394:"43ee5d7f",7453:"9433d7e6",7515:"783c8cc1",7565:"89ce9818",7604:"5a7134e5",7614:"073778b5",7713:"0c6cd2c1",7726:"a69e6048",7751:"4b5e6bb1",7792:"22d4e015",7834:"3bd9fcb5",7849:"6f2652be",7887:"f6998110",7918:"09af4cda",7943:"0126824b",7987:"35b65ec9",7992:"3ea766a1",8087:"996a86ea",8210:"80abd4f8",8261:"6ccfc1dc",8270:"ddf07c2f",8286:"4294d711",8349:"9a3b798c",8407:"dcc7219d",8471:"0316a411",8503:"2f4f11b7",8519:"c4a23780",8557:"ca149b4c",8583:"375e5e4c",8593:"cc536a83",8685:"f0df444e",8722:"86a9c06f",8746:"d7b5557a",8767:"dc6f07d4",8785:"b1e4e5f8",8801:"7132f813",8830:"e81852f9",8841:"984d7337",8877:"14100222",8888:"b9683744",8915:"e2237630",8970:"2da63db0",9168:"0bd01bdf",9217:"14166ab8",9246:"dc9d7d87",9319:"55b38741",9327:"d9c2d768",9461:"6fa6ed6b",9514:"41b61134",9542:"51dd8254",9600:"64592a57",9602:"eed7ce55",9680:"93fc10cd",9697:"f9a9f100",9700:"7d34cf1f",9728:"bbb88be7",9817:"93f1c4d3",9851:"55609bde",9949:"1c5fdf79",9974:"67195795"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),a={},c="router-docs:",t.l=(e,d,f,b)=>{if(a[e])a[e].push(d);else{var r,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+f){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",c+f),r.src=e),a[e]=[d];var l=(d,f)=>{r.onerror=r.onload=null,clearTimeout(s);var c=a[e];if(delete a[e],r.parentNode&&r.parentNode.removeChild(r),c&&c.forEach((e=>e(f))),d)return d(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/",t.gca=function(e){return e={11413254:"9602",17896441:"7918",38267338:"2539",44165527:"7301",49594748:"8877",50044987:"8519",91171320:"4739","37fa3188":"10","0dab195d":"21","7ff9c376":"48","935f2afb":"53","2c97851c":"131","27e23464":"266","8e9ce46f":"273","417a162a":"292","767264ec":"301",cf0eb61f:"302",d171a6e4:"378",daebf187:"383",d2e42e8a:"397","5878a112":"444","0b682023":"469","4fd0f347":"600",cccdc9e2:"668","503f3bd1":"719","01283dfb":"800",f22e0172:"835",b4c5e8a3:"922",d76db2d7:"954","0058571f":"1085",d8e66da9:"1306","3a859fe7":"1455","31e07f0d":"1473",e506b16a:"1542",d62b841c:"1720","85498de5":"1721","6d350509":"1793","3c9452d3":"1852",e301b729:"1872",c625547d:"1961","06ec1aeb":"2048","60e4ecef":"2050",e17ca24a:"2121",ff1c1913:"2352","0486bbd7":"2387","6929a3a3":"2466","526831cc":"2512","710a921f":"2550","35763e42":"2571","484108f8":"2581","92df3968":"2601","2abfabc7":"2665","89a441c0":"2746",c57e463c:"2850","9f635188":"2916","6639ac13":"2921",b56e4674:"2988","76158a4f":"3044",fb68e444:"3053",e81f2167:"3059",faea5278:"3105","038b2728":"3120",fc2c6f0c:"3195","63e3221d":"3305","222739e1":"3342",b3a534bb:"3398","47d47eec":"3434","6c20fa2a":"3452",cd1b81eb:"3515",ddaeaf7f:"3527",a1a8b7de:"3597",cb9b79c2:"3642",ef86afd2:"3699","766cfe82":"3937","5df89d43":"3955","9ac2f1cb":"4068","85cb6d52":"4106","07644d28":"4116","067c7673":"4233","49a4cbc7":"4263","8fe7344c":"4297",f8b717df:"4308",cc1b5280:"4353","86a14dbe":"4419","25103d8f":"4443","40188dc7":"4510","4c1065be":"4513",ca9949cc:"4590","6f1e06f9":"4674","0d762a34":"4681","8f7f91ff":"4791","6514d938":"4792","3e9f6c9e":"4826","72740cd6":"4855","14a4bd56":"4882","4ed1a2b5":"4892","1de15bd2":"4938",a093658e:"5015",a1778173:"5059",c39ae41f:"5128","94a8ba41":"5218",de1c5340:"5278","1d9c2ce9":"5406",b0fff5ca:"5412",d7bf1e7a:"5445","68f60854":"5515",e280aa96:"5530","0b235129":"5661",a30b104e:"5695",bb10d8b0:"5719","789931e3":"5893","4bfdc607":"5895",e16eacf2:"5929",dddc0e10:"5935","64ebe38b":"5945",e16df8d5:"5976","7d84513b":"6040","584892d4":"6041","7eacab0f":"6190","71ec636a":"6274","891be9ec":"6283","7b292d3f":"6484","8acf7d4b":"6557","43cd4754":"6567","553b3ca1":"6651",a849f76f:"6653",e56f6d9e:"6795","0371354d":"6817","3b3734b9":"6825","9dd8a0d2":"7054",f1bda67f:"7062",ea2d0398:"7161",e6fd504b:"7190","90bc4e21":"7289","4366b965":"7329","088d8890":"7336",e09ca7c9:"7453","3e23fa43":"7515",d32467f7:"7604","9d4cde13":"7614","01bf9dd6":"7713","440b9700":"7726",f311c9df:"7751","911589e6":"7792",d603182b:"7849","495df080":"7943","1735c347":"8087","01d735d3":"8210","61df9fc5":"8261",a35a067f:"8349",f1ed29a3:"8471","3740206d":"8503","6155b3f3":"8583",a640a60b:"8593",e26ba038:"8685",ea55417a:"8722","7fc73e48":"8746","17e09170":"8767",eab9dee6:"8785","8e4e9e1e":"8830","3934fa8f":"8841",a3d81365:"8970","668e9534":"9217","74f9925d":"9327",be3dddef:"9461","1be78505":"9514","762f6864":"9600",f031696d:"9697","7edecf38":"9700","14eb3368":"9817",fb5308ca:"9949","4a2adedf":"9974"}[e]||e,t.p+t.u(e)},(()=>{var e={1303:0,532:0};t.f.j=(d,f)=>{var a=t.o(e,d)?e[d]:void 0;if(0!==a)if(a)f.push(a[2]);else if(/^(1303|532)$/.test(d))e[d]=0;else{var c=new Promise(((f,c)=>a=e[d]=[f,c]));f.push(a[2]=c);var b=t.p+t.u(d),r=new Error;t.l(b,(f=>{if(t.o(e,d)&&(0!==(a=e[d])&&(e[d]=void 0),a)){var c=f&&("load"===f.type?"missing":f.type),b=f&&f.target&&f.target.src;r.message="Loading chunk "+d+" failed.\n("+c+": "+b+")",r.name="ChunkLoadError",r.type=c,r.request=b,a[1](r)}}),"chunk-"+d,d)}},t.O.j=d=>0===e[d];var d=(d,f)=>{var a,c,b=f[0],r=f[1],o=f[2],n=0;if(b.some((d=>0!==e[d]))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(o)var i=o(t)}for(d&&d(f);n<b.length;n++)c=b[n],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(i)},f=self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[];f.forEach(d.bind(null,0)),f.push=d.bind(null,f.push.bind(f))})(),t.nc=void 0})();