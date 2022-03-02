import fs from "fs"
import { join } from "path"

/**
** src/contentの内容を取得する
**/

const postsDirectory = join(process.cwd(), "src/contents")

export const getPostSlugs = () => {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })

  return allDirents
      .filter((dirent) => dirent.isDirectory())
      .map(({ name }) => name)
}
