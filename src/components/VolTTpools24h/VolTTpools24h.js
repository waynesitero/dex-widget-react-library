import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { LineChart, Line } from 'recharts';
import { Box, Flex, useColorModeValue, Text, Center, Select, Image, Square } from "@chakra-ui/react";
import Ticker from "react-ticker";
import { CONFIG } from "../../config";




export const VolTTpools24h = (props) => {
  const [finalData, setFinalData] = useState([]);
  const chainNameText = useColorModeValue("black", "#a7a7ac");
  const TextColorMode = useColorModeValue("#a7a7ac", "brand.300");
  const BoxTextColor = useColorModeValue("red", "green");
  const borderColor = useColorModeValue("#0c141c", "gray.600");
  const BoxBgColor = useColorModeValue("#0c141c", "#243036");
  let blockchain_id = props.chain_id
  let dex_name = props.dex_name
  //console.log('These are the props value!')
  console.log(props.chain_id)
  console.log(props.dex_name)

  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api.covalenthq.com/v1/${blockchain_id}/xy=k/${dex_name}/pools/widget/?key=ckey_4e73d56514984838ab3206fbaf4&sort-by=volume`,
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
 
  

  function objTraversal(obj) {
    var itemArr = obj.data.items;



    for (let i = 0; i < itemArr.length; i++) {
      var sampleArr = itemArr[i][0].volume_timeseries_7d;
      var sevenDayArr = [];
      var volumePrecentArray = [];
      var volumeQuoteArr = [];
      for (let j = 0; j < sampleArr.length; j++) {
        volumeQuoteArr.push({ volumeQuote: sampleArr[j].volume_quote });
      }
      sevenDayArr.push(volumeQuoteArr);

      finalArr.push({ volume24hQuote: itemArr[i][0].volume_24h_quote, tickerPair : itemArr[i][0].token_0.contract_ticker_symbol + "-" + itemArr[i][0].token_1.contract_ticker_symbol + " " +"LP", volumeQuoteTS: sevenDayArr, volumePercentChange : Math.round(((sevenDayArr[0][7].volumeQuote - sevenDayArr[0][6].volumeQuote) * 100 / (sevenDayArr[0][6].volumeQuote)+ Number.EPSILON)*100)/100 });
      
    }
    setFinalData(finalArr);
    }



console.log(finalData);

return (
    <>
    <Ticker offset="run-in" speed={10}>
      {({}) => (
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
            w="250px"
            maxW="xs"
            mx="auto"
            px={2}
            py={3}
            bg={BoxBgColor}
            shadow="md"
            borderColor="red.400"
            >
            <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="md" color={chainNameText}>
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
                <Square bg='#cacacd' size='0.1px' height='30px' >
                </Square>
              </Flex>
              <Flex>
              <Text
                  fontSize="sm"
                  mt={2}
                  color={TextColorMode}
                  height='50px'
                >
                  <Text
                  fontSize="10px"
                  textAlign="center"
                  color='#84848c'
                  > 
                  Volume Quote 
                  </Text> 
                 ${i.volume24hQuote}
                  </Text>
              <Box alignItems="center" size = '50px' w="250px">
              </Box>
              <Square bg='#cacacd' size='0.1px' height='60px' >
              </Square>
              </Flex> 
            </Box>
            
            ))}
        </Flex>
      )}
    </Ticker>
    </>
  );
};
