import { View, Text, Stack } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screen/SplashScreen';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="SplashScreen" component = {SplashScreen} />
       <Stack.Screen name="SignIn" component = {SignIn} />
       <Stack.Screen name="SignUp" component = {SignUp} />
      </Stack.Navigator>  
    </NavigationContainer> )}

export default App