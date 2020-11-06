import React from 'react'
import Head from 'next/head'
import Link from '../Components/Link'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <span>&nbsp;|&nbsp;</span>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Index
