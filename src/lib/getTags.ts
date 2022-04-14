import { getAllPosts } from "./getAllPosts"

/**
 * 全てのタグを収集し返す
 */

export const getTags = () => {
  const allTags = getAllPosts(["tags"])

  let tags: string[] = []

  allTags.forEach((post: Item) => {
    tags = [...tags, ...post.tags]
  })

  const setTags = [...new Set(Array.from(tags))]
  return setTags.sort()
}
