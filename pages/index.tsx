import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { getPost } from '../lib/mdx'
import { MdxRemote } from 'next-mdx-remote/types'
import hydrate from 'next-mdx-remote/hydrate'
import MDXComponents from '../components/MDXComponents'

const Home: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = function Home({ post }) {
  const content = hydrate(post, {
    components: MDXComponents
  })
  return (
    <>
      <Head>
        <title>Dev ecosystems</title>
      </Head>

      <article className="prose lg:prose max-w-prose my-0 mx-auto">
        {content}
      </article>

      <footer className="py-16 text-center">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/lbwa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Liu Bowen
        </a>
      </footer>
    </>
  )
}

export default Home

export type HomeProps = Partial<Record<string, never>>

export const getStaticProps: GetStaticProps<{
  post: MdxRemote.Source
}> = async function () {
  const { html } = await getPost('home')
  return {
    props: {
      post: html
    }
  }
}
