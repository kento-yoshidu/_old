import Link from "next/link"
import Head from "next/head"

import { getTags } from "../lib/getTags"

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
      <title>タグ一覧 | 怪文書置き場</title>
    </Head>

    <PageTitle
      pageTitle="タグ一覧"
    />

    <ul className={Styles.list}>
      {Object.keys(allTags).map((tag) => (
        <li
          key={`${tag}`}
          className={Styles.listItem}
        >
          <Link href={`/tag/${tag}/`}>
            {`${tag} (${allTags[tag]})`}
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default Tags
