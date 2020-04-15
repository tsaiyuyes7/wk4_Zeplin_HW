import React from "react";
import {View, Text, Image, ScrollView, StyleSheet,TouchableOpacity} from "react-native"

import Data from "../json/Data.json"

 let state = "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_start%20read.png?raw=true";

function changestate () {
  return(
    state = true
  );

}
function chageuri () {
  return(
    state = "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/btn_start%20read%20pressed.png?raw=true"
  )
}
  

const  MyBookScreen = ({navigation}) => {
  
  let buttonimg = <Image
      style={ {width:82,height:21} }
      source={ {uri:"https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/btn_start%20read.png?raw=true"} }
    />;
  return (
    <ScrollView >
      <View style = {styles.cardSevtionStyle}>
        <View style = {styles.imageborder}>
          <Image
             style={styles.bookimage}
             source={{
                 uri: Data[0].image
             }}
          />
        </View>
        <View style = {styles.bookdetailsectionStyle}>
            
              <Text style = {styles.bookname}>{Data[0].name}</Text>
              <Text style = {styles.bookauthor}>{Data[0].author}</Text>
              <Text style = {styles.bookcomment}>{Data[0].comment}</Text>
              <View style = {styles.discompletestyle}>
                <View style = {styles.completestyle}></View>
              </View>
            <Text style = {styles.bookcomment}>{Data[0].progress}</Text>
        </View>
      </View> 

      <View style = {styles.cardSevtionStyle}>
        <View style = {styles.imageborder}>
          <Image
             style={styles.bookimage}
             source={{
                 uri: Data[1].image
             }}
          />
        </View>
        <View style = {styles.bookdetailsectionStyle}>
            
              <Text style = {styles.bookname}>{Data[1].name}</Text>
              <Text style = {styles.bookauthor}>{Data[1].author}</Text>
              <Text style = {styles.bookcomment}>{Data[1].comment}</Text>
              <View style = {styles.discompletestyle}>
              </View>
              <TouchableOpacity
                onpress = {()=> chageuri} >
                  <Image style={{width:82,height:21, marginTop:6}} source={{uri:state}}/>
                  
              </TouchableOpacity>
        </View>
      </View> 

      <View style = {styles.cardSevtionStyle}>
        <View style = {styles.imageborder}>
          <Image
             style={styles.bookimage}
             source={{
                 uri: Data[2].image
             }}
          />
        </View>
        <View style = {styles.bookdetailsectionStyle}>
            
              <Text style = {styles.bookname}>{Data[2].name}</Text>
              <Text style = {styles.bookauthor}>{Data[2].author}</Text>
              <Text style = {styles.bookcomment}>{Data[2].comment}</Text>
              <View style = {styles.discompletestyle}>
                <View style = {styles.completestyle}></View>
              </View>
            <Text style = {styles.bookcomment}>{Data[0].progress}</Text>
        </View>
      </View> 
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardSevtionStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 170,
        paddingTop:12,
        paddingLeft:15
    },
  bookdetailsectionStyle: {
      flexDirection: "column",
      //justifyContent: "space-around",
      width: 194,
      paddingLeft: 27,
      
  },
  bookimage:{
    height: 140,
    width: 93,
    margin:0,
    
    
  },
  bookname:{
    width:194,
    marginTop:13,
    height:22,
    fontSize:18,
    color: "#2e2e2e"
  },
  bookauthor:{
    marginTop:11,
    height:18,
    fontSize:14,
    color: "#717171"
  },
  bookcomment:{
    marginTop:11,
    width:194,
    height:30,
    fontSize:12,
    color: "#b1b1b1"
  },
  imageborder: {
    
    width : 99,
    height: 146,
    borderWidth:0.5,
    borderColor:"#d1d1d1",
    justifyContent: "center",
    paddingLeft: 2
  },
  completestyle:{
    backgroundColor:"#70b4a1",
    width: 97,
    height:3,
    borderRadius:3
    
    
  },
  discompletestyle:{
    marginTop:11,
    backgroundColor:"#c3c3c3",
    width: 194,
    height:3,
    borderRadius:3
    
  }

})
  export default MyBookScreen;

