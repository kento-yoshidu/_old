import React from "react"

const IndexPage: React.VFC = ({ test }) => (
  <div>
    <h2>{ test }</h2>
  </div>
)

export default IndexPage

export async function getStaticProps() {
  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    console.log(keys)
  })(require.context("../data", true, /\.md$/))

  return {
    props: {
    }
  }
}
