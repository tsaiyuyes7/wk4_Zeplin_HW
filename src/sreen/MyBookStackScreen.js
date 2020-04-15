import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyBookScreen from "./MyBookSreen.js"
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeStackScreen from "./HomeStackScreen.js"
import FavoriteStackSreen from "./FavoriteStackScreen.js"

const Stack = createStackNavigator();

function StackScreen({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="MyBook" component={MyBookScreen} 
       options={{ 
        headerRight: props => <RightTitle {...props} /> ,
        headerLeft: () => (
          <TouchableOpacity  
          onPress={()=> navigation.openDrawer()}>
                  <Image
                  style={styles.HeaderRightLogo}
                  source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_navbar_mobile.png?raw=true"}}
                  />       
          </TouchableOpacity>
        ),
        headerTintColor: '#fff',
        headerStyle:{
          backgroundColor:"#00b49f",
        },
        headerTitleStyle:{
          width:240,
          justifyContent:"center",
          marginLeft:78
        },
        headerRightContainerStyle:{
          marginRight:9.2
        }
        
      }}  
      />
  </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function RightTitle() {
  return (
    <Image
      style={styles.HeaderRightLogo}
      source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/btn_search.png?raw=true"}}
    />
  );
}
function LeftTitle() {
  return (
    <Image
      style={styles.HeaderRightLogo}
      source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_navbar_mobile.png?raw=true"}}
    />
  );
}

const Tab = createBottomTabNavigator();

const MyBookStackScreen = ({navigation}) => {
  return (
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
        component={StackScreen} 
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
        component={FavoriteStackSreen}
        options = {{
          
          tabBarIcon : ({focused}) => (
            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_bottomnav_favorites_seleced.png?raw=true"}} style={{height:24,width:24 }}  />
            : <Image style={{height:24,width:24 }} source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_bottomnav_favorites.png?raw=true"}}  />
            
          )

        }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  HeaderRightLogo: {
    width:40,
    height:40,
    marginLeft:8
  },
  Drawericon: {
    width:24,
    height:24,
    marginTop :2
  },
  DrawerHead : {
    width:304,
    height:170,
    backgroundColor: '#00b49f',
    bottom:4
  },
  userimg:{
    height:70,
    width:70,
    marginLeft:13,
    marginTop:37,
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    
},
thumbnailStyle: {
    height: 40,
    width: 40,
    marginLeft: 24,
    borderRadius:20

},
headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    width:204,
    marginLeft:16
},
nameTextstyle:{
  color:'#ffffff',
  marginTop:9
},
emailTextStyle:{
  color:'#ffffff',
  marginTop:5
},
Headerarrow :{
  height:24,
  width:24,
  marginLeft:18,
  marginTop:15,
  
}
 
});


export default MyBookStackScreen;

