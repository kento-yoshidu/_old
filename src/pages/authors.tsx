import Head from "next/head"
import Link from "next/link"

import { getLanguages } from "../lib/getLanguages"

import { PageTitle } from "../components/pageTitle"

import * as Styles from "../styles/tags.module.scss"

export const getStaticProps = async () => {
  const allLanguages = getLanguages()

  return {
    props: {
      allLanguages
    }
  }
}

const Languages = ({ allLanguages }: { allLanguages: string[] }) => (
  <>
    <Head>
      <title>作成者一覧 | 怪文書置き場</title>
    </Head>

    <PageTitle
      pageTitle="作成者一覧"
    />

    <ul className={Styles.list}>
      {allLanguages.map((language) => (
        <li
          key={`key${language}`}
          className={Styles.listItem}
        >
          <Link href={`/language/${language}/`}>
            {language}
          </Link>
        </li>
      ))}
    </ul>
  </>
)

export default Languages
