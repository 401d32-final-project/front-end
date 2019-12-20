import React from 'react';
import { connect } from 'react-redux';
import {ScrollView,View,  Text, StyleSheet, Button, Image, TouchableHighlight, ActivityIndicator, Linking, ImageBackground} from 'react-native';
import Expo from 'expo'
import { Divider } from 'react-native-elements';
import Head from '../../components/header';
import superagent from 'superagent';

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
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/background2.png')}
            style={{width: '100%', height: '100%'}}
          >
            <ActivityIndicator
              style={styles.loading}
              size={"large"}
            />
          </ImageBackground>
        </View>
      )
    } else {
      let headlines = this.state.dataSource.map((value, i) => {
        return (<View key={i}>
          <Text style={styles.title}>{value.title}</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.description}>{value.description}</Text>
          <Text 
            style={styles.url}
          onPress={() =>{
            Linking.openURL(`${value.url}`)
          }
        }>Link to the Article</Text>

        {/* <TouchableOpacity>
          <Image
            source={require('../../assets/saved')}
          />
        </TouchableOpacity> */}

        <TouchableHighlight key={i} onPress={() => {
          const body = {
            userId: this.props.user.id,
            headline: value.title,
            description: value.description,
            url: value.url,
            source: value.source.name,
          };

          superagent.post('http://172.16.0.214:3000/save-article')
            .send(body)
            .then((response) => {
              if (response.status === 201) {
                alert('Article Saved!')
              } else {
                alert('DENIED!')
              }
            });
          }
          // json.stringify(this.state.dataSource[i])
        }>
          <Text>Save Article</Text>
        </TouchableHighlight>

        </View>)
      })
      return (
        <ImageBackground
          source={require('../../assets/background2.png')}
          style={{width: '100%', height: '100%'}}>
          <ScrollView style={styles.container}>
            <Head />
            <Image 
              style={{marginTop: 20, marginLeft:"auto", marginRight:"auto",}}
              source={require('../../assets/CNN.png')}
            />
            {headlines}
          </ScrollView>
        </ImageBackground>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "column",
    marginTop:10,

  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:10,
  },
  divider: { 
    backgroundColor: 'black', 
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
    marginRight:"auto",
    marginTop:0,
    marginBottom:20,
    fontSize: 20,
    backgroundColor: "#FFDAB9",
    borderRadius: 50,
    padding: 5,
  },
  loading: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "black",
  }
})

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(CNN);