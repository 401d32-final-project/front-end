import React from 'react';
import {View, Text, StyleSheet, Button, Image, KeyboardAvoidingView, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Form from '../components/form';

const RegisterComponent = (props) => {
  return(
      <KeyboardAvoidingView 
      behavior="padding" enabled
      style={{ flex: 1}}
      >
        <ScrollView>
        <ImageBackground
          source={require('../assets/background2.png')}
          style={{width: '100%', height: '100%'}}
        >
          <View>
            <Image 
              style={{ marginLeft:"auto", marginRight:"auto",marginTop:50, }}
              source={require('../assets/newshub.png')}
              />
            <Form 
              styles={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.textStyle}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({

  textStyle: {
    fontSize: 20,
    alignItems:"center",
    fontFamily: "monospace"
  },
  button: {
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:0,
    marginBottom:20,
    fontSize: 50,
    backgroundColor: "#FFDAB9",
    borderRadius: 50,
    padding: 5,
  }

})

export default RegisterComponent