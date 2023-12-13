import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = () => {
  const [questions] = useState([
    { question: 'Pytanie 1', answers: ['Odpowiedź 1', 'Odpowiedź 2', 'Odpowiedź 3', 'Odpowiedź 4'], correctAnswer: 'Odpowiedź 1' },
    // Dodaj więcej pytań według potrzeb
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Quiz zakończony! Twój wynik to: ${score} / ${questions.length}`);
    }
  };

  return (
    <View>
      <Text>{questions[currentQuestionIndex].question}</Text>
      {questions[currentQuestionIndex].answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => handleAnswer(answer)} />
      ))}
      <Text>Wynik: {score}</Text>
    </View>
  );
};

export default QuizScreen;