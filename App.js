import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignInScreen from './screens/signinScreen';
import Expo from 'expo'
import HomeScreen from './screens/homeScreen';
import SourceScreen from './screens/sourceScreen'
import AP from './screens/newsPages/ap';
import CNN from './screens/newsPages/cnn';
import SignUpScreen from './screens/signup/signupScreen';
import Messages from './store-messages';

const navigator = createStackNavigator(
  {
    SignIn:  SignInScreen,
    Home: HomeScreen,
    Sources: SourceScreen,
    AssociatePress: AP,
    CentralNews: CNN,
    Messages: Messages,
    // FoxNews: Fox,
    // NewYork: NY,
    // BritishNews: BBC,
    SignUp: SignUpScreen
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);


