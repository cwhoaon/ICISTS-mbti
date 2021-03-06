import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mbti.module.css'

export default function Home() {
  return (
    <div className={styles.container1}>
      <Head>
        <title>Welcome to ICISTS!</title>
        <meta name="description" content="ICISTS mbti test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main1}>
        <a href="http://www.icists.org/">
          <img src="/ICISTS_logo.png"></img>
        </a>
        <h1 className={styles.title}>동아리에서 나에게<br></br>딱 맞는역할은?</h1>
        <img src="/nupjuki.png" width={350}></img>
        <button className={styles.button1} onClick={()=>{window.location.href="mbtiTest"}}>테스트 시작!</button>
        <p className={styles.email}><em>icists@icists.org</em></p>
      </main>
    </div>
  )
}
