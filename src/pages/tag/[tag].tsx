import { getAllPosts } from "../../lib/getAllPosts"
import { getPostBySlug } from "../../lib/getPostBySlug"
import { getTags } from "../../lib/getTags"
import { getAssociatedPosts } from "../../lib/getAssociatedPosts"

export const getStaticPaths = async () => {
  const paths = getTags().map((tag) => {
    return `/tag/${tag}`
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const tag = params.tag

  const postData = await getAssociatedPosts(tag)

  return {
    props: {
      postData,
      tag
    }
  }
}

const Post = ({ postData, tag }: { postData: any, tag: string }) => {
  console.log(tag)
  return (
    <p>{tag}</p>
  )
}

export default Post
