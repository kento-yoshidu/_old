import fs from "fs"
import path from "path"

export const getAllPostSlugs = () => {
  const dir = path.join(process.cwd(), "posts")
  const dirNames = fs.readdirSync(dir)
  console.log(dirNames)
  return dirNames.map(dirName => {
    return {
      params: {
        slug: dirName
      }
    }
  })
}