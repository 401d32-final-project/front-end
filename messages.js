import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, StatusBar, View, Text, Button, FlatList } from 'react-native';

import { actions } from './store-messages';

const Messages = (props) => {
  useEffect(() => {
    props.subscribeToMessages();
    props.fetchMessages();
  }, []);
  console.log(props);
  return(
    <View style={styles.container}>
      <Text>{Messages}</Text>
      <FlatList 
        data={props.message}
        keyExtractor={item => item._id}
        renderprops={({ item }) => {
          return <Text>{item.message} {item.createdAt}</Text>
        }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
});

const mapStateToProps = (state) => ({
  messages: state.message,
  socket: state.socket,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(actions.fetchMessages()),
  subscribeToMessages: () => dispatch(actions.subscribeToMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);