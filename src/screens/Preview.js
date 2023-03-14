import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function Preview({route, navigation}) {
    const { image, name, time, title, description, picture } = route.params;
  return (
    <View style={styles.mainContainer}>
    
     <View style={styles.container}>
        <View style={styles.imageContainer}>

      <Image style={styles.image} source={image} />
        </View>
      <View style={styles.textInfo}>
      <Text style={styles.title}> {title}</Text>

     <View style={styles.profileContainer2}>
    <View style={styles.pictureContainer}>
    <Image style={styles.picture} source={picture} />

    </View>
    <Text style={styles.name}>{name}</Text>
      <View style={styles.dot}></View>
      <Text style={styles.time}>{time}</Text>
     </View>
     <ScrollView style={styles.descriptionContainer}>
      <Text style={styles.description}>{description}</Text>
     </ScrollView>
     </View>
      </View>
    
 </View>
  )
}
const styles = StyleSheet.create({
    mainContainer:{
        
        
    },
    container: {
        marginTop: 50,
        backgroundColor: '#f1f1f1',
    },
    image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInfo:{
    marginLeft: 30
  },
  title:{
    fontSize: 20,
    fontWeight: "900",
    paddingRight: 30
  },
  profileContainer2:{
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    paddingRight: 35
  },
  picture:{
    width:25,
    height: 25,
    borderRadius: 50,
},
pictureContainer:{
    paddingRight: 10,
    flex: 1
 },

 dot:{
     backgroundColor:"gray",
     borderRadius: 50,
     height: 5,
     width:5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 0.1
 },
 time:{
     color: "gray",
     flex:3
 },
 name:{
     flex: 4
 },
 descriptionContainer: {
    height: 300,
    marginBottom: 5,
  },
  description:{
    fontSize: 16,
    paddingTop: 10,
    textAlign: "left"
  }
});
export default Preview;