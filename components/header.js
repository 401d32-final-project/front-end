import React from 'react';
import { Header } from 'react-native-elements';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import MyBackButton from './homeButton';
import LogOutButton from './logoutButton';

const Head = (props) => {
  return (
    <View style={styles.container}>
      <View >
        <Header 
        leftComponent={<MyBackButton />}
        rightComponent={<LogOutButton />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },

})

export default Head;
