import React from "react"
import Head from "next/head"

import { getAllPosts } from "../lib/getAllPosts"
import { getAuthors } from "../lib/getAuthors"

import { PostList } from "../components/postList"

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
    <PostList
      pageTitle="記事一覧"
      allPosts={allPosts}
    />
  </>
)

export default IndexPage
