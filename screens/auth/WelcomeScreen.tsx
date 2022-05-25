import React, { useCallback, useRef, useState } from 'react'
import { FlatList } from 'react-native'
import {  Text, Box , Button, HStack, Pressable, Image, VStack } from "native-base";

const viewConfigRef={viewAreaCoveragePercentThreshold:90}

const data = [
  {
    key: 1,
    title: "Welcome to UnionSend",
    description: "The faster way to send money globally",
  },
  {
    key: 2,
    title: "Easy To Use",
    description: "The faster way to send money globally",
  },
  {
    key: 3,
    title: "Welcome to UnionSend",
    description: "The faster way to send money globally",
  },
];

const renderComponent = ({ item }: any) => {
  return (
    <Box alignItems='center' m={5} justifyContent='center' >
      <Text fontSize={20} fontWeight='bold'>{item.title}</Text>
      <Text mt={2}>{item.description}</Text>
    </Box>
  );
};

const WelcomeScreen = ({navigation}:any) => {

  const flatListRef:any=useRef();

  const [currentIndex,setCurrentIndex]=useState(0)


  const onChange=useCallback(({ changed }:any) => { 
     if(changed[0].isViewable){
       setCurrentIndex(changed[0].index);
     }

     
   },[])

  const scrollToIndex=(index:any) => { 
    flatListRef.current?.scrollToIndex({animated:true, index:index})
     
   }


  return (
    <VStack flex={1} alignItems='center'>
      <Box>
        <Image
          width={300}
          height={300}
          resizeMode="contain"
          source={{
            uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/logo.png",
          }}
          alt="Alternate Text"
          
        />
      </Box>
      <Box w={280} h={100}>
        <FlatList
          data={data}
          renderItem={renderComponent}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onChange}
        />
      </Box>
      <HStack mt={2} w="100%" justifyContent="center" alignItems="center">
        {data.map((item, index) => {
          return (
            <Pressable
              key={index.toString()}
              onPress={() => scrollToIndex(index)}
            >
              <Box
                mx={3}
                w={2}
                h={2}
                bg={index == currentIndex ? "emerald.600" : "grey"}
                borderRadius={50}
              ></Box>
            </Pressable>
          );
        })}
      </HStack>
      <Box
        flex={1}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
      >
        <Button
          h={10}
          w={100}
          p={0}
          variant="outline"
          colorScheme="emerald"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Button>
        <Button
          h={10}
          w={100}
          p={0}
          colorScheme="emerald"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          SignUp
        </Button>
      </Box>
      <Box pb={20}>
        <Pressable onPress={() => {}}>
          <Text fontSize={16} fontWeight={600}>
            Check Rates
          </Text>
        </Pressable>
      </Box>
    </VStack>
  );
}

export default WelcomeScreen

export const ScreenOptions = {};

