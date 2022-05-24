import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { LineChart, Line } from 'recharts';
import { Box, Flex, useColorModeValue, Text, Square, keyframes } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export const VolTTpools30d = (props) => {
  const [finalData, setFinalData] = useState([]);
  const chainNameText = useColorModeValue(props.text_color ? props.text_color : "#FFFFFF", "#FFFFFF");
  const borderColor = useColorModeValue("#0c141c", "gray.600");
  const BoxBgColor = useColorModeValue(props.bg_color ? props.bg_color : "#0c141c", "#0c141c");
  //const animation = `${move} 12s linear infinite`;
  let blockchain_id = props.chain_id
  let dex_name = props.dex_name
  let API_KEY = props.api_key

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api.covalenthq.com/v1/${blockchain_id}/xy=k/${dex_name}/pools/widget/?key=${API_KEY}&sort-by=volume`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        objTraversal(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  var finalArr = [];

  // Function to traverse through the API data 
  function objTraversal(obj) {
    var itemArr = obj.data.items;

    for (let i = 0; i < itemArr.length; i++) {
      var sampleArr = itemArr[i][0].volume_timeseries_30d;
      var thirtyDayArr = [];
      var volumePrecentArray = [];
      var volumeQuoteArr = [];
      for (let j = 0; j < 30; j++) {
        volumeQuoteArr.push({ volumeQuote: (typeof(sampleArr[j].volume_quote!=='undefined')) ? sampleArr[j].volume_quote : NaN });
      }
      thirtyDayArr.push(volumeQuoteArr);

      const vpc = (thirtyDayArr[0][29].volumeQuote === NaN ? 'NA' : Math.round(((thirtyDayArr[0][29].volumeQuote - thirtyDayArr[0][0].volumeQuote) * 100 / (thirtyDayArr[0][0].volumeQuote)+ Number.EPSILON)*100)/100)

      finalArr.push({ 
        volume30dQuote: itemArr[i][0].volume_30d_quote, 
        tickerPair : itemArr[i][0].token_0.contract_ticker_symbol + "-" + itemArr[i][0].token_1.contract_ticker_symbol + " " +"LP", 
        volumeQuoteTS: thirtyDayArr, 
        volumePercentChange : vpc
      });
      
    }
    setFinalData(finalArr);
    }

return (
    <>
      <Marquee pauseOnHover='true' speed='60' gradient='false'>
        <Flex
          borderRadius="xl"
          bg={BoxBgColor}
          p={0.1}
          w="full"
          alignItems="center"
          justifyContent="center"
          borderColor={borderColor}
          borderWidth={1}
          mb={8}
        >
            {finalData.map((i) => (
            <Box 
            w="300px"
            maxW="xs"
            mx="auto"
            px={2}
            py={0.5}
            bg={BoxBgColor}
            shadow="md"
            >
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="md" color={chainNameText} px={10} fontFamily='Roboto'>
                  {i.tickerPair}
                </Text>
                <Text
                  color={[i.volumePercentChange > 0 ? "green" : i.volumePercentChange < 0 ? "red" : "yellow"]}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  {i.volumePercentChange}%
                </Text>
                <Box alignItems="center" size = '50px' w="60px" >
                  <LineChart width={55} height={55} data={i.volumeQuoteTS[0]}>
                    <Line type="monotone" dataKey="volumeQuote" stroke={[i.volumePercentChange > 0 ? "green" : i.volumePercentChange < 0 ? "red" : "yellow"]} dot={false}/>
                  </LineChart>
                </Box>
                <Square bg='#cacacd' size='1.5px' height='40px' >
                </Square>
              </Flex> 
            </Box>
            ))}
        </Flex>
      </Marquee>
    </>
  );
};

