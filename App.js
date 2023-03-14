import { StyleSheet,View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Flower from './src/screens/Flower';
import Preview from './src/screens/Preview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Setting from "./src/screens/Setting";
import Profile from "./src/screens/Profile";
import Favourite from "./src/screens/Favourite";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function FlowerStack() {
//   return (
//     <Stack.Navigator initialRouteName='Flower'>
//        <Stack.Screen name='Flower' component={Flower}  options={{title: "Discover", headerStyle:{
//         backgroundColor: "white"},  headerTintColor: "black",
//         headerTitleAlign: "center", headerRight: () => (<Text style={{ marginRight: 20 }}><TouchableOpacity><Ionicons name="search" size={24} color="black" /></TouchableOpacity></Text>),
//         headerLeft: () => (<Text style={{ color: "white", marginLeft: 20 }}><MaterialCommunityIcons name="dots-grid" size={30} color="black" /></Text>),}}   />
//   <Stack.Screen name='Preview' component={Preview} options={{header: ()=> null}} />
//     </Stack.Navigator>
//   );
// }

// function PreviewStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name='Preview'
//         component={Preview}
//         options={{
//           title: 'Preview',
//           headerStyle: { backgroundColor: 'red' },
//           headerTintColor: 'blue',
//           headerTitleAlign: 'center',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer initialRouteName='Flower'>
      <Tab.Navigator>
        <Tab.Screen name='Flower'  component={Flower}  options={{title: "Discover", tabBarIcon: ({ color, size }) => (
      <Ionicons name='home-outline' size={24} color={"black"} />
    ), headerStyle:{
        backgroundColor: "white"},  headerTintColor: "black",
        headerTitleAlign: "center", headerRight: () => (<Text style={{ marginRight: 20 }}><TouchableOpacity><Ionicons name="search" size={24} color="black" /></TouchableOpacity></Text>),
        headerLeft: () => (<Text style={{ color: "white", marginLeft: 20 }}><MaterialCommunityIcons name="dots-grid" size={30} color="black" /></Text>),}} />

        <Tab.Screen name='Preview' component={Preview}  options={{title: "Beauty", tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="preview" size={24} color="black" />
    ), headerStyle:{
      backgroundColor: "white"},  headerTintColor: "black",
      headerTitleAlign: "left", headerRight: () => (<Text style={{ marginRight: 20 }}><View style={styles.iconsContainer}>

        <View style={styles.headphone}>
          <TouchableOpacity>
           <Text><Feather name="headphones" size={18} color="black" /></Text>
          </TouchableOpacity>
          </View>
       <View style={styles.heart}>
       <TouchableOpacity>
           <Text><EvilIcons name="heart" size={24} color="black" /></Text>
       </TouchableOpacity>
     </View>
     <View style={styles.share}>
       <TouchableOpacity>
           <Text><EvilIcons name="share-google" size={24} color="black" /></Text>
       </TouchableOpacity>
     </View>

   </View></Text>),
 headerLeft: () => {
  const navigation = useNavigation();
  return (
    <Text style={{ color: "black", marginLeft: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Flower')}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
    </Text>
  )
},}} />
         <Tab.Screen name='favourite' component={Favourite}  options={{title: "favourite", tabBarIcon: ({ color, size }) => (
      <FontAwesome name="heart-o" size={24} color="black" />
    ) }} />
       <Tab.Screen name='profile' component={Profile}  options={{title: "Profile", tabBarIcon: ({ color, size }) => (
      <Ionicons name="person-outline" size={24} color="black" />
    ) }} />
         <Tab.Screen name='setting' component={Setting}  options={{title: "setting", tabBarIcon: ({ color, size }) => (
      <Ionicons name="settings-outline" size={24} color="black" />
    ) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
iconsContainer:{
  flexDirection: "row",
  justifyContent: "flex-end",
},
headphone:{
  margin: 3
},
heart:{
  margin: 3
},
share:{
  margin: 3
},

});
