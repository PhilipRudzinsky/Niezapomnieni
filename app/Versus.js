import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const VersusScreen = () => {
  const [questions] = useState([
    { question: 'Pytanie 1', answers: ['Odpowiedź 1', 'Odpowiedź 2', 'Odpowiedź 3', 'Odpowiedź 4'], correctAnswer: 'Odpowiedź 1' },
    // Dodaj więcej pytań według potrzeb
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
      alert(`Gra zakończona! Wyniki: Gracz 1: ${scores[0]}, Gracz 2: ${scores[1]}`);
    }
  };

  return (
    <View>
      <Text>{questions[currentQuestionIndex].question}</Text>
      {questions[currentQuestionIndex].answers.map((answer, index) => (
        <View key={index}>
          <Button title={`Gracz 1: ${answer}`} onPress={() => handleAnswer(0, answer)} />
          <Button title={`Gracz 2: ${answer}`} onPress={() => handleAnswer(1, answer)} />
        </View>
      ))}
      <Text>Wyniki: Gracz 1: {scores[0]}, Gracz 2: {scores[1]}</Text>
    </View>
  );
};

export default VersusScreen;