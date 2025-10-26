import { LitElement, html, css, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  CharacterService,
  type Character,
} from "../services/character.service";
import { globalStyles } from "../styles/global-styles";
import "../assets/icons/icon-rebels";
import "../assets/icons/icon-empire";

@customElement("list-view")
export class ListView extends LitElement {
  @property({ type: String }) searchTerm = "";
  @state() characters: Character[] = [];
  @state() loading = false;
  @state() error = "";

  static styles = [
    globalStyles,
    css`
      :host {
        display: flex;
        justify-content: center;
      }

      li {
        display: flex;
        align-items: center;
        min-height: 4rem;
        gap: 1rem;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #d8d4d4;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background-color 0.25s ease;
      }

      li:hover {
        background-color: #f5f5f5;
      }

      li:hover icon-rebels,
      li:hover icon-empire {
        fill: #eb6a00;
      }

      .info {
        flex-grow: 1;
      }

      .name-line {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
      }

      .name {
        font-weight: 600;
        font-style: SemiBold;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0%;
      }

      .birth {
        font-size: 14px;
        color: #8b8b8b;
      }

      .description {
        margin-top: 0.25rem;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: 0%;
      }
    `,
  ];

  updated(changed: PropertyValues) {
    if (changed.has("searchTerm")) {
      this.searchCharacters();
    }
  }

  async searchCharacters() {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      this.characters = [];
      this.loading = false;
      this.error = "";
      return;
    }

    try {
      this.loading = true;
      const all = await CharacterService.getAll();

      const matches = all.filter((c) => c.name.toLowerCase().includes(term));

      this.characters = matches.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA === term && nameB !== term) return -1;
        if (nameB === term && nameA !== term) return 1;

        const aStarts = nameA.startsWith(term);
        const bStarts = nameB.startsWith(term);
        if (aStarts && !bStarts) return -1;
        if (bStarts && !aStarts) return 1;

        return nameA.localeCompare(nameB);
      });

      this.error = "";
    } catch (err: any) {
      this.error = err.message || "Error fetching characters.";
    } finally {
      this.loading = false;
    }
  }

  goToDetail(id: number) {
    history.pushState(null, "", `/characters/${id}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
    this.dispatchEvent(
      new CustomEvent("character-selected", {
        detail: { id },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    if (this.loading) return html`<p>Loading characters...</p>`;
    if (this.error) return html`<p style="color:red">${this.error}</p>`;
    if (!this.searchTerm.trim()) {
      return html`
        <h2>Welcome to StarFolk Wiki</h2>
        <p>
          Explore profiles of heroes, villains, rebels, and rulers across the
          Star Wars universe.
        </p>
        <ul>
          <li>Detailed profiles of characters</li>
          <li>Backgrounds, homeworlds, and key moments</li>
          <li>Connections between films and series</li>
        </ul>
      `;
    }
    if (!this.characters.length) {
      return html`<p>No results for "${this.searchTerm}".</p>`;
    }

    return html`
      <ul>
        ${this.characters.map(
          (c) => html`
            <li @click=${() => this.goToDetail(c.id)}>
              ${c.side.toLowerCase() === "rebels"
                ? html`<icon-rebels></icon-rebels>`
                : html`<icon-empire></icon-empire>`}

              <div class="info">
                <div class="name-line">
                  <h3 class="name">${c.name}</h3>
                  ${c.birth_year
                    ? html`<span class="birth">${c.birth_year}</span>`
                    : ""}
                </div>
                <div class="description">${c.short_description}</div>
              </div>
            </li>
          `
        )}
      </ul>
    `;
  }
}
