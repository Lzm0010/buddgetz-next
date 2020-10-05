import {Container} from 'next/app';
import Page from '../components/Page';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Container>
  )
}

export default MyApp
