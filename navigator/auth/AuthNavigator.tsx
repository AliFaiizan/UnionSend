
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import LoginScreen ,{ScreenOptions as LoginOptions} from "../../screens/auth/LoginScreen";
import SignUpScreen from "../../screens/auth/SignUpScreen";
import WelcomeScreen ,{ScreenOptions as WelcomeOptions} from "../../screens/auth/WelcomeScreen";

const authStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <authStack.Navigator screenOptions={defaultNavigationOption}>
      <authStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={WelcomeOptions}
      />
      <authStack.Screen
        name="Login"
        component={LoginScreen}
        options={LoginOptions}
      />
      <authStack.Screen name="SignUp" component={SignUpScreen} />
    </authStack.Navigator>
  );
};

const defaultNavigationOption = {
  //   headerStyle: {
  //     backgroundColor: Platform.OS === "android" ? "#212931" : "#fff",
  //   },
  //   headerTintColor: Platform.OS === "android" ? "#A7AFB7" : "",
};


export default AuthNavigator

