'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import t from 'tcomb-form-native';
import superagent from 'superagent';
const User = t.struct({
    username: t.String,
    password: t.String,
    email: t.String
  });

const Form = t.form.Form;

const options = {
  fields: {
    username: {
      error: 'Please Enter a UserName'
      },
    password: {
      error: 'Please Enter a Password'
      },
    email: {
      error: 'Please Enter a valid email address',
      },
    },
  }

export default class Signup extends Component{
  constructor() {
    super()
    this.state = {
      token: '',
    }
  }
  handleSubmit = () => {
    const value = this._form.getValue();
    superagent.post('https://news-hub-401-final.herokuapp.com/signup')
      .send(value)
      .then((response) => {
        this.props.navigation.navigate('Home', { token: response.text });
      });
  }
  render(){
    return(
      <View style={styles.container}>
      <Form 
      type={User}
      ref={c => this._form = c}
      options={options}
      />
        <Button 
          title='Sign Up!'
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    }
  })


