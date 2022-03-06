import React from "react"

import { getPostSlugs } from "../lib/getPostSlugs"
import { getPostBySlug } from "../lib/getPostBySlug"
import { getAllPosts } from "../lib/getAllPosts"

type Item = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags: string[];
};

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"])

  return {
    props: { allPosts }
  }
}

interface Props {
  allPosts: Item[]
}

const IndexPage: React.VFC<Props> = ({ allPosts }) => (
  <ul>
    {allPosts.map((post) => (
      <li
        key={`${post.title}key`}
      >
        <p>{post.title}</p>
        <time>{post.date}</time>
        <ul>
          {post.tags.map((tag) => (
            <li key={`${post}${tag}`}>{tag}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

export default IndexPage
