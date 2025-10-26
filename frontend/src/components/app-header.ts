import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { globalStyles } from "../styles/global-styles";
import logoUrl from "../assets/logo.svg?url";
import searchIconUrl from "../assets/search-icon.svg?url";

@customElement("app-header")
export class AppHeader extends LitElement {
  @state() searchTerm = "";

  static styles = [
    globalStyles,
    css`
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2.5rem;
        padding: 1rem 2rem;
        background-color: white;
        border-radius: 5rem;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      img {
        width: 48px;
        height: auto;
      }

      h1 {
        font-family: "Inter Variable", system-ui, sans-serif;
        font-size: 42px;
        line-height: 38px;
        letter-spacing: -0.03em;
        font-weight: 400;
        color: #000;
      }

      h1 span {
        font-weight: 600;
      }

      h2 {
        font-family: "Inter Variable", system-ui, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.03em;
        color: #444;
      }

      hr {
        width: 2px;
        height: 2.5rem;
        background-color: #aaa5a5;
        border: none;
        margin: 0 1rem;
      }

      /* Search bar wrapper */
      .search {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
      }

      /* Icon inside input */
      .search img {
        position: absolute;
        left: 1rem;
        width: 18px;
        height: 18px;
        stroke: #999;
        pointer-events: none;
      }

      /* Input field */
      input {
        width: 100%;
        padding: 0.8rem 1rem 0.8rem 3rem;
        border-radius: 9999px;
        border: 1px solid #ddd;
        font-family: inherit;
        font-size: 14px;
        color: #333;
        box-shadow: 0px 4px 16px 0px #00000005;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }

      input::placeholder {
        color: #71717a;
      }

      input:focus {
        outline: none;
        border-color: #eb6a00;
        box-shadow: 0 0 0 3px rgba(235, 106, 0, 0.15);
      }

      @media (max-width: 700px) {
        header {
          flex-direction: column;
          gap: 1rem;
        }
        .search {
          width: 100%;
        }
      }
    `,
  ];

  handleInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.searchTerm = value;

    this.dispatchEvent(
      new CustomEvent("search-changed", {
        detail: { term: value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <header>
        <div class="logo">
          <img src=${logoUrl} alt="StarFolk logo" />
          <h1>Star<span>Folk</span></h1>
          <hr />
          <h2>
            All the characters. <br />
            One galaxy
          </h2>
        </div>

        <div class="search">
          <img src=${searchIconUrl} alt="Search icon" />
          <input
            type="search"
            placeholder="Search for Star Wars characters"
            .value=${this.searchTerm}
            @input=${this.handleInput}
            aria-label="Search for Star Wars characters"
          />
        </div>
      </header>
    `;
  }
}
