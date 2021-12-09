import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import ReactMarkdown from "react-markdown"
import breaks from "remark-breaks"

import { SiteMetadata } from "../../config"
import Styles from "../../styles/slug.module.scss"

interface Props {
  post: {
    title: string,
    date: string,
    body: string,
    icon: string,
  }
}

const BlogPage: React.VFC<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | {SiteMetadata.siteName}</title>
      </Head>

      <article className={Styles.article}>
        <p className={Styles.icon}>{post.icon}</p>
        <h1>{post.title}</h1>

        <ReactMarkdown
          remarkPlugins={[breaks]}
          className={Styles.wrapper}
        >
          {post.body}
        </ReactMarkdown>
      </article>
    </>
  )
}

export const getStaticPaths = () => {
  const fileNames = fs.readdirSync("posts")
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, "")
      }
    }
  })

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = ({ params } : { params: any }) => {
  const postPath = path.join("posts", `${params.slug}.md`);
  const file = matter.read(postPath);
  console.log(file)
  const post = {
    title: file.data.title,
    date: file.data.date,
    icon: file.data.icon,
    body: file.content,
  };

  return { props: { post } };
};


export default BlogPage