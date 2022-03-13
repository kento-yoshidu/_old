import { getPostSlugs } from "./getPostSlugs"
import { getPostBySlug } from "./getPostBySlug"

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      .sort((a, b) => {
        return a.date <= b.date ? 1 : -1
      })

  return posts
}
