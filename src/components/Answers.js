import React, { useState, useEffect } from 'react'
import { data } from '../data/questions.js'
import Swal from 'sweetalert2'
import BottomProgressBar from './BottomProgressBar.js'
import {
  ButtonDiv,
  StyledButton,
  AnswerDiv,
  Answer,
  NextQuestion
} from './StyleComponents'

const Answers = ({
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
  correctAnswerPercentage,
  setCorrectAnswerPercentage,
  wrongAnswerPercentage,
  setWrongAnswerPercentage,
  maxScore,
  setMaxScore,
  userAnswer,
  setUserAnswer
}) => {
  const [options, setOptions] = useState('')
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  useEffect(() => {
    const answerOptions = data[currentQuestion].incorrect_answers.concat(
      data[currentQuestion].correct_answer
    )
    const shuffle = (array) => {
      return array.sort(() => Math.random() - 0.5)
    }

    const shuffleAnswer = shuffle(answerOptions)

    setOptions(shuffleAnswer)
  }, [currentQuestion])

  const totalQuestions = data.length

  const handleAnswerCheck = (e) => {
    setDisable(true)
    setUserAnswer(userAnswer + 1)
    setAnswerSelected(true)
    setSelectedAnswer(e.target.innerText)

    if (
      e.target.innerText ===
      decodeURIComponent(data[currentQuestion].correct_answer)
    ) {
      setScore(score + 1)
      setShowAnswerResult('Correct')

      const min = ((score + 1) / totalQuestions) * 100
      const correctPercentage = ((score + 1) / (userAnswer + 1)) * 100
      const max =
        ((score + 1 + (totalQuestions - (userAnswer + 1))) / totalQuestions) *
        100

      setCorrectAnswerPercentage(correctPercentage)
      setWrongAnswerPercentage(min)
      setMaxScore(max)
    } else {
      setShowAnswerResult('Wrong')

      const min = (score / totalQuestions) * 100
      const correctPercentage = (score / (userAnswer + 1)) * 100
      const max =
        ((score + (totalQuestions - (userAnswer + 1))) / totalQuestions) * 100

      setCorrectAnswerPercentage(correctPercentage)
      setWrongAnswerPercentage(min)
      setMaxScore(max)
    }
    setShowAnswer(true)
  }

  const handleNextButtonClick = () => {
    setDisable(false)
    setShowAnswer(false)

    setSelectedAnswer(null)
    setAnswerSelected(false)

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Qiuz Completed',
        text: correctAnswerPercentage >= 50 ? 'You Won' : 'You Lost',
        showConfirmButton: false,
        timer: 3000
      })
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    }
  }

  const addClass = option => {
    if (!answerSelected) {
      return ''
    }
    if (option === data[currentQuestion].correct_answer) {
      return 'correct'
    }
    if (option === selectedAnswer) {
      return 'selected'
    }
  }

  return (
    <div>
      <ButtonDiv>
        {options &&
          options.map((option, i) => (
            <StyledButton
              key={i}
              disabled={disable}
              onClick={handleAnswerCheck}
              className={addClass(option)}
            >
              {decodeURIComponent(option)}
            </StyledButton>
          ))}
      </ButtonDiv>

      <AnswerDiv>
        {showAnswer ? <Answer>{showAnswerResult} !</Answer> : ''}
      </AnswerDiv>

      <NextQuestion disabled={!disable} onClick={handleNextButtonClick}>
        {currentQuestion + 1 >= totalQuestions
          ? 'Finish Quiz'
          : 'Next Question'}
      </NextQuestion>

      <BottomProgressBar
        wrongAnswerPercentage={wrongAnswerPercentage}
        correctAnswerPercentage={correctAnswerPercentage}
        maxScore={maxScore}
      />
    </div>
  )
}

export default Answers
