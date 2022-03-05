import React from "react"

import { getPostSlugs } from "../lib/getPostSlugs"
import { getPostBySlug } from "../lib/getPostBySlug"

interface Props {
  test: any
}

type Item = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags: string[];
};

const IndexPage: React.VFC<Props> = ({ test }) => (
  <div>
    <h2>{ test }</h2>
  </div>
)

export default IndexPage

export async function getStaticProps() {
  /*
  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    console.log(keys)
  })(require.context("../data", true, /\.md$/))
  */

  const result: Item = getPostBySlug("01", ["slug", "content", "title"])

  console.log(result)

  return {
    props: {
      test: "hogehoge"
    }
  }
}
