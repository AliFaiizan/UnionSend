import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Box, Stack, VStack } from 'native-base';


const data = [
  {
    key: 1,
    title: "Welcome to UnionSend",
    description: "The faster way to send money globally",
  },
  {
    key: 2,
    title: "Welcome to UnionSend",
    description: "The faster way to send money globally",
  },
  {
    key: 3,
    title: "Welcome to UnionSend",
    description: "The faster way to send money globally",
  },
];

const renderComponent=({item}:any) => { 
    return (
      <Box bg="black">
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </Box>
    );
 }

const Carousel = () => {
  return (
    
        <FlatList
            data={data}
            renderItem={renderComponent}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            
        />
    
  )
}

export default Carousel

