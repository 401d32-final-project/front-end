import React from 'react';
import {ScrollView, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, StackNavigator} from 'react-navigation';
import Expo from 'expo'

const AP = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/AP.png')}
      />
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

export default AP;
