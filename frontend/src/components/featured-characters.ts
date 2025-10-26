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
  @state() currentId: number | null = null;

  static styles = [
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
        font-size: 20px;
        line-height: 100%;
        margin: 0;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background-color: #f9f7f7;
        border-radius: 1rem;
        padding: 0.6rem 0.8rem;
        cursor: pointer;
        transition: background-color 0.25s ease, color 0.25s ease;
      }

      /* Hover only if not selected */
      li:not([selected]):hover {
        background-color: #f1efef;
      }

      li[selected] {
        background-color: #eb6a00;
        color: white;
      }

      a {
        font-weight: 400;
        font-size: 18px;
        text-decoration: none;
        color: inherit;
        flex-grow: 1;
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
    `
  ];

  connectedCallback() {
    super.connectedCallback();
    this.loadFeatured();
    this.updateCurrentIdFromRoute();
    window.addEventListener("popstate", this.updateCurrentIdFromRoute.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this.updateCurrentIdFromRoute.bind(this));
  }

  updateCurrentIdFromRoute() {
    const match = window.location.pathname.match(/\/characters\/(\d+)/);
    this.currentId = match ? Number(match[1]) : null;
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
    this.currentId = id;
    this.dispatchEvent(
      new CustomEvent("character-selected", {
        detail: { id },
        bubbles: true,
        composed: true,
      })
    );
    window.history.pushState({}, "", `/characters/${id}`);
    this.requestUpdate();
  }

  render() {
    if (this.loading) return html`<p>Loading featured characters...</p>`;
    if (this.error) return html`<p class="error">${this.error}</p>`;
    if (!this.featured.length) return html`<p class="empty">No featured characters found.</p>`;

    return html`
      <h3>Featured Characters:</h3>
      <ul>
        ${this.featured.map((char) => {
          const isSelected = this.currentId === char.id;
          const isRebel = char.side === "Rebels";

          return html`
            <li ?selected=${isSelected} @click=${() => this.handleClick(char.id)}>
              ${isRebel
                ? html`<icon-rebels ?selected=${isSelected} size="24"></icon-rebels>`
                : html`<icon-empire ?selected=${isSelected} size="24"></icon-empire>`}
              <a>${char.name}</a>
            </li>
          `;
        })}
      </ul>
    `;
  }
}
