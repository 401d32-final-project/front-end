import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
// import NavBar from './components/navbar.js';
// import SignIn from './components/signinPage';
import Expo from 'expo'
import Search from './searchBar'

const HomeScreen = (props) => {
    return (
      <View style={styles.container}><Text onPress={() => navigate('Profile')}>Navigate To Profile</Text>
      <Search />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {

  }
})

export default HomeScreen