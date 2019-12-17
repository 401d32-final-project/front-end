import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignInScreen from './screens/signinScreen';
import Expo from 'expo'
import HomeScreen from './screens/homeScreen';

const navigator = createStackNavigator(
  {
    SignIn:  SignInScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);
export default createAppContainer(navigator);


