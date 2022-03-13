import Link from "next/link"
import Head from "next/head"

import { getTags } from "../lib/getTags"

import * as Styles from "../styles/tags.module.scss"

export const getStaticProps = async () => {
  const allTags = getTags()

  return {
    props: {
      allTags
    }
  }
}

export const Tags = ({ allTags }: { allTags: string[]}) => (
  <>
    <Head>
      <title>タグ一覧 | 怪文書置き場</title>
    </Head>

    <ul className={Styles.list}>
      {allTags.map((tag) => (
        <li
          key={`${tag}`}
          className={Styles.listItem}
        >
          <Link href={`/tag/${tag}/`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default Tags
