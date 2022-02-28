import React from "react"

interface Props {
  test: any
}

const IndexPage: React.VFC<Props> = ({ test }) => (
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
      test: "hogehoge"
    }
  }
}
