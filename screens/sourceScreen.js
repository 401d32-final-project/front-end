import React from 'react';
import {ScrollView, Text, StyleSheet, Button, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {Header} from 'react-native-elements';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
import Expo from 'expo'
import Head from '../components/header';

// import { ScrollView } from 'react-native-gesture-handler';

const SourceScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
          source={require('../assets/background2.png')}
          style={{width: '100%', height: '100%'}}>
      <Head />
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CentralNews')}>
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
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('AssociatePress')}>
      <Image 
        source={require('../assets/AP.png')}
        />
    </TouchableOpacity>
    <TouchableOpacity style={{marginBottom: 100,marginLeft: "auto",marginRight: "auto"}}  onPress={() => props.navigation.navigate('SignIn')}>
      <Image 
        source={require('../assets/espn.png')}
        />
    </TouchableOpacity>
    </ImageBackground>
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
