import React from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
import Expo from 'expo'
import Head from '../components/header';
import { Header } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = (props) => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background2.png')}
          style={{width: '100%', height: '100%'}}
        >
          <Head />
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Sources')}>
            <Image 
              source={require('../assets/news.png')}
              />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Saved')}>
          <Image 
              source={require('../assets/saved.png')}
              />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",

  },
  button: {
    marginTop:50,
    marginBottom:0,
    marginLeft: "auto",
    marginRight: "auto"
  },
  searchbar: {
    width: 300,
  }
})

export default HomeScreen
