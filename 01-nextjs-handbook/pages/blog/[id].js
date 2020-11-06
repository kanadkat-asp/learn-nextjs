import React from 'react'
import posts from '../../posts.json';
import Head from 'next/head'


const Post = (props) => {
  return (
    <>
      <Head>
        <title>From Blog - {props.post.title}</title>
      </Head>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
      <style jsx>{`
      h1 {
        font-size: 3rem;
        color: #6aca31
      }
      `}</style>
    </>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post
