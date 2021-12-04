import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import Link from "next/link"

const BlogListPage = ({ posts }) => (
  <>
    <Head>
      <title>Blog</title>
    </Head>

    <h1>BlogListPage</h1>
    
    <ul>
      {posts.map(post => {
        return (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}/`}>
              {post.title}
            </Link>
            <time dateTime={post.date}>{post.date}</time>
          </li>
        )
      })
      }
    </ul>
  </>
)

export const getStaticProps = () => {
  const dataDir = "posts"
  const fileNames = fs.readdirSync(dataDir)
  const posts = fileNames.map(fileName => {
    const postPath = path.join(dataDir, fileName)
    const file = matter.read(postPath)

    return {
      slug: fileName.replace(/\.md$/, ""),
      title: file.data.title,
      date: file.data.date
    }
  })

  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return {
    props: {
      posts  
    }
  }
}

export default BlogListPage
