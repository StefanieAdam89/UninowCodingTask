import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GradeListItem ({ item }){
  return(
  <View style={styles.container}>
    <Text style={styles.itemName}>{item.name}</Text>
  </View>
  )
}

export const renderGradeListItem = ({ item }) => (
    <GradeListItem item={item} />
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
  },
  itemName:{
    flex: 1,
    backgroundColor: 'white',
  }
})
