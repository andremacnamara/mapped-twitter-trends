import Head from 'next/head'
import styles from '../styles/Home.module.css'
import App from '../components/App'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  )
}
