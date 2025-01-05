import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "../navigations/AppNavigator";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      
        <AppNavigator />

    </SafeAreaProvider>
  );
};

export default App;
