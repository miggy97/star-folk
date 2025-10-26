import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { CharacterService } from "../services/character.service";
import type { Character } from "../services/character.service";
import { globalStyles } from "../styles/global-styles";
import "../assets/icons/icon-rebels";
import "../assets/icons/icon-empire";

@customElement("featured-characters")
export class FeaturedCharacters extends LitElement {
  @state() featured: Character[] = [];
  @state() loading = true;
  @state() error = "";

  static styles =  [
  globalStyles,
  css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 1rem;
      background-color: white;
      border: 1px solid #e7e4e4;
      border-radius: 1rem;
      box-shadow: 0px 8px 24px 0px #00000008;
    }

    h3 {
      font-weight: 400;
      font-style: Regular;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: 0%;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    li {
      background-color: #f9f7f7;
      border-radius: 1rem;
    }

    a {
      font-weight: 400;
      font-style: Regular;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 0%;
      text-decoration: none;
      color: #464343;
      display: block;
      padding: 0.5rem 0.5rem;
      border-radius: 1rem;
    }

    a:hover {
      background-color: #f1efef;
    }

    .error {
      color: red;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }

    .empty {
      font-size: 0.9rem;
      color: #666;
    }
  `];

  connectedCallback() {
    super.connectedCallback();
    this.loadFeatured();
  }

  async loadFeatured() {
    try {
      this.loading = true;
      this.featured = await CharacterService.getFeatured();
      this.error = "";
    } catch (err: any) {
      this.error = err.message || "Failed to load featured characters.";
    } finally {
      this.loading = false;
    }
  }

  handleClick(id: number) {
    this.dispatchEvent(
      new CustomEvent("character-selected", {
        detail: { id },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (this.loading) {
      return html`<p>Loading featured characters...</p>`;
    }

    if (this.error) {
      return html`<p class="error">${this.error}</p>`;
    }

    if (!this.featured.length) {
      return html`<p class="empty">No featured characters found.</p>`;
    }

    return html`
      <h3>Featured Characters:</h3>
      <ul>
        ${this.featured.map(
          (char) => html`
            <li>
              <icon-rebels selected></icon-rebels>
              <icon-empire></icon-empire>
              <a
                href="/characters/${char.id}"
                @click=${() => this.handleClick(char.id)}
              >
                ${char.name}
              </a>
            </li>
          `
        )}
      </ul>
    `;
  }
}
