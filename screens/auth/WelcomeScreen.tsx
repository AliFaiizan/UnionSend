import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {  Text, Box , Button } from "native-base";


const WelcomeScreen = ({route,navigation}:any) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageContainer}
          source={{
            uri: "https://alpha.techcon.com.pk/unionsend-mobile/img/logo.png",
          }}
        />
      </View>

      <Text style={styles.Text}>Welcome To UnionSend</Text>
      <Text style={{ paddingTop: 20 }}>
        A faster Way to Sending Money Globally
      </Text>
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
          variant="outline"
          colorScheme="emerald"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Button>
        <Button h={10} w={100} colorScheme="emerald" >
          SignUp
        </Button>
      </Box>
      <Box pb={20}>
        <Text style={styles.Text}> Check Rates </Text>
      </Box>
    </View>
  );
}

export default WelcomeScreen

export const ScreenOptions = {};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    imageContainer:{
        width:300,
        height:300,
        resizeMode:'contain'
    },
    buttonContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        alignItems:'center'
    },
    Text:{
        fontSize:16,
        fontWeight:'600'
    }
})