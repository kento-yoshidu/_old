import * as Styles from "../styles/pageTitle.module.scss"

export const PageTitle = (
    { pageTitle, count }: { pageTitle: string, count?: number }
) => (
  <>
    <h1 className="text-4xl md:text-5xl text-center font-black tracking-widest">{pageTitle}</h1>
    {count && (
      <p className="my-8 md:mt-14 text-4xl md:text-5xl font-black text-center tracking-widest">{`${count}件の記事`}</p>
    )}
  </>
)
