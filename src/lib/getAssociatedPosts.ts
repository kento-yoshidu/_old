import { getAllPosts } from "./getAllPosts"

export async function getAssociatedPosts(tag: string) {
  const allPosts = getAllPosts(["tags"])
  const associatedPosts = allPosts.filter((data) => {
    console.log("data is", data)

    return data.tags.includes(tag)
  })

  return associatedPosts
}
