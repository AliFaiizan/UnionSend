
import { Box, VStack, Image, Stack,Text, Input, Button, Select, CheckIcon, Icon, KeyboardAvoidingView, InputLeftAddon, InputGroup, HStack, Center } from 'native-base'
import React, { useState ,useEffect, useRef } from 'react'
import { Platform ,Animated} from 'react-native';
import Svg,{Circle ,G} from  'react-native-svg';
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import useKeyboard from '../../components/hooks/useKeyboard';
import LottieView from 'lottie-react-native'


const size=130;
const strokeWidth=10;
const radius= size/2 - strokeWidth/2;
const circumference= radius*2*Math.PI;


const AnimatedCircle=Animated.createAnimatedComponent(Circle)

const SignUpScreen = ({navigation}:any) => {

  //const {Value,Interpolate,multiply}=Animated

    const [globalIndex,setGlobalIndex]=useState(1);

    //Animation logic
    const progressAnimation= useRef(new Animated.Value(1)).current;
    const progressRef:any=useRef(null)

    const animation=(toValue:any)=>{
      return Animated.timing(progressAnimation,{
        toValue,
        duration:350,
        useNativeDriver:true
      }).start()
    }

    //want to show or hide image on weather the keyboard in open or not
    const isKeyboardVisible=useKeyboard();

    const LoadComponent = () => {

        switch(globalIndex){
            case 1:
                return <SelectState onContinue={() => { setGlobalIndex(2) } } />
                
            case 2:
                return <PhoneNumber onContinue={() => { setGlobalIndex(3)}} />

            case 3:
                return <VerifyPhoneNumber onContinue={() => { setGlobalIndex(4) }} />
            
            case 4:
                return <EnterPersonalDetails onContinue={() => { setGlobalIndex(5)}} />
            
            case 5:
                return <IdentityVerification onContinue={() => { setGlobalIndex(6) }} />
            
            case 6:
                return (
                  <ChooseUserName onContinue={() => {  setGlobalIndex(7); }}  />
                );           
            case 7:
                return (
                    <Congratulation onContinue={() => { navigation.goBack()  }} />
                )
        }

    };
    
  

    useEffect(() => {
        //this will load the component based on global index 
        LoadComponent()

        //Run circular progress animation
        animation(globalIndex)
        
      
    }, [globalIndex])

    useEffect(() => { 

      progressAnimation.addListener((value) => { 
       const  strokeDashoffset= circumference - (circumference * value.value) / 7
                
       if(progressRef?.current){
          progressRef.current.setNativeProps({strokeDashoffset})
       }

      })

       return ()=>{
         progressAnimation.removeAllListeners()
       }
     },[])
    

  return (
    <KeyboardAvoidingView
      h={{
        base: "600px",
        lg: "auto",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <VStack>
        {!isKeyboardVisible ? (
          <Box alignItems="center">
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
        ) : (
          <></>
        )}
        {/* progress bar */}
        <HStack alignItems="center" justifyContent="space-around" px={5}>
          <Box justifyContent={"center"} alignItems={"center"} w={10}>
            {globalIndex > 1 ? (
              <Button
                w={10}
                h={10}
                borderRadius={50}
                bg={"emerald.600"}
                isDisabled={globalIndex <= 1}
                onPress={() => {
                  setGlobalIndex(globalIndex - 1);
                }}
              >
                {globalIndex - 1}
              </Button>
            ) : (
              <></>
            )}
          </Box>
          <Svg width={size} height={size}>
            <G rotation="-90" origin={size / 2}>
              <Circle
                stroke="grey"
                fill="none"
                cx={size / 2}
                cy={size / 2}
                r={radius}
              ></Circle>

              <Circle
                stroke="#059669"
                fill="none"
                ref={progressRef}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
              ></Circle>
            </G>
          </Svg>
          <Text position={"absolute"} ml={150} fontSize={20} fontWeight="bold">
            <Text color={"emerald.600"} fontSize={26}>
              {globalIndex}{" "}
            </Text>
            / 7
          </Text>
          <Box justifyContent={"center"} alignItems={"center"} w={10}>
            {globalIndex < 7 ? (
              <Button
                w={10}
                h={10}
                borderRadius={50}
                bg={"emerald.600"}
                onPress={() => {
                  setGlobalIndex(globalIndex + 1);
                }}
              >
                {globalIndex === 7 ? globalIndex : globalIndex + 1}
              </Button>
            ) : (
              <></>
            )}
          </Box>
        </HStack>
        {/* Bottom component */}
        <VStack p={3}>{LoadComponent()}</VStack>
      </VStack>
    </KeyboardAvoidingView>
  );
}

const SelectState=({onContinue}:any) => { 
    let [service, setService] = React.useState("");
    return (
      <Box>
          <Box alignItems="center">
            <Text fontWeight="900">Create Your UnionSend Account</Text>
            <Text>SignUp for free</Text>
            <Text>No Back account or credit card needed</Text>

          </Box>
          <Box px={5}>
            <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose a State"
            placeholder="Choose a State"
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
      </Box>
    );
 }

const PhoneNumber = ({onContinue}:any) => {
   const [show, setShow] = React.useState(false);
   return (
     <Box alignItems="center"> 
       <Box alignItems="center" justifyContent={"center"}>
         <Text fontWeight="900">Create Your Login Details</Text>

         <Text textAlign="center">
           Choose a safe password. Your phone Number will be verified in the
           next step
         </Text>
       </Box>

       <VStack justifyContent={'center'} alignItems={'center'} space={3} px={4} >
         <InputGroup
           w={{
             base: "100%",
           }}
         >
           <InputLeftAddon children={"+"} w={10} />
           <Input
             w={{
               base:"88%",
               md: "90%",
             }}
             placeholder="Phone Number"
             keyboardType="numeric"
           />
         </InputGroup>
         <Input
           w={{
             base: "100%",
             md: "50%",
           }}
           type={show ? "text" : "password"}
           InputRightElement={
             <Icon
               as={
                 <MaterialIcons name={show ? "visibility" : "visibility-off"} />
               }
               size={5}
               mr="2"
               color="muted.400"
               onPress={() => setShow(!show)}
             />
           }
           placeholder="Password"
         />
         
            <Button mt={1} colorScheme={"emerald"} onPress={onContinue} >
                Continue
            </Button>

       </VStack>

     </Box>
   );
 };

 const VerifyPhoneNumber=({onContinue}:any) => { 
     return (
       <Box alignItems={"center"}>
         <Box alignItems="center">
           <Text fontWeight="900">Verify Your phone Number</Text>

           <Text textAlign={"center"}>
             Please Enter the code send to the number ending 4225
           </Text>
         </Box>
         <Box px={5}>
           <Input
             w={{
               base: "100%",
               md: "90%",
             }}
             placeholder="Enter the Code"
             keyboardType="numeric"
             mt={2}
           />

           <Button mt={2} colorScheme={"emerald"} onPress={onContinue}>
             Verify
           </Button>
         </Box>
       </Box>
     );
  }
 

const EnterPersonalDetails=({onContinue}:any) => {
    return (
      <Box alignItems={"center"}>
        <Box alignItems="center">
          <Text fontWeight="900">Enter Personal Details</Text>

          <Text textAlign={"center"}>Tell us about Yourself</Text>
        </Box>
        <Box px={5}>
          <Input
            w={{
              base: "100%",
              md: "90%",
            }}
            placeholder="First Name"
            
            mt={2}
          />
          <Input
            w={{
              base: "100%",
              md: "90%",
            }}
            placeholder="Last Name"
            
            mt={2}
          />
          <Input
            w={{
              base: "100%",
              md: "90%",
            }}
            placeholder="Date of Birth"
            mt={2}
          />

          <Button mt={2} colorScheme={"emerald"} onPress={onContinue}>
            Continue
          </Button>
        </Box>
      </Box>
    );
 }

const IdentityVerification=({onContinue}:any) => { 
     return (
       <Box alignItems={"center"}>
         <Box alignItems="center">
           <Text fontWeight="900">Identity Verification</Text>

           <Text textAlign={"center"}>
             Help us verify your account by providing on of the Following
           </Text>
         </Box>
         <Box px={5}>
           <Input
             w={{
               base: "100%",
               md: "90%",
             }}
             placeholder="BVN (11 Digits)"
             mt={2}
           />

           <Button mt={2} colorScheme={"emerald"} onPress={onContinue}>
             ENTER
           </Button>
           <Button variant={'outline'} mt={2} colorScheme={"emerald"} onPress={onContinue}>
             SKIP
           </Button>
         </Box>
       </Box>
     );
  }

const ChooseUserName=({onContinue}:any) => { 
    return (
      <Box alignItems={"center"}>
        <Box alignItems="center">
          <Text fontWeight="900">Choose a UserName</Text>

          <Text textAlign={"center"}>
            A Username is your unique name for reciving cash on UnionSend
          </Text>
        </Box>
        <Box px={5}>
          <Input
            w={{
              base: "100%",
              md: "90%",
            }}
            placeholder="Enter Username"
            
            mt={2}
          />

          <Button mt={2} colorScheme={"emerald"} onPress={onContinue}>
            Continue
          </Button>
        </Box>
      </Box>
    );
 }

const Congratulation=({onContinue}:any) => { 
     return (
       <Box alignItems={"center"}>
         <Box alignItems="center">
           <Text fontWeight="900">Congratulations</Text>

           <Text textAlign={"center"}>Your Account is ready</Text>
         </Box>
         <Box px={5} >
           
             <LottieView
               style={{ height: 200, alignSelf: "center", marginBottom: 5 ,width:200}}
               source={require("../../assets/animations/1-verified.json")}
               autoPlay
               loop={false}
             />           

           <Button mt={2} colorScheme={"emerald"} onPress={onContinue}>
             Done
           </Button>
         </Box>
       </Box>
     );
  }



export default SignUpScreen

