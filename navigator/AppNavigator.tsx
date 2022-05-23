import React from "react";


import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth/AuthNavigator";




const AppNavigator = (props: any) => {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;




