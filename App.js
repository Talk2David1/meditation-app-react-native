import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TextInput, Text, View, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

 const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
    )
})


  const handleSubmit = async (values) => {
    await AsyncStorage.setItem('@user', JSON.stringify(values));
  };

  return (    
    <SafeAreaView  style={styles.container}>
    <Formik      
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}      
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            name="name"
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            error={errors.name}
          />
          <TextInput
            name="email"
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
          />
          <TextInput
            name="password"
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
          />
          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
          <Button
            title="Get Started"
            onPress={handleSubmit}
            disabled={!values.name || !values.email || !values.password || Boolean(errors.name) || Boolean(errors.email) || Boolean(errors.password)}
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
});
