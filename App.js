import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from "@expo/vector-icons";
//import { MaterialCommunityIcons } from '@expo/vector-icons';
//import type {Node} from 'react';
import Home from './Components/Home/Home'
import Maps from './Components/Maps/Maps'
import Forecast from './Components/Forecast/Forecast'
import Weather from './Components/Weather/Weather'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors,} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';

export default function App(){

  useEffect(() => {
    SplashScreen.hide();

  }, [])

  
  const Tab = createMaterialBottomTabNavigator();
  return(

   
    <NavigationContainer>
      <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#f0edf6"
      //labelStyle={{ fontSize: 20 }}
      barStyle={{ backgroundColor: '#694fad', fontSize:20}}
      >
        

        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            
          <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
                }}
        />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Forecast" component={Forecast} />
        <Tab.Screen name="Weather" component={Weather} />
      </Tab.Navigator>

    </NavigationContainer>
    
    
  );
}


// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
// //new component
//const Stack = createNativeStackNavigator();
//  <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       //options={{ title: 'Welcome'}}
    //            />
    //     <Stack.Screen name="Maps" component={Maps}/>
    //     <Stack.Screen name="Forecast" component={Forecast} />
    //     <Stack.Screen name="Weather" component={Weather} />
 
       
    //   </Stack.Navigator>
    // </NavigationContainer>
