import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mbti.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to ICISTS!</title>
        <meta name="description" content="ICISTS mbti test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="http://www.icists.org/" target="_blank">
          <img src="/ICISTS_logo.png"></img>
        </a>
        <h1 className={styles.tlqkf}>동아리에서 나에게<br></br>딱 맞는 역할은?</h1>
        <img src="/nupjuki.png" width={260}></img>
        <button className={styles.button1} onClick={()=>{window.location.href="mbtiTest"}}>테스트 시작!</button>
      </main>

      <footer className={styles.footer}>
        <p><em>icists@icists.org</em></p>
      </footer>
    </div>
  )
}
