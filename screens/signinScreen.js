import React from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet, Button, Image, KeyboardAvoidingView, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
// import Form from '../components/form';
import { actions } from '../store-messages';
import t from 'tcomb-form-native';
import jwt from 'expo-jwt';
import superagent from 'superagent';
import { Buffer } from 'buffer';

const User = t.struct({
  username: t.String,
  password: t.String,
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
    },
  }

class Signin extends React.Component {
  handleSignin = () =>{
    const value = this._form.getValue();
    console.log('value:', value);
    var auth = 'Basic ' + new Buffer(value.username + ':' + value.password).toString('base64');
    superagent.post('http://172.16.0.214:3000/signin')
      .set('Authorization', auth)
      .then((response) => {
        console.log('signin response', response);
        const userId = jwt.decode(response.text, 'SECRET').id;
        this.props.storeId(userId);
        this.props.navigation.navigate('Home');
      });
  }
  render() {
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
              type={User}
              styles={styles.input}
              ref={c => this._form = c}
              options={options}
            />
            {/* <TouchableOpacity style={styles.button} onPress={() => this..navigation.navigate('Home')}> */}
            <TouchableOpacity style={styles.button} 
            onPress={this.handleSignin}>
              <Text style={styles.textStyle}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.textStyle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({

  textStyle: {
    fontSize: 20,
    alignItems:"center",
    // fontFamily: "monospace"
  },
  button: {
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:0,
    marginBottom:20,
    fontSize: 50,
    alignItems:"center",
    backgroundColor: "#FFDAB9",
    borderRadius: 50,
    padding: 5,
  }

});

const mapDispatchToProps = (dispatch) => ({
  storeId: (id) => dispatch(actions.storeId(id)),
});

// export default connect(null, mapDispatchToProps)(RegisterComponent);
export default connect(null, mapDispatchToProps)(Signin);
