headerLeft: () => (
    <TouchableOpacity  
    onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
                style={styles.HeaderRightStyle}
                source={{
                    uri:"https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_navbar_mobile.png?raw=true" 
                }}
            />
    </TouchableOpacity>
    )


    return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component = {Tabscreen}/>
          </Drawer.Navigator>
        </NavigationContainer>
      );




      const StackScreen = () => (
        <Stack.Navigator>
            <Stack.Screen name="MyBook" component={MyBookScreen} 
             options={{ 
              headerRight: props => <RightTitle {...props} /> ,
              headerLeft: () => (
                <TouchableOpacity  
                onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image
                            style={styles.HeaderRightStyle}
                            source={{
                                uri:"https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_navbar_mobile.png?raw=true" 
                            }}
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

      <Image 
      style={{height:24,width:24 }}
      source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_bottomnav_mybook_selected.png?raw=true"}}
    />