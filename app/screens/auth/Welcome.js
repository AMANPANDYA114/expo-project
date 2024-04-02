
import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Slider } from 'react-native';
import Swiper from 'react-native-swiper';

const Welcome = ({ navigation }) => {
  const handleNextPress = () => {
    navigation.navigate('Login');
  };

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      <View style={styles.slide}>
        <ImageBackground
          source={{ uri: 'https://i.postimg.cc/90F59ybS/welcome1.png' }}
          style={styles.image}
        >
      
        </ImageBackground>

        <Text style={styles.randomText}>Find and book an event !</Text>
      </View>
      <View style={styles.slide}>
        <ImageBackground
          source={{ uri: 'https://i.postimg.cc/v89ZLckD/Whats-App-Image-2024-03-28-at-1-58-29-PM.jpg' }}
          style={styles.image}
        >
          {/* Your image content here */}
        </ImageBackground>

        <Text style={styles.randomText}>Welcome to the next slide!</Text>
        <TouchableOpacity
          onPress={handleNextPress}
          style={styles.buttons}
        >
           <Text style={styles.button}>Let's Go</Text>

        
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '54%',
    resizeMode: 'cover',
  },
  randomText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    bottom:160,
  },
  button:{
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    bottom: 6,

  },
  buttons :{
    bottom:129,
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 100,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'black',
  }
});

export default Welcome;

