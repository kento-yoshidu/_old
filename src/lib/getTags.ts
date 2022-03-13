import { getAllPosts } from "./getAllPosts"

export const getTags = () => {
  const allTags = getAllPosts(["tags"])

  let tags: string[] = []

  allTags.forEach((post) => {
    post.tags.map((tag) => {
      tags = [...tags, ...post.tags]
    })
  })

  const setTags = [...new Set(Array.from(tags))]
  return setTags.sort()
}
