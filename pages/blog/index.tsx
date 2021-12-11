import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import Link from "next/link"

import SiteMetaData from "../../config"
import { getAllPostSlugs } from "../../lib/posts"
import Styles from "../../styles/index.module.scss"

interface Props {
  posts: {
    slug: string;
    title: string;
    date: string;
    update: string;
    icon: string
  }
}

const BlogListPage: React.VFC<Props> = ({ posts }: { posts: any}) => (
  <>
    <Head>
      <title>怪文書一覧 | {SiteMetaData.siteName}</title>
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
  const fileNames = fs.readdirSync(SiteMetaData.postDir)
  const posts = fileNames.map(fileName => {
    const postPath = path.join(SiteMetaData.postDir, fileName)
    const { data } = matter.read(postPath)

    return {
      slug: fileName.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      update: data.update,
      icon: data.icon,
    }
  })

  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return {
    props: { posts }
  }
}

export default BlogListPage
