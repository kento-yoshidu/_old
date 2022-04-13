import { getAllPosts } from "./getAllPosts"

export const getLanguages = (): string[] => {
  const allLanguages = getAllPosts(["languages"])

  let languages: string[] = []

  allLanguages.forEach((post: Item) => {
    post.languages.map((_) => {
      languages = [...languages, ...post.languages]
    })
  })

  const setAuthors = [...new Set(Array.from(languages))]

  return setAuthors
}
