import React from "react"

interface Props {
  title: string,
  body: string
}

const SSGArticlePage: React.VFC<Props> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await import("../../data/articles.json");
  const paths = data.articles.map((article) => {
    return {
      params: {
        slug: article.slug
      }
    };
  });
  return {
    paths,
    fallback: false,
  };
};

interface Context {
  params: {
    slug: string
  }
}

export const getStaticProps = async (context: any) => {
  const slug = context.params.slug;
  const data = await import("../../data/articles.json");
  const article = data.articles.find((article) => {
    return article.slug === slug;
  });
  return {
    props: {
      title: article?.title,
      body: article?.body,
    },
  };
};

export default SSGArticlePage;