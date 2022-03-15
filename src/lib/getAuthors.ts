import { getAllPosts } from "./getAllPosts"

export const getAuthors = (): string[] => {
  const allAuthors = getAllPosts(["authors"])

  let authors: string[] = []

  allAuthors.forEach((post) => {
    post.authors.map((_) => {
      authors = [...authors, ...post.authors]
    })
  })

  const setAuthors = [...new Set(Array.from(authors))]

  return setAuthors
}
