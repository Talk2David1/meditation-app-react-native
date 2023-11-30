import { StyleSheet,StatusBar,Pressable, Dimensions, Image, Text, View, SafeAreaView, TouchableOpacity, } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;


const App = () => {
  return (
    <SafeAreaView style={styles.container}> 
    <View>
      <Text>Appgjfjgv</Text>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {    
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: '#fff',
  },

})

export default App