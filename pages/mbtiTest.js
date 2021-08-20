import React, { useState, useEffect } from "react";
import TestResult from "../src/component/testResult";


const mbtiTest = () => {
  const [point, setPoint] = useState([0,0,0,0])
  const [stage, setStage] = useState(1)


  const checkAnswer = (i) => {
    let temp = [...point]
    temp[i]++
    setPoint(temp)
    setStage(prev => prev+1)
  }


  return <div>
    <head>
      <title>ICISTS mbti test</title>
    </head>

    <body>
      <h1>ICISTS mbti test</h1>

      {stage <= 10 ?
      <div>
        <div>Question {stage}</div>
        <div onClick = {e => checkAnswer(0)}>1</div>
        <div onClick = {e => checkAnswer(1)}>2</div>
        <div onClick = {e => checkAnswer(2)}>3</div>
        <div onClick = {e => checkAnswer(3)}>4</div>
      </div>
      :
      <div>
        <TestResult point = {point}/>
      </div>

      }
      
    </body>  


  </div>
}

export default mbtiTest