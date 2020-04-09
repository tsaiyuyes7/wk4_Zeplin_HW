import React from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyBookScreen from "./MyBookSreen.js"
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import HomeStack from "./HomeStackScreen"

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
          backgroundColor:"#00b49f"
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.DrawerHead}>
          <Image
              style={styles.userimg}
              source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/img_user_photo.png?raw=true"}}
          />
          <View style={styles.thumbnailContainerStyle}>
                    <View style={styles.headerContainerStyle}>
                        <Text style={styles.nameTextstyle}>GamexHCI</Text>
                        <Text style={styles.emailTextStyle}>gblab2017@gmail.com</Text>
                    </View>
                    <Image
                      style={styles.Headerarrow}
                      source={{
                          uri:"https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_down_arrow.png?raw=true" 
                      }}
                  />        
          </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyBookStackScreen = ({navigation}) => {
  return (
  <Drawer.Navigator 
    drawerContent={props => <CustomDrawerContent {...props} />}
    drawerContentOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#5c5c5c',
      activeBackgroundColor: '#00b49f',
      itemStyle: { height: 54 ,width: 304,
        marginLeft:0 ,marginTop :0,marginBottom:0,
        borderRadius:0,bottom:4
       },
      labelStyle: { fontSize : 14, marginTop :2}
    }}
    initialRouteName = 'MyBook'

  >
    <Drawer.Screen 
        name="Hoom" 
        component = {HomeStack}
        options = {{
          drawerIcon : ({focused}) => (
           
            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_drawer_home_pressed.png?raw=true" }} style={{height:24,width:24 }}  />
            : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_home.png?raw=true"}} style={{height:24,width:24 }}  /> 
          )
        }}
    />

    <Drawer.Screen 
        name="MyBook" 
        component = {StackScreen}
        options = {{
          drawerIcon : ({focused})=> (
            focused
            ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_drawer_mybook_pressed.png?raw=true" }} style={{height:24,width:24 }}  />
            : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_mybook.png?raw=true"}} style={{height:24,width:24 }}  /> 
          )
        }}
    />
    <Drawer.Screen 
        name="Favorite" 
        component = {StackScreen}
        options = {{
          drawerIcon : ()=> (
            <Image
              style={styles.Drawericon}
              source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_favorites.png?raw=true"}}
            />
          )
        }}
    />
    <Drawer.Screen 
        name="Setting" 
        component = {StackScreen}
        options = {{
          drawerIcon : ()=> (
            <Image
              style={styles.Drawericon}
              source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_setting.png?raw=true"}}
            />
          )
        }}
    />
    <Drawer.Screen 
        name="About us" 
        component = {StackScreen}
        options = {{
          drawerIcon : ()=> (
            <Image
              style={styles.Drawericon}
              source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/icon_drawer_aboutus.png?raw=true"}}
            />
          )
        }}
    />
  </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  HeaderRightLogo: {
    width:40,
    height:40
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

