import React from 'react';
import {ScrollView, Text, StyleSheet, Button, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Head from '../components/header';

const SavedScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
          source={require('../assets/background2.png')}
          style={{width: '100%', height: '100%'}}>
      <Head />
    </ImageBackground>
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

export default SavedScreen;
