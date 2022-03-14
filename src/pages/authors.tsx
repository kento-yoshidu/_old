import Head from "next/head"
import Link from "next/link"

import { getAuthors } from "../lib/getAuthors"

import { PageTitle } from "../components/pageTitle"

import * as Styles from "../styles/tags.module.scss"

export const getStaticProps = async () => {
  const allAuthors = getAuthors()

  return {
    props: {
      allAuthors
    }
  }
}

const Authors = ({ allAuthors }: { allAuthors: string[] }) => {
  return (
    <>
      <Head>
        <title>作成者一覧 | 怪文書置き場</title>
      </Head>

      <PageTitle
        pageTitle="作成者一覧"
      />

      <ul className={Styles.list}>
        {allAuthors.map((author) => (
          <li
            key={`key${author}`}
            className={Styles.listItem}
          >
            <Link href={`/author/${author}/`}>
              {author}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Authors
