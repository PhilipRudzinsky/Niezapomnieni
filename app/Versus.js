import React, { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, Image, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VersusScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch('https://jakubsolarek.pl/konkurs/basic/web/getquestions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(data => setQuestions(data.questions));
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setFinished(false);
  };

  return (
      <View style={styles.container}>
        <MaterialCommunityIcons name="book-open-page-variant" color="white" size={260} />
        <LinearGradient
            colors={['#F5F5DC', '#DEB887', '#D2B48C', '#D3D3D3']}
            style={styles.gradient}
        />
        {!finished ? (
            <>
              <Text style={styles.welcome}>Pytanie {currentQuestionIndex + 1}</Text>
              <Text style={styles.description}>{questions[currentQuestionIndex]?.question}</Text>
              <View style={styles.answerContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleAnswer(1)}>
                  <Text style={styles.buttonText}>Prawda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleAnswer(0)}>
                  <Text style={styles.buttonText}>Fałsz</Text>
                </TouchableOpacity>
              </View>
            </>
        ) : (
            <>
              <Text style={styles.welcome}>Koniec gry!</Text>
              <Text style={styles.description}>Twój wynik to: {score} / {questions.length}</Text>
              <TouchableOpacity style={styles.button} onPress={resetGame}>
                <Text style={styles.buttonText}>Zagraj jeszcze raz</Text>
              </TouchableOpacity>
            </>
        )}
        <StatusBar style="auto" />
      </View>
  );
};

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
    zIndex: -1,
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
  answerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: windowWidth * 0.95,
    marginBottom: windowHeight* 0.01,
  },
  button: {
    backgroundColor: '#DEB887',
    height: windowHeight * 0.11,
    marginBottom: windowHeight* 0.01,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VersusScreen;