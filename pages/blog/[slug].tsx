import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BlogPage = () => (
  <p>BlogPage</p>
)

export const getStaticPaths = () => {
  const fileNames = fs.readdirSync("posts")
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, "")
      }
    }
  })

  console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = ({ params } : { params: any}) => {
  const postPath = path.join("posts", `${params.slug}.md`);
  const file = matter.read(postPath);
  const post = {
    title: file.data.title,
    date: file.data.date,
    body: file.content,
  };

  return { props: { post } };
};


export default BlogPage