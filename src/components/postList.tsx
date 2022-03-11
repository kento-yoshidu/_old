import React from "react"

import * as Styles from "../styles/postList.module.scss"

import { Item } from "../types/types"

interface Props {
  allPosts: Item[]
}

export const PostList: React.VFC<Props> = ({ allPosts }) => (
  <ul className={Styles.postList}>
    {allPosts.map((post) => (
      <li
        className={Styles.listItem}
        key={`${post.title}key`}
      >
        <p className={Styles.icon}>{post.icon}</p>

        <div className={Styles.wrapper}>
          <h2 className={Styles.postTitle}>{post.title}</h2>

          <div className={Styles.dateWrapper}>
            <time className={Styles.date}>{post.date}</time>
            <time className={Styles.date}>{post.update}</time>
          </div>

          <p className={Styles.author}>{post.author}</p>

          <ul className={Styles.tagList}>
            {post.tags.map((tag) => (
              <li
                key={`${post}${tag}`}
                className={Styles.tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
)
