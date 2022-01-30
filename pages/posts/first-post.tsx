import Head from "next/head"
import Link from "next/link"
import React from "react"

interface FirstPost {}

const FirstPost: React.FC = ({}) => {
  return (
    <>
    <Head>
        <title>First Post</title>
    </Head>
      <h1>my first post</h1>
      <Link href="/">
          <button>return </button>
      </Link>
    </>
  )
}

export default FirstPost
