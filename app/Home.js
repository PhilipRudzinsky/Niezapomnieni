import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: windowHeight,
    zIndex: -1, // Zmieniamy zIndex gradientu na -1
  },
  logo: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'contain',
    zIndex: 1,
    top: windowHeight*-0.025,
    backgroundColor: 'transparent', // Dodajemy tę linię
  },
  welcome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    top: windowHeight*-0.01,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: '#fff',
    textAlign: 'center',
    top: windowHeight*-0.001,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    padding: 20,
  },
});

const HomeScreen = () => {
  return (
      <View style={styles.container}>
        <MaterialCommunityIcons name="book-open-page-variant" color="white" size={260} />
        <LinearGradient
            colors={['#F5F5DC', '#DEB887', '#D2B48C', '#D3D3D3']}
            style={styles.gradient}
        />
        <Text style={styles.welcome}>Witaj w naszej aplikacji historycznej!</Text>
        <Text style={styles.description}>
          Ta aplikacja została stworzona, aby pomóc Ci zgłębić fascynujący świat historii.
          Odkrywaj, ucz się i baw się, podążając śladami przeszłości. Skupiamy się na czterech wybitnych postaciach: Janie Czochralskim, Janie Szczepaniaku, Witoldzie Zglenickim oraz Stefanie Drzewieckim. Każda z tych postaci miała znaczący wpływ na rozwój techniki i nauki, a ich osiągnięcia są do dziś cenione na całym świecie.
        </Text>
        <StatusBar style="auto" />
      </View>
  );
};

export default HomeScreen;