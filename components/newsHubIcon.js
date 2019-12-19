import React from 'react';
import { withNavigation } from 'react-navigation';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';

const newsHub = (props) => {

  return (
    <Image
      style={styles.icon}
      source={require('../assets/smallNewsHub.png')}
    />
  );
}

const styles = StyleSheet.create({
    icon: {
      marginBottom: 20,
    }
})

export default withNavigation(newsHub);