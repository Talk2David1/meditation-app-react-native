import { StyleSheet, TouchableWithoutFeedback, Keyboard, StatusBar,TextInput, Dimensions, Image, Text, View, SafeAreaView, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';



const screenWidth = Dimensions.get('window').width;

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [checked, setChecked] = useState(true);
  
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
        'Password must be at least 6 characters long, must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
      ),
  });
  
  const handleSubmit = async (values) => {
    await AsyncStorage.setItem('@user', JSON.stringify(values));
  };

  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <SafeAreaView style={styles.container}> 
    <Text style={styles.text}>Welcome Back!</Text>     
    <View>
    <Image
      source={require('../assets/img/facebook.png')}
      style={styles.social }
    />
  </View>
    <View>
    <Image
      source={require('../assets/img/google.png')}
      style={styles.social }
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

        <View  style={styles.formContainer}>

       
        <View>
          <TextInput
            name="email"
            placeholder="Email address"
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
            style={styles.eyeIcon}
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

          <TouchableOpacity>
          <Ionicons
            style={styles.eyeIcon}
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
          </TouchableOpacity>
          </View>
  

          </View>

          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isValid}
            style={[styles.button, { backgroundColor: isValid ? '#8E97FD' : '#F2F3F7' }]}
          >
          <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          <View style={styles.forgot}>
          <Text>Forgot Password?</Text>
          </View>

          <View style={styles.signUpQuestion}>
          <Text style={styles.miniBodyText}>ALREADY HAVE AN ACCOUNT?</Text>
          <Text style={styles.signUp}> SIGN UP</Text>
          </View>
        </View>
      )}
    </Formik>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container: {    
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: '#F8F8FF',
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  errorTxt: {
    color: 'red',
  },
  text: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
    color: '#3F414E',
  },
  email: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
    marginBottom: 15,
  },  
  social: {
    alignItems: 'center',
    marginBottom: 20, 
    width: screenWidth * 0.9,
    borderRadius: 38,   
  },
  button: {
    width: screenWidth * 0.9,
    padding: 17,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  formContainer: {  
  width: screenWidth * 0.9,
  marginBottom: 10,
  textAlign: "left"
},
check: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
eyeIcon: {
  position: 'absolute',
  left: '90%',
  bottom: 32,
  height: 20,
  width: 30,
},
forgot: {
  flexDirection: 'row',
  justifyContent: 'center',
   marginTop: 20,
},

signUpQuestion: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 50,    
  
},
miniBodyText: {  
  fontWeight: 'normal',
  fontSize: 15,
  textAlign: 'center',
  color: '#A1A4B2',
},
signUp: {
  color: '#8E97FD'
},
})

export default SignIn