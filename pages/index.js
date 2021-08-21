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
        <Image src="/ICISTS_logo.png" width={100} height={30}></Image>
        <h1>동아리에서 나에게 딱 맞는 역할은?</h1>
        <button className={styles.button1} onClick={()=>{window.location.href="mbtiTest"}}>테스트 시작하기</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
