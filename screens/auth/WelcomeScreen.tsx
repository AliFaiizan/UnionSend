import React from 'react'

import {  Text, Box , Button, HStack, Pressable, Image, VStack } from "native-base";
import Carousel from '../../components/Carousel';
import { Dimensions } from 'react-native';


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
    title: "Taking Full Controll",
    description: "The faster way to send money globally",
  },
];



const WelcomeScreen = ({navigation}:any) => {

  const {width,height}=Dimensions.get('screen');

  return (
    <VStack flex={1} alignItems='center'>
      <Box>
        <Image
          width={width}
          height={height/2}
          resizeMode="contain"
          source={{
            uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/logo.png",
          }}
          alt="Alternate Text"
          
        />
      </Box>
          <Carousel data={data} />
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

