import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, Modal, TextInput, Text } from 'react-native';

const StartGameScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [gameCode, setGameCode] = useState('');
  const [nickname, setNickname] = useState('');

  const joinGame = () => {
    // Logika dołączania do gry
    console.log(gameCode, nickname);
    setModalVisible(false);
  };

  const createGame = () => {
    // Logika tworzenia gry
    console.log(nickname);
    setModalCreateVisible(false);
    navigation.reset("Versus")
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/NIEZAPOMNIENI2.png')} style={styles.logo} />
      <View style={styles.buttonsContainer}>
        <Button title="Dołącz do gry" onPress={() => setModalVisible(true)} />
        <Button title="Stwórz grę" onPress={() => setModalCreateVisible(true)} />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Wprowadź 6-cyfrowy kod gry:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setGameCode}
            value={gameCode}
            maxLength={6}
            keyboardType="numeric"
          />
          <Text>Wprowadź swój pseudonim:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNickname}
            value={nickname}
          />
          <Button title="Dołącz" onPress={joinGame} />
          <Button title="Anuluj" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Modal visible={modalCreateVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Wprowadź swój pseudonim:</Text>
          <TextInput
              style={styles.input}
              onChangeText={setNickname}
              value={nickname}
          />
          <Button title="Stwórz" onPress={createGame} />
          <Button title="Anuluj" onPress={() => setModalCreateVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default StartGameScreen;