import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, StatusBar, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const JanSz = () => {
    const biography = `Jan Szczepanik (ur. 13 czerwca 1872 w Rudnikach, zm. 18 maja 1926 w Tarnowie) – polski wynalazca, konstruktor, chemik, fotograf, pionier telewizji i kinematografii. Szczepanik jest znany przede wszystkim z wynalezienia telewizora mechanicznego, który stał się prototypem dla późniejszych telewizorów. Jego wkład w rozwój technologii telewizyjnej i kinematografii jest nieoceniony.`;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <LinearGradient   colors={['#F5F5DC', '#DEB887', '#D2B48C', '#D3D3D3']} style={styles.container}>
      <Animated.Image
          style={{
            ...styles.logo,
            opacity: fadeAnim,
          }}
          source={require('../assets/janszczepaniak.jpg')}
      />
      <Text style={styles.title}>Jan Szczepanik</Text>
      <Text style={styles.biography}>
        {biography}
      </Text>
      <MaterialIcons name="favorite" size={24} color="red" />
      <StatusBar style="auto" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
      marginTop: 20,
    fontFamily: 'serif',
  },
  biography: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'sans-serif',
    lineHeight: 24,
    padding: 10,
  },
  logo: {
    height: windowHeight* 0.3,
    resizeMode: 'contain',
    marginBottom: windowHeight* -0.015,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default JanSz;