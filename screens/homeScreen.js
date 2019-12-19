import React from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
import Expo from 'expo'
import Head from '../components/header';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Foot from '../components/footer'
import Messages from '../store-messages';

const HomeScreen = (props) => {
    // if (!props.navigation.state.params.token) {
    //   props.navigation.navigate('SignInScreen');
    // }
    // console.log(props.navigation.state.params.token);
    return (
      <View style={styles.container}>
        <Head />
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Sources')}>
          <Image 
            source={require('../assets/CNN.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
        <Image 
            source={require('../assets/placeholder.png')}
          />
        </TouchableOpacity>
        <Foot />
        
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

export default HomeScreen;
