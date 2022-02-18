import React from 'react'
//import {Button, View, Text, StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Searchbar } from 'react-native-paper';
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

export default Home = ({ navigation}) => {
  
  //console.log(navigation)
  return (


    
    <SafeAreaView>
     
      <ScrollView style>
        <View>
          
          <Text style={styles.aqtitle}>
            Air Quality
          </Text>
   
            
          <Searchbar 
          placeholder="Enter Your Zipcode"
          style = {styles.searchbar}
          >
          </Searchbar>

          
          
          <Text style={styles.gauge}>
            Gauge Place Holder
          </Text>

          <Text style={styles.gauge}>
            Gauge Place Holder
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
    

  );
};


/*
    <View>
    <Text>Welcome To Home</Text>
     
     <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Maps', { name: 'Jane' })
      }
      /> 
    </View>

    */


const styles = StyleSheet.create({

  navBar: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 30,
    marginBottom : 10,
    fontSize: 20,
  },

  gauge: {
    backgroundColor : 'green',
    color: "white",
    textAlign : "center",
    paddingVertical : 30,
    marginBottom : 10,
    fontSize: 20,
  },

 aqtitle: {
    //backgroundColor : 'green',
    //color: "white",
    textAlign : "center",
    paddingVertical : 30,
    marginBottom : 0,
    fontSize: 25,
  },
  searchbar: {
  marginBottom : 3,
   }
  
});



    
    

