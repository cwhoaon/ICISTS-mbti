import { mbtiResults } from "../../constant/questions";
import styles from "../../styles/mbti.module.css"

const TestResult = ({record}) => {

const result = [0, 0, 0, 0]

var i, j;
for (i=0;i<12;i++){
  for (j=0;j<4;j++){
    result[j] += record[i][j]
  }
}
for (j=0;j<4;j++){
  result[j] = result[j]>0?1:0;
}

const temp = 8*result[0]+4*result[1]+2*result[2]+result[3]

return (
  <div className={styles.container3}>
    <main className={styles.main3}>

      <p className={styles.resultTitle}>당신의 부서는?<br></br><strong>{mbtiResults[temp]}</strong></p>
      <img src="/nupjuki.png" width={350}></img>

      <div className={styles.department}>부서소개</div>

      <div className={styles.tf}>티엪소개</div>

      <button className={styles.button3} onClick = {()=>{window.location.href = "../"}}>테스트 다시하기</button>

      <a className={styles.bottomBox} href="http://www.icists.org/" target="_blank">
        <div>ICISTS 공식 홈페이지</div>
      </a>
      <a className={styles.bottomBox} href="https://www.instagram.com/icistskaist/" target="_blank">
        <div>ICISTS 인스타 보러가기</div>
      </a>
      
      <img src="/ICISTS_logo.png" width={130}></img>
      <p><em>icists@icists.org</em></p>
    </main>
  </div>
  )
}

export default TestResult