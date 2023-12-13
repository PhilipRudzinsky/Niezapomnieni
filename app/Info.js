import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  biography: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
  },
});

const Biography = ({ character }) => (
  <View style={styles.biography}>
    <Text style={styles.name}>{character.name}</Text>
    <Text style={styles.bio}>{character.bio}</Text>
  </View>
);

const HistoryScreen = () => {
  const [characters] = useState([
    { name: 'Postać 1', bio: 'Biografia 1' },
    { name: 'Postać 2', bio: 'Biografia 2' },
    { name: 'Postać 3', bio: 'Biografia 3' },
    { name: 'Postać 4', bio: 'Biografia 4' },
    // Dodaj więcej postaci według potrzeb
  ]);

  return (
    <View style={styles.container}>
      {characters.map((character, index) => (
        <Biography key={index} character={character} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
};

export default HistoryScreen;