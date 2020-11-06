import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import posts from '../posts.json';

const Blog = (props) => {
  return (
    <div>
      <Head>
        <title>Blog Home</title>
      </Head>
      <h1>Blog Page</h1>
        <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href='/blog/[id]' as={'/blog/' + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Blog