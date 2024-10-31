import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login/Login";
import Signupwithemail from "../Screens/Signupwithemail/Signupwithemail";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Signupwithemail" component={Signupwithemail} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
export const Unauthnavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
