import React, { useState } from 'react'
import { Questions } from './Questions'
import { Card } from './StyleComponents'

const QuestionCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [disable, setDisable] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showAnswerResult, setShowAnswerResult] = useState('')
  const [score, setScore] = useState(0)
  const [correctAnswerPercentage, setCorrectAnswerPercentage] = useState(0)
  const [wrongAnswerPercentage, setWrongAnswerPercentage] = useState(0)
  const [maxScore, setMaxScore] = useState(100)
  const [userAnswer, setUserAnswer] = useState(0)

  return (
    <Card>
      <Questions
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
    </Card>
  )
}

export default QuestionCard
