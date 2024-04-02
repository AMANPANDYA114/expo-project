import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';

const Welcome2 = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 6000);

    // Clear the timeout when the component unmounts or when the navigation occurs
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={{ uri: 'https://i.postimg.cc/hGzwrP5M/wp2887762.jpg' }}
          style={styles.image}
        >
          {/* Your image content here */}
        </ImageBackground>

        {/* Random text */}
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set white background color for the entire component
    alignItems: 'center', // Center the contents horizontally
    justifyContent: 'center', // Center the contents vertically
  },
  contentContainer: {
    width: '100%', // Take the full width
    height: '100%', // Take the full height
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  randomText: {
    color:'black',
    fontSize: 20, // Adjust the font size as needed
    fontWeight: 'bold', // Set text bold if needed
    marginBottom: 20, // Add some bottom margin to separate from the button
  },
});

export default Welcome2;
