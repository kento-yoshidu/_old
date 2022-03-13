import { getAllPosts } from "../../lib/getAllPosts"
import { getPostByTag } from "../../lib/getPostByTag"

export const getStaticPaths = async () => {
  // この時点でタグごとに集計しておく必要がある
  const posts = getAllPosts(["slug", "date"])

  const tags = ["aaa", "bbb"]

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag
        }
      }
    }),
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: { tag: string }}) => {
  const post = getPostByTag(params.tag, [
    "slug",
    "title",
    "date",
    "update",
    "author",
    "tags",
    "icon",
    "content"
  ])

  return {
    props: { post }
  }

  /*
  const post = getPostBySlug("01", [
    "slug",
    "title",
    "date",
    "update",
    "author",
    "tags",
    "icon",
    "content"
  ])

  return {
    props: { post }
  }
  */
}

const Post = ({ post }: { post: any }) => (
  <p>hogehoge</p>
)

export default Post
