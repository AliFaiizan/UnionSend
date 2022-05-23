
import React, { useState } from "react";
import { Text, Box, Button ,VStack,Center,Image, Input, InputGroup, InputLeftAddon, KeyboardAvoidingView } from "native-base";
import { Platform ,} from 'react-native';

const LoginScreen = () => {


  const [loading,setloading]= useState(false)


  return (
    <KeyboardAvoidingView
      h={{
        base: "400px",
        lg: "auto",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
    >
      <VStack alignItems="center">
        <Box w={300} alignItems="center">
          <Image
            resizeMode="contain"
            source={{
              uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/logo.png",
            }}
            alt="Alternate Text"
            size="xl"
            w="100%"
          />
        </Box>
        <Center>
          <Image
            resizeMode="contain"
            source={{
              uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/locked.png",
            }}
            alt="Alternate Text"
            size="xl"
          />
          <VStack space={3} justifyContent="center" alignItems="center">
            <Text paddingTop={5} fontWeight="bold" fontSize={16}>
              Let's Log In
            </Text>
            <Text>Enter Your Mobile Number to access the Application</Text>
          </VStack>
        </Center>
        <Box alignItems="center" pt={5}>
          <InputGroup
            w={{
              base: "100%",
            }}
          >
            <InputLeftAddon children={"+"} w={10} />
            <Input
              w={{
                base: "70%",
                md: "100%",
              }}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
          </InputGroup>
        </Box>
        <Box pt={5}>
          <Button
            isLoading={loading}
            spinnerPlacement="end"
            isLoadingText="Logging In"
            onPress={() => {
              setloading(true);
            }}
            colorScheme="emerald"
          >
            Proceed
          </Button>
        </Box>
      </VStack>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen

export const ScreenOptions = {};

