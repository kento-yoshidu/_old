import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

import { Item } from "../types/types"

const postsDirectory = join(process.cwd(), "src/contents")

export const getPostByTag = (tag: string, slug: string, fields: string[]) => {
  const fullPath = join(postsDirectory, tag, "index.md")

  console.log("tagno", fullPath)

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items: Item = {
    slug: "",
    content: "",
    title: "",
    date: "",
    update: "",
    author: "",
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
        field === "author" ||
        field === "tags" ||
        field === "icon") {
      items[field] = data[field]
    }
  })

  return items
}
