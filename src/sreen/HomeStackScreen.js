import React from "react";
import {View, Text} from "react-native"
import HomeScreen from "./HomeScreen.js"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

  

export default HomeStackScreen;