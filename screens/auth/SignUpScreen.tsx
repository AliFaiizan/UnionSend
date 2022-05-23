
import { Box, VStack, Image, Stack,Text, Input, Button, Select, CheckIcon, Icon } from 'native-base'
import React, { useState } from 'react'

const SignUpScreen = () => {

    const [Component,setComponent]=useState(<SelectState onContinue={() => { setComponent(<PhoneNumber />)}}/>)

   
  return (
    <VStack>
      <Box alignItems="center" bg="black">
        <Image
          width={300}
          height={100}
          resizeMode="contain"
          source={{
            uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/logo.png",
          }}
          alt="Alternate Text"
        />
      </Box>
      <Stack bg="amber.100" alignItems="center">
        <Text>progress</Text>
        <Box alignItems="center">
          <Text fontWeight="900">Create Your UnionSend Account</Text>
          <Text>SignUp for free</Text>
          <Text>No Back account or credit card needed</Text>
        </Box>
      </Stack>
      <VStack p={10}>
        {Component}
       
      </VStack>
    </VStack>
  );
}

const SelectState=({onContinue}:any) => { 
    let [service, setService] = React.useState("");
    return (
      <Box>
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="San Fransisco" value="ux" />
          <Select.Item label="San Deigo" value="web" />
          <Select.Item label="Albama" value="cross" />
          <Select.Item label="Detroit" value="ui" />
          <Select.Item label="California" value="backend" />
          <Select.Item label="Texas" value="ux" />
        </Select>
        <Button
          mt={5}
          colorScheme={"emerald"}
          onPress={onContinue}
        >
          Continue
        </Button>
      </Box>
    );
 }

const PhoneNumber = () => {
   const [show, setShow] = React.useState(false);
   return (
     <Stack space={4} w="100%" alignItems="center">
      {/* <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
      <Input w={{
      base: "75%",
      md: "25%"
    }} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" /> */}
    </Stack>
   );
 };

export default SignUpScreen

