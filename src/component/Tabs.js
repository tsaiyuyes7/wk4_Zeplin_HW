import React from 'react';
import { StyleSheet, Image,  Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import HomeStackScreen from "./src/sreen/HomeStackScreen.js"
import MyBookStackScreen from "./src/sreen/MyBookStackScreen.js"
import FavoriteStackScreen from "./src/sreen/FavoriteStackScreen.js"



const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator  
    tabBarOptions={{
      activeTintColor:'#00b49f',
      inactiveTintColor: '#818181',
      
    }}>
        <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options = {{
          
          tabBarIcon : ({focused}) => (
            
            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_bottomnav_home_seleced.png?raw=true"}} style={{height:24,width:24 }}  />
            : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_bottomnav_home.png?raw=true"}} style={{height:24,width:24 }}  />
          )

        }}
        />
        <Tab.Screen 
        name="MyBook" 
        component={MyBookStackScreen} 
        options = {{
          
          tabBarIcon : ({focused}) => (

            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_bottomnav_mybook_selected.png?raw=true"}} style={{height:24,width:24 }}  />
            : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_bottomnav_mybook.png?raw=true"}} style={{height:24,width:24 }}  /> 
          )

        }}
        />
        <Tab.Screen 
        name="Favorite" 
        component={FavoriteStackScreen}
        options = {{
          
          tabBarIcon : ({focused}) => (
            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_bottomnav_favorites_seleced.png?raw=true"}} style={{height:24,width:24 }}  />
            : <Image style={{height:24,width:24 }} source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_bottomnav_favorites.png?raw=true"}}  />
            
          )

        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;