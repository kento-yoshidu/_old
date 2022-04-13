import Head from "next/head"

import { getLanguages } from "../../lib/getLanguages"
import { getPostsByLanguage } from "../../lib/getPostsByLanguage"

import { PageTitle } from "../../components/pageTitle"
import { PostList } from "../../components/postList"

export const getStaticPaths = async () => {
  const paths = getLanguages().map((language) => {
    return `/language/${language}/`
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: { language: string }}) => {
  const language = params.language

  const postData = await getPostsByLanguage(language)

  return {
    props: {
      postData,
      language
    }
  }
}


const LanguagePost = ({ postData, language }: { postData: Item[], language: string }) => (
  <>
    <Head>
      <title>{`${language}の記事一覧 | 怪文書置き場`}</title>
    </Head>

    <PageTitle
      pageTitle={`${language}の記事一覧`}
      count={postData.length}
    />

    <PostList
      allPosts={postData}
    />
  </>
)

export default LanguagePost
