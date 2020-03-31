
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from "./FavoriteScreen.js"

const Stack = createStackNavigator();

const FavoriteStackScreen = ({navigation}) =>  {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
      </Stack.Navigator>
    );
}

  
  
export default FavoriteStackScreen;