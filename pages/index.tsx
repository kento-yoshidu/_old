import React from "react"
import Link from "next/link"
import Nexthead from "next/head"
import Image from "next/image"

const RootPage: React.VFC = () => (
  <>
    <Nexthead>
      <title>HOME</title>
    </Nexthead>

      <h1>next/image example</h1>
      {/*余白用のdivを追加*/}
      <div style={{height: "3000px"}}></div>
      <Image
        src="/image.png"
        alt="小さな枝に咲いた桜"
        width={600}
        height={400}
      />
  </>
)

export default RootPage;