import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const JanSz = () => {
  const biography = `Jan Szczepanik (ur. 13 czerwca 1872 w Rudnikach, zm. 18 maja 1926 w Tarnowie) – polski wynalazca, konstruktor, chemik, fotograf, pionier telewizji i kinematografii.`;

  return (

      <View style={styles.container}>

        <Image
            style={styles.logo}
            source={require('../assets/janszczepaniak.jpg')}
        />

        <Text style={styles.title}>Jan Szczepanik</Text>

        <Text style={styles.biography}>
          {biography}
          <Text style={{ fontSize: 16, color: '#ccc', fontStyle: 'italic' }}>
            (1872-1926)
          </Text>
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 20,
  },
  biography: {
    fontSize: 18,
    color: '#212121',
    fontFamily: 'sans-serif',
    lineHeight: 24,
  },
  logo: {
    height: windowHeight* 0.3,
    resizeMode: 'contain',
    marginBottom: windowHeight* -0.015,
  },
});

export default JanSz;
