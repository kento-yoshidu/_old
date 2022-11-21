import Head from "next/head"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import Image from "next/image"

import { getAllPosts } from "../../lib/getAllPosts"
import { getPostBySlug } from "../../lib/getPostBySlug"

import { siteConfig } from "../../../site.config"
import { Button } from "../../components/button"

import remarkGfm from "remark-gfm"
{/* @ts-ignore */}
import { CodeComponent } from "react-markdown/src/ast-to-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faClockRotateLeft,
  faCode,
  faTag
} from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import * as Styles from "../../styles/post.module.scss"
import { RichText } from "../../styles/markdownStyle"

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
    "languages",
    "tags",
    "icon",
    "content"
  ])

  return {
    props: { post }
  }
}

const CodeBlock: CodeComponent = ({ inline, className, children }: { inline?: string, className?: string, children: string[] }) => {
  if (inline) {
    return <code className={className}>{children}</code>
  }

  const match = /language-(\w+)/.exec(className || "")
  const lang = match && match[1] ? match[1] : ""

  return (
    <SyntaxHighlighter
      style={a11yDark}
      language={lang}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  )
}

const Post = ({ post }: { post: Item }) => {
  const MarkdownComponents: object = {
    p: (paragraph: any) => {
      const { node } = paragraph

      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const alt = image.properties.alt?.replace(/ *\{[^)]*\} */g, "")
        const isPriority = image.properties.alt?.toLowerCase().includes("{priority}")
        const metaWidth = image.properties.alt.match(/{([^}]+)x/)
        const metaHeight = image.properties.alt.match(/x([^}]+)}/)
        const width = metaWidth ? metaWidth[1] : "768"
        const height = metaHeight ? metaHeight[1] : "432"

        return (
          <div className={Styles.imgWrapper}>
            <Image
              src={require(`../../contents/${post.slug}/images/${image.properties.src}`)}
              width={width}
              height={height}
              alt={alt}
              priority={isPriority}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    }
  }

  return (
    <>
      <Head>
        <title>{`${post.title} | ${siteConfig.siteData.title}`}</title>
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

          <ul className={Styles.languages}>
            <FontAwesomeIcon icon={faCode} />
            {post.languages.map((language) => (
              <li key={`language/li/${language}`}>
                <Link
                  key={`language/${language}`}
                  href={`/language/${language}`}
                >
                  {language}
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

        <main className={RichText}>
          <ReactMarkdown
            components={{
              ...MarkdownComponents,
              code: CodeBlock
            }}
            remarkPlugins={[remarkGfm]}
          >
            {post.content}
          </ReactMarkdown>
        </main>
      </article>

      <Button />
    </>
  )
}

export default Post
