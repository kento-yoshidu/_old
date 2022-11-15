import * as Styles from "../styles/pageTitle.module.scss"

export const PageTitle = (
    { pageTitle, count }: { pageTitle: string, count?: number }
) => (
  <>
    <h1 className="text-3xl md:text-4xl text-center font-black tracking-widest">{pageTitle}</h1>
    {count && (
      <p className="my-6 text-3xl md:text-3xl font-black text-center tracking-widest">{`${count}件の記事`}</p>
    )}
  </>
)
