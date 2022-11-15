import React from "react"
import Link from "next/link"

import * as Styles from "../styles/postList.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faClockRotateLeft,
  faCode,
  faTag
} from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

interface Props {
  allPosts: Item[];
}

export const PostList: React.VFC<Props> = ({ allPosts }) => (
  <ul className="md:w-5/6 mx-auto">
    {allPosts.map((post) => (
      <li
        // className={Styles.listItem}
        className="flex items-center mb-8 px-6 py-4 border-2 rounded-md"
        key={`${post.title}key`}
      >
        <p className={Styles.mainIcon}>{post.icon}</p>

        <div className={Styles.wrapper}>
          <Link
            href={`/blog/${post.slug}/`}
          >
            <a className="text-2xl font-bold hover:text-main-color">
              {post.title}
            </a>
          </Link>

          <div className="text-md font-bold">
            <time className="mr-10">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-2"
              />
              {post.date}
            </time>

            <time className="text-md">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="mr-2 text-md"
              />
              {post.update}
            </time>
          </div>

          <ul className="flex items-center text-md font-bold">
            <FontAwesomeIcon
              icon={faCode}
              className="mr-2"
            />

            {post.languages.map((language) => (
              <li key={`language/li/${language}`}>
                <Link
                  href={`/language/${language}/`}
                  key={`language/${language}`}
                >
                  {language}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap">
            {post.tags.map((tag) => (
              <li
                key={`${post}${tag}`}
                className="mr-4 text-md font-bold"
              >
                <FontAwesomeIcon
                  icon={faTag}
                  className="mr-2"
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
