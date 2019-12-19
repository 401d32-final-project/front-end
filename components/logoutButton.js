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
      <Text style={styles.logout}>
        Log Out
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    logout: {
        fontSize: 20
    }
})


// withNavigation returns a component that wraps LogOutButton and passes in the
// navigation prop
export default withNavigation(LogOutButton);