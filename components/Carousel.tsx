import { StyleSheet, View, FlatList } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Box, HStack, Text, Pressable } from "native-base";
const viewConfigRef = { viewAreaCoveragePercentThreshold: 90 };


const renderComponent = ({ item }: any) => {
  return (
    <Box alignItems="center" m={5} justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        {item.title}
      </Text>
      <Text mt={2}>{item.description}</Text>
    </Box>
  );
};

const Carousel = ({data}:any) => {
  const flatListRef: any = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onChange = useCallback(({ changed }: any) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  }, []);

  const scrollToIndex = (index: any) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };
  return (
    <>
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
        {data.map((item:any, index:Number) => {
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
    </>
  );
};

export default Carousel;
