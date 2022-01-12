import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import ReactMarkdown from "react-markdown"
import breaks from "remark-breaks"

import { TimeOutline } from 'react-ionicons'

import SiteMetaData from "../../config"
import { getAllPostSlugs } from "../../lib/posts"
import Styles from "../../styles/slug.module.scss"

interface Props {
  post: {
    title: string,
    date: string,
    update: string,
    body: string,
    icon: string,
  }
}

const BlogPage: React.VFC<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | {SiteMetaData.siteName}</title>
      </Head>

      <article className={Styles.article}>
        <p className={Styles.icon}>{post.icon}</p>
        <h1>{post.title}</h1>
        <TimeOutline
          color={'#00000'} 
        />
        {post.date}

        <TimeOutline
          color={'#00000'} 
        />
        {post.update}

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
  const paths = getAllPostSlugs();
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params } : { params: { slug: string } }) {
  const postPath = path.join(SiteMetaData.postDir, `${params.slug}.md`);
  const { data, content } = matter.read(postPath);
  const post = {
    title: data.title,
    date: data.date,
    update: data.update,
    icon: data.icon,
    body: content,
  };

  return { props: { post } };
};


export default BlogPage