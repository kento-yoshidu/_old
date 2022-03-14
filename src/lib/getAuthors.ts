import { getAllPosts } from "./getAllPosts";

export const getAuthors = (): string[] => {
  const allAuthors = getAllPosts(["author"])

  const authors: string[] = []

  allAuthors.forEach((post) => {
    authors.push(post.author)
  })

  const setAuthors = [...new Set(Array.from(authors))]

  return setAuthors
}
