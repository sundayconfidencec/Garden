import React from 'react';
import {View, Text , FlatList, TextInput, StyleSheet,TouchableOpacity , ScrollView} from "react-native";
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import FlowerComp from "../components/FlowerComp";

function Flower({route, navigation}) {
    console.log(route.params);
    const [searchQuery, setSearchQuery] = useState('');
   
    const myFlower = [
        { id:"1",image: require("../asset/f1.webp"),title: "Does dry january actual help flower's health?", picture: require( "../asset/p1.jpg"), name: "Mrs Sunday", time: "4 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"2",image: require("../asset/f2.webp"),title: "How to mantain your flower during dry season", picture: require( "../asset/p2.jpg"), name: "Pst Mrs Faith", time: "7 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"3",image: require("../asset/f3.webp"),title: "Seasonal flowering plants", picture: require( "../asset/p3.jpg"), name: "Miss K. Precious", time: "2 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"4",image: require("../asset/f4.webp"),title: "How to preserve freshly cut flowers", picture: require( "../asset/p4.jpg"), name: "Miss Philps C", time: "3 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"5",image: require("../asset/f5.webp"),title: "Tips on how to start a flower business", picture: require( "../asset/p5.jpg"), name: "sunday confidence", time: "5 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"6",image: require("../asset/f6.webp"),title: "Origin of flower cross breeding in floriculture department", picture: require( "../asset/p6.jpg"), name: "sunday confidence", time: "5 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"7",image: require("../asset/f7.webp"),title: "Climate change and how it affects flowers", picture: require( "../asset/p7.jpg"), name: " sunday confidence", time: "1 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"8",image: require("../asset/f8.webp"),title: "Why ladies love flower", picture: require( "../asset/p8.jpg"), name: " Mrs c.s Igwe", time: "10 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"9",image: require("../asset/f9.webp"),title: "Become a millionaire by growing flowers", picture: require( "../asset/p9.jpg"), name: "sunday confidence", time: "30 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        { id:"10",image: require("../asset/f10.webp"),title: "How to document your journey in flower business", picture: require( "../asset/p10.jpg"), name: "sunday confidence", time: "1 mins read", description: "Flowers are essential reproductive structures of angiosperms and important food sources for many insects and animals and flowers also have been valued by humans for thousands of years for a variety of reasons. Flowers are cultivated in arrangements, gardens and landscapes for their aesthetic appeal." },
        
    ]
    // const filterFlowers = (flowers, query) => {
    //     return flowers.filter(flower => {
    //       const name = flower.name.toLowerCase();
    //       const title = flower.title.toLowerCase();
    //       const time = flower.time.toString();
    //       const description = flower.description.toLowerCase();
    //       const searchText = query.toLowerCase();
    //       return (
    //         name.includes(searchText) ||
    //         title.includes(searchText) ||
    //         time.includes(searchText) ||
    //         description.includes(searchText)
    //       );
    //     });
    //   };
    //   const filteredFlowers = filterFlowers(myFlower, searchQuery);
      
  return (
    <View >
    {/* <View style={styles.searchcontainer}>
    <TextInput

style={styles.searchInput}
placeholder="Search pets"
placeholderTextColor="gray"
value={searchQuery}
onChangeText={setSearchQuery} />

<TouchableOpacity style={styles.btn} onPress={searchQuery} >
<Ionicons name="search" size={24} color="#0217D6" />
</TouchableOpacity>
    </View> */}

   <TouchableOpacity onPress={()=>{navigation.navigate("Preview")}}>
   <FlatList
    data={myFlower}
    renderItem={({ item }) => (
        
      <FlowerComp
        image={item.image}
        picture={item.picture}
        name={item.name}
        title={item.title}
        time={item.time}
        description={item.description}
        id={item.id}
        
      />
    )}
    keyExtractor={item => item.id}
  />
   </TouchableOpacity>
   
</View>
  )
}
// const styles = StyleSheet.create({
   
//     searchInput: {
//       height: 40,
//       borderWidth: 1,
//       borderColor: '#E1E1E3',
//       borderRadius: 5,
//       paddingHorizontal: 10,
//       marginBottom: 20,
//       paddingLeft: 60,
//       backgroundColor: "white",
//     },
//     btn:{
//         position: "absolute",
//         left: 300,
//         top: 7
//     },
//     // searchcontainer:{
//     //   marginTop: 50
//     // },
   
//   });

export default Flower;