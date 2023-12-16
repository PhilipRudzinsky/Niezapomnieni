import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Stefan = () => {
  const biography = `Stefan Drzewiecki (ur. 26 lipca 1844 w Kunkach, zm. 23 kwietnia 1938 w Paryżu) – polski wynalazca, konstruktor, pionier techniki lotniczej i podwodnej.`;

  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/Stefan_Drzewiecki.jpg')}
      />
      <Text style={styles.title}>Stefan Drzewiecki</Text>
      <Text style={styles.biography}>{biography}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  biography: {
    fontSize: 16,
  },
});

export default Stefan;