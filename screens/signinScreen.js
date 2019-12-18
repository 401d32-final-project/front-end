import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Form from '../components/form';

const RegisterComponent = (props) => {
  return(
    <View>
      <Image 
      style={{ alignContent:"center", marginLeft:"auto", marginRight:"auto",marginTop:20, }}
      source={require('../assets/newshub.png')}
      />
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