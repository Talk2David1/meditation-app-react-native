import React from 'react';
import { ImageBackground,View, Image, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';


const { width } = Dimensions.get('window');


const HeadBg = () => {
  return (
    <SafeAreaView>
    <ImageBackground
    source={require('../assets/img/headBg.png')}
    style={styles.imageBg}
    resizeMode="cover"
    >
    <Text>Hello, world!</Text>  
    </ImageBackground>
    <View>
    <Image
      source={require('../assets/img/facebook.png')}
      style={styles.facebook }
    />
  </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
imageBg: {
    flex: 0.3,
    width: width, 
    height: 200,
    justifyContent: 'center',
    alignItems : 'center',
  },
  facebook: {
    width: 350, 
    height: 100,
    alignItems: 'center',
    
  },
  text: {
    width: 350, 
    height: 100,
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 900,
  },
});
export default HeadBg;
