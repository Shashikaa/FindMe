import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../app/screens/LoginScreen";
import RegisterScreen from "../app/screens/RegisterScreen";
import TabNavigator from "./TabNavigator";  // Your tab navigation logic

import TrackingScreen from "../app/screens/TrackingScreen";  
import SettingsScreen from "@/app/screens/SettingScreen";

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Tracking" component={TrackingScreen} />
      <Stack.Screen name="SettingScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
