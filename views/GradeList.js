import React, { Component } from 'react';
import { StyleSheet, StatusBar, FlatList, Text, View, ActivityIndicator } from 'react-native';

import renderGradeListItem from '../components/GradeListItem';

export default class GradeList extends Component {
  constructor(){
    super();
    this.state={
      isLoading: true,
      data:[
        {
          name: 'Name',
        },
        {
          name: 'Name2',
        }
      ]
    }
  }

  componentDidMount(){
    if (this.state.data == null){
      fetch('')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson
        });
      });
    } else {
        this.setState({
          isLoading: false
        });
    }
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator animating size="large" color="crimson" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={renderGradeListItem}
            keyExtractor={item => item.id}
          /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'stretch' 
  }
});
