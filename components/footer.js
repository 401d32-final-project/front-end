import React from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';




const Foot = () => {

  return (
    <View style={styles.container}>
      <View >
        <Text>NewsHub Inc. {'\u00A9'}2019</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },

})

export default Foot;
