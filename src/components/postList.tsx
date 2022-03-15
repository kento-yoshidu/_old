import React from "react"
import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faClockRotateLeft,
  faUser,
  faTag
} from "@fortawesome/free-solid-svg-icons"

import { Item } from "../types/types"

import * as Styles from "../styles/postList.module.scss"

interface Props {
  allPosts: Item[];
}

export const PostList: React.VFC<Props> = ({ allPosts }) => (
  <ul className={Styles.postList}>
    {allPosts.map((post) => (
      <li
        className={Styles.listItem}
        key={`${post.title}key`}
      >
        <p className={Styles.mainIcon}>{post.icon}</p>

        <div className={Styles.wrapper}>
          <Link
            href={`/blog/${post.slug}/`}
          >
            <a className={Styles.postTitle}>
              {post.title}
            </a>
          </Link>

          <div className={Styles.dateWrapper}>
            <time className={Styles.date}>
              <FontAwesomeIcon
                icon={faClock}
                className={Styles.icon}
              />
              {post.date}
            </time>

            <time className={Styles.date}>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className={Styles.icon}
              />
              {post.update}
            </time>
          </div>

          <ul className={Styles.authors}>
            <FontAwesomeIcon
              icon={faUser}
              className={Styles.icon}
            />
            {post.authors.map((author) => (
              <li key={`author/li/${author}`}>
                <Link
                  href={`/author/${author}/`}
                  key={`author/${author}`}
                >
                  {author}
                </Link>
              </li>
            ))}
          </ul>

          <ul className={Styles.tagList}>
            {post.tags.map((tag) => (
              <li
                key={`${post}${tag}`}
                className={Styles.tag}
              >
                <FontAwesomeIcon
                  icon={faTag}
                  className={Styles.icon}
                />
                <Link href={`/tag/${tag}/`}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
)
