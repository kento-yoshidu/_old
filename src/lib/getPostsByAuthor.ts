import { getAllPosts } from "./getAllPosts"

export async function getPostsByAuthor(author: string) {
  const allPosts = getAllPosts(["slug", "title", "date", "update", "authors", "tags", "icon"])
  const authorsPosts = allPosts.filter((data) => {
    return data.authors.includes(author)
  })

  return authorsPosts
}
