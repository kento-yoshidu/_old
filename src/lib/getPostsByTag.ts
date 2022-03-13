import { getAllPosts } from "./getAllPosts"

export async function getPostsByTag(tag: string) {
  const allPosts = getAllPosts(["slug", "title", "date", "update", "author", "tags", "icon"])
  const associatedPosts = allPosts.filter((data) => {
    return data.tags.includes(tag)
  })

  return associatedPosts
}
