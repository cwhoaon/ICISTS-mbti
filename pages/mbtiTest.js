import React, { useState, useEffect } from "react";
import TestResult from "../src/component/testResult";
import { Questions } from "../constant/questions";

const MbtiTest = () => {
  const [stage, setStage] = useState(0)
  const [record, setRecord] = useState([0,0,0,0,0,0,0,0,0,0])


  const checkAnswer = (i) => {
    let temp = [...record]
    temp[stage]=i
    setRecord(temp)
    setStage(prev => prev+1)
  }

  const goBack = () => {
    setStage
    setStage(stage-1)
  }

  return <div>
    <head>
      <title>ICISTS mbti test</title>
    </head>

    <body>
      <h1>ICISTS mbti test</h1>

      {stage < 10 ?
      <div>
        <div>Question {stage+1}</div>
        <div onClick = {e => checkAnswer(1)}>{Questions[stage][0]}</div>
        <div onClick = {e => checkAnswer(2)}>{Questions[stage][1]}</div>
        <div onClick = {e => checkAnswer(3)}>{Questions[stage][2]}</div>
        <div onClick = {e => checkAnswer(4)}>{Questions[stage][3]}</div>
      </div>
      :
      <div>
        <TestResult record = {record}/>
      </div>

      }
      
    </body>  


  </div>
}

export default MbtiTest