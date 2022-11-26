import { css } from "@emotion/css"
import tw from "twin.macro"

export const RichText = css`
  h1 {
    border-bottom: 5px solid var(--main-color);
    font-size: clamp(1.2rem, 2.5vw, 2.3rem);
    font-weight: 900;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  h2 {
    margin: 55px 0 25px;
    padding-left: 12px;
    border-left: 8px solid var(--main-color);
    font-size: clamp(1rem, 2.3vw, 2rem);
    line-height: 1.4;
  }

  p {
    margin-bottom: 20px;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    letter-spacing: 1px;
    line-height: 1.5;
    text-indent: 0.8rem;

    code {
      margin: 0 3px;
      padding: 1px 5px;
      background-color: #bbb;
      border-radius: 2px;
      color: #444;
      font-family: inherit;
    }
  }

  .imgWrapper {
    margin: 40px 0;
    max-width: 85%;
    z-index: 1;
  }

  table {
    margin: 30px 0 20px;
    font-size: 1.75rem;
    border-collapse: collapse;
    th,
    td {
      padding: 10px 20px;
      border: 1px solid #888;
    }
    th {
      background-color: var(--main-color);
      color: #fff;
    }
  }

  pre {
    font-size: clamp(0.8rem, 1.2vw, 1rem);
  }

  strong {
    color: var(--main-color);
  }
`
