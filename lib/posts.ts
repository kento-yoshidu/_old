/*
import fs from "fs"
import path from "path"

export function getSortedPostsData() {
  const dirNames = fs.readdirSync("posts");
  const allPostsData = dirNames.map((dirName) => {
    const matterResult = getMatterResult(
      path.join("posts", dirName, "index.md")
    );


    return {
      slug: dirName,
      date: matterResult.data.date,
      title: matterResult.data.title,
      category: matterResult.data.category,
      emoji: matterResult.data.emoji,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
*/