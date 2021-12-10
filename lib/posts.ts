import fs from "fs"
import path from "path"

import config from "../config";
import { getMatterResult } from "./helper";

const postDir = config.postDir

/*
* 
*/
export const getAllPostSlugs = () => {
  const dirNames = fs.readdirSync(path.join(process.cwd(), "posts"))
  return dirNames.map(dirName => {
    return {
      params: {
        slug: dirName.replace(/\.md$/, "")
      }
    }
  })
}

export async function getPostData(slug: string) {
  const matterResult = getMatterResult(path.join(postDir, slug, "index.md"));
  return {
    slug: slug,
    content: matterResult.content,
    category: matterResult.data.category,
    emoji: matterResult.data.emoji,
    thumbnail: matterResult.data.thumbnail || null,
    ...matterResult.data,
  };
}
