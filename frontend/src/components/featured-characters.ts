import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { CharacterService } from "../services/character.service";
import type { Character } from "../services/character.service";

@customElement("featured-characters")
export class FeaturedCharacters extends LitElement {
  @state() featured: Character[] = [];
  @state() loading = true;
  @state() error = "";

  static styles = css`
    :host {
      display: block;
    }

    h3 {
      margin-top: 0;
      font-size: 1.1rem;
      border-bottom: 1px solid #ddd;
      padding-bottom: 0.5rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0.5rem 0;
    }

    li {
      margin: 0.25rem 0;
    }

    a {
      text-decoration: none;
      color: #333;
      display: block;
      padding: 0.4rem 0.5rem;
      border-radius: 4px;
    }

    a:hover {
      background-color: #f0f0f0;
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
  `;

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
      <h3>Featured Characters</h3>
      <ul>
        ${this.featured.map(
          (char) => html`
            <li>
              <a href="/characters/${char.id}"  @click=${() => this.handleClick(char.id)}> ${char.name} </a>
            </li>
          `
        )}
      </ul>
    `;
  }
}
