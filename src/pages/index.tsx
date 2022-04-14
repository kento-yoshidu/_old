import React from "react"
import Head from "next/head"

import { getAllPosts } from "../lib/getAllPosts"

import { siteConfig } from "../../site.config"
import { PostList } from "../components/postList"
import { PageTitle } from "../components/pageTitle"

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "update", "languages", "tags", "icon"])

  return {
    props: { allPosts }
  }
}

const IndexPage = ({ allPosts }: { allPosts: Item[] }) => (
  <>
    <Head>
      <title>{`HOME | ${siteConfig.siteData.title}`}</title>
    </Head>

    <PageTitle
      pageTitle="記事一覧"
      count={allPosts.length}
    />

    <PostList
      allPosts={allPosts}
    />
  </>
)

export default IndexPage
