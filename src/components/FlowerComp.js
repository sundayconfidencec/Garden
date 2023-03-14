import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

function FlowerComp({image,picture, name,title,time, description }) {
    const navigation = useNavigation();
  return (
    <View>
         
         <TouchableOpacity onPress={() => navigation.navigate("Preview", { image, name, title, time, description,picture })}>
  <View style={styles.container}>
  <View style={styles.imageContainer}>
    <Image style={styles.image} source={image} />
  </View>
    <View style={styles.Container1}>
    <View style={styles.titleContainer}>
    <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </View>
   <View style={styles.profileContainer}>
   <View style={styles.pictureContainer}>
   <Image style={styles.picture} source={picture} />
   </View>
    <Text style={styles.name} numberOfLines={1}>{name}</Text>
    <View style={styles.dot}></View>
    <Text style={styles.time}>{time}</Text>
    
  </View>
    
    </View>
  </View>
</TouchableOpacity>

  </View>
  )
}
const styles = StyleSheet.create({
  container:{
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal:10,
        borderRadius: 3,
        marginHorizontal: 2,
        marginVertical: 10
       
    },
    profileContainer:{
        flexDirection: "row",
       paddingVertical: 10,
       justifyContent: "space-around",
       paddingRight: 35
    },
    // imageContainer:{
    //     width:10,
    //     height: 10
    // },
    pictureContainer:{
       paddingRight: 10,
       flex: 1
    },
    picture:{
        width:25,
        height: 25,
        borderRadius: 50,
    },
    image:{
        width:80,
        height: 80
    },
    Container1:{
       paddingHorizontal: 10,
       marginHorizontal: 20
    },
    title:{
        fontSize: 18,
        fontWeight: "900",
        paddingRight: 30,
        flex:1
    },
    dot:{
        backgroundColor:"gray",
        borderRadius: 50,
        height: 5,
        width:5,
       marginTop: 10,
       marginLeft: 10,
       marginRight: 10,
      
    },
    time:{
        color: "gray",
        flex:3
    },
    name:{
        flex: 3
    }
    });
export default FlowerComp;