import React from "react";
import {useSelector} from 'react-redux'

import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth/AuthNavigator";
import DashboardNavigator from "./dashboard/DashboardNavigator"



const AppNavigator = (props: any) => {

  const loggedIn=useSelector((state:any) => { 
     return state.auth.isLoggedIn
  })
  
  

  return (
    <NavigationContainer>
      {!loggedIn ? <AuthNavigator /> : <DashboardNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;




