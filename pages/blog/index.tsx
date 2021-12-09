import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import Link from "next/link"

import Styles from "../../styles/index.module.scss"

const BlogListPage: any = ({ posts }: { posts: any}) => (
  <>
    <Head>
      <title>怪文書一覧 | 怪文書置き場</title>
    </Head>

    <div className={Styles.wrapper}>
      <h1>怪文書一覧</h1>
      
      <ul className={Styles.postList}>
        {posts.map((post: any) => {
          return (
            <li key={post.slug}>
              <p className={Styles.icon}>{post.icon}</p>
              <div className={Styles.textWrapper}>
                <Link href={`/blog/${post.slug}/`}>
                  {post.title}
                </Link>
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </li>
          )
        })
        }
      </ul>
    </div>
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
      icon: file.data.icon,
      date: file.data.date,
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
