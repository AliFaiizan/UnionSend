
import {Text, Pressable, Icon, Box, HStack, Button, Avatar,Divider } from 'native-base';
import React from 'react'
import { AntDesign ,Feather} from "@expo/vector-icons";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Carousel from '../../components/Carousel';

const CText=(props:any) => { 
    return <Text {...props} color={'white'}>{props.children}</Text>
 }

const carouselData = [
  {
    uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/banner.jpg",
  },
  {
    uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/banner.jpg",
  },
  {
    uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/banner.jpg",
  },
];


const Dashboard = () => {
  return (
      <>
        <MainCard />
        <Categories />
        <Divider />
        {/* sub categories */}

        <Box flex={1} justifyContent="center" alignItems={'center'}>

            <Carousel data={carouselData} />
        </Box>
        

      </>
  );
}


const MainCard=() => { 
    return <Box
      shadow={10}
      mt={3}
      marginX={3}
      bg={{
        linearGradient: {
          colors: ["emerald.500", "emerald.600"],
          start: [1, 1],
          end: [1, 0],
        },
      }}
      p={4}
      rounded="xl"
    >
      {/* 1st Row */}
      <HStack justifyContent={"space-between"} mb={2}>
        <Box>
          <CText fontSize={16}>Balance</CText>
          <CText fontWeight={"bold"} fontSize={16}>
            N 0.00
          </CText>
        </Box>

        <Box alignItems={"flex-end"}>
          <CText fontSize={13}>UnionSend Level</CText>
          <CText fontWeight={"bold"}>JJC</CText>
        </Box>
      </HStack>
      {/* 2nd Row */}
      <Box mb={2}>
        <CText>UserName</CText>
        <CText fontWeight={"bold"}>Ali</CText>
      </Box>
      {/* 3rd Row */}
      <HStack justifyContent={"space-between"}>
        <Button w={150} bg={"emerald.700"}>
          Fund Account
        </Button>
        <Button w={150} bg={"emerald.700"}>
          Transection History
        </Button>
      </HStack>
    </Box>
 }

const Categories=() => { 
    return (
      <HStack p={4} justifyContent={"space-around"}>
        <Box alignItems={"center"}>
          <Box
            bg={"muted.300"}
            borderRadius={10}
            justifyContent={"center"}
            alignItems={"center"}
            p={13}
          >
            <Icon
              as={AntDesign}
              name="wallet"
              color="emerald.600"
              size={10}
              _dark={{
                color: "warmGray.50",
              }}
            />
          </Box>

          <Text fontWeight={"bold"}>Send Money</Text>
        </Box>
        <Box alignItems={"center"}>
          <Box
            bg={"muted.300"}
            borderRadius={10}
            justifyContent={"center"}
            alignItems={"center"}
            p={13}
          >
            <Icon
              as={Feather}
              name="shopping-bag"
              color="emerald.600"
              size={10}
              _dark={{
                color: "warmGray.50",
              }}
            />
          </Box>
          <Text fontWeight={"bold"}>Shop Online</Text>
        </Box>
        <Box alignItems={"center"}>
          <Box
            bg={"muted.300"}
            borderRadius={10}
            justifyContent={"center"}
            alignItems={"center"}
            p={13}
          >
            <Icon
              as={AntDesign}
              name="creditcard"
              color="emerald.600"
              size={10}
              _dark={{
                color: "warmGray.50",
              }}
            />
          </Box>
          <Text fontWeight={"bold"}>Card</Text>
        </Box>
      </HStack>
    );
 }


export const ScreenOptions:any=({navigation}:any):NativeStackNavigationOptions=>{
     return {
       headerTitle: "Home ",
       headerTitleAlign:'center',
       headerLeft: () => {
         return (
           <Pressable>
             <Box
               justifyContent={"center"}
               alignItems={"center"}
               flexDirection={"row"}
             >
               <Avatar
                 bg="grey.500"
                 size={10}
                 source={{
                   uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                 }}
               >
                 AJ
               </Avatar>
             <Text ml={2} fontSize={13} fontWeight={'bold'}>Hi Ali</Text>
             </Box>
           </Pressable>
         );
       },
       headerRight: () => {
         return (
           <Pressable>
             <Box justifyContent={"center"} alignItems={"center"}>
               <Icon
                 as={AntDesign}
                 name="bells"
                 color="coolGray.800"
                 size={5}
               />
             </Box>
           </Pressable>
         );
       },
     };
}

export default Dashboard

