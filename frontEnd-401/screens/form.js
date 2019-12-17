import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

export default class goodForm extends Component {
    render() {
      return (
        <View  style={styles.container}>
          <View>
            <Form type={User} />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
  });

  