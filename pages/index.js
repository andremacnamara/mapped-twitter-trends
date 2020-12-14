import Head from 'next/head'
import App from '../components/App'
import Container from '../styles/Container';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </Container>
  )
}
