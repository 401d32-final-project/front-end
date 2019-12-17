import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Form from './form';

const RegisterComponent = (props) => {
  return(
    <View>
      <Image 
      style={{width: 200, height: 200, alignContent:"center" }}
      source={require('../assets/icon.png')}
      />
    <Text style={styles.textStyle}>News Hub</Text>
    <Form />
    <Button
      onPress={() => props.navigation.navigate('Home')}
      title="Sign In"
    />
    <Button
    style={{width: 50, height: 10}}
      onPress={() => {console.log('button pressed')}}
      title="Sign Up"
      />
    </View>
  )
}

const styles = StyleSheet.create({

  textStyle: {
    fontSize: 50,
    alignItems:"center"

  }
})

export default RegisterComponent