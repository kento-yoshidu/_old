import React from "react"
import Head from "next/head"

import { getAllPosts } from "../lib/getAllPosts"

import { PostList } from "../components/postList"
import { PageTitle } from "../components/pageTitle"

import { Item } from "../types/types"

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "update", "author", "tags", "icon"])

  return {
    props: { allPosts }
  }
}

interface Props {
  allPosts: Item[]
}

const IndexPage: React.VFC<Props> = ({ allPosts }) => (
  <>
    <Head>
      <title>HOME | 怪文書置き場</title>
    </Head>

    <PageTitle
      pageTitle="記事一覧"
    />

    <PostList
      allPosts={allPosts}
    />
  </>
)

export default IndexPage
