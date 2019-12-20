'use strict';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import jwt from 'expo-jwt';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { actions } from '../../store-messages';
import t from 'tcomb-form-native';
import superagent from 'superagent';

const User = t.struct({
    username: t.String,
    password: t.String,
    email: t.String,
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

class Signup extends Component{
  constructor() {
    super()
    this.state = {
      token: '',
    }
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    superagent.post('http://172.16.0.214:3000/signup')
      .send(value)
      .then((response) => {
        // console.log(response.headers.token);
        const userId = jwt.decode(response.headers.token, 'SECRET').id;
        this.props.storeId(userId);
        this.props.navigation.navigate('Home');
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

  const mapDispatchToProps = (dispatch) => ({
    storeId: (id) => dispatch(actions.storeId(id)),
  });

  export default connect(null, mapDispatchToProps)(Signup);

