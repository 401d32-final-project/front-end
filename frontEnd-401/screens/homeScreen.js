import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
// import NavBar from './components/navbar.js';
// import SignIn from './components/signinPage';
import Expo from 'expo'
import Search from './searchBar'

const HomeScreen = (props) => {
    return (
      <View style={styles.container}>
      {/* <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
      <Search />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {

  }
})

export default HomeScreen
