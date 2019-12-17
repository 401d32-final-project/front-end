import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Navbar = () => {
  return (
    <View>
      <Text style={styles.text}>Navigation</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 100,
  }
});
export default Navbar;