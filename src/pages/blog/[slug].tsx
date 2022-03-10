import { getAllPosts } from "../../lib/getAllPosts"
import { getPostBySlug } from "../../lib/getPostBySlug"

import { Item } from "../../types/types"

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
    "tags",
    "content"
  ])

  console.log(post)

  return {
    props: { post }
  }
}

const Post = ({ post }: { post: Item }) => (
  <article>
    <p>{ post.title}</p>
  </article>
)

export default Post
