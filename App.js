import { View, Text } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screen/SplashScreen';
import SignIn from './screen/SignIn';
import SignUp from './screen/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="SplashScreen" component = {SplashScreen} 
       options={{ 
       headerShown:         
       false }}/>
       <Stack.Screen name="SignIn" component = {SignIn} 
       options={{ 
        headerShown:         
        false }}/>
       <Stack.Screen name="SignUp" component = {SignUp} 
       options={{ 
        headerShown:         
        false }}/>
      </Stack.Navigator>  
    </NavigationContainer> )}

export default App