import React from "react"
import fs from "fs"
import { join } from "path"

/**
** src/contentの内容を取得し、ディレクトリ一覧を配列で返す
**/

const postsDirectory = join(process.cwd(), "src/contents")

export const getPostSlugs = (): string[] => {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })

  return allDirents
      .filter((dirent) => dirent.isDirectory())
      .map(({ name }) => name)
}
