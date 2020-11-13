import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '../styles/Home'

import SEO from '../components/SEO'

const Home: React.FC = () => {
  return (
    <Container>
      <SEO
        title="RocketShoes, o seu e-commerce de calçados top!"
        image="boost.png"
        shouldExcludeTitleSuffix
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header> </Header>
      <Footer />
    </Container>
  )
}
export default Home
