import { LitElement, html, css, type PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  CharacterService,
  type Character,
} from "../services/character.service";
import { Router } from "@lit-labs/router";
import { globalStyles } from "../styles/global-styles";

declare const router: Router; // optional if you export router globally

@customElement("list-view")
export class ListView extends LitElement {
  @property({ type: String }) searchTerm = "";
  @state() characters: Character[] = [];
  @state() loading = false;
  @state() error = "";

  static styles =  [
  globalStyles,
  css`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      cursor: pointer;
      padding: 0.5rem;
      border-bottom: 1px solid #ddd;
    }
    li:hover {
      background: #f5f5f5;
    }
  `];

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

      // Step 1: filter only those that match
      const matches = all.filter((c) => c.name.toLowerCase().includes(term));

      // Step 2: rank by "closeness" of match
      this.characters = matches.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        // exact match first
        if (nameA === term && nameB !== term) return -1;
        if (nameB === term && nameA !== term) return 1;

        // prefix match second
        const aStarts = nameA.startsWith(term);
        const bStarts = nameB.startsWith(term);
        if (aStarts && !bStarts) return -1;
        if (bStarts && !aStarts) return 1;

        // then alphabetical fallback
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
    window.dispatchEvent(new PopStateEvent("popstate")); // trigger router refresh
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
      <h2>Results for "${this.searchTerm}"</h2>
      <ul>
        ${this.characters.map(
          (c) => html`
            <li @click=${() => this.goToDetail(c.id)}>
              <strong>${c.name}</strong> — ${c.short_description}
            </li>
          `
        )}
      </ul>
    `;
  }
}
