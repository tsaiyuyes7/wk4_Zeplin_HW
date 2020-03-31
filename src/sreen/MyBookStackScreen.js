import React from "react";
import MyBookScreen from "./MyBookSreen.js"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyBookStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyBook" component={MyBookScreen} />
    </Stack.Navigator>
  );
}
export default MyBookStackScreen;

