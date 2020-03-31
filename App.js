import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from "./src/sreen/HomeStackScreen.js"
import MyBookStackScreen from "./src/sreen/MyBookStackScreen.js"
import FavoriteStackScreen from "./src/sreen/FavoriteStackScreen.js"



const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="MyBook" component={MyBookStackScreen}/>
        <Tab.Screen name="Favorite" component={FavoriteStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;