import { css } from "lit";

export const globalStyles = css`
  :host {
    font-family: var(--font-main);
    color: var(--color-text);
    background-color: var(--color-bg);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: var(--font-main);
    color: var(--color-text);
  }

  p {
    margin: 0;
    color: var(--color-text);
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
  }
`;
