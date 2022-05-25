import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard, {
  ScreenOptions as DashboardOptions,
} from "../../screens/main/Dashboard";

const DashboardStack=createNativeStackNavigator();

const DashboardNavigator = () => {
  return (
    <DashboardStack.Navigator screenOptions={defaultNavigationOption}>
      <DashboardStack.Screen
        name="Welcome"
        component={Dashboard}
        options={DashboardOptions}
      />
    </DashboardStack.Navigator>
  );
};

const defaultNavigationOption = {
  //   headerStyle: {
  //     backgroundColor: Platform.OS === "android" ? "#212931" : "#fff",
  //   },
  //   headerTintColor: Platform.OS === "android" ? "#A7AFB7" : "",
};

export default DashboardNavigator;
