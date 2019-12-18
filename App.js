import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignInScreen from './screens/signinScreen';
import Expo from 'expo'
import HomeScreen from './screens/homeScreen';
import SourceScreen from './screens/sourceScreen'

const navigator = createStackNavigator(
  {
    SignIn:  SignInScreen,
    Home: HomeScreen,
    Sources: SourceScreen,
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);


