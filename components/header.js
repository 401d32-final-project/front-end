import React from 'react';
import { Header } from 'react-native-elements';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import MyBackButton from './homeButton';
import LogOutButton from './logoutButton';
import NewsHub from './newsHubIcon';

const Head = (props) => {
  return (
    <View style={styles.container}>
      <View >
        <Header 
        leftComponent={<MyBackButton />}
        centerComponent={<NewsHub height={20}/>}
        rightComponent={<LogOutButton />}
        containerStyle={{
          backgroundColor: 'transparent',
          justifyContent: 'space-around',
        }}
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
