import { parseRelativeUrl } from "next/dist/shared/lib/router/utils/parse-relative-url"
import { useRouter } from "next/router"

import Styles from "../../styles/slug.module.css"

const ArticlePage = () => {
  const { query } = useRouter()
  const slug = query.slug
  const params = query.params
  console.log(typeof params)

  return (
    <>
      <h1 className={Styles.title}>Article, { slug }, { params }</h1>
    </>
  )
}

export default ArticlePage