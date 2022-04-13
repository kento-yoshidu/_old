import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "src/contents")

export const getPostBySlug = (slug: string, fields: string[]) => {
  const fullPath = join(postsDirectory, slug, "index.md")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items: Item = {
    slug: "",
    content: "",
    title: "",
    date: "",
    update: "",
    languages: [],
    tags: [],
    icon: ""
  }

  fields.forEach((field: string) => {
    if (field === "slug") {
      items[field] = slug
    }

    if (field === "content") {
      items[field] = content
    }

    if (field === "title" ||
        field === "date" ||
        field === "update" ||
        field === "languages" ||
        field === "tags" ||
        field === "icon") {
      items[field] = data[field]
    }
  })

  return items
}
