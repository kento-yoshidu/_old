import React from "react"
import Link from "next/link"
import Nexthead from "next/head"
import Image from "next/image"
import SiteMetadata from "../config"

const RootPage: React.VFC = () => (
  <>
    <Nexthead>
      <title>HOME | {SiteMetadata.siteName}</title>
    </Nexthead>

    <Link href="/blog">怪文書一覧</Link>
  </>
)

export default RootPage;