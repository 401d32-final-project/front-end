import React from 'react';
import {ScrollView,View,  Text, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator, Linking} from 'react-native';
import Expo from 'expo'
import { Divider } from 'react-native-elements';

 class CNN extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount () {

    return fetch('https://news-hub-401-final.herokuapp.com/headlines')
      .then((response) => response.json())
      .then((responseJson) => {
          let filteredTitle = responseJson.filter(response => response.title.includes("CNN"))
        this.setState({
          isLoading: false,
          dataSource: filteredTitle,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.dataSource)
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      let headlines = this.state.dataSource.map((value,key) => {
        return (<View key={key}>
          <Text style={styles.title}>{value.title}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.description}>{value.description}</Text>
          <Text 
          onPress={() =>{
            Linking.openURL(`${value.url}`)
          }
          }>Link to the Article</Text>
        </View>)
      })
      return (
        <ScrollView style={styles.container}>
          <Image 
            source={require('../../assets/CNN.png')}
          />
          {headlines}
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",

  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:10,
  },
  divider: { 
    backgroundColor: 'blue', 
    height: 10,
    width:350,
    marginTop:10,
  },
  description: {
    marginTop:5,
    marginBottom:5,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 15,
  },
  url: {
    width: 300,
  }

})

export default CNN;
