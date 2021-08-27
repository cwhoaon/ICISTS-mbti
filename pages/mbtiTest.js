import React, { useState, useEffect } from "react";
import TestResult from "../src/component/TestResult";
import ProgressBar from "../src/component/ProgessBar";
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

  return (
    <div>
    <head>
      <title>ICISTS mbti test</title>
    </head>

    
      {stage < 12 ?
      <div className={styles.container1}>
        <main className={styles.main2}>
          <div>
            <img className={styles.feather} src="/feather.png"></img>
            <progress className={styles.progress} value={stage} max={11}></progress>
          </div>
          <div className={styles.title}>{Questions[stage][0]}</div>
          <div className={styles.questionArea}>
            <button className={styles.button2} onClick = {e => checkAnswer(Weights[stage][0])}>{Questions[stage][1]}</button>
            <button className={styles.button2} onClick = {e => checkAnswer(Weights[stage][1])}>{Questions[stage][2]}</button>
          </div>

          {stage != 0 ?
          <div onClick = {goBack}>이전으로</div>:<div></div>
          }
        
        </main>
      </div>
      :
      <TestResult record = {record}/>
      }
  </div>
  )
}

export default MbtiTest