import React from 'react';
import { withNavigation } from 'react-navigation';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';

const MyBackButton = (props) => {

    return (
      <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        <Image 
          source={require('../assets/house.png')}
        />
      </TouchableOpacity>
    );
  }


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);