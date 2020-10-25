import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const appStyles = StyleSheet.create({
  textInputStyle: {
   height: 25, 
   minWidth: 100,
   borderColor: 'black', 
   borderWidth: 1,
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: 'crimson',
  },
  buttonTextStyle: {
    minWidth: 100,
    color: 'white',
    textAlign: 'center',
  }
});
export default appStyles

