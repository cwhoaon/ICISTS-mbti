import React, { useState, useEffect } from "react";
import TestResult from "../src/component/testResult";
import { Questions, Weights } from "../constant/questions";

const MbtiTest = () => {
  const [stage, setStage] = useState(0)
  const [record, setRecord] = useState([0,0,0,0,0,0,0,0,0,0,0,0])


  const checkAnswer = (i) => {
    let temp = [...record]
    temp[stage]=i
    setRecord(temp)
    setStage(prev => prev+1)
  }

  const goBack = () => {
    setStage(prev => prev-1)
  }

  return <div>
    <head>
      <title>ICISTS mbti test</title>
    </head>

    <body>
      <h1>ICISTS mbti test</h1>

      {stage < 12 ?
      <div>
        <div>Question {stage+1}</div>
        <div onClick = {e => checkAnswer(Weights[stage][0])}>{Questions[stage][0]}</div>
        <div onClick = {e => checkAnswer(Weights[stage][1])}>{Questions[stage][1]}</div>
        <div onClick = {goBack}>Go Back</div>
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