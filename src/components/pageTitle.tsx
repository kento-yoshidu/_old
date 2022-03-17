import * as Styles from "../styles/pageTitle.module.scss"

export const PageTitle = ({ pageTitle, count }: { pageTitle: string, count?: number }) => (
  <>
    <h1 className={Styles.pageTitle}>{pageTitle}</h1>
    {count && (
      <p className={Styles.count}>{`${count}件の記事`}</p>
    )}
  </>
)
