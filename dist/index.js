"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("axios"),a=require("@chakra-ui/react"),l=require("react-ticker");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("recharts");var r=o(e),n=o(t),u=o(l);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".requirement{align-items:center;display:flex;height:35px}.requirement p{font-family:sans-serif;font-size:14px;font-weight:700;margin-left:10px}.invalid{color:red}.valid{color:#7ac142}.checkmark{stroke-width:5;stroke:#fff;stroke-miterlimit:10;animation:fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both;border-radius:50%;box-shadow:inset 0 0 0 #7ac142;display:block;height:15px;width:15px}.checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:#7ac142;fill:none;animation:stroke .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check{stroke-dasharray:48;stroke-dashoffset:48;animation:stroke .2s cubic-bezier(.65,0,.45,1) .5s forwards;transform-origin:50% 50%}@keyframes stroke{to{stroke-dashoffset:0}}@keyframes scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes fill{to{box-shadow:inset 0 0 0 30px #7ac142}}");const c={dex_name:"spiritswap",block_chain_id:"250"},i=()=>{const[t,l]=e.useState([]),o=a.useColorModeValue("black","#a7a7ac"),i=a.useColorModeValue("#a7a7ac","brand.300");a.useColorModeValue("red","green");const d=a.useColorModeValue("#0c141c","gray.600"),s=a.useColorModeValue("#0c141c","#243036");let m=c.block_chain_id,f=c.dex_name;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${m}/xy=k/${f}/pools/widget/?key=ckey_4e73d56514984838ab3206fbaf4&sort-by=volume`,headers:{}};n.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var a=t[e][0].volume_timeseries_7d,o=[],r=[];for(let e=0;e<a.length;e++)r.push({volumeQuote:a[e].volume_quote});o.push(r),p.push({volume24hQuote:t[e][0].volume_24h_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",volumeQuoteTS:o,volumePercentChange:Math.round(100*(100*(o[0][7].volumeQuote-o[0][6].volumeQuote)/o[0][6].volumeQuote+Number.EPSILON))/100})}l(p)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var p=[];return console.log(t),r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{offset:"run-in",speed:10},(e=>r.default.createElement(a.Flex,{borderRadius:"xl",bg:s,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},t.map((e=>r.default.createElement(a.Box,{w:"250px",maxW:"xs",mx:"auto",px:2,py:3,bg:s,shadow:"md",borderColor:"red.400"},r.default.createElement(a.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(a.Text,{fontSize:"md",color:o},e.tickerPair),r.default.createElement(a.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(a.Square,{bg:"#cacacd",size:"0.1px",height:"30px"})),r.default.createElement(a.Flex,null,r.default.createElement(a.Text,{fontSize:"sm",mt:2,color:i,height:"50px"},r.default.createElement(a.Text,{fontSize:"10px",textAlign:"center",color:"#84848c"},"Volume Quote"),"$",e.volume24hQuote),r.default.createElement(a.Box,{alignItems:"center",size:"50px",w:"250px"}),r.default.createElement(a.Square,{bg:"#cacacd",size:"0.1px",height:"60px"})))))))))},d=()=>{e.useState([]),a.useColorModeValue("black","gray.500"),a.useColorModeValue("brand.200","brand.300"),a.useColorModeValue("red","green");const t=a.useColorModeValue("#0c141c","gray.600"),l=a.useColorModeValue("#0c141c","#243036"),[o,n]=e.useState("vol"),[u,c]=e.useState("ttpools"),[d,s]=e.useState("24h");return r.default.createElement(r.default.Fragment,null,r.default.createElement(a.Flex,{bg:l,w:"full",borderColor:t},r.default.createElement(a.Box,null,r.default.createElement(a.Select,{placeholder:"Select an option",size:"xs",variant:"filled",value:o,width:"100px",onChange:e=>n(e.target.value),bgColor:l},r.default.createElement("option",{value:"vol"},"Volume"),r.default.createElement("option",{value:"liquidity"},"Liquidity"))),r.default.createElement(a.Box,null,r.default.createElement(a.Select,{placeholder:"Select an option",size:"xs",variant:"filled",value:u,onChange:e=>c(e.target.value),bgColor:l},r.default.createElement("option",{value:"ttpools"},"Top trading pools"),r.default.createElement("option",{value:"ttpairs"},"Top trading pairs"))),r.default.createElement(a.Box,null,r.default.createElement(a.Select,{placeholder:"Select an option",size:"xs",variant:"filled",value:d,width:"70px",onChange:e=>s(e.target.value),bgColor:l},r.default.createElement("option",{value:"24h"},"24h"),r.default.createElement("option",{value:"7d"},"7d"),r.default.createElement("option",{value:"30d"},"30d"))),r.default.createElement(a.Spacer,null),"Powered by",r.default.createElement(a.Image,{borderRadius:"full",boxSize:"30px",objectFit:"cover",src:"https://media-exp1.licdn.com/dms/image/C560BAQHZftuIJc5OMQ/company-logo_200_200/0/1616601285421?e=2147483647&v=beta&t=j6DJiJFHvVEFGFKU6rki6dFXYO4m3c43X0jKwe6H7_A",alt:"Dan Abramov"})),"vol"===o&&"ttpools"===u&&"24h"===d?r.default.createElement(i,null):r.default.createElement("p",null,"Work in progress!"))};exports.Requirements=function(t){var a=t.value,l=t.requirements,o=t.onValidChange,n=e.useCallback(o,[]);return e.useEffect((function(){n(l.every((function(e){return e.validator(a)})))}),[a,l,n]),l.map((function(e,t){return r.default.createElement(d,{key:t,value:a,requirement:e,s:!0,onValidChange:o})}))};