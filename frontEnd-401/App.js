import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavBar from './components/navbar.js';
const navigator = createStackNavigator(
  {
    Home:  NavBar,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);
export default createAppContainer(navigator);
