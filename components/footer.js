import React from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';




const Foot = () => {

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>NewsHub Inc. {'\u00A9'}2019</Text>
        <Text>https://canvas.instructure.com/courses/1725059/assignments/12819533</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:90,

  },
  text: {
    fontSize:20,
    // fontFamily:"monospace"
  }

})

export default Foot;
