import React from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
// import NavBar from './components/navbar.js';
// import SignIn from './components/signinPage';
import Expo from 'expo'
import Search from '../components/searchBar'
import { LinearGradient } from 'expo'

const HomeScreen = (props) => {
    // if (!props.navigation.state.params.token) {
    //   props.navigation.navigate('SignInScreen');
    // }
    // console.log(props.navigation.state.params.token);
    return (
      <View style={styles.container}>
      <Search />

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignIn')}>
        <Image 
          source={require('../assets/placeholder.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Sources')}>
      <Image 
          source={require('../assets/placeholder.png')}
        />
      </TouchableOpacity>

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
