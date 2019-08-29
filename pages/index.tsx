import React from 'react'
import Head from 'next/head'
import marked from 'marked'
import Global from '../layout/Global'

const Home = ({ post }: { post: string }) => (
  <Global>
    <Head>
      <title>Octokit</title>
    </Head>

    <h1 className="header">Octokit</h1>

    <main className="post" dangerouslySetInnerHTML={{ __html: post }}></main>

    <footer className="footer">
      Made with ❤️ by{' '}
      <a
        href="http://github.com/lbwa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bowen
      </a>
    </footer>

    <style jsx>{`
      .header {
        text-align: center;
      }
      .post {
        margin: 0 auto;
        max-width: 800px;
      }
      .footer {
        padding: 5% 0;
        text-align: center;
      }
    `}</style>
  </Global>
)

Home.getInitialProps = function(req) {
  return {
    post: marked(require(`../posts/home.md`).default)
  }
}

export default Home
