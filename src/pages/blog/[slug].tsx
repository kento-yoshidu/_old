import Head from "next/head"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

import { getAllPosts } from "../../lib/getAllPosts"
import { getPostBySlug } from "../../lib/getPostBySlug"

import remarkGfm from "remark-gfm"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faClockRotateLeft,
  faUser,
  faTag
} from "@fortawesome/free-solid-svg-icons"

import { Item } from "../../types/types"

import * as Styles from "../../styles/post.module.scss"

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug", "date"])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: { slug: string }}) => {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "date",
    "update",
    "authors",
    "tags",
    "icon",
    "content"
  ])

  return {
    props: { post }
  }
}

const Post = ({ post }: { post: Item }) => (
  <>
    <Head>
      <title>{`${post.title} | 怪文書置き場`}</title>
    </Head>

    <article className={Styles.post}>

      <p className={Styles.icon}>{post.icon}</p>
      <h1 className={Styles.postTitle}>{ post.title }</h1>

      <div className={Styles.info}>
        <div>
          <time className={Styles.date}>
            <FontAwesomeIcon icon={faClock} />
            {post.date}
          </time>
          <time className={Styles.date}>
            <FontAwesomeIcon icon={faClockRotateLeft} />
            {post.update}
          </time>
        </div>

        <ul className={Styles.authors}>
          <FontAwesomeIcon icon={faUser} />
          {post.authors.map((author) => (
            <li key={`author/li/${author}`}>
              <Link
                key={`author/${author}`}
                href={`/author/${author}`}
              >
                {author}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={Styles.tagList}>
          {post.tags.map((tag) => (
            <li
              key={`tag/${tag}`}
              className={Styles.tag}
            >
              <FontAwesomeIcon icon={faTag} />
              <Link href={`/tag/${tag}`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <main className={Styles.main}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </main>
    </article>
  </>
)

export default Post
