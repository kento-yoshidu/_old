import Head from "next/head"

import { getAuthors } from "../../lib/getAuthors"
import { getPostsByAuthor } from "../../lib/getPostsByAuthor"

import { PostList } from "../../components/postList"

export const getStaticPaths = async () => {
  const paths = getAuthors().map((author) => {
    return `/author/${author}/`
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const author = params.author

  const postData = await getPostsByAuthor(author)

  return {
    props: {
      postData,
      author
    }
  }
}


const AuthorPost = ({ postData, author }: { postData: any, author: string }) => (
  <>
    <Head>
      <title></title>
    </Head>

    <PostList
      pageTitle={`${author}さんの記事一覧`}
      allPosts={postData}
    />
  </>
)

export default AuthorPost
