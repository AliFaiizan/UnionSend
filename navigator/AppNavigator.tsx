import React from "react";

import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen, {
  ScreenOptions as LoginOptions,
} from "../screens/auth/LoginScreen";
import WelcomeScreen, {
  ScreenOptions as WelcomeOptions,
} from "../screens/auth/WelcomeScreen";

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
    </authStack.Navigator>
  );
};


const AppNavigator = (props: any) => {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;



const defaultNavigationOption = {
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? "#212931" : "#fff",
//   },
//   headerTintColor: Platform.OS === "android" ? "#A7AFB7" : "",
};
