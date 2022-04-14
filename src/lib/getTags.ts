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

  const tagObj: TagObj = {}

  tags.forEach((i) => {
    tagObj[i] = (tagObj[i] || 0) + 1
  })

  return tagObj
}
