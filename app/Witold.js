import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';

const Witold = () => {
  const biography = `Witold Zglenicki (ur. 1850, zm. 1904) – polski geolog, wynalazca, pionier przemysłu naftowego.`;

  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/Witold_Zglenicki.jpg')}
      />
      <Text style={styles.title}>Witold Zglenicki</Text>
      <Text style={styles.biography}>{biography}</Text>
      <StatusBar style="auto" />
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

export default Witold;