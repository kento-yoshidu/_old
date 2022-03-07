import React from "react"

import { getPostSlugs } from "../lib/getPostSlugs"
import { getPostBySlug } from "../lib/getPostBySlug"
import { getAllPosts } from "../lib/getAllPosts"

import * as Styles from "../styles/index.module.scss"

type Item = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags: string[];
  icon: string;
};

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "tags", "icon"])

  return {
    props: { allPosts }
  }
}

interface Props {
  allPosts: Item[]
}

const IndexPage: React.VFC<Props> = ({ allPosts }) => (
  <ul className={Styles.postList}>
    {allPosts.map((post) => (
      <li
        key={`${post.title}key`}
      >
        <p>{post.icon}</p>
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
