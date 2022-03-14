import { getAllPosts } from "./getAllPosts";

export async function getPostsByAuthor(author: string) {
  const allPosts = getAllPosts(["slug", "title", "date", "update", "author", "tags", "icon"])
  const authorsPosts = allPosts.filter((data) => {
    return data.author.includes(author)
  })

  return authorsPosts
}
