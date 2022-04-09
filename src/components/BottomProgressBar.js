import React, { useState, useEffect } from 'react'
import {
  BottomBar,
  PercentageText,
  CorrectAnswerPercentage,
  MaxScore,
  Progress
} from './StyleComponents'

const BottomProgressBar = ({
  correctAnswerPercentage,
  wrongAnswerPercentage,
  maxScore
}) => {
  const [max, setMax] = useState(0)
  const [correctPercentage, setCorrectPercentage] = useState(0)

  const maximum = maxScore - correctAnswerPercentage
  const percentage = correctAnswerPercentage - wrongAnswerPercentage

  useEffect(() => {
    setMax(maximum)
    setCorrectPercentage(percentage)
  }, [maximum, percentage])

  return (
    <BottomBar>
      <PercentageText>
        <CorrectAnswerPercentage>
          <p>Score {parseInt(correctAnswerPercentage)}%</p>
        </CorrectAnswerPercentage>
        <MaxScore>
          <p>Max Score {parseInt(maxScore)}%</p>
        </MaxScore>
      </PercentageText>
      <Progress>

        <div className='progress'>
          <div
            className='progress-bar'
            style={{
              width: `${wrongAnswerPercentage}%`,
              backgroundColor: 'black'
            }}
            role='progressbar'
            aria-valuenow={wrongAnswerPercentage}
            aria-valuemin='0'
            aria-valuemax='100'
          />
          <div
            className='progress-bar'
            style={{
              width: `${correctPercentage}%`,
              backgroundColor: 'gray'
            }}
            role='progressbar'
            aria-valuenow={correctPercentage}
            aria-valuemin='0'
            aria-valuemax='100'
          />
          <div
            className='progress-bar'
            style={{
              width: `${max}%`,
              backgroundColor: '#cecece'
            }}
            role='progressbar'
            aria-valuenow={max}
            aria-valuemin='0'
            aria-valuemax='100'
          />
        </div>
      </Progress>

    </BottomBar>
  )
}

export default BottomProgressBar
