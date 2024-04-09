import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import HomeScreen from "../src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { routesProvider } from "../src/utils/provider";
import SignInScreen from "../src/screens/SignIn";
import SignUpScreen from "../src/screens/SignUp";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routesProvider.WELCOME}>
        <Stack.Screen  name={routesProvider.WELCOME}  options={{ headerShown: false }}  component={WelcomeScreen}/>
        <Stack.Screen  name={routesProvider.HOME}  options={{ headerShown: false }}  component={HomeScreen}/>
        <Stack.Screen  name={routesProvider.SIGN_UP}  options={{ headerShown: false }}  component={SignUpScreen}/>
        <Stack.Screen  name={routesProvider.SIGN_IN}  options={{ headerShown: false }}  component={SignInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
