import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image, ImageBackground} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  // changed this from email to username because it makes more sense
  username: t.String,
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
      backgroundColor: 'rgba(52, 52, 52, .0)'
    },
  });

  