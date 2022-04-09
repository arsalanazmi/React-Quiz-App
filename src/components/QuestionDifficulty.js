import React from 'react'
import { data } from '../data/questions'
import { StarContainer } from './StyleComponents'

const QuestionDifficulty = ({ currentQuestion }) => {
  let gameLevel = 0

  if (data[currentQuestion].difficulty === 'easy') {
    gameLevel = 1
  } else if (data[currentQuestion].difficulty === 'medium') {
    gameLevel = 2
  } else if (data[currentQuestion].difficulty === 'hard') {
    gameLevel = 3
  }

  let remainingStars = 0

  if (gameLevel === 3) {
    remainingStars = 2
  } else if (gameLevel === 2) {
    remainingStars = 3
  } else if (gameLevel === 1) {
    remainingStars = 4
  }

  return (
    <StarContainer>
      {Array(gameLevel).fill().map((_, i) => <span key={i}>⭐</span>)}
      {Array(remainingStars).fill().map((_, i) => <span key={i} style={{fontSize:"27px"}}>★</span>)}
    </StarContainer>
  )
}

export default QuestionDifficulty
