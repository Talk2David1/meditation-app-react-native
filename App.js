import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TextInput, Text, View, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

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
          />
         {/* Displaying error message */}
          {touched.name && errors.name && (
            <Text style={styles.errorTxt}>{errors.name}</Text>
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
          />
           {/* Displaying error message */}
           {touched.email && errors.email && (
            <Text style={styles.errorTxt}>{errors.email}</Text>
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
          />
          {/* Displaying error message */}
          {touched.password && errors.password && (
            <Text style={styles.errorTxt}>{errors.password}</Text>
          )}
        </View>

          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
          <Button
            title="Get Started"
            onPress={handleSubmit}
            // disabled={!values.name || !values.email || !values.password || Boolean(errors.name) || Boolean(errors.email) || Boolean(errors.password)}
            disabled={isValid}
            style={[styles.Button, {backgroundColor: isValid ? '#395B64' : '#A5C9CA'}]}
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
  errorTxt: {
    color: 'red',
  },
});
