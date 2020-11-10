import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Logo from '../assets/logo.svg'
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

      <main>
        <Logo />
        <h1>ReactJs Structure</h1>
        <p>A ReactJS + Next.js structure made by Rocketseat</p>
        <Link href="https://vercel.com/docs">
          <a>Click and learn more</a>
        </Link>
      </main>
    </Container>
  )
}
export default Home
