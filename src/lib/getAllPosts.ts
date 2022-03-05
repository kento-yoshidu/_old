import { getPostSlugs } from "./getPostSlugs"
import { getPostBySlug } from "./getPostBySlug"

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      .sort((a, b) => {
      // 辞書順ソート
      // 目的に応じて、日付順などでソートしてもよい
        const slugA = a.slug.toString().toLowerCase()
        const slugB = b.slug.toString().toLowerCase()

        if (slugA > slugB) {
          return 1
        } else {
          slugB > slugA
        }

        return slugA >= slugB ? 1 : -1
      })

  return posts
}
