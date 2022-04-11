import { getAllPosts } from "./getAllPosts"

export async function getPostsByLanguage(language: string) {
  const allPosts = getAllPosts(["slug", "title", "date", "update", "languages", "tags", "icon"])
  const authorsPosts = allPosts.filter((data) => {
    return data.languages.includes(language)
  })

  return authorsPosts
}
