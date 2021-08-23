import { mbtiResults } from "../../constant/questions";
import MakeResult from "../function/makeResult"
import styles from "../../styles/mbti.module.css"

const TestResult = ({record}) => {

const temp=MakeResult({record})

return (
  <div className={styles.container3}>
    <main className={styles.main3}>

      <p className={styles.resultTitle}>당신의 부서는?<br></br><strong>{mbtiResults[temp]}</strong></p>
      <img src="/nupjuki.png" width={350}></img>

      <div className={styles.department}>부서소개</div>

      <div className={styles.tf}>티엪소개</div>

      <button className={styles.button3} onClick = {()=>{window.location.href = "../"}}>테스트 다시하기</button>

      <a className={styles.bottomBox} href="http://www.icists.org/">
        <img src="/ICISTS_logo.png" width={60}></img>
        <div>ICISTS 공식 홈페이지</div>
      </a>
      <a className={styles.bottomBox} href="https://www.instagram.com/icistskaist/">
       <img src="/instagram.png" width={40}></img>
        <div>ICISTS 인스타그램</div>
      </a>

      <img src="/ICISTS_logo.png" width={130}></img>
      <p><em>icists@icists.org</em></p>
    </main>
  </div>
  )
}

export default TestResult