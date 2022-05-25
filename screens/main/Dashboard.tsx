
import { VStack,Text, Pressable, Icon, Box } from 'native-base';
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const Dashboard = () => {
  return (
   <VStack>
        <Text>THis is dashboard</Text>
   </VStack>
  )
}


export const ScreenOptions:any=({navigation}:any):NativeStackNavigationOptions=>{
     return {
       headerTitle: "Home ",
       headerTitleAlign:'center',
       headerLeft: () => {
         return (
           <Pressable>
             <Box justifyContent={'center'} alignItems={'center'}>
               <Icon as={AntDesign} name="user" color="coolGray.800" size={5} />
             </Box>
             <Text fontSize={13}>Hi Ali</Text>
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

