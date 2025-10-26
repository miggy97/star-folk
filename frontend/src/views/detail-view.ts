import { LitElement, html, css } from "lit";
import type { PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CharacterService } from "../services/character.service";
import type { Character } from "../services/character.service";
import "../components/character-info-card";
import { globalStyles } from "../styles/global-styles";

@customElement("detail-view")
export class DetailView extends LitElement {
  @property({ type: String, attribute: "character-id" }) characterId = "";
  @state() character?: Character;
  @state() loading = true;
  @state() error = "";

  static styles = [
    globalStyles,
    css`
      .container {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
      }

      h2 {
        font-weight: 400;
        font-style: Regular;
        font-size: 2rem;
        line-height: 38px;
        letter-spacing: -3%;
        margin-bottom: 1.25rem;
      }

      h3 {
        font-weight: 600;
        font-style: SemiBold;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0%;
        margin: 1rem 0;
      }

      p,
      li {
        font-weight: 400;
        font-style: Regular;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: 0%;
        margin-bottom: 1rem;
      }

      ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        margin-bottom: 1rem;
      }
      .error {
        color: red;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    if (this.characterId) {
      this.fetchCharacter();
    }
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has("characterId")) {
      this.fetchCharacter();
    }
  }

  async fetchCharacter() {
    try {
      this.loading = true;
      this.error = "";
      this.character = await CharacterService.getById(this.characterId);
    } catch (err: any) {
      this.error = err.message || "Failed to load character.";
    } finally {
      this.loading = false;
    }
  }

  render() {
    if (this.loading) {
      return html`<p>Loading character...</p>`;
    }

    if (this.error) {
      return html`<p class="error">${this.error}</p>`;
    }

    if (!this.character) {
      return html`<p>Character not found.</p>`;
    }

    return html`
      <div class="container">
        <article>
          <h2>${this.character.name}</h2>

          ${this.character.description?.map((block: any) =>
            block.type === "paragraph"
              ? html`<p>${block.text}</p>`
              : html`
                  <h3>${block.title}</h3>
                  <ul>
                    ${block.items.map((item: string) => html`<li>${item}</li>`)}
                  </ul>
                `
          )}
        </article>

        <character-info-card .character=${this.character}></character-info-card>
      </div>
    `;
  }
}
