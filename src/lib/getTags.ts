import { getAllPosts } from "./getAllPosts"

/**
 * 全てのタグを収集し返す
 */

interface Tag {
  tag: string
  count: number
}

export const getTags = () => {
  const allTags = getAllPosts(["tags"])

  let tags: Tag[] = []

  allTags.forEach((post: Item) => {
    post.tags.map((tag) => {
      tags = [...tags, ...post.tags]
    })
  })

  const setTags = [...new Set(Array.from(tags))]
  return setTags.sort()
}
