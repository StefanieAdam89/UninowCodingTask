import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './views/LoginScreen';
import GradeScreen from './views/GradeScreen';
import isLoggedIn from './utils/functions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? ("Grades") : ("Login")}
                         >
            <Stack.Screen name="Login" 
                          component={LoginScreen}         
                          options={{
                            headerStyle: {
                              backgroundColor: 'crimson',
                            }
                          }}/>
            <Stack.Screen name="Grades" 
                          component={GradeScreen}        
                          options={{
                            headerStyle: {
                              backgroundColor: 'crimson',
                            }
                          }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}