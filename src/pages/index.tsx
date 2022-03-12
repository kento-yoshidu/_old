import React from "react"

import { getAllPosts } from "../lib/getAllPosts"

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
  <PostList
    allPosts={allPosts}
  />
)

export default IndexPage
