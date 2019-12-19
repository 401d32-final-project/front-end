'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import t from 'tcomb-form-native';
import superagent from 'superagent';
import 'tcomb-validation';

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; /
  return reg.test(email)
  });

const User = t.struct({
    username: t.String,
    password: t.String,
    email: Email,
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
    if (email){
      superagent.post('https://news-hub-401-final.herokuapp.com/signup')
      .send(value)
      .then((response) => {
        this.props.navigation.navigate('Home', { token: response.text });
      })} else {
        return options.fields.email.error;
      };
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


