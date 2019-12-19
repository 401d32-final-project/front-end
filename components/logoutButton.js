import React from 'react';
import { withNavigation } from 'react-navigation';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';

const LogOutButton = (props) => {

  return (
    <TouchableOpacity 
      onPress={() => {
        props.navigation.navigate('SignIn');
      }}
    >
      <Image 
         style={styles.icon}
        source={require('../assets/logout.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    icon: {
      marginBottom: 10,
     
  }
});


// withNavigation returns a component that wraps LogOutButton and passes in the
// navigation prop
export default withNavigation(LogOutButton);