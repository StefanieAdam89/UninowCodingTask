import * as React from 'react';
import { StyleSheet, StatusBar, Text, View, FlatList, TextInput, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

import appStyles from '../styles/appStyles';

export default function LoginScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
          <View>
            <Text>Username:</Text>
            <TextInput
              style={appStyles.textInputStyle}
              onChangeText={(value) => setName(value)}
            />
            <Text>Password:</Text>
            <TextInput
              style={appStyles.textInputStyle}
              onChangeText={(value) => setPassword(value)}
            />
            <TouchableHighlight 
              style={appStyles.buttonStyle}
              onPress={() => navigation.navigate('Grades')}>
              <Text style={appStyles.buttonTextStyle}> Login </Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  }
});