import React, { useState } from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VersusScreen = () => {
  const [questions] = useState([
    { question: 'Jak nazywa się pradziad?', answers: ['Małpa', 'Dziad', 'Bumcykcyk', 'Debian który ma małpę joł'], correctAnswer: 'Małpa' },
    { question: 'TY KURWO', answers: ['Shakira', 'YeahBunny', 'Polish Misiura', 'Alek Utas'], correctAnswer: 'YeahBunny' },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState([0, 0]); // Wyniki dla dwóch graczy

  const handleAnswer = (playerIndex, answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      const newScores = [...scores];
      newScores[playerIndex] += 1;
      setScores(newScores);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`DAWAJ SZMATO JEBANA`);
    }
  };

  return (
      <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../assets/logoNiezapomnieni.png')}
        />
        <Text style={styles.question}>Pytanie {currentQuestionIndex + 1}</Text>
        <Text style={styles.questionContent}>{questions[currentQuestionIndex].question}</Text>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
            <View key={index} style={styles.answerContainer}>
              <TouchableOpacity key={index} style={styles.button} onPress={() => handleAnswer(0, answer)}>
                <Text style={styles.buttonText}>{answer}</Text>
              </TouchableOpacity>
            </View>
        ))}
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionContent: {
    fontSize: 20,
    marginBottom: 20,
  },
  answerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: windowWidth * 0.95,
    marginBottom: windowHeight* 0.01,

  },
  score: {
    fontSize: 18,
    color: '#888',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#d322d1',
    height: windowHeight * 0.11,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    height: windowHeight* 0.3,
    resizeMode: 'contain',
    marginBottom: windowHeight* -0.015,
  },
});
export default VersusScreen;