import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { AddItemScreen } from "../screens/AddItem";

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="AddItem" component={AddItemScreen} />
    </Navigator>
  </NavigationContainer>
);
