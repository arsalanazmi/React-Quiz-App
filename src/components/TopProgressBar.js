import React from 'react'
import { ProgressBar } from './StyleComponents'

const TopProgressBar = ({ userAnswer, totalQuestions }) => {
  const QuestionAttemptedPercentage = (userAnswer / totalQuestions) * 100

  return (
    <ProgressBar>
      <div className='progress'>
        <div
          className='progress-bar'
          style={{
            width: `${QuestionAttemptedPercentage}%`,
            backgroundColor: 'gray'
          }}
          role='progressbar'
        />
      </div>
    </ProgressBar>
  )
}

export default TopProgressBar
