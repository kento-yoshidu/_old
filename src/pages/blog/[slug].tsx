import { getAllPosts } from "../../lib/getAllPosts"
import { getPostBySlug } from "../../lib/getPostBySlug"

import { Item } from "../../types/types"

import ReactMarkdown from "react-markdown"

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"])

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
    "author",
    "tags",
    "content"
  ])

  return {
    props: { post }
  }
}

const Post = ({ post }: { post: Item }) => (
  <article>
    <h1>{ post.title }</h1>

    <time>{post.date}</time>
    <time>{post.update}</time>

    <p>{post.author}</p>

    <ul>
      {post.tags.map((tag) => (
        <li key={`tag${tag}`}>{tag}</li>
      ))}
    </ul>

    <ReactMarkdown>
      {post.content}
    </ReactMarkdown>
  </article>
)

export default Post
