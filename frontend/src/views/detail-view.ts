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

  static styles =  [
  globalStyles,
  css`
    .container {
      display: flex;
      gap: 2rem;
    }
    .error {
      color: red;
    }
  `];

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
          <p>${this.character.short_description}</p>
          <p><strong>Side:</strong> ${this.character.side}</p>
          <p><strong>Films:</strong> ${this.character.films.join(", ")}</p>

          <h3>About</h3>
          <ul>
            ${this.character.description?.map((block: any) =>
              block.type === "paragraph"
                ? html`<p>${block.text}</p>`
                : html`
                    <h4>${block.title}</h4>
                    <ul>
                      ${block.items.map(
                        (item: string) => html`<li>${item}</li>`
                      )}
                    </ul>
                  `
            )}
          </ul>
        </article>

        <character-info-card></character-info-card>
      </div>
    `;
  }
}
