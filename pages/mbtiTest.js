import React, { useState, useEffect } from "react";
import TestResult from "../src/component/testResult";
import ProgressBar from "../src/component/progessBar";
import { Questions, Weights } from "../constant/questions";
import styles from '../styles/mbti.module.css'

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

    <body className={styles.main}>
      <h1>ICISTS mbti test</h1>

      {stage < 12 ?
      <div>
        <ProgressBar stage={stage}></ProgressBar>
        <div className={styles.tlqkf}>Question {stage+1}</div>
        <button className={styles.button2} onClick = {e => checkAnswer(Weights[stage][0])}>{Questions[stage][0]}</button>
        <button className={styles.button2} onClick = {e => checkAnswer(Weights[stage][1])}>{Questions[stage][1]}</button>
        {stage != 0 ?
         <div onClick = {goBack}>이전으로</div>:<div></div>
        }
       
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