import Link from "next/link"
import Head from "next/head"

import { getTags } from "../lib/getTags"

import { siteConfig } from "../../site.config"
import { PageTitle } from "../components/pageTitle"

import * as Styles from "../styles/tags.module.scss"

export const getStaticProps = async () => {
  const allTags = getTags()

  return {
    props: {
      allTags
    }
  }
}

const Tags = ({ allTags }: { allTags: TagObj }) => (
  <>
    <Head>
      <title>{`タグ一覧 | ${siteConfig.siteData.title}`}</title>
    </Head>

    <PageTitle
      pageTitle="タグ一覧"
    />

    <ul className="flex flex-wrap justify-center gap-4 md:gap-8 my-16 mx-auto w-5/6">
      {Object.keys(allTags).map((tag) => (
        <li
          key={`${tag}`}
          className="py-2 md:py-4 px-4 md:px-6 border rounded-md"
        >
          <Link href={`/tag/${tag}/`}>
            <a className="text-2xl md:text-4xl">
              {`${tag} (${allTags[tag]})`}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default Tags
