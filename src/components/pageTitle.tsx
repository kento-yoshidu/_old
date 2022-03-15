import * as Styles from "../styles/pageTitle.module.scss"

export const PageTitle = ({ pageTitle }: { pageTitle: string }) => (
  <h1 className={Styles.pageTitle}>{pageTitle}</h1>
)
