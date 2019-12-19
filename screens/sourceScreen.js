import React from 'react';
import {ScrollView, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
import Expo from 'expo'
// import { ScrollView } from 'react-native-gesture-handler';

const SourceScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
      <Image 
        source={require('../assets/CNN.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
    <Image 
        source={require('../assets/Fox.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
      <Image 
        source={require('../assets/BBC.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
      <Image 
        source={require('../assets/AP.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity style={{marginBottom: 100,marginLeft: "auto",marginRight: "auto"}}  onPress={() => props.navigation.navigate('SignIn')}>
      <Image 
        source={require('../assets/NY.png')}
      />
    </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",

  },
  button: {
    marginTop:50,
    marginBottom:50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  searchbar: {
    width: 300,
  }

})

export default SourceScreen;
