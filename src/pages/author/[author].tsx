import Head from "next/head"

import { getAuthors } from "../../lib/getAuthors"
import { getPostsByAuthor } from "../../lib/getPostsByAuthor"

import { PageTitle } from "../../components/pageTitle"
import { PostList } from "../../components/postList"

import { Item } from "../../types/types"

export const getStaticPaths = async () => {
  const paths = getAuthors().map((author) => {
    return `/author/${author}/`
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: { author: string }}) => {
  const author = params.author

  const postData = await getPostsByAuthor(author)

  return {
    props: {
      postData,
      author
    }
  }
}


const AuthorPost = ({ postData, author }: { postData: Item[], author: string }) => (
  <>
    <Head>
      <title>{`${author}さんの記事一覧 | 怪文書置き場`}</title>
    </Head>

    <PageTitle
      pageTitle={`${author}さんの記事一覧`}
      count={postData.length}
    />

    <PostList
      allPosts={postData}
    />
  </>
)

export default AuthorPost
