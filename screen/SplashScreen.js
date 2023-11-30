import { StyleSheet,StatusBar,Pressable, Dimensions, Image, Text, View, SafeAreaView, TouchableOpacity, } from 'react-native';
import React from 'react';


const screenWidth = Dimensions.get('window').width;


const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>    
     <View style={styles.person}>
      <View style={styles.heading}>
       <Text style={styles.headText}>Silent </Text>
       <Image
       source={require('../assets/img/diamond.png')}
       style={styles.logo}/>
       <Text style={styles.headText}> Moon</Text>
     </View>   
    <Image
      source={require('../assets/img/person.png')}
      />
    </View>
    
    <View style={styles.middleText}>
    <Text style={styles.bodyText}>We are what we do</Text>
    <Text style={styles.miniBodyText}>Thousand of people are usign silent moon  
    for smalls meditation </Text>
    </View>

    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate("SignUp")}>            
    <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>
    </View>
  
    <View style={styles.signUpQuestion}>
    <Text style={styles.miniBodyText}>ALREADY HAVE AN ACCOUNT?</Text>
    <Text style={styles.signUp}
    onPress={() => navigation.navigate("SignIn")}> LOG IN</Text>
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
  headText: {    
    fontWeight: 'bold',
  },
  heading: {    
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  person: {  
    flexDirection:'column',
    marginTop: 60,
  },
  bodyText: {  
    fontWeight: 'bold',
    fontSize:25,
    textAlign: 'center',
    margin: 20,
  },
  miniBodyText: {  
    fontWeight: 'normal',
    fontSize: 15,
    textAlign: 'center',
    color: '#A1A4B2',
  },
  middleText: {  
   margin: 25,
   justifyContent: 'center',
   marginTop: 20,
 
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: screenWidth * 0.9,
    padding: 17,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8E97FD',
    marginTop: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  signUp: {
    color: '#8E97FD'
  },
  signUpQuestion: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,    
  },
});

export default SplashScreen