import React, { useEffect } from 'react';
import type {Node} from 'react';
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

import { Colors, 
} from 'react-native/Libraries/NewAppScreen';

import SearchBar from './android/app/components/SearchBar';
import SplashScreen from 'react-native-splash-screen';

export default function App(){

  useEffect(() => {
    SplashScreen.hide();

  }, [])

//Intent folder area missing on AndroidManifest.xml. rewatch video.




  return(
    <>
    <SafeAreaView>
      <ScrollView style>
        <View>
          <Text style={styles.navBar}>
            NavBar PlaceHolder
          </Text>

          <View style={styles.navBar}>
          <SearchBar> 
        
          </SearchBar>
          </View>
          
          <Text style={styles.gauge}>
            Gauge Place Holder
          </Text>

          <Text style={styles.gauge}>
            Gauge Place Holder
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
    
    
    
    </>




  );



}


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
  }

});
