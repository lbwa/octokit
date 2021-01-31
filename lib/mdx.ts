import fs from 'fs'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import MDXComponents from '../components/MDXComponents'

const CWD = process.cwd()

export async function getPost(slug: string) {
  const source = fs.readFileSync(path.join(CWD, 'posts', slug + '.md'), 'utf8')

  const html = await renderToString(source, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        // Note that this module must be included after `remark-slug`
        require('remark-autolink-headings'),
        require('remark-slug')
      ]
    }
  })

  return {
    html
  }
}
