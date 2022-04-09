import React from 'react'
import { data } from '../data/questions.js'
import Answers from './Answers'
import QuestionDifficulty from './QuestionDifficulty.js'
import TopProgressBar from './TopProgressBar.js'
import {
  Container,
  QuestionNumber,
  Content,
  QuestionText,
  QuestionCategory
} from './StyleComponents'

export const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  disable,
  setDisable,
  showAnswer,
  setShowAnswer,
  showAnswerResult,
  setShowAnswerResult,
  score,
  setScore,
  wrongAnswerPercentage,
  setWrongAnswerPercentage,
  correctAnswerPercentage,
  setCorrectAnswerPercentage,
  maxScore,
  setMaxScore,
  userAnswer,
  setUserAnswer
}) => {
  return (
    <Container>
      <TopProgressBar
        userAnswer={userAnswer}
        totalQuestions={data.length}
      />

      <QuestionNumber>
        Questions {currentQuestion + 1} of {data.length}
        <br />
      </QuestionNumber>

      <QuestionCategory>
        Category: {decodeURIComponent(data[currentQuestion].category)}
      </QuestionCategory>

      <QuestionDifficulty currentQuestion={currentQuestion} />

      <Content>
        <QuestionText>
          {decodeURIComponent(data[currentQuestion].question)}
        </QuestionText>

        <Answers
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          disable={disable}
          setDisable={setDisable}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
          showAnswerResult={showAnswerResult}
          setShowAnswerResult={setShowAnswerResult}
          score={score}
          setScore={setScore}
          correctAnswerPercentage={correctAnswerPercentage}
          setCorrectAnswerPercentage={setCorrectAnswerPercentage}
          wrongAnswerPercentage={wrongAnswerPercentage}
          setWrongAnswerPercentage={setWrongAnswerPercentage}
          maxScore={maxScore}
          setMaxScore={setMaxScore}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
        />
      </Content>
    </Container>
  )
}
