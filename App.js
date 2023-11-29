import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image, TextInput, Text, View, SafeAreaView, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import HeadBg from './component/HeadBg';


export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

 const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(5, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Please Input Your Full Name'),
  email: Yup.string()
  .email('Email is not valid')
  .required('Email is required'),
  password: Yup.string()
    .required('Please Enter Your Password ')
    .min(6)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})$/,
      'Password must be at least 6 characters long, must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    ),
});


  const handleSubmit = async (values) => {
    await AsyncStorage.setItem('@user', JSON.stringify(values));
  };

  return (    
    <SafeAreaView  style={styles.container}>

    <Text  style={styles.text}>Create Your Account!</Text>  

    <View>
    <Image
      source={require('./assets/img/facebook.png')}
      style={styles.facebook }
    />
  </View>

    <View>
    <Image
      source={require('./assets/img/google.png')}
      style={styles.facebook }
    />
  </View>

  <Text  style={styles.email}>OR LOG IN WITH EMAIL</Text>  


    <Formik      
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}      
      validateOnChange={true}
      onSubmit={handleSubmit}
    >
      {({ handleChange, isValid, handleSubmit, values, errors, setFieldTouched, touched }) => (
        <View>
        <View>
          <TextInput
            name="name"
            placeholder="Name"
            onChangeText={handleChange('name')}                      
            onBlur={() => setFieldTouched('name')}
            value={values.name}
            error={errors.name}
            style={styles.input}
          />
         {/* Displaying error message */}
         {touched.name && errors.name ? (
          <Text style={styles.errorTxt}>{errors.name}</Text>
        ) : (
          <Ionicons
            name="checkmark"
            size={24}
            color={touched.name && !errors.name ? "green" : "transparent"}
          />
        )}
        </View>

        <View>
          <TextInput
            name="email"
            placeholder="Email"
            onChangeText={handleChange('email')}      
            onBlur={() => setFieldTouched('email')}
            autoCapitalize='none' 
            value={values.email}
            error={errors.email}
            style={styles.input}
          />
           {/* Displaying error message */}
           {touched.email && errors.email ? (
            <Text style={styles.errorTxt}>{errors.email}</Text>
          ) : (
            <Ionicons
              name="checkmark"
              size={24}
              color={
                touched.email && !errors.email ? "green" : "transparent"
              }
            />
          )}
        </View>

        <View>
          <TextInput
            name="password"
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            onChangeText={handleChange('password')}
            autoCapitalize='none'
            onBlur={() => setFieldTouched('password')}
            value={values.password}
            error={errors.password}
            style={styles.input}
          />
          {/* Displaying error message */}
          {touched.password && errors.password && (
            <Text style={styles.errorTxt}>{errors.password}</Text>
          )}      

          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
          </View>
          <Button
            title="Get Started"
            onPress={handleSubmit}
            disabled={isValid}
            style={[styles.Button, {backgroundColor: isValid ? '#8E97FD' : '#A5C9CA'}]}
          />
        </View>
      )}
    </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {    
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F8F8FF',
    borderColor: '#F8F8FF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 100,
    textAlign: 'left',
    alignItems: 'left',
  },
  errorTxt: {
    color: 'red',
  },
  text: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  email: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray'
  },
  
});