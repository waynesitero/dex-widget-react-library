"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("@chakra-ui/react"),l=require("axios"),a=require("react-fast-marquee"),o=require("recharts");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),i=n(l),u=n(a);t.keyframes`
0% {transform: translate3d(100%,0,0);}
100% {transform: translateX(-400%,0,0)}`;const d=l=>{const[a,o]=e.useState([]),n=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue(l.bg_color?l.bg_color:"#0c141c","#0c141c");let m=l.chain_id,s=l.dex_name,f=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${m}/xy=k/${s}/pools/widget/?key=${f}&sort-by=volume`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e][0].volume_timeseries_7d,a=[],n=[];for(let e=0;e<l.length;e++)n.push({volumeQuote:l[e].volume_quote});a.push(n),console.log(a),p.push({volume24hQuote:t[e][0].volume_24h_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",volumeQuoteTS:a,volumePercentChange:Math.round(100*(100*(a[0][7].volumeQuote-a[0][6].volumeQuote)/a[0][6].volumeQuote+Number.EPSILON))/100})}o(p)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var p=[];return console.log(a),r.default.createElement(r.default.Fragment,null,r.default.createElement(u.default,{pauseOnHover:"true",speed:"80",gradient:"false"},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:n,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"}),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},c=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,m=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),m=t.useColorModeValue("#0c141c","#243036"),s=`${c} 120s linear infinite`;let f=l.chain_id,p=l.dex_name,h=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${f}/xy=k/${p}/pools/widget/?key=${h}&sort-by=volume`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e][0].volume_timeseries_7d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({volumeQuote:l[e].volume_quote});a.push(o),console.log(a),y.push({volume7dQuote:t[e][0].volume_7d_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",volumeQuoteTS:a,volumePercentChange:Math.round(100*(100*(a[0][7].volumeQuote-a[0][0].volumeQuote)/a[0][0].volumeQuote+Number.EPSILON))/100})}n(y)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var y=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:s},r.default.createElement(t.Flex,{borderRadius:"xl",bg:m,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:m,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.volumeQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"volumeQuote",stroke:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},s=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,f=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${s} 120s linear infinite`;let f=l.chain_id,p=l.dex_name,h=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${f}/xy=k/${p}/pools/widget/?key=${h}&sort-by=volume`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e][0].volume_timeseries_30d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({volumeQuote:l[e].volume_quote});a.push(o),y.push({volume30dQuote:t[e][0].volume_30d_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",volumeQuoteTS:a,volumePercentChange:Math.round(100*(100*(a[0][29].volumeQuote-a[0][0].volumeQuote)/a[0][0].volumeQuote+Number.EPSILON))/100})}n(y)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var y=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:55,height:55,data:e.volumeQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"volumeQuote",stroke:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},p=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,h=l=>{const[a,o]=e.useState([]),n=t.useColorModeValue("#FFFFFF","black"),u=t.useColorModeValue("#0c141c","gray.600"),d=t.useColorModeValue("#0c141c","#243036"),c=`${p} 120s linear infinite`;let m=l.chain_id,s=l.dex_name,f=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${m}/xy=k/${s}/tokens/widget/?key=${f}&sort-by=volume`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e].total_volume_timeseries_7d,a=[],n=[];for(let e=0;e<l.length;e++)n.push({volumeQuote:l[e].total_volume_24h_quote});a.push(n),h.push({volume24hQuote:t[e].total_volume_24h_quote,tickerPair:t[e].contract_ticker_symbol,volumeQuoteTS:a,volumePercentChange:Math.round(100*(100*(a[0][7].volumeQuote-a[0][6].volumeQuote)/a[0][6].volumeQuote+Number.EPSILON))/100})}o(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:c},r.default.createElement(t.Flex,{borderRadius:"xl",bg:d,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:u,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:d,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:n,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(t.Box,{lignItems:"center",size:"50px",w:"60px"}),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},y=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,x=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${y} 120s linear infinite`;let s=l.chain_id,f=l.dex_name,p=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${s}/xy=k/${f}/tokens/widget/?key=${p}&sort-by=volume`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e].total_volume_timeseries_7d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({volumeQuote:l[e].total_volume_24h_quote});a.push(o),h.push({volume24hQuote:t[e].total_volume_24h_quote,tickerPair:t[e].contract_ticker_symbol,volumeQuoteTS:a,volumePercentChange:Math.round(100*(100*(a[0][7].volumeQuote-a[0][0].volumeQuote)/a[0][0].volumeQuote+Number.EPSILON))/100})}n(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.volumeQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"volumeQuote",stroke:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},g=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,A=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${g} 120s linear infinite`;let s=l.chain_id,f=l.dex_name,p=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${s}/xy=k/${f}/tokens/widget/?key=${p}&sort-by=volume`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e].total_volume_timeseries_30d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({volumeQuote:l[e].total_volume_24h_quote});a.push(o),h.push({volume24hQuote:t[e].total_volume_24h_quote,tickerPair:t[e].contract_ticker_symbol,volumeQuoteTS:a,volumePercentChange:Math.round(100*(100*(a[0][29].volumeQuote-a[0][0].volumeQuote)/a[0][0].volumeQuote+Number.EPSILON))/100})}n(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.volumePercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.volumeQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"volumeQuote",stroke:[e.volumePercentChange>0?"green":e.volumePercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},v=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,b=l=>{const[a,o]=e.useState([]),n=t.useColorModeValue("#FFFFFF","black"),u=t.useColorModeValue("#0c141c","gray.600"),d=t.useColorModeValue("#0c141c","#243036"),c=`${v} 120s linear infinite`;let m=l.chain_id,s=l.dex_name,f=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${m}/xy=k/${s}/pools/widget/?key=${f}`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e][0].liquidity_timeseries_7d,a=[],n=[];for(let e=0;e<l.length;e++)n.push({liquidityQuote:l[e].liquidity_quote});a.push(n),console.log(a),p.push({liquidityQuote:t[e][0].total_liquidity_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",liquidityQuoteTS:a,liquidityPercentChange:Math.round(100*(100*(a[0][7].liquidityQuote-a[0][6].liquidityQuote)/a[0][6].liquidityQuote+Number.EPSILON))/100})}o(p)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var p=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:c},r.default.createElement(t.Flex,{borderRadius:"xl",bg:d,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:u,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:d,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:n,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.liquidityPercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"}),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},q=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,E=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${q} 120s linear infinite`;let s=l.chain_id,f=l.dex_name,p=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${s}/xy=k/${f}/pools/widget/?key=${p}`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e][0].liquidity_timeseries_7d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({liquidityQuote:l[e].liquidity_quote});a.push(o),h.push({liquidityQuote:t[e][0].total_liquidity_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",liquidityQuoteTS:a,liquidityPercentChange:Math.round(100*(100*(a[0][7].liquidityQuote-a[0][0].liquidityQuote)/a[0][0].liquidityQuote+Number.EPSILON))/100})}n(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.liquidityPercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.liquidityQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"liquidityQuote",stroke:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},C=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,k=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${C} 120s linear infinite`;let s=l.chain_id,f=l.dex_name,p=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${s}/xy=k/${f}/pools/widget/?key=${p}`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e][0].liquidity_timeseries_30d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({liquidityQuote:l[e].liquidity_quote});a.push(o),h.push({liquidityQuote:t[e][0].total_liquidity_quote,tickerPair:t[e][0].token_0.contract_ticker_symbol+"-"+t[e][0].token_1.contract_ticker_symbol+" LP",liquidityQuoteTS:a,liquidityPercentChange:Math.round(100*(100*(a[0][29].liquidityQuote-a[0][0].liquidityQuote)/a[0][0].liquidityQuote+Number.EPSILON))/100})}n(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.liquidityPercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.liquidityQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"liquidityQuote",stroke:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},F=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,_=l=>{const[a,o]=e.useState([]),n=t.useColorModeValue("#FFFFFF","black"),u=t.useColorModeValue("#0c141c","gray.600"),d=t.useColorModeValue("#0c141c","#243036"),c=`${F} 120s linear infinite`;let m=l.chain_id,s=l.dex_name,f=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${m}/xy=k/${s}/tokens/widget/?key=${f}`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){console.log(t[e]);var l=t[e].total_liquidity_timeseries_7d;console.log(l);var a=[],n=[];for(let e=0;e<l.length;e++)n.push({liquidityQuote:l[e].total_liquidity_24h_quote});a.push(n),p.push({liquidity24hQuote:t[e].total_liquidity_quote,tickerPair:t[e].contract_ticker_symbol,liquidityQuoteTS:a,liquidityPercentChange:Math.round(100*(100*(a[0][7].liquidityQuote-a[0][6].liquidityQuote)/a[0][6].liquidityQuote+Number.EPSILON))/100})}o(p)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var p=[];return console.log(a),r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:c},r.default.createElement(t.Flex,{borderRadius:"xl",bg:d,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:u,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:d,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:n,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.liquidityPercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"}),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},P=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,w=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${P} 120s linear infinite`;let s=l.chain_id,f=l.dex_name,p=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${s}/xy=k/${f}/tokens/widget/?key=${p}`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e].total_liquidity_timeseries_7d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({liquidityQuote:l[e].total_liquidity_24h_quote});a.push(o),h.push({liquidity24hQuote:t[e].total_liquidity_quote,tickerPair:t[e].contract_ticker_symbol,liquidityQuoteTS:a,liquidityPercentChange:Math.round(100*(100*(a[0][7].liquidityQuote-a[0][0].liquidityQuote)/a[0][0].liquidityQuote+Number.EPSILON))/100})}n(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.liquidityPercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.liquidityQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"liquidityQuote",stroke:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))},S=t.keyframes`
from {transform: translateX(1250px);}
to {transform: translateX(-6000px)}`,z=l=>{const[a,n]=e.useState([]),u=t.useColorModeValue("#FFFFFF","black"),d=t.useColorModeValue("#0c141c","gray.600"),c=t.useColorModeValue("#0c141c","#243036"),m=`${S} 120s linear infinite`;let s=l.chain_id,f=l.dex_name,p=l.api_key;e.useEffect((()=>{var e={method:"get",url:`https://api.covalenthq.com/v1/${s}/xy=k/${f}/tokens/widget/?key=${p}`,headers:{}};i.default(e).then((function(e){!function(e){var t=e.data.items;for(let e=0;e<t.length;e++){var l=t[e].total_liquidity_timeseries_30d,a=[],o=[];for(let e=0;e<l.length;e++)o.push({liquidityQuote:l[e].total_liquidity_24h_quote});a.push(o),h.push({liquidity24hQuote:t[e].total_liquidity_quote,tickerPair:t[e].contract_ticker_symbol,liquidityQuoteTS:a,liquidityPercentChange:Math.round(100*(100*(a[0][29].liquidityQuote-a[0][0].liquidityQuote)/a[0][0].liquidityQuote+Number.EPSILON))/100})}n(h)}(e.data)})).catch((function(e){console.log(e)}))}),[]);var h=[];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{animation:m},r.default.createElement(t.Flex,{borderRadius:"xl",bg:c,p:.1,w:"full",alignItems:"center",justifyContent:"center",borderColor:d,borderWidth:1,mb:8},a.map((e=>r.default.createElement(t.Box,{w:"300px",maxW:"xs",mx:"auto",px:2,py:.5,bg:c,shadow:"md"},r.default.createElement(t.Flex,{justifyContent:"space-between",alignItems:"center"},r.default.createElement(t.Text,{fontSize:"md",color:u,px:10,fontFamily:"Roboto"},e.tickerPair),r.default.createElement(t.Text,{color:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],px:3,py:1,rounded:"full",fontSize:"xs",fontWeight:"bold"},e.liquidityPercentChange,"%"),r.default.createElement(t.Box,{alignItems:"center",size:"50px",w:"60px"},r.default.createElement(o.LineChart,{width:50,height:50,data:e.liquidityQuoteTS[0]},r.default.createElement(o.Line,{type:"monotone",dataKey:"liquidityQuote",stroke:[e.liquidityPercentChange>0?"green":e.liquidityPercentChange<0?"red":"yellow"],dot:!1}))),r.default.createElement(t.Square,{bg:"#cacacd",size:"1.5px",height:"40px"}))))))))};exports.Widget=l=>{const a=t.useColorModeValue("#0c141c","gray.600"),o=t.useColorModeValue(l.bg_color?l.bg_color:"blue","#243036"),[n,i]=e.useState("vol"),[u,c]=e.useState("ttpools"),[s,p]=e.useState("24h");return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.Flex,{bg:o,w:"full",borderColor:a},r.default.createElement(t.Box,null,r.default.createElement(t.Select,{placeholder:"Select an option",size:"xs",variant:"filled",value:n,width:"100px",onChange:e=>i(e.target.value),bgColor:o,borderColor:o},r.default.createElement("option",{value:"vol"},"Volume"),r.default.createElement("option",{value:"liquidity"},"Liquidity"))),r.default.createElement(t.Spacer,null),r.default.createElement(t.Box,null,r.default.createElement(t.Select,{placeholder:"Select an option",size:"xs",variant:"filled",value:u,onChange:e=>c(e.target.value),bgColor:o,borderColor:o},r.default.createElement("option",{value:"ttpools"},"Top trading pools"),r.default.createElement("option",{value:"ttpairs"},"Top tokens"))),r.default.createElement(t.Spacer,null),r.default.createElement(t.Box,null,r.default.createElement(t.Select,{placeholder:"Select an option",size:"xs",variant:"filled",value:s,width:"40px",onChange:e=>p(e.target.value),bgColor:o,borderColor:o},r.default.createElement("option",{value:"24h"},"24h"),r.default.createElement("option",{value:"7d"},"7d"))),r.default.createElement(t.Spacer,null),r.default.createElement(t.Box,{w:"120px"},r.default.createElement(t.Image,{borderRadius:"full",boxSize:"30px",w:"120px",objectFit:"cover",src:"data:image/png;base64,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",alt:"Powered by Covalent"}))),"vol"===n&&"ttpools"===u&&"24h"===s?r.default.createElement(d,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key,bg_color:l.bg_color}):"vol"===n&&"ttpools"===u&&"7d"===s?r.default.createElement(m,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"vol"===n&&"ttpools"===u&&"30d"===s?r.default.createElement(f,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"vol"===n&&"ttpairs"===u&&"24h"===s?r.default.createElement(h,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"vol"===n&&"ttpairs"===u&&"7d"===s?r.default.createElement(x,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"vol"===n&&"ttpairs"===u&&"30d"===s?r.default.createElement(A,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"liquidity"===n&&"ttpools"===u&&"24h"===s?r.default.createElement(b,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"liquidity"===n&&"ttpools"===u&&"7d"===s?r.default.createElement(E,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"liquidity"===n&&"ttpools"===u&&"30d"===s?r.default.createElement(k,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"liquidity"===n&&"ttpairs"===u&&"24h"===s?r.default.createElement(_,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"liquidity"===n&&"ttpairs"===u&&"7d"===s?r.default.createElement(w,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):"liquidity"===n&&"ttpairs"===u&&"30d"===s?r.default.createElement(z,{chain_id:l.chain_id,dex_name:l.dex_name,api_key:l.api_key}):r.default.createElement("p",null,"Oops! Something's wrong."))};
